import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { Link } from "react-router";
import Contact_Us from "../page/Contact_Us";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/techlogo.jpg"
            clipClass="contact-clip-path-1 p-32"
          />
          {/* <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          /> */}
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 hidden mt-24 p-5 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          <ImageClipBox
            src="/img/arlogo.png"
            clipClass="sword-man-clip-path p-10" 
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Tech Council
          </p>

          <AnimatedTitle
            title="We Are Here To <br />To Help You"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Link to={"/contact"}><Button title="contact us" containerClass="mt-10 cursor-pointer" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
