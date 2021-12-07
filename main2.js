let target = document.querySelector("#dynamic");
let stringArr = ["Schrödinger", "Quantum Mechanics", "Wave equation", "Quantum Nesting", "Cat"];
let selectString = stringArr[Math.floor(Math.randum() * stringArr.length)];
let selectStringArr = selectString.split("");

function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);

      #fdsc();
    }, 80);
  }
}

dynamic(selectStringArr);

function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);
