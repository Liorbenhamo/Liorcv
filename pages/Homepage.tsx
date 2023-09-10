import Doublecard from "../component/Doublecard";
import Card from "../component/Card"
import Contact from "../component/Contact"
import Linkdin from "../component/Linkdin"
import "./homepage.css"
import photo from "../img/CYBERPRO.svg"
import Instgram from "../component/Instgram"
import Languages from "../component/Languages"
import Siteimgs from "../component/Siteimgs"
import img1 from "../img/צילום מסך 2023-07-22 035820.png"
import img2 from "../img/צילום מסך 2023-07-22 035836.png"
import img3 from "../img/‏‏צילום מסך (2).png"
import img4 from "../img/‏‏צילום מסך (3).png"
import img5 from "../img/צילום מסך 2023-07-22 051320.png"
import img6 from "../img/צילום מסך 2023-07-22 051409.png"
import img7 from "../img/צילום מסך 2023-07-22 051523.png"
import img8 from "../img/צילום מסך 2023-07-22 051645.png"
import img9 from "../img/צילום מסך 2023-07-22 122157.png"
import img10 from "../img/צילום מסך 2023-07-22 122256.png"
import img11 from "../img/צילום מסך 2023-07-22 122334.png"
import img12 from "../img/צילום מסך 2023-07-22 122357.png"
import img13 from "../img/צילום מסך 2023-07-22 123940.png"
import img14 from "../img/צילום מסך 2023-07-22 123959.png"
import img15 from "../img/צילום מסך 2023-07-22 124021.png"
import img16 from "../img/צילום מסך 2023-07-22 124112.png"


function Homepage() {
  return (
    <div className='homepage'>
        <div className='homecontainer'>
         <div className="first-part">
         <div><Doublecard header={"Lior Ben Hamo"} par={"I am a highly motivated and organized individual with a strong attention to detail. I have excellent communication, and I am always eager to learn and take on new challenges.I am a quick learner and adapt easily to new environments and technologies. In my free time, I enjoy staying active and spending time outdoors, as well as reading and learning about new subjects."}/></div>
         <div><Contact address={"Even Gvirol 22 Kiryat Ata"} header={"Contact"} phonenum={"0528922034"} email={"liorbenhamo159@gmail.com"}/></div>
         <div><Card  header={"Education"} link={"https://cyberpro-israel.co.il/"} imgurl={photo}/></div>
         <div><Languages header={"Languages:"} par={"html, css, javascript, react, mongodb, python, nodejs, express, puppeteer, react-native, socket io, typescript"}/></div>
         <div><Linkdin/></div>
         <div><Instgram/></div>
         
        </div>
        <br /><br /><br />
        <br /><br /><br />
        
        <div className="second-part">
            <div className="myflex">
            <div><Doublecard header={"Learningjs"} par={" teaching app that you can chose js category all the categories lead to the same routh but filter the excrcises by diffrent titles,you can pick excrcises and you get a mission to create a function in small window like vsc after pressing check you can see under the vsc window keep trying if you solved it wrong and keep going if you correct additionally you can hover cards under the check button and get hints if it is not enough you can ask the bot questions and he will give you the closest answer from the net and will give you links to sites that teacing this subject"}/></div>
            <a target="_blank" href="https://jstheacher.netlify.app/"><div><Siteimgs img1={img1} img2={img2} img3={img3} img4={img4}/></div></a>
            </div>
            </div>
            <div className="second-part">
            <div className="myflex">
            <div><Doublecard header={"School project"} par={"student user example=username:johnsmith, password:johnsmith teacher user example=username:mrmartinez, password:mrmartinez manger user example=username:headmastersmith, password:headmastersmith school app that include 3 kinds of users student can search teachers by subject and in his profile send him a message that will apeer in his personal area or press the whatsup button and it open whatapp in chat with that teacher. teacher can serchstudent by name and send him homework pdf that the student will see in his personal area the teacher can see the student info as well like studyadjustment hobbies activeties and grafh of his missing in every month. manger is the only one that can change the calnder in the home page add events and delete furthermore every one who enter the site can see most of the site and can send email to the school manger about things to improve in school "}/></div>
            <a target="_blank" href="https://kfargalimschool.netlify.app"><div><Siteimgs img1={img5} img2={img6} img3={img7} img4={img8}/></div></a>
            </div>
            </div>
        <div>
        <div className="second-part">
            <div className="myflex">
            <div><Doublecard header={"Gym project"} par={"username:liorbenhamo, password:0502730029. but you can also register to the gym app and you will get code to your email yo verfy your accuont log in you have a subscribtion page where you can see all the deals picking the one for you and enter credit card that will update in your user ,you have section with img that is spread to a lot of musale group each press on musale group will give you ten exercise of that spaciphic musale group,body fat section to by honest it is not working because i didnt use a real calculate algorithem but it will give you by the outcome workout by your body fat if you want to see exampele use this 45,45,45,43. and last we have calnder that i made by myself that work exacly like every calnder and you can sign to your wanted pilates class"}/></div>
            <div><a target="_blank" href="https://gymoflior.netlify.app"><Siteimgs img1={img9} img2={img10} img3={img11} img4={img12}/></a></div>
            </div>
            </div>
            <div className="second-part">
            <div className="myflex">
            <div><Doublecard header={"LiorBook"} par={"username:liorbenhamo,password:0502730029.social media app that you can create your own user upload photo from your own computer it will take the routh to your img will upload it to the internt and will share it that will apear on the main page and in your profile you can enter profile by clicking on there post in the main page you can also add comment and likes updating your user details "}/></div>
            <a target="_blank" href="https://6492bce11b282f35fd8de53e--fluffy-halva-c9e834.netlify.app/"><div><Siteimgs img1={img13} img2={img14} img3={img15} img4={img16}/></div></a>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage