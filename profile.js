const favColorBtn = document.getElementById('color')
const favPlaceBtn = document.getElementById('place')
const favRitualBtn = document.getElementById('ritual')

const favColor = () => {
    alert('My favorite color is Red!')
}

const favePlace = () => {
    alert('My favorite place is Disneyland!')
}

const faveRitual = () => {
    alert('My favorite daily ritual is checking my goals!')
}

favColorBtn.addEventListener('click', favColor)
favPlaceBtn.addEventListener('click', favePlace)
favRitualBtn.addEventListener('click', faveRitual)