import AnimatedTitle from "../components/AnimatedTitle";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

// const ImageClipBox = ({ src, clipClass }) => (
//   <div className={clipClass}>
//     <img src={src} className="w-full h-full object-cover" />
//   </div>
// );

const ContactPerson = ({ position, name, number, email }) => (
  <div className="contact-person p-4  bg-gray-800 shadow-lg text-center rounded-xl">
    <h3 className="font-bold text-xl mb-2">{position}</h3>
    <p className="mb-1">Name: {name}</p>
    <p className="mb-1">
      Phone: <a href={`tel:${number}`} className="text-white">{number}</a>
    </p>
    <p className="mb-1">
      Email: <a href={`mailto:${email}`} className="text-white">{email}</a>
    </p>
  </div>
);

const Contact = () => {
  return (
    <>
    <NavBar/>
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
         
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Tech Council
          </p>
          <AnimatedTitle
            title="We Are Here To Help You"
            className="special-font !md:text-[6.2rem] w-full !text-5xl !font-black !leading-[.9]"
          />
        </div>
        <div className="contact-section mt-10 p-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Events Head</h2>
          <div className="grid grid-cols-1 gap-6"> 
            <ContactPerson
              position="Technical Secretary"
              name="Sahil Manjrekar"
              number="+918779449435"
              email="sahil.manjrekar@vit.edu.in"
            />
            <ContactPerson
              position="Jt.Technical Secretary"
              name="Sahil Rajadhyaksha"
              number="+918806775568"
              email="sahil.rajadhyaksha@vit.edu.in"
            />
            <ContactPerson
              position="Jt.Technical Secretary"
              name="Vivek Mishra"
              number="+919324820701"
              email="vivek.mishra@vit.edu.in"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
