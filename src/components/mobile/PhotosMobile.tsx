import { useState, useRef, useEffect } from "react";

interface ImageData {
  src: string;
  caption: string;
}

const imageData: ImageData[] = [
  {
    src: "/Full Images/Full1.JPG",
    caption:
      "A visitor from Boston Dynamics, Spot, attends a workshop alongside Blueprint ‘24 attendees.",
  },
  {
    src: "/Full Images/Full2.JPG",
    caption:
      "Attendees had the chance to talk with local organizations at the organization fair.",
  },
  {
    src: "/Full Images/Full3.JPG",
    caption: "Blueprint ‘24 attendees at the hardware learnathon workshop!",
  },
  {
    src: "/Full Images/Full4.JPG",
    caption: "Advanced web dev workshop in progress.",
  },
  {
    src: "/Full Images/Full5.JPG",
    caption: "Hackathon day begins!",
  },
  {
    src: "/Full Images/Full6.JPG",
    caption: "Teams are given 8 hours to complete their hackathon project.",
  },
  {
    src: "/Full Images/Full7.JPG",
    caption: "A surprise visit from Tim the Beaver, MIT‘s mascot!",
  },
  {
    src: "/Full Images/Full8.JPG",
    caption:
      "Attendees race to build the tallest cup stacking tower in one of the Blueprint ‘24 mini-events.",
  },
  {
    src: "/Full Images/Full9.JPG",
    caption:
      "The final stretch before the submission deadline on hackathon day.",
  },
  {
    src: "/Full Images/Full10.JPG",
    caption: "The winners of the general category from Blueprint ‘24.",
  },
];

const imageDataCompressed: ImageData[] = [
  {
    src: "Pre1.png",
    caption:
      "A visitor from Boston Dynamics, Spot, attends a workshop alongside Blueprint ‘24 attendees.",
  },
  {
    src: "Pre2.jpg",
    caption:
      "Attendees had the chance to talk with local organizations at the organization fair.",
  },
  {
    src: "Pre3.jpg",
    caption: "Blueprint ‘24 attendees at the hardware learnathon workshop!",
  },
  {
    src: "Pre4.jpg",
    caption: "Advanced web dev workshop in progress.",
  },
  {
    src: "Pre5.jpg",
    caption: "Hackathon day begins!",
  },
  {
    src: "Pre6.jpg",
    caption: "Teams are given 8 hours to complete their hackathon project.",
  },
  {
    src: "Pre7.jpg",
    caption: "A surprise visit from Tim the Beaver, MIT‘s mascot!",
  },
  {
    src: "Pre8.jpg",
    caption:
      "Attendees race to build the tallest cup stacking tower in one of the Blueprint ‘24 mini-events.",
  },
  {
    src: "Pre9.jpg",
    caption:
      "The final stretch before the submission deadline on hackathon day.",
  },
  {
    src: "Pre10.jpg",
    caption: "The winners of the general category from Blueprint ‘24.",
  },
];

const PhotosMobile = () => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = `/images/Photos/${src}`;
  };

  const openModal = (index: number) => setOpenImageIndex(index);
  const closeModal = () => setOpenImageIndex(null);

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
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openImageIndex]);

  return (
    <section id="Photos">
      {/* Header with transparent background */}
      <div
        className="relative flex flex-col h-[66vh] bg-top bg-no-repeat bg-contain mt-20 mb-4"
        style={{
          backgroundImage: "url('/images/Photos/transparent_bg.svg')",
        }}
      >
        <h1 className="relative text-5xl font-bold text-center mt-16 md:mt-28">
          PHOTOS
        </h1>

        {/* Photo string and photos */}
        <div
          className="relative mt-12 w-[100%] h-[34vh] overflow-y-hidden overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          // onWheel={(e) => {
          //   const container = e.currentTarget;
          //   e.stopPropagation();
          //   container.scrollLeft += e.deltaY;
          // }}
          // onMouseEnter={() => {
          //   document.body.style.overflow = "hidden";
          // }}
          // onMouseLeave={() => {
          //   document.body.style.overflow = "";
          // }}
          // style={{ touchAction: "none" }}
        >
          {/* Photo string */}
          <div className="relative w-[350vh] z-40">
            <img
              src="/images/Photos/photo_string.svg"
              alt="Photo String"
              className="w-full z-40"
            />
          </div>

          {/* Photos */}
          <div className="relative flex flex-row justify-between pl-[1vh] pr-[5vh] w-[350vh] -translate-y-10 md:-translate-y-12 z-10">
            {imageDataCompressed.map((item, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105 w-[31vh] h-[31vh] z-10"
                onClick={() => openModal(index)}
              >
                <img
                  src="/images/Photos/polaroid_bg.svg"
                  alt="Polaroid background"
                  className="w-full h-full"
                />
                <div
                  className="absolute top-[16%] left-[7%] w-[85%] h-[55%]"
                  onMouseEnter={() => preloadImage(imageData[index].src)}
                >
                  <img
                    src={`/images/Photos/Preview Images/${item.src}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div
            ref={modalContainerRef}
            className="bg-polaroid h-[60vh] w-[90vw] rounded-xl p-8 shadow-2xl flex flex-col"
          >
            <div className="flex-1 overflow-hidden">
              <img
                src={`/images/Photos/${imageData[openImageIndex].src}`}
                alt={`Large View ${openImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-center text-lg">
              {imageData[openImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotosMobile;
