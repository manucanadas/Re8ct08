import React from 'react'
import useSound from 'use-sound'

function Drum() {
    const soundUrl = './909-drums.mp3';
  
    const [play] = useSound(soundUrl, {
      sprite: {
        kick: [0, 350],
        hihat: [374, 160],
        snare: [666, 290],
        cowbell: [968, 200],
      }
    });

    return (
        <>
        <h1>Hell yeah</h1>
        <button onClick={() => play({ id: 'kick' })}>Kick</button>
        <button onClick={() => play({ id: 'hihat' })}>Hihat</button>
        <button onClick={() => play({ id: 'snare' })}>Snare</button>
        <button onClick={() => play({ id: 'cowbell' })}>Cowbell</button>
       


        </>
    )
}

export default Drum