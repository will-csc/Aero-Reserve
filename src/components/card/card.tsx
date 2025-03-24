import "./card.css"

interface CardProps{
    price: number,
    location: string,
    image: string
}
export function Card({price, image, location} : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{location}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}