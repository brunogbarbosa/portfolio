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
const section = document.querySelector('.conteudo-projetos');
const headerh1 = document.querySelector('.header-project');
const containers = document.querySelectorAll('.container-project');
const titlescontainer = document.querySelectorAll('.title-container')
const projects = document.querySelector('.projetos');
const stripe_color = document.querySelector('.header-principal');
const ltgt_color = document.querySelector('.h1-header-principal');
const line_seven = document.querySelector('.line-seven');
const barra_h1 = document.querySelector('.barrah1');
botao.onclick = function() {
    this.classList.toggle('active');
    modal.classList.toggle('active');
    body.classList.toggle('active');
    elemento.classList.toggle('active');
    icons.classList.toggle('active');
    baixarbotao.classList.toggle('active');
    section.classList.toggle('active');
    headerh1.classList.toggle('active');
    containers.forEach(container => {
        container.classList.toggle('active');
    });
    titlescontainer.forEach(titlesproject => {
        titlesproject.classList.toggle('active')
    });
    projects.classList.toggle('active');
    stripe_color.classList.toggle('active');
    ltgt_color.classList.toggle('active');
    barra_h1.classList.toggle('active')
}

