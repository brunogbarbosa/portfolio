// MODAL

const modal = document.querySelector('.modal')
const botaoAbrirModal = document.querySelector('.icon-eng')
const botaofecharmodal = document.querySelector('.botao-fechar-modal');
const botaofecharmodall = document.querySelector('.footer-modal');


botaoAbrirModal.addEventListener('click', () => {
    modal.showModal();
})     

botaofecharmodal.addEventListener('click', () => {
    modal.close();

})

botaofecharmodall.addEventListener('click', () => {
    modal.close()
})


// DARK OR LIGHT

const botao = document.querySelector('.botao');
const body = document.body;
const elemento = document.querySelector('.txt-animado'); 
const icons = document.querySelector('.logos');
const baixarbotao = document.querySelector('.botaodownload');
botao.onclick = function() {
    this.classList.toggle('active');
    modal.classList.toggle('active');
    body.classList.toggle('active');
    elemento.classList.toggle('active');
    icons.classList.toggle('active');
    baixarbotao.classList.toggle('active');
}

