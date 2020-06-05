const p = document.getElementById('question');

const questions = [
  "JavaScript",
  "split",
  "console.log",
  "document.getElementById"
];
//配列questionsからランダムに取り出す
const mathNum =  Math.floor(Math.random() * questions.length);
const question = questions[mathNum];

//一文字ずつspnaタグをつけて格納
let questionText = [] ;
questionText = [...question].map( (text) =>{
  const spanElement = document.createElement('span');
  spanElement.textContent = text ;
  p.appendChild(spanElement);
  //insertAdjacentElement('afterbegin',spanElement);だと
  //HTMLに挿入される時鏡文字で挿入された。
  //配列の中身は逆にならなかった
  return spanElement;
} );

//押されたキーと問題テキストが一致した時
document.addEventListener('keydown',keyDown => {
  if(event.key === questionText[0].textContent){
    console.log("true");
    questionText[0].className = "changeColor";
    questionText.shift();
  }
});
