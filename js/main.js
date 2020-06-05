const p = document.getElementById('question');

const questions = [
  "JavaScript",
  "split",
  "console.log",
  "document.getElementById",
  "shift",
  "insertAdjacentElement",
  "class",
  "length"
];

//questionのindex分乱数を格納
const numQ = [];
const numQrnd = [];
for(let i = 0 ; i < questions.length ; i ++){
  numQ.push(i);
}
const createNumRndUnique = () =>{
  for(let i = numQ.length ; i > 0 ; i --){
    const rnd = Math.floor(Math.random() * Math.floor(numQ.length));
    const removed  = numQ.splice(rnd,1);
    numQrnd.push(removed[0]);
  }
};
createNumRndUnique();

//配列questionsからランダムに取り出す

//一文字ずつspnaタグをつけて格納
let questionText = [] ;
const createText = () => {
  p.textContent = '';
  const question = questions[numQrnd[0]];
  numQrnd.shift();
  questionText = [...question].map( (text) =>{
    const spanElement = document.createElement('span');
    spanElement.textContent = text ;
    p.appendChild(spanElement);
    //insertAdjacentElement('afterbegin',spanElement);だと
    //HTMLに挿入される時鏡文字で挿入された。
    //配列の中身は逆にならなかった
    return spanElement;
  } );
}
createText();

//押されたキーと問題テキストが一致した時
document.addEventListener('keydown',keyDown => {
  if(event.key === questionText[0].textContent){
    console.log("true");
    questionText[0].className = "changeColor";
    questionText.shift();

    if(questionText.length === 0) createText();
  }
});
