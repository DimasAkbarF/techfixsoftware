#!/usr/bin/env node
/**
 * Gagalkan build jika ada klaim absolut atau keyword terlarang di konten.
 *
 * Prinsipnya: hanya periksa teks yang dilihat pengguna. Nilai CSS dan angka
 * literal yang sah (misalnya "100%" untuk kapasitas memori atau progres proses)
 * dikecualikan lewat daftar izin kontekstual, bukan dengan melonggarkan pola.
 *
 * Kalimat disclaimer yang justru melarang klaim absolut (misalnya "Kami tidak
 * menjamin keberhasilan 100%") TIDAK boleh dianggap pelanggaran.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");

const RULES = [
  {
    id: "absolute-claim",
    // "100%" yang dipasangkan kata sifat klaim. "100% gratis" dll.
    pattern: /100\s?%\s*(aman|akurat|murni|cocok|gratis|berhasil|sukses|presisi|identik|sama)/gi,
    message: 'Klaim absolut persentase. Ganti dengan bahasa terukur: "umumnya", "tergantung perangkat".',
  },
  {
    id: "no-risk",
    pattern: /(tanpa\s+risiko|tanpa\s+resiko|zero\s+risk|bebas\s+risiko|pasti\s+berhasil|dijamin\s+(aman|berhasil|sukses)|100\s?%\s+nyaman)/gi,
    message: 'Klaim tanpa risiko / jaminan hasil. Tulis risiko apa adanya.',
  },
  {
    id: "fraud-keywords",
    pattern: /(fake\s*gps|mock\s*location|anti[- ]?deteksi|bypass\s+absensi|bypass\s+m-?banking|bypass\s+play\s+integrity|tukang\s+ojol\s+anti)/gi,
    message: "Keyword untuk mengelabui sistem atau absensi. Tidak boleh dipakai.",
  },
];

/** Baris yang mengandung penanda ini adalah penafian yang sah, bukan klaim. */
const DISCLAIMER_MARKERS = [
  "tidak menjamin",
  "tidak ada jaminan",
  "bukan jaminan",
  "tidak memberi jaminan",
  "tidak dapat menjamin",
  "melarang",
  "dilarang",
  "hindari klaim",
];

/** Baris teknis yang bukan konten pengguna. */
const CODE_MARKERS = [
  "width:",
  "height:",
  "style=",
  "calc(",
  "className",
  "//",
  "/*",
  "-webkit",
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walk(full, out);
    } else if (/\.(ts|tsx|mjs|js)$/.test(entry)) {
      out.push(full);
    }
  }
  return out;
}

const files = walk(join(ROOT, "src"));
const violations = [];

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, idx) => {
    const lower = line.toLowerCase();
    if (DISCLAIMER_MARKERS.some((m) => lower.includes(m))) return;
    if (CODE_MARKERS.some((m) => lower.includes(m))) return;

    for (const rule of RULES) {
      rule.pattern.lastIndex = 0;
      const hits = line.match(rule.pattern);
      if (hits) {
        violations.push({
          file: relative(ROOT, file),
          line: idx + 1,
          rule: rule.id,
          hit: hits.join(", "),
          message: rule.message,
          text: line.trim().slice(0, 140),
        });
      }
    }
  });
}

if (violations.length > 0) {
  console.error(`\ncheck-claims: ${violations.length} pelanggaran klaim ditemukan.\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line} [${v.rule}] "${v.hit}"`);
    console.error(`    ${v.text}`);
    console.error(`    -> ${v.message}\n`);
  }
  process.exit(1);
}

console.log(`check-claims: bersih (${files.length} file diperiksa).`);