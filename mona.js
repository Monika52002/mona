let cvBtn= document.getElementById("cvbtn");
let submit= document.getElementById("submit")
cvBtn.addEventListener("click",function(){
    alert("Download sucessfully")
})
submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("password");
    if(email.value="" && pass.value)
    {
        alert("Fill Details")
    }else{
        alert("successfully")
    }
})