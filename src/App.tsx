import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      Olá Mundo
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}

export default App;
