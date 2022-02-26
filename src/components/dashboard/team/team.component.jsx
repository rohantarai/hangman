import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

export default function TeamComponent(props) {

  const [playerName, setPlayerName] = useState('');

  const handleOnKeyPress = (event) => {
    if (event.code === 'Enter' && event.target.value !== '') {
      props.setPlayerNames(prevState => [...prevState, event.target.value.toUpperCase()]);
      setPlayerName('');
    }
  };

  return (
    <>
      <span className="p-float-label">
        <InputText placeholder='Enter Player Name' value={playerName} onKeyPress={handleOnKeyPress} onChange={e => setPlayerName(e.target.value)} />
      </span>
    </>
  );
}
