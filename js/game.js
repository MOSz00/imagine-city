const BRANCH_ORDER = ["DGA", "DGD", "IGD", "AFX", "DEN"];
const BRANCH_COLORS = {
  DGA: "#FF2A6D",
  DGD: "#FFB800",
  IGD: "#00F0B5",
  AFX: "#4D61FC",
  DEN: "#A855F7"
};

const MASCOT_IMAGES = {
  DGA: "images/DGA.png",
  DGD: "images/DGD.png",
  IGD: "images/IGD.png",
  AFX: "images/AFX.png",
  DEN: "images/DEN.png"
};

// แบนเนอร์ฉากจำลองทั้ง 7 ช่วงของ Imagine City (อัปเกรดรายละเอียดและเลเยอร์แอนิเมชันเต็มรูปแบบ)
const SCENE_ART = {
  intro: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="introGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F4F4F6" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#0D0E12" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="360" height="110" fill="#0D0E12" />
      <circle cx="180" cy="54" r="65" fill="url(#introGlow)" class="pulse-core" />

      <!-- ดวงดาวและละอองแสงยามค่ำคืน -->
      <g opacity="0.45">
        <circle cx="28" cy="18" r="1" fill="#FFF" class="star-blink" />
        <circle cx="74" cy="34" r="1.3" fill="#FFF" class="star-blink" style="animation-delay:0.6s" />
        <circle cx="122" cy="14" r="0.9" fill="#FFF" />
        <circle cx="238" cy="22" r="1.4" fill="#FFF" class="star-blink" style="animation-delay:1.1s" />
        <circle cx="295" cy="16" r="1" fill="#FFF" />
        <circle cx="332" cy="38" r="1.2" fill="#FFF" class="star-blink" style="animation-delay:0.3s" />
      </g>

      <!-- เส้นกริดพื้นจัตุรัส -->
      <line x1="0" y1="94" x2="360" y2="94" stroke="rgba(255,255,255,0.16)" stroke-width="1.2" />
      <path d="M20 94 L0 110 M90 94 L75 110 M180 94 L180 110 M270 94 L285 110 M340 94 L360 110" stroke="rgba(255,255,255,0.07)" stroke-width="1" />

      <!-- วงคลื่นสัญญาณชีพจรสีขาว-เทา (Pulse Wave) -->
      <g transform="translate(180, 52)">
        <circle cx="0" cy="0" r="16" stroke="#F4F4F6" stroke-width="1.2" opacity="0.25" />
        <circle cx="0" cy="0" r="30" stroke="#F4F4F6" stroke-dasharray="3 5" stroke-width="1.2" opacity="0.35" class="spin-slow" />
        <circle cx="0" cy="0" r="44" stroke="#F4F4F6" stroke-width="1.5" opacity="0.4" class="wave-ripple" />
        <circle cx="0" cy="0" r="58" stroke="#F4F4F6" stroke-dasharray="2 6" stroke-width="1" opacity="0.2" class="spin-slow" style="animation-direction:reverse" />
        <circle cx="0" cy="0" r="70" stroke="#F4F4F6" stroke-width="1" opacity="0.15" class="wave-ripple" style="animation-delay:1.1s" />
      </g>

      <!-- เส้นขอบฟ้าเมืองไร้สี & หน้าต่างตึกที่เริ่มกะพริบ -->
      <g fill="#151720" stroke="#2D3142" stroke-width="1">
        <rect x="14" y="76" width="20" height="18" rx="1" />
        <rect x="38" y="60" width="24" height="34" rx="1" />
        <rect x="44" y="66" width="3" height="3" fill="#9CA3AF" stroke="none" class="star-blink" />
        <rect x="52" y="74" width="3" height="3" fill="#9CA3AF" stroke="none" class="star-blink" style="animation-delay:0.9s" />

        <path d="M74 94 L80 54 H84 L90 94 Z" />
        <circle cx="82" cy="50" r="2.5" fill="#4B5563" />

        <rect x="102" y="56" width="26" height="38" rx="1" />
        <rect x="134" y="68" width="20" height="26" rx="1" />
        <rect x="206" y="64" width="22" height="30" rx="1" />
        <rect x="234" y="52" width="28" height="42" rx="1" />
        <rect x="242" y="60" width="3" height="3" fill="#9CA3AF" stroke="none" class="star-blink" style="animation-delay:0.4s" />

        <path d="M274 94 L281 58 H285 L292 94 Z" />
        <rect x="302" y="66" width="22" height="28" rx="1" />
        <rect x="328" y="74" width="18" height="20" rx="1" />
      </g>

      <!-- ดวงไฟนำทางตื่นขึ้นกลางจัตุรัส -->
      <g transform="translate(180, 84)">
        <circle cx="0" cy="0" r="11" fill="#FFF" opacity="0.2" class="wave-ripple" />
        <circle cx="0" cy="0" r="4" fill="#FFF" class="pulse-core" />
      </g>
    </svg>
  `,

  ch1: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />
      <!-- เส้นกริดพื้นจัตุรัส -->
      <ellipse cx="180" cy="96" rx="140" ry="12" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <ellipse cx="180" cy="96" rx="80" ry="7" stroke="rgba(255,255,255,0.14)" stroke-width="1" />

      <!-- ทางแยก 5 เส้นทางเรืองแสง + คลื่นวิ่งตามเส้น -->
      <g stroke-linecap="round" stroke-linejoin="round">
        <!-- 1. DGA (ชมพู) -->
        <path d="M180 96 C135 96, 85 82, 34 40" stroke="#FF2A6D" stroke-width="3.5" opacity="0.35" />
        <path d="M180 96 C135 96, 85 82, 34 40" stroke="#FF2A6D" stroke-width="3.5" class="path-flow" />
        <path d="M34 40 L25 41 M34 40 L36 49" stroke="#FF2A6D" stroke-width="2.5" />
        <circle cx="26" cy="25" r="5" fill="#FF2A6D" class="float-y" />
        <circle cx="18" cy="31" r="2.5" fill="#FF2A6D" opacity="0.7" class="float-y" style="animation-delay:0.4s" />

        <!-- 2. DGD (เหลือง) -->
        <path d="M180 96 C155 96, 122 72, 92 34" stroke="#FFB800" stroke-width="3.5" opacity="0.35" />
        <path d="M180 96 C155 96, 122 72, 92 34" stroke="#FFB800" stroke-width="3.5" class="path-flow" style="animation-delay:0.2s" />
        <path d="M92 34 L84 36 M92 34 L94 42" stroke="#FFB800" stroke-width="2.5" />
        <rect x="82" y="14" width="9" height="9" rx="1" transform="rotate(45 86.5 18.5)" fill="#FFB800" class="float-y" style="animation-delay:0.3s" />

        <!-- 3. IGD (เขียวมินต์) -->
        <path d="M180 96 V26" stroke="#00F0B5" stroke-width="4" opacity="0.35" />
        <path d="M180 96 V26" stroke="#00F0B5" stroke-width="4" class="path-flow" style="animation-delay:0.4s" />
        <path d="M180 26 L174 33 M180 26 L186 33" stroke="#00F0B5" stroke-width="2.5" />
        <polygon points="180,8 183,14 189,15 184,19 186,25 180,22 174,25 176,19 171,15 177,14" fill="#00F0B5" class="float-y" style="animation-delay:0.6s" />

        <!-- 4. AFX (น้ำเงิน) -->
        <path d="M180 96 C205 96, 238 72, 268 34" stroke="#4D61FC" stroke-width="3.5" opacity="0.35" />
        <path d="M180 96 C205 96, 238 72, 268 34" stroke="#4D61FC" stroke-width="3.5" class="path-flow" style="animation-delay:0.6s" />
        <path d="M268 34 L276 36 M268 34 L266 42" stroke="#4D61FC" stroke-width="2.5" />
        <path d="M274 12 C270 18, 270 23, 274 26 C278 23, 278 18, 274 12 Z" fill="#4D61FC" class="float-y" style="animation-delay:0.8s" />

        <!-- 5. DEN (ม่วง) -->
        <path d="M180 96 C225 96, 275 82, 326 40" stroke="#A855F7" stroke-width="3.5" opacity="0.35" />
        <path d="M180 96 C225 96, 275 82, 326 40" stroke="#A855F7" stroke-width="3.5" class="path-flow" style="animation-delay:0.8s" />
        <path d="M326 40 L335 41 M326 40 L324 49" stroke="#A855F7" stroke-width="2.5" />
        <circle cx="334" cy="24" r="4.5" fill="#A855F7" class="float-y" style="animation-delay:1s" />
        <path d="M341 20 Q345 24 341 28" stroke="#A855F7" stroke-width="1.5" class="sound-wave" />
      </g>

      <!-- ดวงไฟนำทางตรงทางแยก -->
      <g transform="translate(180, 94)">
        <circle cx="0" cy="0" r="14" fill="#FFF" opacity="0.25" class="wave-ripple" />
        <polygon points="0,-9 2.5,-2.5 9,0 2.5,2.5 0,9 -2.5,2.5 -9,0 -2.5,-2.5" fill="#FFF" class="pulse-core" />
      </g>
    </svg>
  `,

  ch2: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />

      <!-- แม่น้ำและระลอกคลื่น -->
      <path d="M0 90 Q90 83 180 90 T360 90 V110 H0 Z" fill="#121520" />
      <path d="M40 97 Q90 93 140 97" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" class="river-drift" />
      <path d="M210 101 Q265 97 320 101" stroke="rgba(0,240,181,0.18)" stroke-width="1.5" class="river-drift" style="animation-delay:1s" />

      <!-- โครงสร้างสะพานฝั่งซ้าย -->
      <g stroke="#374151" fill="#181B26">
        <path d="M0 74 H134 L126 52 H0 Z" stroke-width="1.5" />
        <polyline points="8,74 26,52 46,74 66,52 86,74 106,52 126,74" fill="none" stroke-width="1.3" />
        <rect x="112" y="74" width="14" height="22" />
        <!-- เสาไฟริมสะพานซ้าย -->
        <line x1="122" y1="52" x2="122" y2="38" stroke="#6B7280" stroke-width="1.5" />
        <circle cx="122" cy="36" r="2.5" fill="#FFB800" class="glitch-flicker" />
      </g>

      <!-- โครงสร้างสะพานฝั่งขวา -->
      <g stroke="#374151" fill="#181B26">
        <path d="M360 74 H226 L234 52 H360 Z" stroke-width="1.5" />
        <polyline points="352,74 334,52 314,74 294,52 274,74 254,52 234,74" fill="none" stroke-width="1.3" />
        <rect x="234" y="74" width="14" height="22" />
        <!-- เสาไฟริมสะพานขวา -->
        <line x1="238" y1="52" x2="238" y2="38" stroke="#6B7280" stroke-width="1.5" />
        <circle cx="238" cy="36" r="2.5" fill="#FF2A6D" class="glitch-flicker" style="animation-delay:0.4s" />
      </g>

      <!-- คลื่นสัญญาณรบกวน (Glitch Wave) เชื่อมรอยขาดของสะพาน -->
      <g filter="drop-shadow(0 0 5px #00F0B5)">
        <path d="M132 68 Q148 52 164 68 T196 68 T228 68" stroke="#00F0B5" stroke-width="2.8" stroke-linecap="round" class="glitch-wave" />
        <path d="M134 62 Q152 76 170 62 T206 62 T226 62" stroke="#4D61FC" stroke-width="1.8" stroke-dasharray="4 3" class="glitch-wave" style="animation-delay:0.3s" />
        <!-- พิกเซลแตกกระจายรอบรอยขาด -->
        <rect x="146" y="46" width="4" height="4" fill="#00F0B5" class="float-y" />
        <rect x="176" y="42" width="5" height="5" fill="#00F0B5" class="glitch-flicker" />
        <rect x="204" y="48" width="4" height="4" fill="#00F0B5" class="float-y" style="animation-delay:0.5s" />
        <rect x="160" y="78" width="6" height="2.5" fill="#00F0B5" opacity="0.8" />
        <rect x="192" y="76" width="5" height="2.5" fill="#4D61FC" opacity="0.8" />
      </g>
    </svg>
  `,

  ch3: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="radarSweep" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#00F0B5" stop-opacity="0"/>
          <stop offset="100%" stop-color="#00F0B5" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="360" height="110" fill="#0D0E12" />

      <!-- เส้นกริดเรดาร์ -->
      <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
        <line x1="180" y1="0" x2="180" y2="110" />
        <line x1="0" y1="55" x2="360" y2="55" />
        <rect x="16" y="14" width="328" height="82" rx="8" stroke="rgba(255,255,255,0.08)" />
      </g>

      <!-- แถบคลื่นเสียง Equalizer ซ้าย-ขวา -->
      <g fill="#00F0B5" opacity="0.55">
        <rect x="34" y="46" width="3" height="18" rx="1.5" class="eq-bar" style="animation-delay:0.1s" />
        <rect x="41" y="38" width="3" height="34" rx="1.5" class="eq-bar" style="animation-delay:0.3s" />
        <rect x="48" y="42" width="3" height="26" rx="1.5" class="eq-bar" style="animation-delay:0.5s" />
        <rect x="55" y="48" width="3" height="14" rx="1.5" class="eq-bar" style="animation-delay:0.2s" />

        <rect x="302" y="48" width="3" height="14" rx="1.5" class="eq-bar" style="animation-delay:0.4s" />
        <rect x="309" y="40" width="3" height="30" rx="1.5" class="eq-bar" style="animation-delay:0.1s" />
        <rect x="316" y="36" width="3" height="38" rx="1.5" class="eq-bar" style="animation-delay:0.6s" />
        <rect x="323" y="45" width="3" height="20" rx="1.5" class="eq-bar" style="animation-delay:0.2s" />
      </g>

      <!-- วงแหวนเรดาร์สแกนคลื่นความถี่ -->
      <g transform="translate(180, 55)">
        <circle cx="0" cy="0" r="14" stroke="rgba(0, 240, 181, 0.35)" stroke-width="1.2" />
        <circle cx="0" cy="0" r="28" stroke="#00F0B5" stroke-width="1.2" stroke-dasharray="3 4" opacity="0.45" class="spin-slow" />
        <circle cx="0" cy="0" r="42" stroke="#00F0B5" stroke-width="1.5" opacity="0.6" />
        <circle cx="0" cy="0" r="54" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" stroke-dasharray="2 6" />

        <!-- ลำแสงเรดาร์หมุนสแกน -->
        <g class="spin-radar">
          <path d="M0 0 L42 0 A42 42 0 0 0 28 -31 Z" fill="url(#radarSweep)" />
          <line x1="0" y1="0" x2="42" y2="0" stroke="#00F0B5" stroke-width="2" />
        </g>

        <!-- จุดสัญญาณ 5 ย่านบนจอเรดาร์ -->
        <circle cx="-26" cy="-16" r="4" fill="#FF2A6D" class="pulse-core" />
        <circle cx="-18" cy="24" r="3.5" fill="#FFB800" class="pulse-core" style="animation-delay:0.4s" />
        <circle cx="24" cy="-20" r="4.5" fill="#00F0B5" class="pulse-core" style="animation-delay:0.8s" />
        <circle cx="28" cy="18" r="3.5" fill="#4D61FC" class="pulse-core" style="animation-delay:1.2s" />
        <circle cx="0" cy="-34" r="3.5" fill="#A855F7" class="pulse-core" style="animation-delay:1.5s" />

        <circle cx="0" cy="0" r="3.5" fill="#FFF" />
      </g>
    </svg>
  `,

  gate: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />
      <line x1="0" y1="96" x2="360" y2="96" stroke="rgba(255,255,255,0.16)" stroke-width="1.5" />

      <!-- เสาหินโมโนลิธขนาดยักษ์และลวดลายอักขระ -->
      <g>
        <path d="M122 96 L128 16 H232 L238 96 Z" fill="#191C26" stroke="#374151" stroke-width="2" />
        <path d="M140 96 L144 30 H216 L220 96 Z" fill="#10121A" stroke="#2D3142" stroke-width="1.5" />
        <!-- ลายสลักเรืองแสงข้างเสา -->
        <path d="M132 34 H137 V50 H132 M132 62 V78" stroke="#4B5563" stroke-width="1.5" />
        <path d="M228 34 H223 V50 H228 M228 62 V78" stroke="#4B5563" stroke-width="1.5" />
      </g>

      <!-- เส้นพลังงาน 5 สีไหลจากพื้นพุ่งขึ้นสู่แกนกลาง -->
      <g filter="drop-shadow(0 0 4px rgba(0, 240, 181, 0.6))">
        <path d="M60 96 H154 L164 34" stroke="#FF2A6D" stroke-width="2.5" class="gate-stream" style="--stream-delay:0s" />
        <path d="M95 96 H166 L172 34" stroke="#FFB800" stroke-width="2.5" class="gate-stream" style="--stream-delay:0.2s" />
        <path d="M180 96 V30" stroke="#00F0B5" stroke-width="3" class="gate-stream" style="--stream-delay:0.4s" />
        <path d="M265 96 H194 L188 34" stroke="#4D61FC" stroke-width="2.5" class="gate-stream" style="--stream-delay:0.6s" />
        <path d="M300 96 H206 L196 34" stroke="#A855F7" stroke-width="2.5" class="gate-stream" style="--stream-delay:0.8s" />
      </g>

      <!-- วงแหวนกลไกปลดล็อกด้านบนประตู -->
      <g transform="translate(180, 24)">
        <circle cx="0" cy="0" r="15" fill="#0D0E12" stroke="#4B5563" stroke-width="1.5" />
        <circle cx="0" cy="0" r="11" stroke="#00F0B5" stroke-width="1.5" stroke-dasharray="4 3" class="spin-slow" />
        <circle cx="0" cy="0" r="7" stroke="#FF2A6D" stroke-width="1.2" stroke-dasharray="2 3" class="spin-slow" style="animation-direction:reverse" />
        <polygon points="0,-10 2.5,-2.5 10,0 2.5,2.5 0,10 -2.5,2.5 -10,0 -2.5,-2.5" fill="#FFF" class="pulse-core" />
      </g>
    </svg>
  `,

  ch4: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />
      <defs>
        <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF2A6D"/>
          <stop offset="25%" stop-color="#FFB800"/>
          <stop offset="50%" stop-color="#00F0B5"/>
          <stop offset="75%" stop-color="#4D61FC"/>
          <stop offset="100%" stop-color="#A855F7"/>
        </linearGradient>
      </defs>

      <!-- ลานน้ำพุกลางเมืองและละอองน้ำ -->
      <g transform="translate(180, 86)" stroke="#374151" fill="#161821">
        <path d="M-48 10 L-42 2 H42 L48 10 Z" stroke-width="1.5" />
        <path d="M-30 2 L-24 -6 H24 L30 2 Z" stroke-width="1.5" />
        <rect x="-4" y="-16" width="8" height="10" />
        <!-- สายน้ำพุโค้ง -->
        <path d="M-2 -16 Q-18 -28 -32 -4" fill="none" stroke="#60A5FA" stroke-width="1.2" stroke-dasharray="3 3" class="fountain-arc" />
        <path d="M2 -16 Q18 -28 32 -4" fill="none" stroke="#60A5FA" stroke-width="1.2" stroke-dasharray="3 3" class="fountain-arc" />
      </g>

      <!-- วงโคจรและเส้นใยแสงเชื่อมโยงลูกแก้ว 5 สี -->
      <g transform="translate(180, 46)">
        <ellipse cx="0" cy="6" rx="96" ry="26" stroke="url(#orbitGrad)" stroke-width="1.8" stroke-dasharray="6 6" opacity="0.7" class="spin-slow" />

        <!-- เส้นแสงเชื่อมโยงระหว่างเพื่อนร่วมทาง -->
        <polygon points="-78,0 -34,24 34,24 78,0 0,-18" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" fill="rgba(255,255,255,0.03)" />

        <!-- ลูกแก้วพลังงาน 5 สีลอยกระเพื่อม -->
        <g class="float-y" style="animation-delay:0s">
          <circle cx="-78" cy="0" r="8" fill="#FF2A6D" />
          <circle cx="-78" cy="0" r="3" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:0.3s">
          <circle cx="-34" cy="24" r="8" fill="#FFB800" />
          <circle cx="-34" cy="24" r="3" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:0.6s">
          <circle cx="34" cy="24" r="8.5" fill="#00F0B5" />
          <circle cx="34" cy="24" r="3.5" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:0.9s">
          <circle cx="78" cy="0" r="8" fill="#4D61FC" />
          <circle cx="78" cy="0" r="3" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:1.2s">
          <circle cx="0" cy="-18" r="8" fill="#A855F7" />
          <circle cx="0" cy="-18" r="3" fill="#FFF" />
        </g>
      </g>
    </svg>
  `,

  ch5: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="spotPink" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#FF2A6D" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#FF2A6D" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="spotMint" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#00F0B5" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#00F0B5" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="spotPurple" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#A855F7" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#A855F7" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="360" height="110" fill="#0D0E12" />

      <!-- ลำแสงสปอตไลต์งานเทศกาลกวาดท้องฟ้า -->
      <polygon points="85,95 20,0 95,0" fill="url(#spotPink)" class="beam-sway-left" />
      <polygon points="180,95 125,0 235,0" fill="url(#spotMint)" class="beam-sway-center" />
      <polygon points="275,95 265,0 340,0" fill="url(#spotPurple)" class="beam-sway-right" />

      <!-- คลื่นเสียง Equalizer หลากสีด้านหลังเวที -->
      <g opacity="0.8">
        <rect x="24" y="64" width="4" height="26" rx="2" fill="#FF2A6D" class="eq-bar" style="animation-delay:0.1s" />
        <rect x="32" y="54" width="4" height="36" rx="2" fill="#FFB800" class="eq-bar" style="animation-delay:0.3s" />
        <rect x="40" y="60" width="4" height="30" rx="2" fill="#00F0B5" class="eq-bar" style="animation-delay:0.5s" />
        <rect x="48" y="68" width="4" height="22" rx="2" fill="#4D61FC" class="eq-bar" style="animation-delay:0.2s" />

        <rect x="308" y="68" width="4" height="22" rx="2" fill="#00F0B5" class="eq-bar" style="animation-delay:0.4s" />
        <rect x="316" y="56" width="4" height="34" rx="2" fill="#4D61FC" class="eq-bar" style="animation-delay:0.2s" />
        <rect x="324" y="52" width="4" height="38" rx="2" fill="#A855F7" class="eq-bar" style="animation-delay:0.6s" />
        <rect x="332" y="64" width="4" height="26" rx="2" fill="#FF2A6D" class="eq-bar" style="animation-delay:0.1s" />
      </g>

      <!-- เวทีใหญ่และหอกระจายคลื่นเสียงใจกลางเมือง -->
      <g>
        <path d="M112 96 C112 72, 248 72, 248 96 Z" fill="#181B26" stroke="#A855F7" stroke-width="1.5" />
        <path d="M140 96 C140 80, 220 80, 220 96 Z" fill="#0D0E12" />
        <!-- เสาส่งสัญญาณกลางเวที -->
        <path d="M173 76 L177 36 H183 L187 76 Z" fill="#252A3A" stroke="#4D61FC" stroke-width="1.2" />
        <line x1="180" y1="14" x2="180" y2="36" stroke="#FFF" stroke-width="2" />
        <circle cx="180" cy="14" r="4" fill="#FFB800" class="pulse-core" />
        <!-- คลื่นเสียงแผ่ออกรอบยอดเสา -->
        <path d="M171 22 Q166 14 171 6 M189 22 Q194 14 189 6" stroke="#00F0B5" stroke-width="1.6" stroke-linecap="round" class="sound-wave" />
        <path d="M164 26 Q156 14 164 2 M196 26 Q204 14 196 2" stroke="#FF2A6D" stroke-width="1.6" stroke-linecap="round" class="sound-wave" style="animation-delay:0.4s" />
      </g>

      <!-- พลุประกายสีสัน (Confetti Sparks) ลอยขึ้นฟ้า -->
      <circle cx="72" cy="34" r="2.5" fill="#FFB800" class="confetti-rise" />
      <circle cx="136" cy="26" r="2.5" fill="#FF2A6D" class="confetti-rise" style="animation-delay:0.5s" />
      <circle cx="226" cy="28" r="2.5" fill="#00F0B5" class="confetti-rise" style="animation-delay:0.9s" />
      <circle cx="288" cy="32" r="2.5" fill="#4D61FC" class="confetti-rise" style="animation-delay:1.3s" />

      <!-- เงาผู้คนร่วมเฉลิมฉลองหน้าเวที -->
      <path d="M0 110 V96 H360 V110 Z" fill="#090A0D" />
      <g stroke="#090A0D" stroke-width="3" stroke-linecap="round">
        <circle cx="65" cy="94" r="4" fill="#090A0D" stroke="none" />
        <path d="M61 95 L57 88 M69 95 L73 88" />
        <circle cx="128" cy="93" r="4" fill="#090A0D" stroke="none" />
        <path d="M124 94 L121 86 M132 94 L135 87" />
        <circle cx="232" cy="93" r="4" fill="#090A0D" stroke="none" />
        <path d="M228 94 L225 87 M236 94 L239 86" />
        <circle cx="295" cy="94" r="4" fill="#090A0D" stroke="none" />
        <path d="M291 95 L287 88 M299 95 L303 88" />
      </g>
    </svg>
  `
};

const isDebug = new URLSearchParams(window.location.search).get("debug") === "1";

let gameData = null;
let currentStepIndex = -1;
let scores = { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 };
let scoredCount = 0;
let answer52 = null;
let chosenCareer = null;
let passportAnswers = {};

const container = document.getElementById("gameContainer");
const progressWrap = document.getElementById("progressWrap");
const progressDots = document.getElementById("progressDots");

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function rankBranches(scoreMap, tieBreaker = null) {
  return [...BRANCH_ORDER].sort((a, b) => {
    if (scoreMap[b] !== scoreMap[a]) {
      return scoreMap[b] - scoreMap[a];
    }
    if (tieBreaker) {
      if (a === tieBreaker) return -1;
      if (b === tieBreaker) return 1;
    }
    return BRANCH_ORDER.indexOf(a) - BRANCH_ORDER.indexOf(b);
  });
}

function calculateResult(scoreMap, ans52) {
  const ranked = rankBranches(scoreMap, ans52);
  const first = ranked[0];
  const second = ranked[1];
  if (scoreMap[first] - scoreMap[second] <= 1) {
    return [first, second];
  }
  return [first];
}

function updateProgressVisual() {
  const ratio = Math.min(scoredCount / 11, 1);
  document.documentElement.style.setProperty("--progress", ratio.toFixed(2));

  // อัปเดตเปอร์เซ็นต์การคืนสีบน HUD
  const pulseText = document.getElementById("pulsePercent");
  if (pulseText) {
    pulseText.textContent = `${Math.round(ratio * 100)}% RESTORED`;
  }

  progressDots.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    const dot = document.createElement("span");
    dot.className = i < scoredCount ? "dot active" : "dot";
    progressDots.appendChild(dot);
  }
}

async function initGame() {
  try {
    const res = await fetch("data/scenes.json");
    if (!res.ok) throw new Error("Load failed");
    gameData = await res.json();
    renderIntro();
  } catch (err) {
    container.innerHTML = `
      <h2>ไม่สามารถเชื่อมต่อข้อมูลเมืองได้</h2>
      <p class="story-text">กรุณาเปิดไฟล์นี้ผ่าน <strong>Live Server</strong> ใน VS Code เพื่อโหลดข้อมูล <code>data/scenes.json</code></p>
    `;
  }
}

function renderIntro() {
  currentStepIndex = -1;
  scores = { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 };
  scoredCount = 0;
  answer52 = null;
  chosenCareer = null;
  passportAnswers = {};
  progressWrap.hidden = true;
  updateProgressVisual();

  const { intro } = gameData;
  container.innerHTML = `
    ${SCENE_ART.intro}
    <h1>${intro.title}</h1>
    <p class="story-text"><strong>${intro.hook}</strong></p>
    ${intro.story.map(p => `<p class="story-text">${p}</p>`).join("")}
    <ul class="how-list">
      ${intro.howToPlay.map(item => `<li>${item}</li>`).join("")}
    </ul>
    <button class="primary-btn" id="startBtn">เริ่มออกเดินทาง ↗</button>
  `;

  document.getElementById("startBtn").addEventListener("click", () => {
    progressWrap.hidden = false;
    nextStep();
  });
}

function nextStep() {
  currentStepIndex++;
  if (currentStepIndex >= gameData.flow.length) {
    renderResult();
    return;
  }
  const step = gameData.flow[currentStepIndex];
  renderStep(step);
}

function renderStep(step) {
  container.style.animation = "none";
  container.offsetHeight;
  container.style.animation = "";

  if (step.type === "chapter") {
    container.innerHTML = `
      <p class="eyebrow">CHAPTER</p>
      ${SCENE_ART[step.id] || ""}
      <h2>${step.title}</h2>
      <p class="story-text">${step.text}</p>
      <button class="primary-btn" id="continueBtn">ก้าวต่อไป →</button>
    `;
    document.getElementById("continueBtn").addEventListener("click", nextStep);
  } 
  else if (step.type === "scene") {
    const artKey = step.id === "gate" ? "gate" : `ch${step.id.split(".")[0]}`;
    const artHtml = SCENE_ART[artKey] || "";

    const shuffledOptions = shuffle(step.options);
    container.innerHTML = `
      <p class="eyebrow">SCENE ${step.id.toUpperCase()}</p>
      ${artHtml}
      <h2>${step.title}</h2>
      <p class="story-text">${step.text}</p>
      <div class="choices-list">
        ${shuffledOptions.map(opt => `
          <button class="choice-btn" data-branch="${opt.branch}">
            <span>${opt.text}</span>
            ${isDebug ? `<span class="debug-badge">${opt.branch}</span>` : ""}
          </button>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const branch = btn.dataset.branch;
        if (step.scored) {
          scores[branch] += 1;
          scoredCount += 1;
          if (step.id === "5.2") answer52 = branch;
          if (isDebug) console.log(`Scene ${step.id} -> +1 ${branch}`, scores);
          updateProgressVisual();
        }
        nextStep();
      });
    });
  } 
  else if (step.type === "district") {
    renderDistrictStep(step);
  } 
  else if (step.type === "passport") {
    renderPassportStep(step);
  }
}

function renderDistrictStep(step) {
  const ranked = rankBranches(scores, null);
  const top1 = ranked[0];
  const top2 = ranked[1];
  const activeDistricts = (scores[top1] - scores[top2] <= 1) ? [top1, top2] : [top1];

  const cardsHtml = activeDistricts.map(code => {
    const d = gameData.districts[code];
    const opts = shuffle(d.options);
    return `
      <div class="district-card" style="--d-color: ${BRANCH_COLORS[code]}">
        <h3>${d.name}</h3>
        <p class="district-npc">${d.npc}</p>
        <div class="choices-list">
          ${opts.map(opt => `
            <button class="choice-btn" data-career="${opt.career}">
              <span>${opt.text}</span>
              ${isDebug ? `<span class="debug-badge">${opt.career}</span>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <p class="eyebrow">DISTRICT DISCOVERY</p>
    ${SCENE_ART.ch3}
    <h2>${step.title}</h2>
    <p class="story-text">${step.text} (เลือกสิ่งที่ตรงใจที่สุด 1 ข้อ)</p>
    ${cardsHtml}
  `;

  container.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      chosenCareer = btn.dataset.career;
      if (isDebug) console.log("Chosen Career:", chosenCareer);
      nextStep();
    });
  });
}

function renderPassportStep(step) {
  const fieldsHtml = gameData.passport.fields.map(f => {
    if (f.type === "text") {
      return `
        <div class="form-group">
          <label>${f.label}</label>
          <input type="text" name="${f.id}" placeholder="พิมพ์คำตอบ (ข้ามได้)">
        </div>
      `;
    }
    if (f.type === "single") {
      return `
        <div class="form-group">
          <label>${f.label}</label>
          <div class="pill-group">
            ${f.options.map(opt => `
              <label class="pill-label">
                <input type="radio" name="${f.id}" value="${opt}">
                <span>${opt}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `;
    }
    if (f.type === "multi") {
      return `
        <div class="form-group">
          <label>${f.label}</label>
          <div class="pill-group" data-max="${f.max || 99}" data-field="${f.id}">
            ${f.options.map(opt => `
              <label class="pill-label">
                <input type="checkbox" name="${f.id}" value="${opt}">
                <span>${opt}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `;
    }
    return "";
  }).join("");

  container.innerHTML = `
    <p class="eyebrow">OPTIONAL PASS</p>
    <h2>${step.title}</h2>
    <p class="story-text">${step.text}</p>
    <form class="passport-form" id="passportForm">
      ${fieldsHtml}
      <button type="submit" class="primary-btn">ก้าวขึ้นสู่เวทีใหญ่ →</button>
      <button type="button" class="secondary-btn" id="skipPassportBtn">ข้ามขั้นตอนนี้</button>
    </form>
  `;

  container.querySelectorAll(".pill-group[data-max]").forEach(group => {
    const max = parseInt(group.dataset.max, 10);
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        const checkedCount = group.querySelectorAll('input[type="checkbox"]:checked').length;
        if (checkedCount > max) cb.checked = false;
      });
    });
  });

  document.getElementById("passportForm").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    passportAnswers = Object.fromEntries(formData.entries());
    nextStep();
  });

  document.getElementById("skipPassportBtn").addEventListener("click", nextStep);
}

function renderResult() {
  document.documentElement.style.setProperty("--progress", "1");
  progressWrap.hidden = true;

  const winners = calculateResult(scores, answer52);
  const isMixed = winners.length === 2;

  let heroBg = BRANCH_COLORS[winners[0]];
  let badgeText = `นักเดินทางสาย ${winners[0]}`;
  let titleText = "";
  let descHtml = "";
  let allCareers = [];
  let majorsHtml = "";

  // จัดการรูปภาพมาสคอต
  let mascotHtml = "";
  if (!isMixed) {
    const code = winners[0];
    mascotHtml = `
      <div class="result-mascot-container">
        <img src="${MASCOT_IMAGES[code]}" alt="Mascot ${code}" class="mascot-img ani-${code.toLowerCase()}">
      </div>
    `;
  } else {
    const c1 = winners[0];
    const c2 = winners[1];
    mascotHtml = `
      <div class="result-mascot-container mixed-mascots">
        <img src="${MASCOT_IMAGES[c1]}" alt="Mascot ${c1}" class="mascot-img ani-${c1.toLowerCase()}">
        <img src="${MASCOT_IMAGES[c2]}" alt="Mascot ${c2}" class="mascot-img ani-${c2.toLowerCase()}">
      </div>
    `;
  }

  if (!isMixed) {
    const res = gameData.results[winners[0]];
    titleText = res.title;
    descHtml = `<p>${res.text}</p>`;
    allCareers = [...res.careers];
    majorsHtml = `<p><strong>สาขาที่แนะนำ:</strong> ${res.major}</p>`;
  } else {
    const sortedKey = [...winners].sort().join("+");
    const r1 = gameData.results[winners[0]];
    const r2 = gameData.results[winners[1]];
    heroBg = `linear-gradient(135deg, ${BRANCH_COLORS[winners[0]]}, ${BRANCH_COLORS[winners[1]]})`;
    badgeText = `สายผสม ${winners[0]} × ${winners[1]}`;
    titleText = gameData.mixed[sortedKey] || `${r1.title} & ${r2.title}`;
    descHtml = `
      <p style="margin-bottom:10px">${gameData.mixedIntro}</p>
      <p><strong>${r1.title}:</strong> ${r1.text}</p>
      <p style="margin-top:8px"><strong>${r2.title}:</strong> ${r2.text}</p>
    `;
    allCareers = [...new Set([...r1.careers, ...r2.careers])];
    majorsHtml = `
      <p><strong>สาขาหลัก:</strong> ${r1.major}</p>
      <p><strong>สาขาร่วม:</strong> ${r2.major}</p>
    `;
  }

  const orderedCareers = chosenCareer
    ? [chosenCareer, ...allCareers.filter(c => c !== chosenCareer)]
    : allCareers;

  container.innerHTML = `
    <div class="result-hero" style="--result-bg: ${heroBg}">
      <span class="badge">${badgeText}</span>
      <h2>${titleText}</h2>
      ${descHtml}
    </div>

    ${mascotHtml}

    <h3>เส้นทางอาชีพที่เหมาะกับคุณ</h3>
    <div class="career-tags">
      ${orderedCareers.slice(0, 8).map((c, idx) => `
        <span class="career-tag ${idx === 0 && chosenCareer ? "highlight" : ""}">
          ${idx === 0 && chosenCareer ? "★ " : ""}${c}
        </span>
      `).join("")}
    </div>

    <div class="major-box">
      <h3>คณะดิจิทัลมีเดีย (SDM)</h3>
      ${majorsHtml}
    </div>

    <p class="story-text" style="text-align:center; font-size:0.92rem;">
      ${gameData.outro.text}<br>
      <strong>${gameData.outro.cta}</strong>
    </p>

    <button class="primary-btn" id="restartBtn">เล่นใหม่อีกครั้ง ↺</button>
  `;

  document.getElementById("restartBtn").addEventListener("click", renderIntro);
}

initGame();