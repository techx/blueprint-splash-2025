import React, { useState, useEffect, useRef } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ];

  const captions = [
    "Caption 1",
    "Caption 2",
    "Caption 3",
    "Caption 4",
    "Caption 5",
    "Caption 6",
    "Caption 7",
    "Caption 8",
    "Caption 9",
    "Caption 10",
  ]

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

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  // Close modal if clicked outside the modal container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalContainerRef.current && !modalContainerRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div>
      <Modal className="w-[85%] overflow-y-scroll no-scrollbar" isOpen={isModalOpen} onClose={closeModal}>
        <div className="m-2">
          <div className="overflow-hidden">
            <img
              src="/src/assets/transparent bg.svg"
              className="w-full object-cover mb-0"
            />
          </div>
          <h1 className="font-bold photo-title">Photos</h1>
          <div className="overflow-x-scroll no-scrollbar">
            <div className="w-[155%]">
              <img
                src="/src/assets/photo string.svg"
                className="mt-0 mb-0"
              />
            </div>

            <div className="flex flex-row">
              {images.map((fileName, index) => (
                <img
                  key={index}
                  className="w-[10%] h-[10%] mx-6 sm:mx-2 lg:mx-4 cursor-pointer"
                  src={`/src/assets/${fileName}`}
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          </div>

          {/* Large image pop up */}
          {isModalOpen && currentImageIndex !== null && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              onClick={closeModal}
            >
              <div
                className="modal-container relative rounded-lg p-4 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`/src/assets/${images[currentImageIndex]}`}
                  className="w-full h-auto object-contain"
                />
                <p className="mt-4 text-center font-semibold">{captions[currentImageIndex]}</p>
              </div>
            </div>
          )}


          <h1 className="font-bold testimonials-title mt-4"> Testimonials</h1>
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
    </div>
  );
};

export default Photos;
