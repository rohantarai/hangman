import TeamComponent from '../team.component';
import { useState } from 'react';
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default function TeamBComponent() {
  const [playerNames, setPlayerNames] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [score, setScore] = useState(0);

  return (
    <>
      <h2>Team</h2>
      <Inplace className="text-xl" closable>
        <InplaceDisplay>
          {teamName || 'Click to Edit Team Name'}
        </InplaceDisplay>
        <InplaceContent>
          <InputText className="w-5" value={teamName} onChange={(e) => setTeamName(e.target.value)} autoFocus />
        </InplaceContent>
      </Inplace>
      {/* team B score board */}
      <div className="m-5 w-12rem inline-block">
        <div className="p-inputgroup">
          <Button icon="pi pi-minus" className="p-button-primary" onClick={() => setScore(prevState => prevState - 1)} />
          <InputText placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />
          <Button icon="pi pi-plus" className="p-button-primary" onClick={() => setScore(prevState => prevState + 1)} />
        </div>
      </div>
      <TeamComponent setPlayerNames={setPlayerNames} />
      <div className="p-3 text-center">
        {
          playerNames.map((name) => (
            <div className="mb-2" key={name}>
              <Chip label={name} removable />
            </div>
          ))
        }
      </div>
    </>
  );
}
