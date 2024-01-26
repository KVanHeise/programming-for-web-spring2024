// create an array with favorite games as objects inside of the array.
// title, type, genre, numberOfPlayers, rating, shortDescription

const myFavoriteGames = [
    {
        title: "Dead by Daylight",
        developer: "Behavior Interactive Inc.",
        genre: "horror game",
        numberOfPlayers: "1 to 5",
        synopsis: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
    },
    {
        title: "Graveyard Keeper",
        developer: "Lazy Bear Games",
        genre: "horror / fantasy game",
        numberOfPlayers: "1",
        synopsis: "Build and manage a medieval graveyard while facing ethical dilemmas and making questionable decisions. Welcome to Graveyard Keeper, the most inaccurate medieval cemetery sim of the year.",
    },
    {
        title: "Baldur's Gate 3",
        developer: "Larian Studios",
        genre: "fantasy role playing game",
        numberOfPlayers: "1 to 4",
        synopsis: "Baldurs Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
    },
    {
        title: "Stardew Valley",
        developer: "ConcernedApe",
        genre: "fantasy role playing game / farming simulation",
        numberOfPlayers: "1 to 4",
        synopsis: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    },
]

console.log(myFavoriteGames)

const response = window.prompt("I have four games in my collection. Pick a number between 1 and 4, and I will tell you some information about that game.", "enter a number");

if(response === myFavoriteGames[response -1]); {
alert("You selected: " + myFavoriteGames[response -1].title + " which is a " + myFavoriteGames[response -1].genre + " developed by " + myFavoriteGames[response -1].developer + ". " + myFavoriteGames[response -1].synopsis)}

if(response === myFavoriteGames[response -2]); {
alert("You selected: " + myFavoriteGames[response -2].title + " which is a " + myFavoriteGames[response -2].genre + " developed by " + myFavoriteGames[response -2].developer + ". " + myFavoriteGames[response -2].synopsis)}

if(response === myFavoriteGames[response -3]); {
    alert("You selected: " + myFavoriteGames[response -3].title + " which is a " + myFavoriteGames[response -3].genre + " developed by " + myFavoriteGames[response -3].developer + ". " + myFavoriteGames[response -3].synopsis)}

if(response === myFavoriteGames[response -4]); {
alert("You selected: " + myFavoriteGames[response -4].title + " which is a " + myFavoriteGames[response -4].genre + " developed by " + myFavoriteGames[response -4].developer + ". " + myFavoriteGames[response -4].synopsis)}