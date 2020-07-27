import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.cero26.com.ar/modules/ps_imageslider/images/c4f4cd4d4ad11225e8f4d9008298ed1b85d03da3_nike.png',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://www.cero26.com.ar/modules/ps_imageslider/images/f9c200256803504842a773def7a6529d8a97b806_1920x500.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://www.cero26.com.ar/modules/ps_imageslider/images/f544c924173b476b8ed217c925d0ab343b15d65d_SliderNew1920x500-01.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div>
          <img height='360' src={item.src} alt={item.altText} />
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slide;
