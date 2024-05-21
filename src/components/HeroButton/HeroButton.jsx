import "./HeroButton.css";

const HeroButton = () => {
  return (
    <>
      <button>
        <span className="circle">
          <span className="icon arrow"></span>
        </span>
        <span className="text text-[16px]">Lihat Selengkapnya</span>
      </button>
    </>
  );
};

export default HeroButton;
