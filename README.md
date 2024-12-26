# Simon Game

This project is a React implementation of the classic Simon game. The game involves a sequence of colors that the player must repeat in the correct order. The sequence gets longer with each round, and the game continues until the player makes a mistake.

## Features

- Interactive game that flashes colors and plays sounds
- Tracks the player's score
- Allows the player to start a new game

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   https://github.com/Mohamed-faaris/simon-game-react.git
   cd simon-game
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

## Usage

To play the game, open your browser and navigate to the development server (usually `http://localhost:3000`).

- Click the "Play" button to start the game.
- Watch the sequence of colors that flashes on the screen.
- Repeat the sequence by clicking the colored buttons.
- The game will continue to add new colors to the sequence each round.
- If you make a mistake, the game will reset, and you can start over.

## Code Overview

The main game logic is implemented in the `SimonGame` component. Here is a brief overview of its key parts:

- **State and Refs:**
    - `colors`: Stores the sequence of colors.
    - `round`: Tracks the current round.
    - `score`: Tracks the player's score.
    - `style`: Manages the CSS styles for the color buttons.

- **Functions:**
    - `random(max)`: Generates a random number between 0 and `max`.
    - `flashOnColor(colorIndex)`: Flashes the specified color and plays the corresponding sound.
    - `flashOffColor()`: Resets the color styles.
    - `addColor()`: Adds a new random color to the sequence.
    - `playSequence(currentIndex)`: Plays the current sequence of colors.
    - `resetGame()`: Resets the game state and starts a new game.
    - `check(i)`: Checks if the player's input matches the current sequence.

## Scripts

The following scripts are available in the `package.json` file:

- `dev`: Starts the development server using Vite.
- `build`: Builds the project for production using Vite.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Previews the production build using Vite.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgments

- This project was bootstrapped with [Vite](https://vitejs.dev/).
- Sounds and game logic are inspired by the classic Simon game.

```

Feel free to customize this README to better fit your project's specifics and any additional information you want to provide.