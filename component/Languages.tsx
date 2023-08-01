
interface LanguagescardProps {
    header: string;
    par: string;
  }

function Languages(props: LanguagescardProps) {
  return (
    <div className="card">
        <div className="padding">
        <h1 className="colorheadercard">{props.header}</h1>
        <p >{props.par}</p>
        </div>
    </div>
  )
}

export default Languages