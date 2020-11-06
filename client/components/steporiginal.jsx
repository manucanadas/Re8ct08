import React, {useEffect} from 'react'
import useSound from 'use-sound'

function Sound () {
  const soundUrl = './909-drums.mp3'
  const [play] = useSound(soundUrl, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    }
  })
  return <Step play={play} />
}

class Step extends React.Component{

  // let kickPlay = setInterval(this.kick, 2020)
  // let snarePlay = setInterval(this.snare, 1010)
  // let hihatPlay = setInterval(this.hihat, 500)


  kick = () =>  {
    this.props.play({ id: 'kick' })
  } 
  hihat = () =>  {
    this.props.play({ id: 'hihat' })
  } 
  snare = () =>  {
    this.props.play({ id: 'snare' })
  } 
  cowbell = () =>  {
    this.props.play({ id: 'cowbell' })
  } 

  playKick = () => {
    // this.kick()
    // this.snare()
  }


  stepper = () => {
    this.playKick()
    // setInterval(this.playKick, 4000)
  }

  stop = () => {
    clearInterval(kickPlay)
    clearInterval(hihatPlay)
    clearInterval(snarePlay)
   
  }

  

  
  render(){



  return(
    <>
    <button onClick = {() => this.stepper()}> Play</button>
    <button onClick = {() => this.stop()}> Stop</button>
    </>
  )
  }

}



export default Sound