import React from 'react'
import useSound from 'use-sound'

function Drum() {
    const soundUrl = './909-drums.mp3';
    
    // const Loop1 = './Loops/Loop1.mp3';const Loop2= './Loops/Loop2.mp3';const Loop3 = './Loops/Loop3.mp3';const Loop4 = './Loops/Loop4.mp3';const Loop5 = './Loops/Loop5.mp3';
    
    const Notes1 = './Notes/Bass1.mp3';
    const Notes2 = './Notes/Clap1.mp3';
    const Notes3 = './Notes/Cymb10.mp3';
    const Notes4 = './Notes/Gritty1.mp3';
    
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

    const [play2] = useSound(Notes2,{
      sprite:{
        Clap1: [0, 1000],
      }
    })

    const [play3] = useSound(Notes3,{
      sprite:{
        Cymb10: [0, 5000],
      }
    })


    const [play4] = useSound(Notes4,{
      sprite:{
        Gritty1: [0, 1000],
      }
    })




    return (
        <>
        <h1>Play With Sounds!!</h1>
        <button className = 'deepStyle' onClick={() => play({ id: 'kick' })}>Kick</button>
        <button className = 'deepStyle' onClick={() => play1({ id: 'Bass1' })}>Bass</button>
        <button className = 'midStyle' onClick={() => play({ id: 'hihat' })}>Hit hat</button>
        <button className = 'midStyle' onClick={() => play2({ id: 'Clap1' })}>clap</button>
        <button className = 'sharpStyle' onClick={() => play({ id: 'snare' })}>Snare</button>
        <button className = 'sharpStyle' onClick={() => play3({ id: 'Cymb10' })}>Cymb</button>
        <button className = 'cowbellStyle' onClick={() => play({ id: 'cowbell' })}>Cowbell</button>   
        <button className = 'cowbellStyle' onClick={() => play4({ id: 'Gritty1' })}>Gritty</button>

       


        </>
    )
}

export default Drum