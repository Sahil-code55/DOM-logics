const inp1 = document.querySelector("#naam");
const inp2 = document.querySelector("#email");
const inp3 = document.querySelector("#url");
const cardParent= document.querySelector(".user");
const form = document.querySelector("form")
const deleteBtn = document.querySelector(".deleteBtn")


form.addEventListener("submit",function(e){
    e.preventDefault();
let name = inp1.value;
let email = inp2.value;
let imageUrl = inp3.value;
if(name.trim() ==="" && email.trim()===""&& imageUrl.trim() === ""){
    alert("Fill your information first");
return;
}
cardParent.innerHTML += `
<div class="user_card">
<div class="deleteBtn"><h3>x</h3></div>
<div class="user_img">
<img src="${imageUrl}" alt="no image">

</div>
<div class="user_info">
<h3 class="user_name"> Name : ${name} </h3>
<p class="user_email">Email : ${email} </p>
</div>
</div>`
form.reset();
})

cardParent.addEventListener("click",function(elem){

if(elem.target.textContent === "x"){
    elem.target.closest(".user_card").remove();
}

})