export default function Card({item}){
    return(
        <div className="Card">
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
            <p>{item.text}</p>
        </div>
    )
}