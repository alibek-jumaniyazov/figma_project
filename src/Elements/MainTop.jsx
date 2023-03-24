import main_bg from '../images/Hero area Image.png'


export default function MainTop() {
    return(
        <div className="mainTop">
            <div className="mainTop-info">
                <h1>Make a Creative solutions for your Creative ideas.</h1>
                <p>We are here to give you effective ideas. We help the brands to become what they want. </p>
                <a className="btn">Get Started</a>
            </div>
            <div className="mainTop-img">
                <img src={main_bg} alt="" />
            </div>
        </div>
    )
}