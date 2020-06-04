const questions = [
  "JavaScript",
  "split",
  "console.log",
  "document.getElementById"
];
//配列questionsからランダムに取り出す
const mathNum =  Math.floor(Math.random() * questions.length);
const question = questions[mathNum];

//一文字ずつ格納
const questionText = [...question];

//問題を出力
const element = document.getElementById("question");
element.insertAdjacentHTML("afterbegin",question)

//押されたキーと問題テキストが一致した時
console.log(questionText);
document.addEventListener('keydown',event => {
  if(event.key === questionText[0]){
    console.log("true");
    questionText.shift();
  }
});
