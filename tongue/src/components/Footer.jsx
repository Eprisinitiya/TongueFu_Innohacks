import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "../assets/logo.png"

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-slate-900">
        <div className="container mx-auto  py-[2rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={logo}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-slate-200">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px]  justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl text-slate-200 p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-slate-200">
                Privacy Policy | © {new Date().getFullYear()} Gymate <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  RadiusTheme
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative hover:text-white text-slate-200">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  cursor-pointer  font-medium hover:font-bold">
                Fitness Classes
              </p>
              <p className="text-[16px]  cursor-pointer  font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px]  cursor-pointer  font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px]  cursor-pointer  font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px]  cursor-pointer  font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative text-slate-200">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]   font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px]  font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px]  font-bold">Saturday:</p>
              <p className="text-[16px]  font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px]  font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;