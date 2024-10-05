import React from 'react'
import {Component} from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import  Gamer from "./context/Gameprocess"
import JoinGame from "./components/JoinGame"

import MainScreen from "./components/MainScreen"

import Game from "./components/Game"

 class App extends Component{
  state={isgamestart:false}



  changegamestate=()=>{
    this.setState(prev=>({isgamestart:!prev.isgamestart}))
  }




  render(){
    const{isgamestart}=this.state



    return (<BrowserRouter>


    <Gamer.Provider  value={{isgamestart,changegamestate:this.changegamestate}}>
      <Routes>
       
        <Route exact path="/" element={<MainScreen title='main' /> }/>
        <Route exact path="/join" element={<JoinGame title='join' /> }/>
        <Route exact path="/game" element={<Game title="game"/>}/>
    
    
    
    
      </Routes>
      
      
      </Gamer.Provider>
      
      </BrowserRouter>
      
        
      )
  }






 }
 

export default App