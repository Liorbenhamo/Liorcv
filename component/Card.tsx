import "./styles/card.css"
interface CardProps {
    header: string;
    imgurl: string;
    link:string
  }

function Card(props: CardProps) {
    
  return (
   <div className="card">
    <a target="_blank" href={props.link} >
    <h1 className="colorheadercard">{props.header}</h1>
    <img className="cyberproimg" src={props.imgurl} alt={props.header} />
    </a>
   </div>
  )
}

export default Card