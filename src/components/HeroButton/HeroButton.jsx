import "./HeroButton.css";

const HeroButton = () => {
  return (
    <>
      <a href="#about">
        <button>
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="text">Lihat Selengkapnya</span>
        </button>
      </a>
    </>
  );
};

export default HeroButton;
