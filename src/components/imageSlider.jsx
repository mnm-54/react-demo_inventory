import { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const downloadImg = (url) => {
    var element = document.createElement("a");
    var file = new Blob([url], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <div className="relative">
      <div className="content-center">
        <div
          onClick={goToPrevious}
          className="absolute inset-y-0 left-0 w-12 content-center"
        >
          <div className="cursor-pointer ">❰</div>
        </div>
        <div onClick={goToNext} className="absolute inset-y-0 right-0 w-12">
          <div className="cursor-pointer ">❱</div>
        </div>
      </div>
      <img
        className="object-scale-down h-48 w-96 hover:cursor-pointer"
        alt="product image"
        onClick={() => downloadImg(slides[currentIndex])}
        src={slides[currentIndex]}
      ></img>
    </div>
  );
}

export default ImageSlider;
