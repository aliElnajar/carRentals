import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const HeroCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      swipeable={false}
    >
      <div
        className="hero h-[50vh] lg:h-[80vh] relative "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1529611355777-315dad1f9f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1246&q=80)",
        }}
      >
        {children}
      </div>
      <div
        className="hero h-[50vh] lg:h-[80vh] relative"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        {children}
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
