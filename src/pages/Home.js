import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";
import image1 from '../assets/images/home_1.webp';
import image2 from '../assets/images/home_3.avif';
import image3 from '../assets/images/home_4.avif';
import image4 from '../assets/images/home_5.avif';
var style = { width : "100%" }
// style={{paddingLeft:"2%", paddingRight:"2%"}}
function Home() {
    return (<>
        <Navbar />
        <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
            {/* <ImageCard {...{"image":image1}}/> */}
            <img src={image1} width={"100%"} />
            <div className="flex" style={{justifyContent:"space-around"}} > 
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
                {/* <img src={image4} /> */}
            </div>
            
        </div>
    </>);
}
export default Home;

