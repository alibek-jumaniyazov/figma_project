import { useState } from "react"
import PremumCard from "../Companents/PremumCard"

import icon1 from "../images/Group.png"
import icon2 from "../images/Group (1).png"
import icon3 from "../images/Vector.svg"
import icon4 from "../images/Icon01.png"
export default function Footer() {

    const [premum, setElePremum] = useState([
        {
            name: "Freelancer",
            price: 19,
        },
        {
            name: "Corporate",
            price: 24,
        },
        {
            name: "Agency",
            price: 25,
        },
        {
            name: "Enterprise",
            price: 15,
        },

    ])
    return(
        <div className="Footer">
            <div className="sytePremums">
                {
                    premum.map((item)=> (
                        <PremumCard item={item}/>
                    ))
                }
            </div>
            <hr className="hr" />
            <div className="footerWebs">
                <ul className="websList">
                    <li className="ListsItem">Home</li>
                    <li className="ListsItem">Privacy</li>
                    <li className="ListsItem">Terms & Conditions</li>
                    <li className="ListsItem">About us</li>
                    <li className="ListsItem">Contact us</li>
                </ul>

                <ul className="websList">
                    <li className="IconsItem"><img src={icon1} alt="" /></li>
                    <li className="IconsItem"><img src={icon2} alt="" /></li>
                    <li className="IconsItem"><img src={icon3} alt="" /></li>
                    <li className="IconsItem"><img src={icon4} alt="" /></li>
                </ul>
            </div>
            <div className="footerComplete">@ A new era 2016. Awesome wireframe  by Andrei Dorin</div>
        </div>
    )
}