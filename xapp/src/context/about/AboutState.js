import React from "react";
import {useState} from "react";
import AboutContext from "./AboutContext";
const AboutState = (props) =>{
    const s1 = {
        "name": "Best NEWS App",
        "para": "News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called -hard news, to differentiate it from soft media."
    }
    const [state, setState] = useState(s1)
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name" : "OuR NEWS APP!!!!!",
                "para"  : " Common topics for news reports include war, government, politics, education, health, the environment, economy, business, fashion, entertainment, and sport, as well as quirky or unusual events. Government proclamations, concerning royal ceremonies, laws, taxes, public health, and criminals, have been dubbed news since ancient times. Technological and social developments, often driven by government communication and espionage networks, have increased the speed with which news can spread, as well as influenced its content.Throughout history, people have transported new information through oral means. Having developed in China over centuries, newspapers became established in Europe during the early modern period. In the 20th century, radio and television became an important means of transmitting news. Whilst in the 21st, the internet has also begun to play a similar role."
            })
        }, 5000);
    }
    return (
        <AboutContext.Provider value={{state, update}}>
                {props.children}
        </AboutContext.Provider>
    )
}
export default AboutState;