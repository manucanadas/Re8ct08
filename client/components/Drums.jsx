import React from 'react'
import useSound from 'use-sound'

function Drum() {
    const soundUrl = './909-drums.mp3';
    
    // const Loop1 = './Loops/Loop1.mp3';const Loop2= './Loops/Loop2.mp3';const Loop3 = './Loops/Loop3.mp3';const Loop4 = './Loops/Loop4.mp3';const Loop5 = './Loops/Loop5.mp3';
    
    const Notes1 = './Notes/Bass1.mp3';
    
    // const Notes2 = './Notes/Clap1.mp3';const Notes3 = './Notes/Cymb10.mp3';const Notes4 = './Notes/Gritty1.mp3';const Notes5 = './Notes/Hat1.mp3';const Notes6 = './Notes/Hat2.mp3';const Notes7 = './Notes/Kick1.mp3';const Notes8 = './Notes/Kick2.mp3';
  
    const [play] = useSound(soundUrl, {
      sprite: {
        kick: [0, 350],
        hihat: [374, 160],
        snare: [666, 290],
        cowbell: [968, 200],
      }
    });

    const [play1] = useSound(Notes1, {
      sprite: {
        Bass1: [0, 350],
      }
    });

    return (
        <>
        <h1>Hell yeah</h1>
        <button onClick={() => play({ id: 'kick' })}>Kick</button>
        <button onClick={() => play({ id: 'hihat' })}>Hihat</button>
        <button onClick={() => play({ id: 'snare' })}>Snare</button>
        <button onClick={() => play({ id: 'cowbell' })}>Cowbell</button>    <button onClick={() => play1({ id: 'Bass1' })}>Bass1</button>
       


        </>
    )
}

export default Drum