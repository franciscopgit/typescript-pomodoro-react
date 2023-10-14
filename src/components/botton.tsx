import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(porps: Props): JSX.Element {
  return (
    <button onClick={porps.onClick} className={porps.className}>
      {porps.text}
    </button>
  );
}
