const legendChoice = document.querySelectorAll('.legend-character-list img');
const legendShow = document.querySelector('#legend-show div:first-child')
const legendShowImg = document.querySelector('#legend-show img');
const legendShowName = document.querySelector('#legend-show h1');
const legendShowText = document.querySelector('#legend-show p');
const legendShowLink = document.querySelector('#legend-show a');

// Shows which character have been selected
for (let i = 0; i < legendChoice.length; i++) {
    legendChoice[i].addEventListener('click', function() {
        // Removes the selected from all other then the clicked
        for (let selected = 0; selected < legendChoice.length; selected++) {
            if (legendChoice[selected].classList.contains('selected') && selected != i) {
                legendChoice[selected].classList.remove('selected')
            }
        }
        legendChoice[i].classList.toggle('selected')

        changeTextLegend(i)
    })
}

// Shows the character's information depending on the character selected
function changeTextLegend(num) {
    // Show character depending on selected
    if (legendChoice[num].classList.contains('selected')) {
        legendShow.classList.remove('hidden')

        legendShowImg.src = legendsData[num].img
        legendShowName.innerHTML = legendsData[num].name
        legendShowText.innerHTML = legendsData[num].text

        // Hides link then shows link of the data doesn't have WIP in it's value
        legendShowLink.innerHTML = ''
        legendShowLink.classList.add('hidden')
        if (legendsData[num].page != 'WIP') {
            legendShowLink.classList.remove('hidden')
            legendShowLink.href = legendsData[num].page
            legendShowLink.innerHTML = 'Learn More'
        }
        
    }
    // Hide everything if no characters are selected
    else {
        legendShow.classList.add('hidden')
        legendShowLink.classList.add('hidden')
        legendShowName.innerHTML = ''
        legendShowText.innerHTML = ''
        legendShowLink.innerHTML = ''
    }
}