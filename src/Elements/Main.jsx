import { useState } from "react"
import icon1 from "../images/icon.svg" 
import icon2 from "../images/icon (1).svg" 
import icon3 from "../images/background.svg" 
import icon4 from "../images/background (1).svg" 

export default function Main() {

    const [elem , setElem] = useState([
        {
            img:icon1,
            name:"Web Design",
            text:"Powerful creations for the practice safe design.",
        },
        {
            img:icon2,
            name:"Web Design",
            text:"Powerful creations for the practice safe design.",
        },
        {
            img:icon3,
            name:"Web Design",
            text:"Powerful creations for the practice safe design.",
        },
        {
            img:icon4,
            name:"Web Design",
            text:"Powerful creations for the practice safe design.",
        },
    ])

    return (
        <div className="Main">
            <div className="mainTopp">
                <h1 className="mainTitle">We provide great services</h1>
                <p className="titleTexts"> We help people to think independent. Be the boss of your brand and be the storyteller. An appropriate approach.</p>
            </div>
            <div className="boxes">
                
            </div>
        </div>
    )
}