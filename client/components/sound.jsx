import React, { useCallback } from 'react'
import useSound from 'use-sound'
import Button from './Button'


const useKeyboardBindings = map => {
    React.useEffect(() => {
      const handlePress = ev => {
        const handler = map[ev.key];
  
        if (typeof handler === 'function') {
          handler();
        }
      };
  
      window.addEventListener('keydown', handlePress);
  
      return () => {
        window.removeEventListener('keydown', handlePress);
      };
    }, [map]);
  };

function Demo() {
    const soundUrl = './909-drums.mp3';
    // const Loop1 = './Loops/Loop1.mp3';
    // const Loop2= './Loops/Loop2.mp3';
    // const Loop3 = './Loops/Loop3.mp3';
    // const Loop4 = './Loops/Loop4.mp3';
    // const Loop5 = './Loops/Loop5.mp3';
    const Notes1 = './Notes/Bass1.mp3';
    const Notes2 = './Notes/Clap1.mp3';
    const Notes3 = './Notes/Cymb10.mp3';
    const Notes4 = './Notes/Gritty1.mp3';
    // const Notes5 = './Notes/Hat1.mp3';
    // const Notes6 = './Notes/Hat2.mp3';
    // const Notes7 = './Notes/Kick1.mp3';
    // const Notes8 = './Notes/Kick2.mp3';


    const [play1] = useSound(Notes1,{
      sprite:{
        Bass1: [0, 1000],
      }
    })

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




    const [play] = useSound(soundUrl, {
      sprite: {
        kick: [0, 350],
        hihat: [374, 160],
        snare: [666, 290],
        cowbell: [968, 200],
      }
    });
  
    // Custom hook that listens for 'keydown',
    // and calls the appropriate handler function.
    useKeyboardBindings({
      1: () => play({ id: 'kick' }),
      2: () => play({ id: 'hihat' }),
      3: () => play({ id: 'snare' }),
      4: () => play({ id: 'cowbell' }),
      5: () => play1({id: 'bass'}),
      6: () => play2({id: 'Clap'}),
      7: () => play3({id: 'Cymb'}),
      8: () => play4({id: 'Gritty'}),

    })
  
    return (
      <>
        <Button
          aria-label="kick"
          onMouseDown={() => play({ id: 'kick' })}
        >
          1
        </Button>
        <Button
          aria-label="hihat"
          onMouseDown={() => play({ id: 'hihat' })}
        >
          2
        </Button>
        <Button
          aria-label="snare"
          onMouseDown={() => play({ id: 'snare' })}
        >
          3
        </Button>
        <Button
          aria-label="cowbell"
          onMouseDown={() => play({ id: 'cowbell' })}
        >
          4
        </Button>
      </>
    );
  }

  export default Demo