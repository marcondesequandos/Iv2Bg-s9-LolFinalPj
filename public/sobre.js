const links = document.getElementsByClassName('mdl-navigation__link')
const totalLinks = links.length

links[i].addEventListener('click', function () {
    updateLinks()

})

function updateLinks () {
    for (let link of links)
    link.classList.remove('mdl-navigation__link')
    link.classList.add('mdl-navigation__link active')
}