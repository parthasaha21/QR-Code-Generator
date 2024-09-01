
let orBox = document.querySelector(".or-box");
let qrImg = document.querySelector("#qrId");
let btn = document.querySelector(".qr-btn");
let input = document.querySelector(".input-fild");

function qrGenerator() {
    if(input.value.length > 0){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    orBox.classList.add("newClass");}
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000)
    }
}
btn.addEventListener("click",()=>{
    qrGenerator()

})
// async function QrGenerator(url){
//    let responce = await url
// }

