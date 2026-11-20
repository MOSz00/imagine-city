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
      <h2>${step.title}</h2>
      <p class="story-text">${step.text}</p>
      <button class="primary-btn" id="continueBtn">ก้าวต่อไป →</button>
    `;
    document.getElementById("continueBtn").addEventListener("click", nextStep);
  } 
  else if (step.type === "scene") {
    const shuffledOptions = shuffle(step.options);
    container.innerHTML = `
      <p class="eyebrow">SCENE ${step.id.toUpperCase()}</p>
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