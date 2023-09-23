import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductImageCarouselProps {
  images: ProductImage[] | undefined;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images }) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={true}
      dynamicHeight={true}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      swipeable={true}
      emulateTouch={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      showIndicators={true}
      centerMode={true}
      centerSlidePercentage={100}
      selectedItem={0}
      thumbWidth={100}
      className="h-auto"
    >
      {images?.map((image: ProductImage) => (
        <div key={image.alt}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductImageCarousel;
