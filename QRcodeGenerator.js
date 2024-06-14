const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generatebtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

let preValue;

generatebtn.addEventListener("click",()=>{
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generatebtn.innerText = "Generating Qr Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generatebtn.innerText = "Generate QR Code";   
    });
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active"); 
        preValue = "";
    }
});