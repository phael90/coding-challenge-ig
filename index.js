// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
 const playersData = (players) => {
    players.forEach( (player, index) => {
       console.log(`PLAYER ${index + 1}`);
       console.log(`NAME: ${player.name}`);
       console.log(`LASTNAME: ${player.lastname}`);
       console.log(`POSITION: ${player.position}`);
   }); 
};
playersData(data.getPlayers());

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
const playersNamesLengthDescendingOrder = (players) => {
    players.sort((a, b) => {
        return b.name.length - a.name.length;
    });
    return players.map( player => {
         console.log(player.name);
    });
};
playersNamesLengthDescendingOrder(data.getPlayers());

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals 
 * Output example -> Goals per match: 2.19
 */

// Your code
const getAverageGoalScore = (players) => {
    let scoringChancePercentage;
    const goalsArray = players.map( player => {
        if(typeof(player.scoringChance) !== 'number') {
            player.scoringChance = parseInt(player.scoringChance);
        };
        // ScoringChance of type other than 'number' will pollute the calculation
        if(player.scoringChance === NaN) {
            player.scoringChance = 0;
        }
        return player.scoringChance
    });
    scoringChancePercentage = goalsArray.reduce((a, b) => a + b) / goalsArray.length;
    console.log(scoringChancePercentage);
    return scoringChancePercentage;
};
getAverageGoalScore(data.getPlayers());

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code



/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
