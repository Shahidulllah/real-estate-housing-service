import CardContainer from "../Card-Container/CardContainer";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div data-aos="ease-in"  data-aos-duration="2000" >
            <Slider></Slider>
            <CardContainer></CardContainer>
        </div>
    );
};

export default Home;