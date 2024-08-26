import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import StarRating from '../components/StarRating';
import "../styles/customSlick.css"; 



const VerticalSwiper = () => {
  const slides = [
    {
      image: "../assets/mercy.svg",
      title: "“Quick Delivery”",
      text: "I was amazed by the lightning-fast delivery from this supermarket! I placed my order at 10 am, and by 2 pm, my groceries were at my doorstep. The driver was friendly and courteous, and the packaging was impeccable. I've never experienced such quick delivery from any online store before.",
      customer: "Mercy Robert "
    },
    {
      image: "../assets/udeme.svg",
      title: "“Fresh Delivery”",
      text: "I've been using this supermarket for a few months now, and I must say, their commitment to freshness is impressive. They always deliver products that are well within their expiration dates, and the packaging is designed to keep them fresh.",
      customer: "Udeme Jonah"
    },
    {
      image: "../assets/faith.svg",
      title: "“Best Price”",
      text: "The prices offered by this supermarket are the best in town! I've tried other online stores, but none match the value for money offered by this supermarket. The products are fresh, and the prices are reasonable. I've experienced no issues with pricing, and the customer service is good.",
      customer: "Amadi Faith"
    }
  ];

  return (
    <div>
      <div className='client'>
      <h2>Client Testimonials</h2>
      <p>Our customer’s talk about how we offer good services, offers premium <br />
        quality, best price, 24/7 services and 100%natural product.</p>
      </div>
      <Swiper
        direction="vertical"
        effect="fade"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => (
            `<span class="${className} custom-dot"></span>`
          ),
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className='comments'>
              <h2>{slide.title}</h2>
              <p>"{slide.text}"</p>

              <div className='below'>
                <div className='customer'>
                <p className='cname'>{slide.customer}</p>
                <p className='custom'>Customer</p>
                </div>
                <StarRating  totalStars={5} className='star'/>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSwiper
