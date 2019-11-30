import React, {useState} from 'react'
import Head from 'next/head'
import Legra, {Line} from "../components/legra";
import {LineEditor} from "../components/editors";

const Home = () => {

  const width = 24; // blocks
  const height = 16; // blocks

  const [parts, setParts] = useState([
  ]);

  function addLine(x1,y1,x2,y2,color) {
    setParts([
        ...parts,
        <Line x1={x1} y1={y1} x2={x2} y2={y2} options={{color:color}}/>
    ])
  }

  return (
      <div>
        <Head>
          <title>Drawing with legra</title>
        </Head>

        <Legra width={width} height={height}>
          { parts }
        </Legra>

        <LineEditor maxX={width-1} maxY={height-1} onAdd={addLine}/>

      </div>
  );
};

export default Home
