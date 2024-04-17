import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div data-aos="zoom-in"  data-aos-duration="2000"  className="border-2 p-5 lg:p-16 mt-7 rounded-xl bg-base-200 text-base-content">
      <footer className="footer flex justify-center ">
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          <aside className="lg:row-span-2 col-span-2 md:col-span-4 lg:col-span-1 mb-6 flex flex-col justify-center space-y-2 h-full">
            <Link to='/'> <button className="text-xl lg:text-3xl font-bold border-none "><span className="text-5xl font-extrabold text-purple-600">H</span>ousing.<span>c</span>o</button></Link>
            <p>REHC Industries Ltd.<br />Providing reliable house since 2015</p>
          </aside>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="mt-10 hidden lg:block">
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <div>
        <footer className="footer footer-center text-base-content mt-20 -mb-3 lg:-mb-12">
          <aside>
            <p>Copyright © 2024 - All right reserved by REHC  Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;