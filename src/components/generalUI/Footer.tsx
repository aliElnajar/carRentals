import footerSVG from "../../assets/footer.svg";
import twitterSVG from "../../assets/twitter.svg";
import facebookSVG from "../../assets/facebook.svg";
import youtubeSVG from "../../assets/youtube.svg";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#f5eec2]/40  text-blueBlack ">
      <div>
        <img src={footerSVG} alt="footer svg" />
        <p className="font-semibold">
          CarRental Industries Ltd.
          <br />
          Providing reliable services since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src={twitterSVG} alt="twitter logo" />
          </a>
          <a>
            <img src={youtubeSVG} alt="footer" />
          </a>
          <a>
            <img src={facebookSVG} alt="footer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
