import React from 'react'
import Gamer from "../../context/Gameprocess"

const JoinGame=()=>{


    <Gamer.Consumer>

        {value=>{


        const{isgamestart,changegamestate}=value


        return(
            <div className="join-container">



                <div className="input-container">
                    <label className="text-red">Enter Name</label>
                    <input type="text" className="inputer"/>

                    <button className="primary-button">Submit</button>




                </div>




            </div>





        )


        }}



    </Gamer.Consumer>
}

export default JoinGame