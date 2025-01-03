import { useState, useEffect, useRef } from "react";
import Modal from "../Modal";

// interface Testimonial {
//   id: number;
//   name: string;
//   text: string;
//   img: string;
//   delay: number;
// }

// const TestimonialsData: Testimonial[] = [
//   {
//     id: 1,
//     name: "HACK",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
//     img: "https://picsum.photos/101/101",
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     name: "MIT",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
//     img: "https://picsum.photos/102/102",
//     delay: 0.5,
//   },
//   {
//     id: 3,
//     name: "SLAYS",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
//     img: "https://picsum.photos/103/103",
//     delay: 0.8,
//   },
// ];

interface ImageData {
  src: string;
  caption: string;
}

const imageData: ImageData[] = [
  {
    src: "1.jpg",
    caption:
      "A visitor from Boston Dynamics, Spot, attends a workshop alongside Blueprint '24 attendees.",
  },
  {
    src: "2.jpg",
    caption:
      "Attendees had the chance to talk with local organizations at the organization fair.",
  },
  {
    src: "3.jpg",
    caption: "[caption 3]",
  },
  {
    src: "4.jpg",
    caption: "[caption 4]",
  },
  {
    src: "5.jpg",
    caption: "Hackathon day begins!",
  },
  {
    src: "6.jpg",
    caption: "Teams are given 8 hours to complete their hackathon project.",
  },
  {
    src: "7.jpg",
    caption: "A surprise visit from Tim the Beaver, MIT's mascot!",
  },
  {
    src: "8.jpg",
    caption:
      "Attendees race to build the tallest cup stacking tower in one of the Blueprint '24 mini-events.",
  },
  {
    src: "9.jpg",
    caption:
      "The final stretch before the submission deadline on hackathon day.",
  },
  {
    src: "10.jpg",
    caption: "The winners of the general category from Blueprint '24.",
  },
];

const Photos = () => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // const setting = {
  //   dots: true,
  //   arrow: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   pauseOnHover: true,
  //   pauseOnFocus: true,
  //   responsive: [
  //     {
  //       breakpoint: 10000,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const openModal = (index: number) => {
    setOpenImageIndex(index);
  };

  const closeModal = () => {
    setOpenImageIndex(null);
  };

  // Close modal if clicked outside the modal container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (openImageIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openImageIndex]);

  return (
    <div>
      <Modal>
        <div className="flex flex-col items-center">
          <div className="min-w-[90%] -translate-y-[5%]">
            <div className="relative w-full h-[80vh]">
              <img
                src="/images/Photos/transparent_bg.svg"
                className="absolute top-0 left-0 w-full object-cover"
              />
            </div>
            <h1 className="text-7xl font-bold absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              PHOTOS
            </h1>
          </div>
          <div className="overflow-x-auto overflow-hidden w-[100%] h-[28vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden absolute top-[78%] md:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-[300vh] md:w-[200vh] mx-auto absolute z-40">
                <img
                  src="/images/Photos/photo_string.svg"
                  alt="Photo String"
                  className="w-full z-40"
                />
              </div>

              <div className="flex flex-row flex-start gap-7 md:gap-4 absolute mx-auto translate-x-2 top-3 w-[300vh] md:w-[200vh] z-10">
                {imageData.map((item, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer transition-transform transform hover:scale-110 w-[180px] h-[180px] md:w-[122px] md:h-[122px] z-10"
                  >
                    <img
                      className="absolute inset-0 w-full h-full z-10"
                      src="/images/Photos/polaroid_bg.svg"
                      alt="Polaroid background"
                    />
                    <div className="absolute top-[16%] left-[8%] w-[84%] h-[60%] overflow-hidden z-20">
                      <img
                        className="w-full h-full object-cover z-20"
                        src={`/src/assets/${item.src}`}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => openModal(index)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Large image pop up */}
          {openImageIndex !== null && (
            <div className="fixed inset-0 z-50">
              {/* Backdrop for dimming the rest of the screen */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Modal content */}
              <div className="fixed inset-0 flex items-center justify-center">
                <div
                  ref={modalContainerRef}
                  className="bg-polaroid h-[80vh] md:h-[50vh] w-[60vw] rounded-xl p-8 shadow-2xl overflow-hidden flex flex-col z-60 relative"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={`/src/assets/${imageData[openImageIndex].src}`}
                        alt={`Large View ${openImageIndex + 1}`}
                        className="w-full object-contain"
                      />
                    </div>
                    <p className="mt-6 text-center text-lg min-h-[3rem]">
                      {imageData[openImageIndex].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* <h1 className="font-bold testimonials-title mt-4"> Testimonials</h1>
          <div className="h-full">
            <Slider {...setting}>
              {TestimonialsData.map((item: Testimonial) => {
                return (
                  <div key={item.id}>
                    <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10"> */}
          {/* Upper section */}
          {/* <div className="flex justify-start items-center gap-5">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <p className="text-xl font-bold text-black/80">
                            {item.name}
                          </p>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div> */}
        </div>
      </Modal>
    </div>
  );
};

export default Photos;
