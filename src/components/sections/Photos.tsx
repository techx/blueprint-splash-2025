import Slider from "react-slick";
import Modal from "../Modal";
import "./Photos.css";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  img: string;
  delay: number;
}

const TestimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "HACK",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "MIT",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "SLAYS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/103/103",
    delay: 0.8,
  },
];

const Photos = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Modal className="w-[85%] overflow-y-scroll no-scrollbar">
        <div className="m-2">
          <div className="overflow-hidden">
            <img
              src="/images/Photos/transparent bg.svg"
              className="w-full object-cover"
            />
          </div>
          <h1 className="font-bold photo-title">Photos</h1>
          <div className="overflow-x-scroll no-scrollbar">
            <div className="w-[155%]">
              <img
                src="/images/Photos/photo string.svg"
              />
            </div>
            <div className="flex flex-row">
              <img
                className = "w-[25%] mx-4"
                src="/images/Photos/1.JPG"
              /> 
              <img
                className = "w-[25%] mx-4"
                src="/images/Photos/2.JPG"
              /> 
            </div>
          </div>
          <h1 className="font-bold testimonials-title mt-4">Our Testimonials</h1>
          <div className="h-full">
            <Slider {...setting}>
            {TestimonialsData.map((item: Testimonial) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* Upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>                  
                  </div>
                </div>
              );
            })}
            </Slider>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Photos;
