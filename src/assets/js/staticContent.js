// Static content for page (App.js)

// functional component Header contains game title
export const Header = () => {
    return(
        <>
            <h1 className="header-game-title">Word Guessing Game</h1>
        </>
    )
  }

  // functional component contains game instructions to be displayed
  // would maybe be better as an info button???
  export const Instructions = () => {
    return(
        <p className="game-instructions">Select your difficulty setting and then start guessing the word (you have a limited number of tries).</p>
    )
  }