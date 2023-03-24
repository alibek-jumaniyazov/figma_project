export default function Box({item}) {
    return(
        <div className="Box">
            <img src={item.img} alt="" />
            <h1>{item.name} </h1>
            <p>{item.text} </p>
            <img src={item.img2} alt="" />
        </div>
    )
} 