const listItems = document.querySelector('.list');

const mapImg = document.querySelector('.map__img')

const officesTitle = document.querySelector('.offices__title')
const officesDropList = document.querySelector('.offices__drop-down-list')
const list = document.querySelector('.list')
const maps = document.querySelector('.map')

function changeClassActive(event) {
    event.preventDefault()
    const listItems = document.querySelectorAll('.list__item')

    listItems.forEach((elem) => {
        elem.classList.remove('active');

    })
    if (event.target.classList.contains('list__item')) event.target.classList.add('active')
}

function changeImage(event) {
    if (event.target.classList.contains('list__item')) {
        const dataRegion = event.target.dataset.region
        console.log(dataRegion)
        mapImg.src = require(`../assets/img/offices/${dataRegion}.jpg`)
    }
}

function toggle(e) {
    officesTitle.classList.toggle('open')
    officesDropList.classList.toggle('toggleDropDown')
    list.classList.toggle('opacityList')
    maps.classList.toggle('opacityMap')
}

listItems.addEventListener('click', changeImage)
listItems.addEventListener('click', changeClassActive)
officesTitle.addEventListener('click', toggle)

