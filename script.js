const riddles = [
  // 关卡1
  { level: 1, text: "左边是太阳，右边是月亮，合在一起是什么字？", answer: "明" },
  { level: 1, text: "上面是草，下面是化，合在一起是什么字？", answer: "花" },
  { level: 1, text: "一张口，一阵风，是什么字？", answer: "吹" },
  { level: 1, text: "一个人歪头，是什么字？", answer: "入" },
  { level: 1, text: "十个口，是什么字？", answer: "古" },
  { level: 1, text: "古时候的月亮，是什么字？", answer: "胡" },
  { level: 1, text: "三人日，是什么字？", answer: "春" },
  { level: 1, text: "两点和反文旁，是什么字？", answer: "冬" },
  // 关卡2
  { level: 2, text: "两把叉子少眼睛，是什么字？", answer: "双" },
  { level: 2, text: "心旁有个青，是什么字？", answer: "情" },
  { level: 2, text: "青绿色的日头，是什么字？", answer: "晴" },
  { level: 2, text: "水边有个青，是什么字？", answer: "清" },
  { level: 2, text: "加上三滴水变成清，是什么字？", answer: "青" },
  { level: 2, text: "田里长出了小草，是什么字？", answer: "苗" },
  { level: 2, text: "婴儿第一声哭，是什么字？", answer: "生" },
  { level: 2, text: "房屋底下有孩子，是什么字？", answer: "字" },
  // 关卡3
  { level: 3, text: "工人染丝线，是什么字？", answer: "红" },
  { level: 3, text: "云朵在用力，是什么字？", answer: "动" },
  { level: 3, text: "比千多，是什么字？", answer: "万" },
  { level: 3, text: "有的反义词，是什么字？", answer: "无" },
  { level: 3, text: "太阳和月亮在一起，是什么字？", answer: "明" },
  { level: 3, text: "一个人站在门里，是什么字？", answer: "闪" },
  { level: 3, text: "插上翅膀，是什么字？", answer: "飞" },
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
