import { Check, CircleCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Device facts shown inside the diagnostic screen                     */
/* ------------------------------------------------------------------ */
const deviceSpecs = [
  { label: "Android", value: "13" },
  { label: "Chipset", value: "MediaTek Helio G85" },
  { label: "Display", value: "1080 × 2340" },
  { label: "Refresh", value: "90 Hz" },
];

const systemChecks = [
  "Device detected",
  "ADB connection",
  "Bootloader detected",
  "Recovery available",
];

const compatibility = [
  { label: "Custom ROM", value: "Supported", tone: "ok" },
  { label: "Kernel", value: "Supported", tone: "ok" },
  { label: "Root", value: "Available", tone: "warn" },
] as const;

/* ------------------------------------------------------------------ */
/* Supporting technical notes (desktop: beside the device,             */
/* mobile: hairline-separated row below it)                           */
/* ------------------------------------------------------------------ */
function NoteStatus() {
  return (
    <>
      <div className="text-[11px] font-semibold leading-none tracking-tight text-[#111827]">
        Redmi Note 9
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 text-[9.5px] font-medium leading-none text-[#16A34A]">
        <span className="size-[4px] rounded-full bg-[#16A34A]" aria-hidden="true" />
        Connected
      </div>
    </>
  );
}

function NoteCompatibility() {
  return (
    <ul className="space-y-[5px]">
      {["Custom ROM", "Recovery", "Kernel"].map((item) => (
        <li key={item} className="flex items-center gap-1.5 text-[10px] font-medium leading-none text-[#374151]">
          <Check className="size-[9px] shrink-0 stroke-[3.2] text-[#16A34A]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function NoteDiagnostic() {
  return (
    <>
      <div className="font-mono text-[12px] font-bold leading-none tracking-tight text-[#111827]">
        07 / 07
      </div>
      <div className="mt-1.5 font-mono text-[7.5px] font-semibold uppercase leading-none tracking-[0.14em] text-slate-400">
        Checks passed
      </div>
    </>
  );
}

const notes = [
  { label: "Device Status", body: <NoteStatus /> },
  { label: "Compatibility", body: <NoteCompatibility /> },
  { label: "Diagnostic", body: <NoteDiagnostic /> },
];

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Mockup perangkat Android dengan antarmuka diagnostik TechFix Software: Redmi Note 9 (merlin) terdeteksi, koneksi ADB aktif, bootloader terverifikasi, 7 dari 7 pemeriksaan lulus."
      className={`relative mx-auto w-full max-w-[560px] select-none ${className}`}
    >
      {/* Very faint technical dot field — grounds the composition */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      />

      {/* ============================================================== */}
      {/* DEVICE — the hero object, framed by measurement corners        */}
      {/* ============================================================== */}
      <div className="relative mx-auto w-[248px] sm:w-[288px] md:[perspective:1400px]">
        {/* Measurement corners: frame the device as the measured subject */}
        <span className="pointer-events-none absolute -left-4 -top-5 h-5 w-5 border-l border-t border-[#1677C8]/45" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-4 -top-5 h-5 w-5 border-r border-t border-[#1677C8]/45" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-5 -left-4 h-5 w-5 border-b border-l border-[#1677C8]/45" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-5 -right-4 h-5 w-5 border-b border-r border-[#1677C8]/45" aria-hidden="true" />

        {/* Body: realistic proportions (75:161), thin bezel, side buttons */}
        <div className="relative aspect-[75/161] rounded-[34px] bg-gradient-to-b from-[#161d2b] via-[#0b111c] to-[#0d141f] p-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.16),0_18px_36px_-14px_rgba(17,24,39,0.28),0_40px_64px_-32px_rgba(17,24,39,0.20)] sm:p-[7px] md:[transform:rotateY(-5deg)_rotateX(1.5deg)]">
          {/* Side frame buttons (Xiaomi layout: volume + power on the right) */}
          <div className="absolute -right-[3px] top-[88px] h-16 w-[3px] rounded-r-[2px] bg-gradient-to-b from-slate-600 to-slate-700" aria-hidden="true" />
          <div className="absolute -right-[3px] top-[170px] h-11 w-[3px] rounded-r-[2px] bg-gradient-to-b from-slate-600 to-slate-700" aria-hidden="true" />

          {/* Screen */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-white sm:rounded-[31px]">
            {/* Barely-there glass reflection */}
            <div
              className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(115deg,transparent_46%,rgba(17,24,39,0.035)_53%,transparent_60%)]"
              aria-hidden="true"
            />

            {/* Android status bar */}
            <div className="relative flex h-[30px] shrink-0 items-center justify-between px-4 text-[9.5px] font-semibold text-[#111827]">
              <span>09:41</span>

              {/* Centered punch-hole camera */}
              <span
                className="absolute left-1/2 top-[6px] size-[7px] -translate-x-1/2 rounded-full bg-black ring-1 ring-slate-600/60"
                aria-hidden="true"
              />

              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="font-mono text-[8.5px] font-bold text-slate-600">4G</span>
                <div className="flex items-end gap-[1.5px]">
                  <div className="h-[4px] w-[2px] rounded-[1px] bg-slate-700" />
                  <div className="h-[6px] w-[2px] rounded-[1px] bg-slate-700" />
                  <div className="h-[8px] w-[2px] rounded-[1px] bg-slate-700" />
                </div>
                <div className="h-[9px] w-4 rounded-[2px] border border-slate-700 p-[1.5px]">
                  <div className="h-full w-3/4 rounded-[1px] bg-slate-700" />
                </div>
              </div>
            </div>

            {/* ---------------- Diagnostic interface ---------------- */}
            <div className="relative flex min-h-0 flex-1 flex-col px-4 pt-2">
              {/* Header */}
              <div>
                <div className="font-mono text-[7.5px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  TechFix Software
                </div>
                <div className="mt-[4px] text-[13px] font-bold uppercase leading-none tracking-[0.01em] text-[#111827]">
                  Device Diagnostic
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5 flex items-baseline justify-between border-b border-[#E5E7EB] pb-3">
                <div className="text-[15px] font-bold leading-none tracking-tight text-[#111827]">
                  Redmi Note 9
                </div>
                <div className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400">
                  merlin
                </div>
              </div>

              {/* Connection */}
              <div className="flex items-center gap-1.5 border-b border-[#E5E7EB] py-3">
                <span className="size-[5px] rounded-full bg-[#16A34A]" aria-hidden="true" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  Connected
                </span>
                <span className="ml-auto font-mono text-[7.5px] text-[#1677C8]">ADB · 18ms</span>
              </div>

              {/* Hardware spec table */}
              <div className="mt-4 grid grid-cols-2 border-t border-[#E5E7EB]">
                {deviceSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-b border-[#E5E7EB] py-2 pr-3 [&:nth-child(2n)]:border-l [&:nth-child(2n)]:pl-3"
                  >
                    <div className="font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-slate-400">
                      {spec.label}
                    </div>
                    <div className="mt-1 text-[10.5px] font-semibold leading-none text-[#111827]">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* System status */}
              <div className="mt-5 font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                System Status
              </div>
              <ul className="mt-2 space-y-[7px]">
                {systemChecks.map((check) => (
                  <li key={check} className="flex items-center gap-2 text-[10px] font-medium leading-none text-[#374151]">
                    <Check className="size-[11px] shrink-0 stroke-[3] text-[#16A34A]" aria-hidden="true" />
                    {check}
                  </li>
                ))}
              </ul>

              {/* Compatibility */}
              <div className="mt-5 font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Compatibility
              </div>
              <dl className="mt-1.5 border-t border-[#E5E7EB]">
                {compatibility.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-[#E5E7EB] py-[6px]"
                  >
                    <dt className="text-[10px] font-medium leading-none text-[#374151]">{row.label}</dt>
                    <dd
                      className={`flex items-center gap-1.5 text-[10px] font-semibold leading-none ${
                        row.tone === "ok" ? "text-[#16A34A]" : "text-[#F59E0B]"
                      }`}
                    >
                      <span
                        className={`size-[4px] rounded-full ${
                          row.tone === "ok" ? "bg-[#16A34A]" : "bg-[#F59E0B]"
                        }`}
                        aria-hidden="true"
                      />
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="flex-1" aria-hidden="true" />

              {/* Result footer */}
              <div className="mb-2 mt-4 flex items-center justify-between border-t border-[#E5E7EB] pt-2.5">
                <div className="flex items-center gap-1.5">
                  <CircleCheck className="size-[12px] shrink-0 text-[#16A34A]" aria-hidden="true" />
                  <span className="font-mono text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#111827]">
                    Diagnostic complete
                  </span>
                </div>
                <span className="text-[8.5px] font-medium leading-none text-slate-500">
                  7 checks passed
                </span>
              </div>
            </div>

            {/* Gesture navigation bar */}
            <div className="flex h-[20px] shrink-0 items-center justify-center" aria-hidden="true">
              <div className="h-[3.5px] w-[86px] rounded-full bg-slate-300" />
            </div>
          </div>

          {/* Frame sheen */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* SUPPORTING NOTES — desktop: technical readouts in the gutters   */}
      {/* ============================================================== */}
      <div className="pointer-events-none absolute left-0 top-[5%] hidden md:block" data-note="status">
        <div className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {notes[0].label}
        </div>
        <div className="mt-2">{notes[0].body}</div>
        {/* Hairline measurement tick toward the device (only where the gutter allows it) */}
        <span className="absolute -right-6 top-4 hidden h-px w-4 bg-[#E5E7EB] xl:block" aria-hidden="true" />
      </div>

      <div className="pointer-events-none absolute left-0 top-[46%] hidden md:block" data-note="compatibility">
        <div className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {notes[1].label}
        </div>
        <div className="mt-2">{notes[1].body}</div>
        <span className="absolute -right-6 top-4 hidden h-px w-4 bg-[#E5E7EB] xl:block" aria-hidden="true" />
      </div>

      {/* Rotated diagnostic readout — vertical technical annotation, bottom-to-top */}
      <div
        data-note="diagnostic"
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-2 md:flex"
      >
        <span className="hidden h-px w-4 shrink-0 bg-[#E5E7EB] xl:block" aria-hidden="true" />
        <div className="flex items-center gap-2 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
          <span className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Diagnostic
          </span>
          <span className="font-mono text-[10px] font-bold uppercase leading-none tracking-[0.04em] text-[#111827]">
            07 / 07 Checks Passed
          </span>
        </div>
      </div>

      {/* Mobile: same notes as a hairline-separated row under the device */}
      <div className="mt-9 grid grid-cols-3 border-y border-[#E5E7EB] md:hidden">
        {notes.map((note, i) => (
          <div
            key={note.label}
            className={`py-3.5 ${i > 0 ? "border-l border-[#E5E7EB] pl-3" : "pr-3"} ${i < 2 ? "pr-3" : ""}`}
          >
            <div className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              {note.label}
            </div>
            <div className="mt-2">{note.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
