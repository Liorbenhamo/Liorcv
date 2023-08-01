import "./styles/siteimgs.css"
 
interface javasiteProps {
    img1: string;
    img2: string;
    img3:string
    img4:string
  }

function Siteimgs(props: javasiteProps) {
  return (
    <div className="fourcardimg">
        <div className="imgflex">
        <img className="imgfour" src={props.img1} alt="siteimg" />
        <img className="imgfour" src={props.img2} alt="siteimg" />
        <img className="imgfour" src={props.img3} alt="siteimg" />
        <img className="imgfour"  src={props.img4} alt="siteimg" />
        </div>
    </div>
  )
}

export default Siteimgs