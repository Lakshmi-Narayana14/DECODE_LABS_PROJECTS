// Greeting
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){
    greeting.innerHTML = "🌞 Good Morning!";
}
else if(hour < 18){
    greeting.innerHTML = "☀️ Good Afternoon!";
}
else{
    greeting.innerHTML = "🌙 Good Evening!";
}

// Live Date & Time
const dateTime = document.getElementById("datetime");

function updateTime(){

    const now = new Date();

    dateTime.innerHTML = now.toLocaleString();

}

setInterval(updateTime,1000);

updateTime();

// Toast Notification
const toast = document.getElementById("toast");

function showToast(text){

    toast.innerHTML = text;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}

// Random Messages
const messages=[

"🚀 Keep Learning, Keep Building!",

"💻 Practice Makes Perfect!",

"🌟 Believe in Yourself!",

"🎯 Success Starts with Consistency!",

"🔥 Never Stop Coding!"

];

document.getElementById("changeBtn").addEventListener("click",()=>{

    const random=Math.floor(Math.random()*messages.length);

    document.getElementById("message").innerHTML=messages[random];

    showToast("Message Updated ✅");

});

// Dark Mode
const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="<i class='fa-solid fa-sun'></i> Light Mode";

        showToast("Dark Mode Enabled 🌙");

    }

    else{

        themeBtn.innerHTML="<i class='fa-solid fa-moon'></i> Dark Mode";

        showToast("Light Mode Enabled ☀️");

    }

});

// Counter
let count=0;

const countValue=document.getElementById("count");

function updateCounter(){

    countValue.innerHTML=count;

    countValue.style.transform="scale(1.2)";

    setTimeout(()=>{

        countValue.style.transform="scale(1)";

    },200);

}

document.getElementById("increaseBtn").addEventListener("click",()=>{

    count++;

    updateCounter();

});
document.getElementById("decreaseBtn").addEventListener("click",()=>{

    if(count > 0){

        count--;

        updateCounter();

    }

});

document.getElementById("resetBtn").addEventListener("click",()=>{

    count=0;

    updateCounter();

});

// Like Counter
let likes=0;

const likeText=document.getElementById("likes");

document.getElementById("likeBtn").addEventListener("click",()=>{

    likes++;

    likeText.innerHTML=likes+" ❤️";

    showToast("Thanks for your Like ❤️");

});

// Show / Hide
const info=document.getElementById("info");

document.getElementById("showBtn").addEventListener("click",()=>{

    info.classList.toggle("hide");

});