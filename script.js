const AbrirModal = document.querySelector("#abrir1");

const CerrarModal = document.querySelector("#cerrar1");

const AbrirModal2 = document.querySelector("#abrir2");

const CerrarModal2 = document.querySelector("#cerrar2");

const modal = document.querySelector("#modal");

const modal2 = document.querySelector("#modal2");

AbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
CerrarModal.addEventListener("click",()=>{
    modal.close();
})


AbrirModal2.addEventListener("click",()=>{
    modal2.showModal();
})
CerrarModal2.addEventListener("click",()=>{
    modal2.close();
})

const enviar = document.getElementById("enviar")
enviar.addEventListener("click",()=>{
    alert("Gracias por el mensaje",)
})