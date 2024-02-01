// Create an array objects that represent a question and answer. The object should include a question property ("question" as the key and the actual question as the value) and an answer property ("answer" as the key with the actual answer as the value).

//A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess.

//Do not check the answer yet. Just fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. Use concatenation to string all these strings together.

const myFavoriteGames = [
    {
        title: "Dead by Daylight",
        developer: "Behavior Interactive Inc.",
        genre: "horror",
        winCon: "kill all survivors, or survive the trial."
    },
    {
        title: "Graveyard Keeper",
        developer: "Lazy Bear Games",
        genre: "horror / fantasy",
        winCon: "return home"
    },
    {
        title: "Baldur's Gate 3",
        developer: "Larian Studios",
        genre: "fantasy",
        winCon: "defeat the final boss of Act 3"
    },
]

console.log(myFavoriteGames)

const randomDeckIndex = Math.floor(Math.random() * myFavoriteGames.length);
console.log(myFavoriteGames[randomDeckIndex].title);

const response = window.prompt("which developer made this game: " + myFavoriteGames[randomDeckIndex].title);

alert("You entered: " + response + 
"\nThe correct answer was: " + myFavoriteGames[randomDeckIndex].developer
);