
## Roulette Game API Challenge
**Task description** 

Create an application using [NestJS](https://docs.nestjs.com/) which would serve as the backend side of a simplified version of an online Roulette game.  

**Goal of the task**

An online casino game can not be written entirely on the front-end side. It needs to receive the essential game data(such as winning number in a roulette game or the dealt cards' values in a card game) from a 
secure source(API), so the player is unable to change the outcome by modifying the source code of the front-end side of the game. We usually develop the whole functional API for the games first, which allow us to test out the 
whole sequence of the game logic just by interacting with the API and then we start working on the UI part of the game, in which we make use of the data received from the API.

**Roulette game rules**
1. A standard Roulette table game which has 37 possible winning numbers: 0-36 (0 included).
2. 3 types of bets - Number bet(0-36), Odd bet(1,3,5,7...), Even bet(2,4,6,8...). We don't need other types of bets like Black bet, Red bet and Horizontal bet, to keep it simple.
3. Number bet should have 36/1 winning coefficient, Odd - 2/1, even - 2/1

[Example Roulette Game](https://evoplay.games/game/european-roulette/)


**What the Application should do**

The application should have 3 endpoints - `"create", "spin", "end"`

`create` - should receive the player's starting balance and store it in the session.

What this endpoint should do:

 1. Initialize a new game session in the session storage of the API(You can use **express-session** and **Redis** to setup the session storage for the application).
 2. Receive the player's starting balance as part of a JWT hashed token(token should be hashed by the secret that needs to be kept in the `.env` file of the application )
 3. Verify and decrypt it.
 4. Take out the balance value.
 5. Store the player's starting balance inside of the session.

`spin` - 	should receive an array of objects containing 2 properties: `betAmount` and `betType`(**number**, "**odd**", 			 "**even**"). The player can place as many bets as he wants. He can place a bet on each number and also make the Odd and Even bets.

> example
> ` { betInfo:[{betAmount:10, betType:25}, {betAmount:50, betType:0},
> {betAmount:50, betType:"even"}, {betAmount:10, betType:"odd"}] }`

What this endpoint should do:
	
 1. Check that the player's balance is enough for making every bet. If not, return an error.
 2. Generate a winning number and determine the win sum(if any).
 3.  Update the balance in the session and return this balance to the front-end alongside the information of which bets won (for example, `{betAmount:10, betType:25}` and `{betAmount:10, betType:"odd"}` could win together if the winning number is 25).
	
	
`end` - should delete the session.


 **Bonus**  
 
As a bonus functionality, You could add Request Validation using the **class-validator** library, to make sure that the incoming data is valid before it is passed to the handlers

**Necessary resources**

[NestJs Official Documentation](https://docs.nestjs.com/) 

[NestJs Tutorial](https://www.youtube.com/watch?v=2n3xS89TJMI&ab_channel=MariusEspejo)


**Instructions**

 1. Create a new Repository on your account
 2. Clone this Repository 
 3. Finish the task
 4. Set your new Repository as the origin:  `git remote set-url origin ${your repo url}`
 5. Push your local solution to your remote Repository.

 