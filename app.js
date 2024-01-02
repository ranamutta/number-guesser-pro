const game=document.querySelector("#game"),
guessBtn=document.querySelector("#guess-btn"),
guessInput=document.querySelector("#guess-input"),
message=document.querySelector(".message"),
minNum= document.querySelector(".min-num"),
maxNum= document.querySelector(".max-num");


let min=10,
max=20,
winningNumber=getRandeomNum(min,max),
guessesLeft=3


minNum.textContent=min
maxNum.textContent=max

guessBtn.addEventListener("click",()=>{
       let guess= parseInt(guessInput.value)

       if(guess=== winningNumber){


gameOver(true,`KAZANDIN!  Doğru tahmin: ${winningNumber}`)
       }else{

guessesLeft --


if(guessesLeft ===0){
gameOver(false, `KAYBETTİN! Doğru tahmin: ${winningNumber} `)
}else{
       guessInput.style.borderColor= "red"

       guessInput.value=""

       setMessage(`${guess} doğru değil`,`${guessesLeft} hakkınız kaldı` , "red")
}
       }
})


function gameOver(won,msg){
       let color= won ? "green" : "red"

       guessInput.disabled=true
       guessInput.borderColor=color
       setMessage(msg)
}

function setMessage(msg,color){

       message.textContent=msg;
message.style.color=color;

}


function getRandeomNum(min,max){

 let random=    Math.floor(  Math.random() * (max-min + 1) + min)

 return random
}

