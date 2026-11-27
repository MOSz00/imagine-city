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

// แบนเนอร์ฉากจำลองทั้ง 7 ช่วงของ Imagine City (เพิ่มมิติแสงเงา เลเยอร์สถาปัตยกรรม และแอนิเมชันละเอียดสูง)
const SCENE_ART = {
  intro: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="introFog" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stop-color="#F4F4F6" stop-opacity="0.22"/>
          <stop offset="60%" stop-color="#4B5563" stop-opacity="0.06"/>
          <stop offset="100%" stop-color="#0D0E12" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="skyGradIntro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#090A0D"/>
          <stop offset="100%" stop-color="#141722"/>
        </linearGradient>
      </defs>
      <rect width="360" height="110" fill="url(#skyGradIntro)" />
      <circle cx="180" cy="60" r="95" fill="url(#introFog)" class="pulse-core" />

      <!-- กลุ่มดาวและละอองแสงยามค่ำคืน -->
      <g opacity="0.55">
        <path d="M42 20 L58 14 L72 24" stroke="rgba(255,255,255,0.12)" stroke-width="0.75" stroke-dasharray="2 2"/>
        <circle cx="42" cy="20" r="1.1" fill="#FFF" class="star-blink" />
        <circle cx="58" cy="14" r="0.9" fill="#FFF" />
        <circle cx="72" cy="24" r="1.4" fill="#FFF" class="star-blink" style="animation-delay:0.5s" />
        <circle cx="118" cy="16" r="1" fill="#FFF" />
        <circle cx="242" cy="18" r="1.4" fill="#FFF" class="star-blink" style="animation-delay:1.1s" />
        <circle cx="298" cy="14" r="1" fill="#FFF" />
        <circle cx="328" cy="30" r="1.3" fill="#FFF" class="star-blink" style="animation-delay:0.3s" />
      </g>

      <!-- วงคลื่นสัญญาณชีพจรสีขาว-เทา (Pulse Wave) -->
      <g transform="translate(180, 52)">
        <circle cx="0" cy="0" r="18" stroke="#F4F4F6" stroke-width="1" opacity="0.3" />
        <circle cx="0" cy="0" r="32" stroke="#F4F4F6" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.4" class="spin-slow" />
        <circle cx="0" cy="0" r="46" stroke="#F4F4F6" stroke-width="1.5" opacity="0.45" class="wave-ripple" />
        <circle cx="0" cy="0" r="60" stroke="#F4F4F6" stroke-dasharray="2 6" stroke-width="1" opacity="0.25" class="spin-slow" style="animation-direction:reverse" />
        <circle cx="0" cy="0" r="74" stroke="#F4F4F6" stroke-width="1" opacity="0.18" class="wave-ripple" style="animation-delay:1.1s" />
      </g>

      <!-- เลเยอร์เมืองฉากหลัง (Background Skyline - เพิ่มความลึก) -->
      <g fill="#11131B" stroke="#1F2433" stroke-width="0.8">
        <rect x="26" y="66" width="18" height="28" />
        <rect x="64" y="58" width="22" height="36" />
        <rect x="116" y="52" width="24" height="42" />
        <rect x="220" y="50" width="26" height="44" />
        <rect x="272" y="60" width="20" height="34" />
        <rect x="314" y="64" width="22" height="30" />
      </g>

      <!-- เลเยอร์เมืองฉากหน้า (Foreground Skyline - สไตล์ Paper Cutout) -->
      <g fill="#181B26" stroke="#32384D" stroke-width="1.1">
        <rect x="10" y="76" width="22" height="18" rx="1" />
        <rect x="36" y="62" width="24" height="32" rx="1" />
        <!-- หน้าต่างตึกที่เริ่มกะพริบรับสัญญาณ -->
        <rect x="42" y="68" width="3" height="3" fill="#D1D5DB" stroke="none" class="star-blink" />
        <rect x="50" y="68" width="3" height="3" fill="#6B7280" stroke="none" />
        <rect x="42" y="76" width="3" height="3" fill="#6B7280" stroke="none" />
        <rect x="50" y="76" width="3" height="3" fill="#D1D5DB" stroke="none" class="star-blink" style="animation-delay:0.8s" />

        <!-- หอคอยส่งสัญญาณซ้าย -->
        <path d="M74 94 L80 52 H84 L90 94 Z" />
        <line x1="82" y1="42" x2="82" y2="52" stroke="#6B7280" stroke-width="1.2" />
        <circle cx="82" cy="42" r="2" fill="#9CA3AF" stroke="none" class="star-blink" />

        <rect x="100" y="58" width="26" height="36" rx="1" />
        <line x1="106" y1="65" x2="120" y2="65" stroke="#32384D" />
        <line x1="106" y1="71" x2="120" y2="71" stroke="#32384D" />

        <rect x="132" y="70" width="18" height="24" rx="1" />
        <rect x="210" y="68" width="18" height="26" rx="1" />

        <rect x="234" y="54" width="28" height="40" rx="1" />
        <rect x="241" y="62" width="3" height="3" fill="#D1D5DB" stroke="none" class="star-blink" style="animation-delay:0.4s" />
        <rect x="251" y="70" width="3" height="3" fill="#D1D5DB" stroke="none" class="star-blink" style="animation-delay:1.2s" />

        <!-- หอคอยส่งสัญญาณขวา -->
        <path d="M274 94 L280 56 H284 L290 94 Z" />
        <line x1="282" y1="46" x2="282" y2="56" stroke="#6B7280" stroke-width="1.2" />
        <circle cx="282" cy="46" r="2" fill="#9CA3AF" stroke="none" class="star-blink" style="animation-delay:0.6s" />

        <rect x="300" y="64" width="22" height="30" rx="1" />
        <rect x="326" y="74" width="22" height="20" rx="1" />
      </g>

      <!-- เส้นพื้นจัตุรัสแบบ Perspective -->
      <line x1="0" y1="94" x2="360" y2="94" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
      <path d="M30 94 L0 110 M105 94 L85 110 M180 94 L180 110 M255 94 L275 110 M330 94 L360 110" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <!-- ดวงไฟนำทางตื่นขึ้นกลางจัตุรัส -->
      <g transform="translate(180, 84)">
        <circle cx="0" cy="0" r="13" fill="#FFF" opacity="0.22" class="wave-ripple" />
        <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#FFF" class="pulse-core" />
      </g>
    </svg>
  `,

  ch1: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />
      <!-- กริดพื้นจัตุรัสเรขาคณิต -->
      <ellipse cx="180" cy="96" rx="155" ry="13" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
      <ellipse cx="180" cy="96" rx="95" ry="8" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
      <ellipse cx="180" cy="96" rx="40" ry="4" stroke="rgba(255,255,255,0.2)" stroke-width="1" />

      <!-- ทางแยก 5 เส้นทางเรืองแสง + ไอคอนสัญลักษณ์ประจำสาขา -->
      <g stroke-linecap="round" stroke-linejoin="round">
        <!-- 1. DGA (ชมพู - หยดสีและประกายศิลป์) -->
        <path d="M180 96 C135 96, 85 82, 34 42" stroke="#FF2A6D" stroke-width="4" opacity="0.25" />
        <path d="M180 96 C135 96, 85 82, 34 42" stroke="#FF2A6D" stroke-width="3" class="path-flow" />
        <path d="M34 42 L25 43 M34 42 L36 51" stroke="#FF2A6D" stroke-width="2.2" />
        <g class="float-y">
          <circle cx="24" cy="24" r="6" fill="#FF2A6D" />
          <circle cx="16" cy="30" r="2.8" fill="#FF759F" />
          <circle cx="32" cy="18" r="2" fill="#FF2A6D" />
        </g>

        <!-- 2. DGD (เหลือง - ข้าวหลามตัดกริด) -->
        <path d="M180 96 C155 96, 122 72, 92 36" stroke="#FFB800" stroke-width="4" opacity="0.25" />
        <path d="M180 96 C155 96, 122 72, 92 36" stroke="#FFB800" stroke-width="3" class="path-flow" style="animation-delay:0.2s" />
        <path d="M92 36 L84 38 M92 36 L94 44" stroke="#FFB800" stroke-width="2.2" />
        <g class="float-y" style="animation-delay:0.3s">
          <rect x="81" y="13" width="11" height="11" rx="1.5" transform="rotate(45 86.5 18.5)" fill="#FFB800" />
          <line x1="81" y1="18.5" x2="92" y2="18.5" stroke="#0D0E12" stroke-width="1" />
          <line x1="86.5" y1="13" x2="86.5" y2="24" stroke="#0D0E12" stroke-width="1" />
        </g>

        <!-- 3. IGD (เขียวมินต์ - แฉกดาว & พิกเซล) -->
        <path d="M180 96 V28" stroke="#00F0B5" stroke-width="4.5" opacity="0.25" />
        <path d="M180 96 V28" stroke="#00F0B5" stroke-width="3.5" class="path-flow" style="animation-delay:0.4s" />
        <path d="M180 28 L174 35 M180 28 L186 35" stroke="#00F0B5" stroke-width="2.2" />
        <g class="float-y" style="animation-delay:0.6s">
          <polygon points="180,7 183,13 190,14 185,19 186,26 180,22 174,26 175,19 170,14 177,13" fill="#00F0B5" />
          <rect x="166" y="8" width="3" height="3" fill="#00F0B5" />
          <rect x="191" y="10" width="3" height="3" fill="#00F0B5" />
        </g>

        <!-- 4. AFX (น้ำเงิน - เปลวไฟพลังงาน) -->
        <path d="M180 96 C205 96, 238 72, 268 36" stroke="#4D61FC" stroke-width="4" opacity="0.25" />
        <path d="M180 96 C205 96, 238 72, 268 36" stroke="#4D61FC" stroke-width="3" class="path-flow" style="animation-delay:0.6s" />
        <path d="M268 36 L276 38 M268 36 L266 44" stroke="#4D61FC" stroke-width="2.2" />
        <g class="float-y" style="animation-delay:0.8s">
          <path d="M274 10 C268 18, 269 24, 274 27 C279 24, 280 18, 274 10 Z" fill="#4D61FC" />
          <path d="M274 15 C271 19, 272 23, 274 25 C276 23, 277 19, 274 15 Z" fill="#93C5FD" />
        </g>

        <!-- 5. DEN (ม่วง - พระอาทิตย์กระจายคลื่นเสียง) -->
        <path d="M180 96 C225 96, 275 82, 326 42" stroke="#A855F7" stroke-width="4" opacity="0.25" />
        <path d="M180 96 C225 96, 275 82, 326 42" stroke="#A855F7" stroke-width="3" class="path-flow" style="animation-delay:0.8s" />
        <path d="M326 42 L335 43 M326 42 L324 51" stroke="#A855F7" stroke-width="2.2" />
        <g class="float-y" style="animation-delay:1s">
          <circle cx="334" cy="24" r="5.5" fill="#A855F7" />
          <path d="M342 19 Q346 24 342 29" stroke="#D8B4FE" stroke-width="1.5" class="sound-wave" />
          <path d="M345 16 Q350 24 345 32" stroke="#A855F7" stroke-width="1.2" class="sound-wave" style="animation-delay:0.3s" />
        </g>
      </g>

      <!-- ดวงไฟนำทางตรงจุดเริ่มต้นทางแยก -->
      <g transform="translate(180, 94)">
        <circle cx="0" cy="0" r="15" fill="#FFF" opacity="0.25" class="wave-ripple" />
        <polygon points="0,-9 2.5,-2.5 9,0 2.5,2.5 0,9 -2.5,2.5 -9,0 -2.5,-2.5" fill="#FFF" class="pulse-core" />
      </g>
    </svg>
  `,

  ch2: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />

      <!-- เงาตึกฝั่งตรงข้ามในหมอกสีเทา -->
      <g fill="#12141D" opacity="0.8">
        <rect x="18" y="34" width="22" height="40" />
        <rect x="46" y="24" width="28" height="50" />
        <rect x="286" y="28" width="26" height="46" />
        <rect x="318" y="38" width="24" height="36" />
      </g>

      <!-- แม่น้ำและแสงสะท้อนคลื่นรบกวน -->
      <path d="M0 88 Q90 81 180 88 T360 88 V110 H0 Z" fill="#111521" />
      <ellipse cx="180" cy="96" rx="45" ry="5" fill="#00F0B5" opacity="0.12" class="pulse-core" />
      <path d="M30 96 Q85 92 140 96" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" class="river-drift" />
      <path d="M210 100 Q265 96 320 100" stroke="rgba(0,240,181,0.22)" stroke-width="1.5" class="river-drift" style="animation-delay:1s" />

      <!-- โครงสร้างสะพานฝั่งซ้าย -->
      <g stroke="#374151" fill="#181B26">
        <path d="M0 74 H134 L124 50 H0 Z" stroke-width="1.5" />
        <polyline points="6,74 26,50 46,74 66,50 86,74 106,50 124,74" fill="none" stroke-width="1.3" />
        <!-- รอยแตกหักปลายสะพาน -->
        <polyline points="134,74 129,67 135,61 128,55 124,50" fill="none" stroke="#6B7280" stroke-width="1.5" />
        <rect x="110" y="74" width="15" height="24" />
        <!-- เสาไฟริมสะพานซ้าย -->
        <line x1="118" y1="50" x2="118" y2="34" stroke="#6B7280" stroke-width="1.5" />
        <circle cx="118" cy="32" r="3" fill="#FFB800" class="glitch-flicker" />
      </g>

      <!-- โครงสร้างสะพานฝั่งขวา -->
      <g stroke="#374151" fill="#181B26">
        <path d="M360 74 H226 L236 50 H360 Z" stroke-width="1.5" />
        <polyline points="354,74 334,50 314,74 294,50 274,74 254,50 236,74" fill="none" stroke-width="1.3" />
        <!-- รอยแตกหักปลายสะพาน -->
        <polyline points="226,74 231,67 225,61 232,55 236,50" fill="none" stroke="#6B7280" stroke-width="1.5" />
        <rect x="235" y="74" width="15" height="24" />
        <!-- เสาไฟริมสะพานขวา -->
        <line x1="242" y1="50" x2="242" y2="34" stroke="#6B7280" stroke-width="1.5" />
        <circle cx="242" cy="32" r="3" fill="#FF2A6D" class="glitch-flicker" style="animation-delay:0.4s" />
      </g>

      <!-- คลื่นสัญญาณรบกวน (Glitch Wave) เชื่อมรอยขาดของสะพาน -->
      <g filter="drop-shadow(0 0 6px #00F0B5)">
        <path d="M132 66 Q148 50 164 66 T196 66 T228 66" stroke="#00F0B5" stroke-width="3" stroke-linecap="round" class="glitch-wave" />
        <path d="M134 60 Q152 75 170 60 T206 60 T226 60" stroke="#4D61FC" stroke-width="1.8" stroke-dasharray="4 3" class="glitch-wave" style="animation-delay:0.3s" />
        <!-- พิกเซลแตกกระจายรอบรอยขาด -->
        <rect x="144" y="44" width="4.5" height="4.5" fill="#00F0B5" class="float-y" />
        <rect x="177" y="40" width="5" height="5" fill="#00F0B5" class="glitch-flicker" />
        <rect x="206" y="46" width="4.5" height="4.5" fill="#00F0B5" class="float-y" style="animation-delay:0.5s" />
        <rect x="158" y="77" width="7" height="2.5" fill="#00F0B5" opacity="0.85" />
        <rect x="194" y="75" width="6" height="2.5" fill="#4D61FC" opacity="0.85" />
      </g>
    </svg>
  `,

  ch3: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="radarSweep" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#00F0B5" stop-opacity="0"/>
          <stop offset="100%" stop-color="#00F0B5" stop-opacity="0.45"/>
        </linearGradient>
      </defs>
      <rect width="360" height="110" fill="#0D0E12" />

      <!-- กรอบหน้าจอเรดาร์ HUD -->
      <g stroke="rgba(255,255,255,0.08)" stroke-width="1">
        <rect x="14" y="12" width="332" height="86" rx="10" />
        <!-- มุมเล็งเป้าหมาย (Crosshair Corners) -->
        <path d="M22 26 V18 H30 M330 18 H338 V26 M22 84 V92 H30 M330 92 H338 V84" stroke="#00F0B5" stroke-width="1.5" opacity="0.6" />
        <line x1="180" y1="12" x2="180" y2="98" stroke-dasharray="2 4" />
        <line x1="14" y1="55" x2="346" y2="55" stroke-dasharray="2 4" />
      </g>

      <!-- แถบคลื่นเสียง Equalizer ซ้าย-ขวา -->
      <g opacity="0.7">
        <rect x="32" y="48" width="3.5" height="14" rx="1.5" fill="#FF2A6D" class="eq-bar" style="animation-delay:0.1s" />
        <rect x="40" y="38" width="3.5" height="34" rx="1.5" fill="#FFB800" class="eq-bar" style="animation-delay:0.3s" />
        <rect x="48" y="42" width="3.5" height="26" rx="1.5" fill="#00F0B5" class="eq-bar" style="animation-delay:0.5s" />
        <rect x="56" y="46" width="3.5" height="18" rx="1.5" fill="#4D61FC" class="eq-bar" style="animation-delay:0.2s" />

        <rect x="300" y="46" width="3.5" height="18" rx="1.5" fill="#4D61FC" class="eq-bar" style="animation-delay:0.4s" />
        <rect x="308" y="40" width="3.5" height="30" rx="1.5" fill="#00F0B5" class="eq-bar" style="animation-delay:0.1s" />
        <rect x="316" y="36" width="3.5" height="38" rx="1.5" fill="#A855F7" class="eq-bar" style="animation-delay:0.6s" />
        <rect x="324" y="46" width="3.5" height="18" rx="1.5" fill="#FF2A6D" class="eq-bar" style="animation-delay:0.2s" />
      </g>

      <!-- วงแหวนเรดาร์สแกนคลื่นความถี่ -->
      <g transform="translate(180, 55)">
        <circle cx="0" cy="0" r="14" stroke="rgba(0, 240, 181, 0.35)" stroke-width="1.2" />
        <circle cx="0" cy="0" r="28" stroke="#00F0B5" stroke-width="1.2" stroke-dasharray="3 4" opacity="0.5" class="spin-slow" />
        <circle cx="0" cy="0" r="42" stroke="#00F0B5" stroke-width="1.5" opacity="0.65" />
        <circle cx="0" cy="0" r="54" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" stroke-dasharray="2 6" />

        <!-- ลำแสงเรดาร์หมุนสแกน -->
        <g class="spin-radar">
          <path d="M0 0 L42 0 A42 42 0 0 0 28 -31 Z" fill="url(#radarSweep)" />
          <line x1="0" y1="0" x2="42" y2="0" stroke="#00F0B5" stroke-width="2" />
        </g>

        <!-- จุดสัญญาณ 5 ย่านบนจอเรดาร์ + วงแหวนล็อกเป้าหมาย -->
        <g>
          <circle cx="-26" cy="-16" r="4" fill="#FF2A6D" class="pulse-core" />
          <circle cx="-26" cy="-16" r="7.5" stroke="#FF2A6D" stroke-width="1" opacity="0.6" class="wave-ripple" />
        </g>
        <circle cx="-18" cy="24" r="3.5" fill="#FFB800" class="pulse-core" style="animation-delay:0.4s" />
        <g>
          <circle cx="24" cy="-20" r="4.5" fill="#00F0B5" class="pulse-core" style="animation-delay:0.8s" />
          <circle cx="24" cy="-20" r="8" stroke="#00F0B5" stroke-width="1" opacity="0.7" class="wave-ripple" style="animation-delay:0.8s" />
        </g>
        <circle cx="28" cy="18" r="3.5" fill="#4D61FC" class="pulse-core" style="animation-delay:1.2s" />
        <circle cx="0" cy="-34" r="3.5" fill="#A855F7" class="pulse-core" style="animation-delay:1.5s" />

        <circle cx="0" cy="0" r="3.5" fill="#FFF" />
      </g>
    </svg>
  `,

  gate: `
    <svg class="scene-banner" viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="110" fill="#0D0E12" />
      <line x1="0" y1="96" x2="360" y2="96" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />

      <!-- เสาหินโมโนลิธขนาดยักษ์และลวดลายอักขระเรืองแสง -->
      <g>
        <path d="M118 96 L126 14 H234 L242 96 Z" fill="#181B26" stroke="#374151" stroke-width="2" />
        <path d="M138 96 L142 28 H218 L222 96 Z" fill="#0F111A" stroke="#2D3142" stroke-width="1.5" />
        <!-- ลายสลักอักขระข้างเสาซ้าย-ขวา -->
        <path d="M130 32 H135 V48 H130 M130 60 V76" stroke="#FF2A6D" stroke-width="1.4" opacity="0.6" class="star-blink" />
        <path d="M230 32 H225 V48 H230 M230 60 V76" stroke="#A855F7" stroke-width="1.4" opacity="0.6" class="star-blink" style="animation-delay:0.7s" />
      </g>

      <!-- เส้นพลังงาน 5 สีไหลจากพื้นพุ่งขึ้นสู่แกนกลาง -->
      <g filter="drop-shadow(0 0 5px rgba(0, 240, 181, 0.65))">
        <path d="M40 96 H152 L164 32" stroke="#FF2A6D" stroke-width="2.5" class="gate-stream" style="--stream-delay:0s" />
        <path d="M85 96 H165 L172 32" stroke="#FFB800" stroke-width="2.5" class="gate-stream" style="--stream-delay:0.2s" />
        <path d="M180 96 V28" stroke="#00F0B5" stroke-width="3" class="gate-stream" style="--stream-delay:0.4s" />
        <path d="M275 96 H195 L188 32" stroke="#4D61FC" stroke-width="2.5" class="gate-stream" style="--stream-delay:0.6s" />
        <path d="M320 96 H208 L196 32" stroke="#A855F7" stroke-width="2.5" class="gate-stream" style="--stream-delay:0.8s" />
      </g>

      <!-- วงแหวนกลไกปลดล็อกด้านบนประตู -->
      <g transform="translate(180, 23)">
        <circle cx="0" cy="0" r="16" fill="#0D0E12" stroke="#4B5563" stroke-width="1.5" />
        <circle cx="0" cy="0" r="12" stroke="#00F0B5" stroke-width="1.6" stroke-dasharray="5 3" class="spin-slow" />
        <circle cx="0" cy="0" r="8" stroke="#FFB800" stroke-width="1.3" stroke-dasharray="3 3" class="spin-slow" style="animation-direction:reverse" />
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

      <!-- ลานน้ำพุกลางเมืองและสายน้ำพุเรืองแสง -->
      <g transform="translate(180, 86)" stroke="#374151" fill="#161821">
        <path d="M-52 10 L-46 2 H46 L52 10 Z" stroke-width="1.5" />
        <path d="M-32 2 L-26 -6 H26 L32 2 Z" stroke-width="1.5" />
        <rect x="-4" y="-16" width="8" height="10" />
        <!-- สายน้ำพุโค้ง -->
        <path d="M-2 -16 Q-20 -30 -36 -4" fill="none" stroke="#60A5FA" stroke-width="1.4" stroke-dasharray="3 3" class="fountain-arc" />
        <path d="M2 -16 Q20 -30 36 -4" fill="none" stroke="#60A5FA" stroke-width="1.4" stroke-dasharray="3 3" class="fountain-arc" />
      </g>

      <!-- วงโคจรและเส้นใยแสงเชื่อมโยงลูกแก้ว 5 สี -->
      <g transform="translate(180, 45)">
        <ellipse cx="0" cy="6" rx="100" ry="27" stroke="url(#orbitGrad)" stroke-width="2" stroke-dasharray="6 6" opacity="0.75" class="spin-slow" />

        <!-- เส้นแสงเชื่อมโยงระหว่างเพื่อนร่วมทางทั้ง 5 สาย -->
        <polygon points="-80,0 -35,24 35,24 80,0 0,-19" stroke="rgba(255,255,255,0.28)" stroke-width="1.2" fill="rgba(255,255,255,0.03)" />
        <line x1="-80" y1="0" x2="35" y2="24" stroke="rgba(255, 42, 109, 0.25)" stroke-width="1" />
        <line x1="80" y1="0" x2="-35" y2="24" stroke="rgba(77, 97, 252, 0.25)" stroke-width="1" />

        <!-- ลูกแก้วพลังงาน 5 สีลอยกระเพื่อม -->
        <g class="float-y" style="animation-delay:0s">
          <circle cx="-80" cy="0" r="8.5" fill="#FF2A6D" />
          <circle cx="-80" cy="0" r="3" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:0.3s">
          <circle cx="-35" cy="24" r="8.5" fill="#FFB800" />
          <circle cx="-35" cy="24" r="3" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:0.6s">
          <circle cx="35" cy="24" r="9" fill="#00F0B5" />
          <circle cx="35" cy="24" r="3.5" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:0.9s">
          <circle cx="80" cy="0" r="8.5" fill="#4D61FC" />
          <circle cx="80" cy="0" r="3" fill="#FFF" />
        </g>
        <g class="float-y" style="animation-delay:1.2s">
          <circle cx="0" cy="-19" r="8.5" fill="#A855F7" />
          <circle cx="0" cy="-19" r="3" fill="#FFF" />
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
      <g opacity="0.85">
        <rect x="20" y="62" width="4" height="28" rx="2" fill="#FF2A6D" class="eq-bar" style="animation-delay:0.1s" />
        <rect x="28" y="52" width="4" height="38" rx="2" fill="#FFB800" class="eq-bar" style="animation-delay:0.3s" />
        <rect x="36" y="58" width="4" height="32" rx="2" fill="#00F0B5" class="eq-bar" style="animation-delay:0.5s" />
        <rect x="44" y="66" width="4" height="24" rx="2" fill="#4D61FC" class="eq-bar" style="animation-delay:0.2s" />

        <rect x="312" y="66" width="4" height="24" rx="2" fill="#00F0B5" class="eq-bar" style="animation-delay:0.4s" />
        <rect x="320" y="54" width="4" height="36" rx="2" fill="#4D61FC" class="eq-bar" style="animation-delay:0.2s" />
        <rect x="328" y="50" width="4" height="40" rx="2" fill="#A855F7" class="eq-bar" style="animation-delay:0.6s" />
        <rect x="336" y="62" width="4" height="28" rx="2" fill="#FF2A6D" class="eq-bar" style="animation-delay:0.1s" />
      </g>

      <!-- เวทีใหญ่และหอกระจายคลื่นเสียงใจกลางเมือง -->
      <g>
        <path d="M110 96 C110 70, 250 70, 250 96 Z" fill="#181B26" stroke="#A855F7" stroke-width="1.6" />
        <path d="M138 96 C138 78, 222 78, 222 96 Z" fill="#0D0E12" />
        <!-- เสาส่งสัญญาณกลางเวที -->
        <path d="M173 75 L177 35 H183 L187 75 Z" fill="#252A3A" stroke="#4D61FC" stroke-width="1.3" />
        <line x1="180" y1="13" x2="180" y2="35" stroke="#FFF" stroke-width="2" />
        <circle cx="180" cy="13" r="4.5" fill="#FFB800" class="pulse-core" />
        <!-- คลื่นเสียงแผ่ออกรอบยอดเสา -->
        <path d="M170 21 Q165 13 170 5 M190 21 Q195 13 190 5" stroke="#00F0B5" stroke-width="1.6" stroke-linecap="round" class="sound-wave" />
        <path d="M163 25 Q155 13 163 1 M197 25 Q205 13 197 1" stroke="#FF2A6D" stroke-width="1.6" stroke-linecap="round" class="sound-wave" style="animation-delay:0.4s" />
      </g>

      <!-- พลุประกายสีสัน (Confetti Sparks) ลอยขึ้นฟ้า -->
      <circle cx="68" cy="34" r="2.8" fill="#FFB800" class="confetti-rise" />
      <circle cx="132" cy="26" r="2.8" fill="#FF2A6D" class="confetti-rise" style="animation-delay:0.5s" />
      <circle cx="228" cy="28" r="2.8" fill="#00F0B5" class="confetti-rise" style="animation-delay:0.9s" />
      <circle cx="292" cy="32" r="2.8" fill="#4D61FC" class="confetti-rise" style="animation-delay:1.3s" />

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