
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Home/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
    return (
        <div className='p-4 lg:mx-24'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;