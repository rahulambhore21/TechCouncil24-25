import AnimatedTitle from "../components/AnimatedTitle";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="w-full h-full object-cover" />
  </div>
);

const ContactPerson = ({ position, name, number, email }) => (
  <div className="contact-person p-4 bg-gray-800 rounded-lg shadow-lg text-center">
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
          {/* <ImageClipBox
            src="/img/techlogo.jpg"
            clipClass="contact-clip-path-1 p-28"
          /> */}
          {/* <ImageClipBox
            src="/img/arlogo.png"
            clipClass="contact-clip-path-2 
            lg:translate-y-50 translate-y-60"
          /> */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactPerson
              position="Head of Events"
              name="John Doe"
              number="+1234567890"
              email="john.doe@example.com"
            />
            <ContactPerson
              position="Assistant Head of Events"
              name="Jane Smith"
              number="+0987654321"
              email="jane.smith@example.com"
            />
            <ContactPerson
              position="Event Coordinator"
              name="Alice Johnson"
              number="+1122334455"
              email="alice.johnson@example.com"
            />
          </div>
        </div>
        {/* <div className="contact-section mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Technical Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactPerson
              position="Website Developer"
              name="Adarsh Meshram"
              number="+2233445566"
              email="bob.brown@example.com"
            />
            <ContactPerson
              position="Website Developer"
              name="Rahul Ambhore"
              number="+91-9356752336"
              email="rahul.ambhore@vit.edu.in"
            />
          </div>
        </div> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
