
import React, { useContext, useEffect} from 'react'
import AboutContext from '../context/about/AboutContext'
const About = () =>{
    const a = useContext(AboutContext)
    useEffect(() => {
        a.update();
    }, [])
    return(
        <div>
          <br/><br/><br/><br/>
          WELCOME!! to {a.state.name} <br/><br/>{a.state.para}
        </div>
    )
}
export default About