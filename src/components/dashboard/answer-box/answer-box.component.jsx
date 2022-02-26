import { useEffect, useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import AlphabetsComponent from "../alphabet/alphabets.component";
import "./answer-box.stylesheet.css";

const vowels = ['A', 'E', 'I', 'O', 'U'];

export default function AnswerBoxComponent() {

  const [word, setWord] = useState('');
  const [clickedAlphabet, setClickedAlphabet] = useState([]);
  const [chances, setChances] = useState();
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [disableWord, setDisableWord] = useState(false);
  const toastRef = useRef(null);

  useEffect(() => {
    // setting the game completion
    // if 'clickedAlphabet' array includes all the non-vowel alphabets from the 'word' then game completes
    if (word !== '' && word.split(' ').join('').split('').filter(w => !['A', 'E', 'I', 'O', 'U'].includes(w)).every(w => clickedAlphabet.includes(w)) || chances === 0) {
      setIsGameComplete(true);
    } else {
      setIsGameComplete(false);
    }

    // lose game toast
    if (chances === 0) {
      toastRef.current.show({ severity: 'error', summary: 'You Lost the Game' });
    }

    // win game toast
    if (word !== '') {
      const nonVowelsFromWord = word.split(' ').join('').split('').filter(nv => !['A', 'E', 'I', 'O', 'U'].includes(nv));
      if(nonVowelsFromWord.length > 0){
        const nonVowelsArrayLength = nonVowelsFromWord.length;
        const clickedAlphabetArrayLength = nonVowelsFromWord.filter(nvfw => clickedAlphabet.includes(nvfw)).length;

        if (nonVowelsArrayLength === clickedAlphabetArrayLength) {
          toastRef.current.show({ severity: 'success', summary: 'You Won the Game' });
        }
      }
    }

  }, [clickedAlphabet, word, chances]);

  useEffect(() => {
    if (word !== '') {
      // setting number of chances
      if(word.split(' ').join('').split('').filter(w => !['A', 'E', 'I', 'O', 'U'].includes(w)).length > 0) {
        setChances(word.split(' ').join('').split('').filter(w => !['A', 'E', 'I', 'O', 'U'].includes(w)).length);
      }
    } else {
      handleReset();
    }
  }, [word]);

  const handleReset = () => {
    setWord('');
    setClickedAlphabet([]);
    setChances();
    setIsGameComplete(false);
    setDisableWord(false);
  };

  return (
    <>
      <Toast ref={toastRef} position="bottom-right" />
      <div className="flex mt-6 justify-content-center">
        <Password placeholder="Enter a word" value={word} onChange={(e) => setWord(e.target.value.toUpperCase())} feedback={false} toggleMask disabled={disableWord} />
      </div>
      <div className="flex mt-6 justify-content-center" style={{ height: '2rem' }}>
        {
          // eslint-disable-next-line react/no-array-index-key
          word.split('').map((alphabet, index) => (<div key={index} className={`answer-box m-1 ${alphabet === ' ' ? '' : 'border-bottom'}`}>{clickedAlphabet.includes(alphabet) || vowels.some(vowel => alphabet === vowel) ? alphabet : ''}</div>))
        }
      </div>
      <p>Chances Left: {chances}</p>
      <AlphabetsComponent isGameComplete={isGameComplete} word={word} chances={chances} setChances={setChances} clickedAlphabet={clickedAlphabet} setClickedAlphabet={setClickedAlphabet} setDisableWord={setDisableWord} />
      {/* reset button */}
      <Button label="Reset" className={`m-1 p-button-sm p-button-outlined p-button-rounded ${isGameComplete ? 'show-reset-button' : 'hide-reset-button'}`} onClick={handleReset} />
    </>
  );
}
