import base64
import os
import subprocess

def generate_svg():
    # Load crDroid base64
    with open('public/crdroid-logo.png', 'rb') as f:
        crdroid_b64 = base64.b64encode(f.read()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1200" width="960" height="1200" fill="none">
  <defs>
    <!-- Filter for realistic drop shadow -->
    <filter id="phone-shadow" x="-15%" y="-10%" width="135%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#0f172a" flood-opacity="0.14" />
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
    </filter>

    <!-- Subtle badge shadow -->
    <filter id="badge-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.06" />
    </filter>

    <!-- Clip path for phone screen -->
    <clipPath id="screen-clip">
      <rect x="0" y="0" width="316" height="672" rx="36" />
    </clipPath>

    <!-- Pattern for subtle engineering workbench grid -->
    <pattern id="workbench-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="0.75" fill="#cbd5e1" opacity="0.6" />
    </pattern>
  </defs>

  <style>
    .mono {{ font-family: ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Consolas, monospace; }}
    .sans {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }}
  </style>

  <!-- Clean Workbench Canvas Background -->
  <rect width="960" height="1200" fill="#fafbfc" />
  <rect width="960" height="1200" fill="url(#workbench-grid)" />

  <!-- Engineering Workbench Calibration Marks (Minimal, Restrained) -->
  <g stroke="#cbd5e1" stroke-width="1" opacity="0.75">
    <!-- Top-left crosshair -->
    <line x1="48" y1="40" x2="48" y2="56" />
    <line x1="40" y1="48" x2="56" y2="48" />

    <!-- Top-right crosshair -->
    <line x1="912" y1="40" x2="912" y2="56" />
    <line x1="904" y1="48" x2="920" y2="48" />

    <!-- Bottom-left crosshair -->
    <line x1="48" y1="1144" x2="48" y2="1160" />
    <line x1="40" y1="1152" x2="56" y2="1152" />

    <!-- Bottom-right crosshair -->
    <line x1="912" y1="1144" x2="912" y2="1160" />
    <line x1="904" y1="1152" x2="920" y2="1152" />
  </g>

  <!-- TechFix Workbench Header Metadata (Top Left) -->
  <g transform="translate(64, 76)">
    <rect x="-1" y="-1" width="7" height="7" fill="#0877b5" />
    <text x="14" y="6" class="mono" font-size="11" font-weight="700" fill="#0f172a" letter-spacing="1.5">TECHFIX SOFTWARE</text>
    <text x="14" y="22" class="mono" font-size="9" font-weight="600" fill="#64748b" letter-spacing="1.2">ANDROID TECHNICAL SUPPORT • WORKBENCH</text>
    <text x="14" y="36" class="mono" font-size="8" font-weight="500" fill="#94a3b8" letter-spacing="0.8">SYS_PROTOCOL: FASTBOOT / ADB / RECOVERY / AOSP</text>
  </g>

  <!-- Technical Status Flags (Top Right) -->
  <g transform="translate(710, 76)">
    <rect x="0" y="0" width="186" height="36" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />
    <circle cx="16" cy="18" r="3.5" fill="#10b981" />
    <text x="28" y="15" class="mono" font-size="8" font-weight="700" fill="#64748b" letter-spacing="0.5">INTERFACE_STATE</text>
    <text x="28" y="26" class="mono" font-size="9" font-weight="700" fill="#0f172a" letter-spacing="0.5">DIAGNOSTIC_READY</text>
  </g>

  <!-- ============================================================== -->
  <!-- CENTRAL OBJECT: MODERN ANDROID SMARTPHONE                      -->
  <!-- In Fastboot / Low-Level Bootloader Mode                        -->
  <!-- Slightly angled: -2.4 deg                                      -->
  <!-- ============================================================== -->
  <g transform="translate(480, 600) rotate(-2.4) translate(-165, -350)">

    <!-- Phone Chassis Outer Drop Shadow & Body -->
    <rect x="0" y="0" width="330" height="690" rx="44" fill="#0b1120" stroke="#1e293b" stroke-width="1.5" filter="url(#phone-shadow)" />

    <!-- Subtle Titanium Outer Chamfer Highlight -->
    <rect x="1.5" y="1.5" width="327" height="687" rx="42.5" fill="none" stroke="#334155" stroke-width="1" opacity="0.6" />

    <!-- Hardware Side Buttons (Volume Rocker & Power) -->
    <!-- Volume Rocker (Left side) -->
    <rect x="-3.5" y="140" width="3.5" height="68" rx="1.5" fill="#1e293b" />
    <!-- Power Button (Right side) -->
    <rect x="330" y="160" width="3.5" height="44" rx="1.5" fill="#1e293b" />

    <!-- Inner Screen Bezel Container (7px bezel) -->
    <g transform="translate(7, 9)">
      <!-- Screen Glass with ClipPath -->
      <g clip-path="url(#screen-clip)">
        <!-- Deep OLED Black Background -->
        <rect width="316" height="672" fill="#050811" />

        <!-- Top Status / Punch-hole Bar -->
        <g transform="translate(0, 0)">
          <!-- Centered Punch Hole Front Camera -->
          <circle cx="158" cy="18" r="4.5" fill="#020408" stroke="#1e293b" stroke-width="1.2" />
          <circle cx="159" cy="17" r="1.2" fill="#334155" opacity="0.6" />

          <!-- Top Speaker Slit -->
          <rect x="138" y="4" width="40" height="2" rx="1" fill="#1e293b" />
        </g>

        <!-- Fastboot Mode Low-Level Terminal Interface -->
        <g transform="translate(20, 48)">

          <!-- FASTBOOT MODE Header Banner -->
          <g>
            <rect x="0" y="0" width="132" height="22" rx="3" fill="#083344" stroke="#06b6d4" stroke-width="1" />
            <text x="10" y="14.5" class="mono" font-size="10" font-weight="800" fill="#22d3ee" letter-spacing="1">FASTBOOT MODE</text>
          </g>

          <!-- Technical Device Specs (Exact Fastboot variables) -->
          <g transform="translate(0, 40)" class="mono" font-size="9" fill="#94a3b8" letter-spacing="0.3">
            <!-- PRODUCT -->
            <text x="0" y="0" fill="#64748b">PRODUCT_NAME</text>
            <text x="105" y="0" fill="#f8fafc" font-weight="700">- merlin</text>

            <!-- DEVICE MODEL -->
            <text x="0" y="17" fill="#64748b">DEVICE_MODEL</text>
            <text x="105" y="17" fill="#f8fafc" font-weight="700">- Redmi Note 9</text>

            <!-- VARIANT -->
            <text x="0" y="34" fill="#64748b">VARIANT</text>
            <text x="105" y="34" fill="#f8fafc">- M2003J15SS 64G</text>

            <!-- BOOTLOADER -->
            <text x="0" y="51" fill="#64748b">BOOTLOADER</text>
            <text x="105" y="51" fill="#22c55e" font-weight="800">- UNLOCKED</text>

            <!-- SECURE BOOT -->
            <text x="0" y="68" fill="#64748b">SECURE_BOOT</text>
            <text x="105" y="68" fill="#e2e8f0">- DISABLED</text>

            <!-- BASEBAND -->
            <text x="0" y="85" fill="#64748b">BASEBAND_VER</text>
            <text x="105" y="85" fill="#f8fafc">- MT6768.V1.24</text>

            <!-- DEVICE STATE -->
            <text x="0" y="102" fill="#64748b">DEVICE_STATE</text>
            <text x="105" y="102" fill="#38bdf8" font-weight="700">- CONNECTED</text>

            <!-- RECOVERY -->
            <text x="0" y="119" fill="#64748b">RECOVERY_ENV</text>
            <text x="105" y="119" fill="#a855f7" font-weight="700">- AVAILABLE</text>

            <!-- CONSOLE -->
            <text x="0" y="136" fill="#64748b">INTERFACE</text>
            <text x="105" y="136" fill="#94a3b8">- USB / ADB READY</text>
          </g>

          <!-- Hairline Divider -->
          <line x1="0" y1="195" x2="276" y2="195" stroke="#1e293b" stroke-width="1" />

          <!-- Low-Level Terminal Diagnostic Stream Box -->
          <g transform="translate(0, 210)">
            <rect x="0" y="0" width="276" height="152" rx="6" fill="#090e1a" stroke="#1e293b" stroke-width="1" />
            <g transform="translate(12, 20)" class="mono" font-size="8.5" letter-spacing="0.2">
              <text x="0" y="0" fill="#64748b">[ 0.0412 ]</text>
              <text x="56" y="0" fill="#e2e8f0">usb: port handshake ok</text>

              <text x="0" y="16" fill="#64748b">[ 0.0894 ]</text>
              <text x="56" y="16" fill="#e2e8f0">fastboot: getvar all [OK]</text>

              <text x="0" y="32" fill="#64748b">[ 0.1240 ]</text>
              <text x="56" y="32" fill="#e2e8f0">partition: a/b verified</text>

              <text x="0" y="48" fill="#64748b">[ 0.1985 ]</text>
              <text x="56" y="48" fill="#38bdf8">recovery: orangefox ok</text>

              <text x="0" y="64" fill="#64748b">[ 0.2410 ]</text>
              <text x="56" y="64" fill="#10b981">oem: unlock token valid</text>

              <text x="0" y="80" fill="#64748b">[ 0.3120 ]</text>
              <text x="56" y="80" fill="#f59e0b">target: bootloop triage</text>

              <text x="0" y="96" fill="#64748b">[ 0.3802 ]</text>
              <text x="56" y="96" fill="#e2e8f0">ready for firmware flash</text>

              <!-- Blinking cursor -->
              <text x="0" y="114" fill="#38bdf8">&gt; techfix-eng: awaiting cmd_</text>
            </g>
          </g>

          <!-- Fastboot Menu Prompt (Bottom screen) -->
          <g transform="translate(0, 386)">
            <rect x="0" y="0" width="276" height="42" rx="6" fill="#0c1322" stroke="#1e293b" stroke-width="1" />
            <circle cx="16" cy="21" r="4" fill="#22c55e" />
            <text x="28" y="18" class="mono" font-size="9" font-weight="700" fill="#f8fafc">START BOOTLOADER</text>
            <text x="28" y="30" class="mono" font-size="8" fill="#94a3b8">Press volume keys to select</text>
          </g>

          <!-- Bottom Navigation / Hardware Bar -->
          <g transform="translate(0, 460)">
            <text x="138" y="0" text-anchor="middle" class="mono" font-size="7.5" fill="#475569" letter-spacing="0.5">FASTBOOT PROTOCOL v0.4 • GOOGLE AOSP</text>
            <text x="138" y="14" text-anchor="middle" class="mono" font-size="7.5" fill="#334155">TECHFIX SOFTWARE TECHNICAL ENGINE</text>
          </g>
        </g>

        <!-- Home Bar Indicator -->
        <rect x="118" y="658" width="80" height="3" rx="1.5" fill="#334155" opacity="0.6" />
      </g>
    </g>
  </g>

  <!-- ============================================================== -->
  <!-- ANDROID SOFTWARE ECOSYSTEM: OFFICIAL ROM REFERENCES            -->
  <!-- Small, restrained secondary marks (16–30px height)             -->
  <!-- Using EXACT official vectors & colors from references          -->
  <!-- ============================================================== -->

  <!-- 1. LINEAGEOS (Top Left) -->
  <!-- Official Wikimedia Vector: https://commons.wikimedia.org/wiki/File:LineageOS_Logo.svg -->
  <g transform="translate(76, 260)">
    <rect x="0" y="0" width="190" height="54" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />

    <!-- LineageOS Official 3-Circle Vector Mark -->
    <g transform="translate(14, 13)">
      <rect width="28" height="28" rx="6" fill="#157b7f" />
      <g fill="none" stroke="#ffffff" stroke-width="1" transform="scale(0.0546) translate(0, 0)">
        <circle cx="256" cy="256" r="72"/>
        <circle cx="96" cy="296" r="32"/>
        <circle cx="416" cy="296" r="32"/>
        <path d="m122 281c23.3-9.37 41.5-15 66-19.4m202 19.4c-23.3-9.37-41.5-15-66-19.4"/>
      </g>
      <circle cx="14" cy="14" r="1.75" fill="#ffffff" />
    </g>

    <text x="52" y="24" class="sans" font-size="12" font-weight="700" fill="#0f172a">LineageOS</text>
    <text x="52" y="38" class="mono" font-size="8" font-weight="600" fill="#157b7f" letter-spacing="0.5">AOSP CORE • STABLE</text>
  </g>

  <!-- 2. EVOLUTION X (Top Right) -->
  <!-- Official Wikimedia Vector: https://commons.wikimedia.org/wiki/File:EvolutionXLogo.svg -->
  <g transform="translate(684, 250)">
    <rect x="0" y="0" width="202" height="54" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />

    <!-- Evolution X Official SVG Wordmark scaled -->
    <g transform="translate(14, 18) scale(0.9)">
      <svg width="86" height="15" viewBox="0 0 115 20" fill="none">
        <path d="M105.895 6.89517L109.645 0H114.383L108.559 9.91636L114.534 19.9984H109.74L105.895 12.999L102.05 19.9984H97.25L103.225 9.91636L97.4071 0H102.145L105.895 6.89517Z" fill="#025EFD"/>
        <path d="M11.0848 15.9987L10.1706 19.9984L0 10.9706L0.914213 7.54226H12.6847L13.4275 10.9706H5.371L11.0848 15.9987Z" fill="#025EFD"/>
        <path d="M0.457117 0H13.7132L12.799 3.4283H4.11397L0.457117 0Z" fill="#025EFD"/>
        <path d="M27.5107 7.54226L20.1641 19.9598H16.623L13.9989 7.54226H17.3872L19.1013 16.013L24.0724 7.54226H27.5107Z" fill="#025EFD"/>
        <path d="M28.2477 19.3113C27.3781 18.8838 26.6519 18.2122 26.1579 17.3786C25.6556 16.4988 25.4028 15.4988 25.4265 14.486C25.4069 13.2055 25.7258 11.9426 26.3507 10.8249C26.9532 9.75558 27.8351 8.87026 28.902 8.26363C30.0191 7.63038 31.2848 7.30642 32.5688 7.32513C33.7716 7.32513 34.8191 7.55416 35.7114 8.01222C36.5764 8.44216 37.2983 9.11344 37.7898 9.94492C38.2939 10.8247 38.5488 11.8252 38.5269 12.839C38.5467 14.1176 38.232 15.3791 37.6141 16.4987C37.0161 17.5713 36.1332 18.4577 35.0629 19.0599C33.9409 19.6925 32.6712 20.0164 31.3832 19.9984C30.2983 20.0218 29.2234 19.7863 28.2477 19.3113Z" fill="#025EFD"/>
        <path d="M41.4681 2.11126H44.8964L41.5567 19.9513H38.1284L41.4681 2.11126Z" fill="#025EFD"/>
      </svg>
    </g>

    <text x="14" y="44" class="mono" font-size="8" font-weight="600" fill="#025EFD" letter-spacing="0.5">CUSTOM ROM • PIXEL UI</text>
  </g>

  <!-- 3. TECHNICAL ANNOTATION: FASTBOOT & BOOTLOADER (Mid Right) -->
  <g transform="translate(704, 480)">
    <rect x="0" y="0" width="186" height="58" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />
    <text x="14" y="20" class="mono" font-size="10" font-weight="700" fill="#0f172a" letter-spacing="1">FASTBOOT PROTOCOL</text>
    <text x="14" y="34" class="mono" font-size="8.5" font-weight="600" fill="#0877b5">BOOTLOADER UNLOCKED</text>
    <text x="14" y="47" class="mono" font-size="7.5" fill="#64748b">PORT: USB HIGH-SPEED • OEM</text>
  </g>

  <!-- 4. PIXELOS (Bottom Right) -->
  <!-- Official PixelOS1 Vector: https://github.com/PixelOS1/pixelos-logos -->
  <g transform="translate(684, 710)">
    <rect x="0" y="0" width="194" height="54" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />

    <!-- PixelOS Official Pixelated Power Mark -->
    <g transform="translate(14, 12)">
      <svg width="24" height="30" viewBox="0 0 130 167">
        <g transform="translate(-7.8 -8.5) scale(0.138)">
          <path fill="#9f25ca" d="M776.1,461.7c-15.6,30.4-34.7,63.5-58,97.6c1.7,12.2,2.7,24.7,2.7,37.4c0,147-119.1,266.1-266.1,266.1 c-27.3,0-53.6-4.1-78.4-11.8C340,867.9,300.9,883,259,895.6c56.2,36.9,123.4,58.4,195.7,58.4c197.4,0,357.4-160,357.4-357.4 c0-47.8-9.5-93.3-26.6-135H776.1z M691.1,188h-40.8v40.8h40.8V188z M789.3,292.2h45.4v-45.3h-45.4V292.2z M620.1,212.3h-33.4v33.4 h33.4V212.3z M681.2,248.5h-33.4V282h33.4V248.5z M733.7,348.8h33.4v-33.4h-33.4V348.8z M799.6,344h20.1V324h-20.1V344z M796.8,217 h20V197h-20V217z M876.9,218.7h-20v20h20V218.7z M779.5,402.3H813v-33.4h-33.4V402.3z M870.6,384.2h53.5v-53.5h-53.5V384.2z M756.6,242.8H707v49.7h49.7V242.8z M767.6,184.1h-33.4v33.4h33.4V184.1z M804.1,123.7h-25.8v25.8h25.8V123.7z M901.6,267h-33.4 v33.4h33.4V267z M874,157.8h-29.2V187H874V157.8z M913.8,182.3v29.2h29.2v-29.2H913.8z"/>
          <path fill="#5840c0" d="M762.7,461.7v-41.7h2.5c-6.6-11.6-13.8-22.7-21.6-33.4v14.3h-41.7v-41.7h19.6 c-12.1-13.5-25.1-26.1-39.1-37.6v14.3h-25.7v-25.7h11.2c-13.3-9.9-27.3-19-42-27.1v34.3h-49.7v-49.7h17.8 c-13.1-5.5-26.5-10.4-40.3-14.4v96.4c27.9,11.2,53.5,27.1,75.8,46.6v-37.2h41.7v41.7h-36.8c44.2,40.7,74.7,96,83.5,158.5 c23.3-34.2,42.4-67.3,58-97.6H762.7z M743.7,473.2h-49.7v-49.7h49.7V473.2z M460.4,84.9c-29.4,0-53.2,23.8-53.2,53.2v232.9 c0,29.4,23.8,53.2,53.2,53.2c29.4,0,53.2-23.8,53.2-53.2V138.1C513.6,108.7,489.8,84.9,460.4,84.9z M450.2,132.4 c-11.6,2.7-22.7-2.2-24.8-11.1c-2.1-8.8,5.6-18.3,17.2-21c11.6-2.7,22.7,2.2,24.8,11.1C469.5,120.3,461.8,129.7,450.2,132.4z M188.6,596.7c0-111.9,69.1-207.7,167-247v-96.4c-149.1,43-258.3,180.4-258.3,343.3c0,125.1,64.3,235.1,161.6,299 c42-12.7,81-27.7,117.3-44.6C267.6,817.6,188.6,716.4,188.6,596.7z"/>
        </g>
      </svg>
    </g>

    <text x="46" y="24" class="sans" font-size="12" font-weight="700" fill="#0f172a">PixelOS</text>
    <text x="46" y="38" class="mono" font-size="8" font-weight="600" fill="#7e40c0" letter-spacing="0.5">PIXEL EXPERIENCE</text>
  </g>

  <!-- 5. CRDROID (Bottom Left) -->
  <!-- Official crDroid Logo from crdroid.net -->
  <g transform="translate(68, 700)">
    <rect x="0" y="0" width="186" height="54" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />

    <!-- crDroid Logo Mark -->
    <image href="data:image/png;base64,{crdroid_b64}" x="12" y="13" width="28" height="28" />

    <text x="48" y="24" class="sans" font-size="12" font-weight="700" fill="#0f172a">crDroid</text>
    <text x="48" y="38" class="mono" font-size="8" font-weight="600" fill="#15803d" letter-spacing="0.5">LINEAGE-FORK • MODS</text>
  </g>

  <!-- 6. NUSANTARAPROJECT (Bottom Center/Left) -->
  <!-- Official NusantaraProject Vector from nusantararom.org -->
  <g transform="translate(130, 890)">
    <rect x="0" y="0" width="216" height="54" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />

    <!-- NusantaraProject Official Geometric N Vector Mark -->
    <g transform="translate(14, 15)">
      <svg width="26" height="24" viewBox="0 0 44 40" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3805 40H3.32971V29.265L0 31.205V19.4808L3.32971 17.5408V5.31536L0.288766 0H15.0332L19.634 8.04139L9.71303 13.8218V17.7019L3.32971 21.4208V25.3849L6.21948 23.7013H9.71303L11.7124 27.1963H15.0554L22.3805 40ZM24.1954 5.38371L21.1153 0H40.9588V34.6846L44 40H37.9179L32.8691 31.1752H29.4958L25.2199 23.7013H33.3764L29.359 17.7019H34.268L31.9503 13.8218V7.00302L29.359 8.51304V2.37526L24.1954 5.38371Z" fill="#dc2626"/>
      </svg>
    </g>

    <text x="48" y="24" class="sans" font-size="12" font-weight="700" fill="#0f172a">NusantaraProject</text>
    <text x="48" y="38" class="mono" font-size="8" font-weight="600" fill="#dc2626" letter-spacing="0.5">INDONESIAN AOSP ROM</text>
  </g>

  <!-- 7. RECOVERY & FIRMWARE ANNOTATIONS (Bottom Center/Right) -->
  <g transform="translate(620, 890)">
    <rect x="0" y="0" width="220" height="54" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#badge-shadow)" />
    <g transform="translate(14, 18)">
      <circle cx="8" cy="8" r="4" fill="#0877b5" />
      <text x="20" y="8" class="mono" font-size="10" font-weight="700" fill="#0f172a" letter-spacing="0.8">RECOVERY &amp; FIRMWARE</text>
      <text x="20" y="20" class="mono" font-size="8" fill="#64748b">TWRP • ORANGEFOX • STOCK OTA</text>
    </g>
  </g>

  <!-- Technical Engineering Footer Metadata (Bottom) -->
  <g transform="translate(64, 1140)">
    <text x="0" y="0" class="mono" font-size="9" font-weight="600" fill="#64748b" letter-spacing="1">REF: TECHFIX_ENG_WORKBENCH // COMPATIBILITY CHECK &amp; FLASH RECOVERY</text>
  </g>

</svg>
'''
    with open('public/hero-android-workbench.svg', 'w') as f:
        f.write(svg_content)
    print('Generated public/hero-android-workbench.svg, length:', len(svg_content))

generate_svg()
