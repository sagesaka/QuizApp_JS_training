const question = [
  [
    "山形県の県庁所在地はどこ?",
    "1 天童市",
    "2 仙台市",
    "3 山形市",
    "3"
  ],
  [
    "山形県のお米といえば?",
    "1 ひとめぼれ",
    "2 はえぬき",
    "3 こしひかり",
    "2"
  ],
  [
    "山形県の果物といえば?",
    "1 さくらんぼ",
    "2 りんご",
    "3 みかん",
    "1"
  ]
];

const quiz = document.getElementById('question')
const ans1 = document.getElementById('ans1')
const ans2 = document.getElementById('ans2')
const ans3 = document.getElementById('ans3')

let correct = 0;
let quizCount = 0;

function quizSet() {
  quiz.textContent = question[quizCount][0];
  ans1.textContent = question[quizCount][1];
  ans2.textContent = question[quizCount][2];
  ans3.textContent = question[quizCount][3];
  /* quiz=HTMLのquestion, question配列のn番目に置き換える */
}

quizSet();

function answerPush(ans) {
  if (ans == question[quizCount][4]) {
    alert("正解!!");
    correct++;
  } else {
    alert("おととい来やがれバカヤロー!!");
  }
  quizCount++;
  if (quizCount == question.length) {
    quiz.textContent = `正解数は${correct}でした!`;
    ans1.textContent = "";
    ans2.textContent = "";
    ans3.textContent = "";
  } else {
    quizSet();
  }
}

function pageLoad() {
  window.location.reload();
}