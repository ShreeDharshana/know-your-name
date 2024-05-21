const inputEl=document.querySelector("input#userName");
const buttonEl=document.querySelector("button");
const greetingEl=document.querySelector("#greeting")
const bgChangeEl=document.querySelector("#bgChange")


buttonEl.addEventListener('click',()=>{
    showWelcomeCard()
});

//capitalizing user input
function capitalizeWords(words){
const splitting=words.split(" ")
const mapping=splitting.map((words) =>{
    return words.charAt(0).toUpperCase()+ words.slice(1)
});
return mapping.join(" ")
}

//changing bg color when clicking submit
bgChangeEl.addEventListener('click',()=>{
console.log(document.body.style.backgroundColor="pink");
})

//using classlist
buttonEl.classList.add("text-white","font-bold")


// setting timer 
setTimeout(()=>{
    buttonEl.classList.remove("text-white")
    buttonEl.classList.add("bg-red-300")
},5000)
// setInterval(()=>{

// })


document.addEventListener("DOMContentLoaded",()=>{

  //hiding the greeting message element
  greetingEl.style.display = "none";
  // greetingEl.style.visibility="hidden"

  //working with keyboard values
  document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        showWelcomeCard()
    }
    //   console.log("You have pressed Enter key");
    // } else {
    //   console.log(`You pressed key, ${event.key}`);
    // }
  });
})

function showWelcomeCard(){
    if (inputEl.value.length < 3 || inputEl.value.length > 20) {
      alert("Can't get your name‼️");
      return;
    } else {
      // alert("Hello " + capitalizeWords(inputEl.value));
      greetingEl.innerText = `😀Hello ${capitalizeWords(
        inputEl.value
      )}, Welcome back!!!`;
      greetingEl.style.display = "block";
      // greetingEl.style.visibility="visible"
    }
    console.log(inputEl.value.length);
}
