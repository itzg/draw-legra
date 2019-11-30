import React, {useContext, useEffect, useRef, useState} from 'react';
import Legra from "legra/lib/legra.umd";

const LegraContext = React.createContext(null);

export const Line = ({x1, y1, x2, y2, options}) => {
  const legra = useContext(LegraContext);

  useEffect(() => {
    if (legra != null) {
      console.log('drawing line');
      legra.line(x1, y1, x2, y2, options);
    }
  });

  return null;
};

const LegraComponent = ({width, height, children, brickSize = 24}) => {

  const canvasRef = useRef(null);

  const [canvasCtx, setCanvasCtx] = useState(null);
  const [legraInstance, setLegra] = useState(null);

  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');
    setCanvasCtx(ctx);
    setLegra(new Legra(ctx, brickSize));
  }, [canvasRef]);

  useEffect(() => {
    if (canvasCtx != null) {
      // console.log('clearing');
      // canvasCtx.clearRect(0, 0, width * brickSize, height * brickSize);
    }
  });

  return (
      <div>
        <canvas ref={canvasRef} width={width * brickSize}
                height={height * brickSize}/>
        <LegraContext.Provider value={legraInstance}>
          {children}
        </LegraContext.Provider>

        <style jsx>{`
          canvas {
            border: thin solid black;
          }
        `}
        </style>
      </div>
  )
};

export default LegraComponent;