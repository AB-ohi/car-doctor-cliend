import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white g-gradient-to-r from-[rgba(0, 0, 0, 0.2)] to-[rgba(0, 0, 0, 0.2)] rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 text-white">
          <p className="text-xl text-orange-600 font-semibold">About Us</p>
          <h1 className="text-[45px] w-[376px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 w-[480px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6 w-[480px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
