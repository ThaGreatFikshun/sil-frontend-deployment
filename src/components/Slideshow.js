// src/components/Slideshow.js

import React from 'react';
import Slider from 'react-slick';

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      img: 'https://static.wixstatic.com/media/aa690b_8b496b9bc18a4438b48af81db0393f1d~mv2.png/v1/fill/w_1900,h_713,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aa690b_8b496b9bc18a4438b48af81db0393f1d~mv2.png?text=Slide+1',
      title: 'Explore Our Albums',
      description: 'Discover a wide range of albums to store your precious memories.',
    },
    {
      id: 2,
      img: 'https://static.wixstatic.com/media/3288de_923d3fc3c5014eda818abc2357bcccc3~mv2.png/v1/fill/w_592,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Slade%20xplainer.png?text=Slide+2',
      title: 'Share Your Moments',
      description: 'Easily share your favorite moments with friends and family.',
    },
    {
      id: 3,
      img: 'https://static.wixstatic.com/media/3288de_6a26461c4db74c4c8cfef10bf07b8ece~mv2.png/v1/fill/w_847,h_597,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Africa%20parts.png?text=Slide+3',
      title: 'Manage Photos Efficiently',
      description: 'Organize your photos seamlessly with our user-friendly interface.',
    },
    {
      id: 4,
      img: 'https://static.wixstatic.com/media/3288de_32edf17977cc40c5abe5590fe40b4ab0~mv2.png/v1/fill/w_1132,h_692,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Phone%20Be_Well.png?text=Slide+4',
      title: 'Secure and Private',
      description: 'Your data is safe with us. Enjoy secure access to your albums.',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="my-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex flex-col items-center justify-center h-[500px] md:h-[700px] lg:h-[800px]"> {/* Adjusted heights for larger screens */}
            <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="text-md">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
