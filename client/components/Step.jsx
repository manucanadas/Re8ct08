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

  const kick = () =>  {
   play({ id: 'kick' })
  } 
  const hihat = () =>  {
   play({ id: 'hihat' })
  } 
  const snare = () =>  {
   play({ id: 'snare' })
  } 
  const cowbell = () =>  {
   play({ id: 'cowbell' })
  } 


  
  return <Step play={play} kick ={kick} snare ={snare} hihat ={hihat} cowbell={cowbell}/>
}

class Step extends React.Component{

  state = {
    kick: 9999999999,
    hihat: 9999999999,
    snare: 9999999999
  }

  componentWillUnmount(){
    console.log("bye")
    this.stop()
  }
  
  stepper = () => {
    console.log("stopper")
    console.log(this.state)
    this.kickPlay = setInterval(this.props.kick, this.state.kick)
    this.snarePlay = setInterval(this.props.snare, this.state.hihat)
    this.hihatPlay = setInterval(this.props.hihat, this.state.snare)
    // this.cowbell = setInterval(this.props.cowbell, this.state.cow)
  }
  
  stop = () => {
    clearInterval(this.kickPlay)
    clearInterval(this.hihatPlay)
    clearInterval(this.snarePlay)
    clearInterval(this.cowbell)
  }


  handleChange = (event) =>{
    console.log(this.state)
    console.log("Yay!! I Made it")
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({[event.target.name]: parseInt(event.target.value)})
  }










  render(){
    return(
      <>
      <button onClick = {() => this.stepper()}> Play</button>
      <button onClick = {() => this.stop()}> Stop</button>

      <label>kick</label>

      <select name="kick" onChange={this.handleChange}>
        <option value="999999999999999999999">0</option>
        <option value="2000">1</option>
        <option value="1000">2</option>
        <option defaultValue value="500">4</option>
        <option value="250">8</option>
        <option value="125">16</option>
      </select>

      <label>hihat</label>

      <select name="hihat" onChange={this.handleChange}>
      <option value="999999999999999999999">0</option>
      <option value="2000">1</option>
        <option value="1000">2</option>
        <option defaultValue value="500">4</option>
        <option value="250">8</option>
        <option value="125">16</option>
      </select>

      <label>snare</label>

      <select name="snare" onChange={this.handleChange}>
        <option value="999999999999999999999">0</option>
        <option value="2000">1</option>
        <option value="1000">2</option>
        <option defaultValue value="500">4</option>
        <option value="250">8</option>
        <option value="125">16</option>
      </select>
      </>
    )
  }
}



export default Sound

{/* 
      <label>cowbell</label>

      <select name="cowbell" onChange={this.handleChange}> 
        <option value="999999999999999999999">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option default value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select> */}