const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
    'Krokodyl nie potrafi wystawić języka',
    'Każdy człowiek spedził około pół godziny jako pojedzyncza komórka',
    'Dżwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze',
    'Leniwce potrzebują dówch tygodni na strawienie jedzenia',
    'Goryle spą nawet czternaście godzin dziennie',
    'Język kamelona jest dwukrotnie dluższy od jego ciała',
    'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek',
    'Żeby wejść na Wieże Eiffla trzeba pokonać aż 1710 stopni',
]


const day = new Date()
currentDay.textContent = day.toLocaleString("pl", { weekday: "long"});

const showRandomFact = () => {
    const number = Math.floor(Math.random() * facts.length)
    console.log(number)

    funFact.textContent = facts[number]
}



showRandomFact()