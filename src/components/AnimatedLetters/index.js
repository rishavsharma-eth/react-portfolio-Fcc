import './index.scss';

// First argument = class that we want to apply to our letters
// 2nd argument = Array of the letters/characters itself.
// 3rd argument = Index will set the delay of letters in the animation
export const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return(
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span> 
                ))
            }
        </span>
    )
}