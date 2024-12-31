import React, { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");

  const handleImageClick = (src: string, captionText: string) => {
    setSelectedImage(src);
    setCaption(captionText);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCaption("");
  };

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
        <div className="m-4">
          <div className="overflow-hidden">
            <img
              src="/images/Photos/transparent bg.svg"
              className="w-full object-cover"
            />
          </div>
          <h1 className="font-bold photo-title">PHOTOS</h1>
          <div className="overflow-x-scroll no-scrollbar photos">
            <div className="w-[200%]">
              <img
                src="/images/Photos/string_with_bg_no_photos.svg"
              />
            </div>
            <div className="flex flex-row">
              <img
                className = "w-[15%] photo-1"
                src="/images/Photos/1.JPG"
                alt="Photo 1"
                onClick={() => handleImageClick("/images/Photos/1.JPG", "A visitor from Boston Dynamics, Spot, attends a workshop alongside Blueprint ‘24 attendees.")}
              /> 
              <img
                className = "w-[15%] photo-2"
                src="/images/Photos/2.JPG"
                onClick={() => handleImageClick("/images/Photos/2.JPG", "Attendees had the chance to talk with local organizations at the organization fair.")}
              /> 
            </div>
          </div>
          <h1 className="font-bold testimonials-title">Our Testimonials</h1>
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
                        <p>{item.text}</p>
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

      
      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto object-contain"
            />
            <p className="mt-4 text-center font-semibold">{caption}</p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Photos;
