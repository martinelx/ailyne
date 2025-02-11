import './Card.css'

export function Card(props){
    return(
        <div className={props.class}>
            <img src={props.src} alt="" />
            <h1>{props.title}</h1>
        </div>
    )
}