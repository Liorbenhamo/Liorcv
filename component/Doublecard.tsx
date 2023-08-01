import "./styles/doublecard.css"

interface DoublecardProps {
    header: string;
    par: string;
  }
  
function Doublecard(props: DoublecardProps) {
    
  return (
    <div className="Doublecardlior">
        <div className="padding">
        <h1 className="colorheader">{props.header}</h1>
        <p className="Doublecardpar">{props.par}</p>
        </div>
    </div>
  )
}

export default Doublecard