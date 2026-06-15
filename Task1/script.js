const btn = document.querySelector("button");
const bulb = document.querySelector(".bulb");

//  let flag = true;
// btn.addEventListener("click",function(){
//  if(flag){
//     bulb.style.backgroundColor="yellow"
//     btn.textContent="Off";
//     flag=false;
//  }else{
//     bulb.style.backgroundColor="transparent";
//     btn.textContent="On";
//     flag = true;
//  }

//  }
// )

btn.addEventListener("click",function(){
   if( bulb.classList.toggle("lightUp")){
    btn.textContent="Off";
   }else{
    btn.textContent="On";
   }
})