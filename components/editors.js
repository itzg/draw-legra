import React, {useState} from 'react';

export const NumberEditor = ({label, max, value, onChange}) => {
  return (
      <span>
        {label} <input type='number' min={0} max={max} value={value} onChange={event => onChange(Number(event.target.value))}/>
      </span>
  )
};

export const ColorEditor = ({value, onChange}) => {
  return (
      <span>
        Color <input value={value} onChange={event => onChange(event.target.value)}/>
      </span>
  )
};

export const LineEditor = ({maxX, maxY, onAdd}) => {

  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const defaultColor = 'blue';
  const [color, setColor] = useState(defaultColor);

  function add() {
    onAdd(x1, y1, x2, y2, color);
    setX1(0);
    setY1(0);
    setX2(0);
    setY2(0);
    setColor(defaultColor);
  }

  return (
      <div>
        <NumberEditor label='x1' max={maxX} value={x1} onChange={setX1}/>
        <NumberEditor label='y1' max={maxY} value={y1} onChange={setY1}/>
        <NumberEditor label='x2' max={maxX} value={x2} onChange={setX2}/>
        <NumberEditor label='y2' max={maxY} value={y2} onChange={setY2}/>
        <ColorEditor value={color} onChange={setColor}/>
        <button onClick={add}>Add Line</button>

        <style jsx>{`
          button {
          margin-left: 5px;
          }
        `}
        </style>
      </div>
  )
};