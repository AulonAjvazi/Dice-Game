let randomNumber1 = Math.random() * 6 + 1
randomNumber1 = Math.floor(randomNumber1)

let image1 = document.querySelector('.img1')

let imagePath = `images/dice${randomNumber1}.png`

image1.src = imagePath


// code for the second image to generate a new number that also changes its image to the number

let randomNumber2 = Math.random() * 6 + 1
randomNumber2 = Math.floor(randomNumber2)

let image2 = document.querySelector('.img2')

let imagePath2 = `images/dice${randomNumber2}.png`

image2.src = imagePath2



// player wins

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 wins!🚩"
} else {
    document.querySelector('h1').innerHTML = "📍 Draw"
}