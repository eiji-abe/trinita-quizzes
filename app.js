const quiz = [
  {
    question:'大分トリニータのゴールキーパーといえば？',
    answers: [
      '金崎夢生',
      '森重真人',
      '西川周作',
      'エジミウソン'
    ],
    correct: '西川周作'
  },
  {
    question:'大分トリニータのディフェンダーといえば？',
    answers: [
      '高橋大輔',
      '鈴木慎吾',
      '小林亮',
      '森重真人'
    ],
    correct: '森重真人'
  },
  {
    question:'大分トリニータのフォワードといえば？',
    answers: [
      '清武弘嗣',
      '深谷友基',
      '藤田義明',
      'ウェズレイ'
    ],
    correct: 'ウェズレイ'
  },
  {
    question:'大分トリニータの右サイドハーフといえば？？',
    answers: [
      '鈴木慎吾',
      '金崎夢生',
      '家長義昭',
      'ホベルト'
    ],
    correct: '金崎夢生'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLen = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLen){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(e.target.textContent === quiz[quizIndex].correct){
    window.alert('正解！！');
    score++;
  } else {
    window.alert('不正解');
  }

quizIndex++;

if(quizIndex < quizLength){
setupQuiz();
} else {
  window.alert('終了！あなたの正解数は' + score + '/'+ quizLength + 'です！');
}

}

let handleIndex = 0;
while(handleIndex < buttonLen){
  $button[handleIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
handleIndex++;
}