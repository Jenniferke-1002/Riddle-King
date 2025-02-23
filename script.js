const riddles = [
  // 关卡1
  { level: 1, text: "左边是太阳，右边是月亮，合在一起是什么字？", answer: "明" },
  { level: 1, text: "上面是草，下面是化，合在一起是什么字？", answer: "花" },
  { level: 1, text: "一张口，吹出一阵风，是什么字？", answer: "吹" },
  { level: 1, text: "一个人走进门，是什么字？", answer: "入" },
  { level: 1, text: "十个口，是什么字？", answer: "古" },
  { level: 1, text: "月亮旁边有个瓜，是什么字？", answer: "胡" },
  { level: 1, text: "三个太阳在一起，是什么字？", answer: "春" },
  { level: 1, text: "两点加一个冰，是什么字？", answer: "冬" },
  // 关卡2
  { level: 2, text: "两个月亮在一起，是什么字？", answer: "双" },
  { level: 2, text: "心里有个青，是什么字？", answer: "情" },
  { level: 2, text: "太阳出来了，天晴了，是什么字？", answer: "晴" },
  { level: 2, text: "水边有个青，是什么字？", answer: "清" },
  { level: 2, text: "草字头，下面一个青，是什么字？", answer: "青" },
  { level: 2, text: "田里长出了小苗，是什么字？", answer: "苗" },
  { level: 2, text: "一个小孩子出生了，是什么字？", answer: "生" },
  { level: 2, text: "一个孩子在学习写字，是什么字？", answer: "字" },
  // 关卡3
  { level: 3, text: "丝线染成了红色，是什么字？", answer: "红" },
  { level: 3, text: "云朵在动，是什么字？", answer: "动" },
  { level: 3, text: "草地上有一万朵花，是什么字？", answer: "万" },
  { level: 3, text: "天上一片云也没有，是什么字？", answer: "无" },
  { level: 3, text: "太阳和月亮在一起，是什么字？", answer: "明" },
  { level: 3, text: "一个人站在门里，是什么字？", answer: "闪" },
  { level: 3, text: "一只手拿着一朵花，是什么字？", answer: "扶" },
  { level: 3, text: "左边绿，右边红，两边相遇起凉风，是什么字？", answer: "秋" },
];

let currentLevel = 1;
let currentRiddleIndex = 0;
let badgesEarned = 0;

function startGame() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  loadRiddle();
}

function loadRiddle() {
  const riddle = riddles.find(r => r.level === currentLevel && !r.solved);
  if (riddle) {
    document.getElementById("riddle-text").innerText = riddle.text;
  } else {
    nextLevel();
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.trim();
  const riddle = riddles.find(r => r.level === currentLevel && !r.solved);
  if (riddle && userAnswer === riddle.answer) {
    document.getElementById("result-message").innerText = "恭喜你，答对了！";
    riddle.solved = true;
    currentRiddleIndex++;
    if (currentRiddleIndex === 8) {
      badgesEarned++;
      showBadge();
      if (badgesEarned === 3) {
        showFinalReward();
      } else {
        nextLevel();
      }
    }
  } else {
    document.getElementById("result-message").innerText = "再想想哦！";
  }
  document.getElementById("answer-input").value = "";
  loadRiddle();
}

function showBadge() {
  const badgeContainer = document.getElementById("badge-container");
  const badge = document.createElement("span");
  badge.classList.add("badge");
  badge.innerText = "字谜能手";
  badgeContainer.appendChild(badge);
  document.getElementById("badges").classList.remove("hidden");
}

function nextLevel() {
  currentLevel++;
  currentRiddleIndex = 0;
  document.getElementById("level-title").innerText = `关卡 ${currentLevel}`;
}

function showFinalReward() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("badges").classList.add("hidden");
  document.getElementById("final-reward").classList.remove("hidden");
}
