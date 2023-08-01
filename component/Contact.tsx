import "./styles/doublecard.css"

interface ContactProps {
    header: string;
    phonenum: string;
    email:string
    address:string
  }

function Contact(props: ContactProps) {
  return (
    <div className="Doublecardlior">
        <div className="padding">
        <h1 className="colorheader">{props.header}</h1>
        <p className="Doublecardpar">phone number: {props.phonenum}</p>
        <p className="Doublecardpar">email: {props.email}</p>
        <p className="Doublecardpar">address: {props.address}</p>
        </div>
    </div>
  )
}

export default Contact