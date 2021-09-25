import React , {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

const MainMenu = () => {

    const {gameState, setGameState} = useContext(QuizContext);

    return (
        <div className="Menu">
            <h4>Enter Your Name</h4>
            <input type="text" placeholder="Ex. Ayush Kumar"  />
            <button onClick={()=>{setGameState("quiz")}} >Start Quiz</button>
        </div>
    )
}

export default MainMenu
