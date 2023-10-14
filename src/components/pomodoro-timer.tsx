import React from 'react';
import { useInterval } from '../hooks/use-interval';
// import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './botton';
import { Timer } from './timer';

interface Props {
  PomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.PomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Pause" onClick={() => console.log('2')}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
      </div>
      <div className="details">
        <p>Testando: Lorem ipsum dolor, sit amet consectetur.</p>
        <p>Testando: Lorem ipsum dolor, sit amet consectetur.</p>
        <p>Testando: Lorem ipsum dolor, sit amet consectetur.</p>
      </div>
    </div>
  );
}
