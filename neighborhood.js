const randomResBtn = document.querySelector('button')

const randomRestaurant = () => {
    const restaurants = ['Chick-fil-A', 'Outback Steakhouse', 'Corelife Eatery', 'Cafe Rio', "Applebee's"]
    const random = Math.floor(Math.random() * restaurants.length);
    document.querySelector('#random').classList.add('random')
    document.querySelector('#random').textContent = restaurants[random]
}

randomResBtn.addEventListener('click', randomRestaurant)