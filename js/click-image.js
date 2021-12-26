
/*MODAL IMAGE*/
const modalImg = document.querySelector('.js-modal-img')
const imgsSrc = document.querySelectorAll('.js-img')
const modalImgSrc = document.querySelector('.modal-img-content')
const modalImgContainer = document.querySelector('.js-img-container')

/* Function show and hide Image*/
function showImg() {
    modalImg.classList.add('open-modal-img')
    modalImgSrc.src = this.src
}

function hideImg() {
    modalImg.classList.remove('open-modal-img')
}


/*Add event for image modal*/
for(const imgSrc of imgsSrc) {
    imgSrc.addEventListener('click' , showImg)
}

modalImg.addEventListener('click' , hideImg)

modalImgContainer.addEventListener('click' , function(event) {
    event.stopPropagation()
})