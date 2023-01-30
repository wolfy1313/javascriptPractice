// Team Stats
// We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

// After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
  _players: [
    {firstName: "Jeremy",
    lastName: "Boullion",
    age: 50},
    {firstName: "Billy",
    lastName: "Clubber",
    age: 20},
    {firstName: "John",
    lastName: "Hardy",
    age: 100}
  ],
  _games: [
    {opponent: "Tigers",
    teamPoints: 10,
    opponentPoints: 20},
    {opponent: "Lions",
    teamPoints: 40,
    opponentPoints: 60},
    {opponent: "Bears",
    teamPoints: 90,
    opponentPoints: 20}
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player =  {
      firstName: newFirstName, 
      lastName: newLastName,
      age: newAge}
      this._players.push(player)
    },
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game)
  }
}

team.addPlayer("Jere", "Bolton", 30)
team.addGame("Panthers", 102, 101)
console.log(team.players, team.games)