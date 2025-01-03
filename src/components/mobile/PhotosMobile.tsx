import { useState, useRef, useEffect } from "react";

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

const PhotosMobile = () => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

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
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openImageIndex]);

  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[90%] -translate-y-[5%]">
        <div className="relative w-full h-[80vh]">
          <img
            src="/images/Photos/transparent_bg.svg"
            className="absolute top-32 left-0 w-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          PHOTOS
        </h1>
      </div>
      <div className="overflow-x-auto overflow-hidden w-[100%] h-[40vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden absolute left-1/2 transform -translate-x-1/2 translate-y-[60%]">
        <div className="relative">
          <div className="w-[340vh] mx-auto absolute z-40">
            <img
              src="/images/Photos/photo_string.svg"
              alt="Photo String"
              className="w-full z-40"
            />
          </div>

          <div className="flex flex-row flex-start gap-9 absolute mx-auto translate-x-2 top-3 w-[340vh] z-10">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="relative cursor-pointer transition-transform transform hover:scale-110 w-[250px] h-[250px] z-10"
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
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              ref={modalContainerRef}
              className="bg-polaroid h-[50vh] w-[90vw] rounded-xl p-8 shadow-2xl overflow-hidden flex flex-col z-60 relative"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={`/src/assets/${imageData[openImageIndex].src}`}
                    alt={`Large View ${openImageIndex + 1}`}
                    className="w-full h-full object-contain"
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
    </div>
  );
};

export default PhotosMobile;
