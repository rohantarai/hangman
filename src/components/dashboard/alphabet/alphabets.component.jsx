import { Button } from 'primereact/button';

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
const vowels = ['A', 'E', 'I', 'O', 'U'];

export default function AlphabetsComponent(props) {

  const handleClick = (event) => {
    props.setDisableWord(true);
    props.setClickedAlphabet(prevState => [...prevState, event.target.innerText]);

    if(!props.word.includes(event.target.innerText)) {
      props.setChances(prevState => prevState - 1);
    }
  };

  const handleAlphabetDisable = (alphabet) => {
    return props.clickedAlphabet.includes(alphabet) || props.word === '' || (props.word.includes(alphabet) && vowels.includes(alphabet)) || props.chances === 0 || props.isGameComplete;
  }
  
  return (
    <>
      <div className="flex-1 mt-5 justify-content-center">
        {
          // eslint-disable-next-line react/no-array-index-key
          alphabets.map((alphabet, index) => (<Button key={index} label={alphabet} className="m-1 p-button-rounded" onClick={handleClick} disabled={handleAlphabetDisable(alphabet)} />))
        }
      </div>
    </>
  );
}
