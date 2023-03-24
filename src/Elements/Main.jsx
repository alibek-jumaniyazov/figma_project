import { useState } from "react"
import icon1 from "../images/icon.svg"
import icon2 from "../images/icon (1).svg"
import icon3 from "../images/background.svg"
import icon4 from "../images/background (1).svg"
import Card from "../Companents/Card"
import areImg from "../images/Image.png"
import mainImg from "../images/Background (3).png"
import playIcon from "../images/Play.png"

import iconn1 from "../images/icon (3).svg"
import iconn2 from "../images/icon (2).svg"
import iconn3 from "../images/icon (4).svg"
import iconn4 from "../images/icon (5).svg"
import iconn5 from "../images/icon (6).svg"
import iconn6 from "../images/icon (7).svg"
import style from "../images/Style.svg"
import Box from "../Companents/Box"



import logo1 from "../images/Logo (1).png"
import mainBg from "../images/Background (4).png"
import user from "../images/Image (1).png"





export default function Main() {

    const [elem, setElem] = useState([
        {
            img: icon1,
            name: "Web Design",
            text: "Powerful creations for the practice safe design.",
        },
        {
            img: icon2,
            name: "Identity & Branding",
            text: "Powerful creations for the practice safe design.",
        },
        {
            img: icon3,
            name: "Print and Packaging",
            text: "Powerful creations for the practice safe design.",
        },
        {
            img: icon4,
            name: "Content Writing",
            text: "Powerful creations for the practice safe design.",
        },
    ])


    const [box, setBox] = useState([
        {
            img: iconn1,
            name: "Sleek and smooth animation",
            text: "Powerful creations for the practice safe design creations for the prac.",
            img2:style
        },
        {
            img: iconn2,
            name: "Crafted with detail",
            text: "Powerful creations for the practice safe design creations for the prac.",
            img2:style
        },
        {
            img: iconn3,
            name: "Save your time",
            text: "Powerful creations for the practice safe design creations for the prac.",
            img2:style
        },
        {
            img: iconn4,
            name: "Responsive on any device",
            text: "Powerful creations for the practice safe design creations for the prac.",
            img2:style
        },
        {
            img: iconn5,
            name: "Easy to customize",
            text: "Powerful creations for the practice safe design creations for the prac.",
            img2:style
        },
        {
            img: iconn6,
            name: "Quickly effective support",
            text: "Powerful creations for the practice safe design creations for the prac.",
            img2:style
        },
      
    ])

    return (
        <div className="Main">
            <div className="mainTopp">
                <h1 className="mainTitle">We provide great services</h1>
                <p className="titleTexts"> We help people to think independent. Be the boss of your brand and be the storyteller. An appropriate approach.</p>
            </div>
            <div className="boxes">
                {
                    elem.map((item) => (
                        <Card item={item} />
                    ))
                }
            </div>
            <div className="mainAre">
                <div className="areInfo">
                    <h1>Johnatan Doe </h1>
                    <span>Marketing Specialist______</span>
                    <p>To make your web design company famous in the little
                        we are here to provide you as many as catchy and useful
                        web design company will surely help your company.
                    </p>
                    <a className="areBtn">Learn More</a>
                </div>
                <div className="areImg">
                    <img src={areImg} alt="" />
                </div>
            </div>
            <div className="mainImgg">
                <h1>Watch how we work</h1>
                <p>Capture more customers with a great brand recall. Whether you need a tising or as a tagline for your business, our slogan generator will help you come up with us.</p>
                <img src={playIcon} alt="" />
            </div>
            <div className="boxesTow">
                <div className="boxTow-info">
                    <h1>Best features in the world</h1>
                    <p>Capture more customers wd recall. Whether you need a tising or as a tagline for you. Capture more customers wd recall. Whether you need a tising or as a tagline for you.</p>
                </div>
                 <div className="cards">
                {
                    box.map((item) => (
                        <Box item={item}/>
                    ))
                }
            </div>
            </div>
           <div className="mainUserInfo">
                <img src={logo1} alt="" />
                <h1>“Always a pleasure to work with The Agency Creative. Such professional and happy people and you know you’ll receive a quick innovative and no fuss service.”</h1>
                <div className="userProfile">
                    <img src={user} alt="" className="userImg" />
                    <div className="usreInfo">

                        <p className="userName">Johnatan Doe </p>
                        <span className="userSurname">Web Designer</span>
                    </div>
                </div>
           </div>
           <div className="mainFooter">
                <h1>People have tried to predict the future since the dawn of time.</h1>
                <a className="btn-login">Get Started</a>
           </div>
        </div>
    )
}