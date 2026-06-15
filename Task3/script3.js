const inp1 = document.querySelector("#naam");
const inp2 = document.querySelector("#email");
const inp3 = document.querySelector("#url");
const btn= document.querySelector("button");
const cardParent= document.querySelector(".user");


btn.addEventListener("submit",function(e){
    e.preventDefault();

})

cardParent.innerHTML += `<div class="user_card">
        <div class="user_img">
            <img src="${inp3.value}" alt="no image">

        </div>
        <div class="user_info">
            <h3 class="user_name"> ${inp1.value} </h3>
            <p class="user_email">${inp2.value} </p>
        </div>
    </div>`
