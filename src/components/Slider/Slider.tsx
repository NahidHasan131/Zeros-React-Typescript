import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import './style.css';

interface slide{
  bg: string,
  img: string,
  tag: string,
  title: string,
  desc: string,
  btn: string,
  titleColor: string,
  btnColor: string
}

const slides:slide = [
  {
    bg: 'bg-[#f5f0e8]',
    img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80',
    tag: 'New Collection',
    title: 'DRESS UP YOUR LOOK',
    desc: 'Zeros is a design force driven by a vision for sustainability and innovation. also stylish and kind to the environment.',
    btn: 'Shop Now',
    titleColor: 'text-[#1a0a00]',
    btnColor: 'bg-[#1a0a00]',
  },
  {
    bg: 'bg-[#e8f0f5]',
    img: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Summer Sale',
    title: 'FIND YOUR STYLE',
    desc: 'Explore our latest summer collection with premium quality fabrics and modern designs crafted just for you.',
    btn: 'Explore Now',
    titleColor: 'text-[#001a2e]',
    btnColor: 'bg-[#001a2e]',
  },
  {
    bg: 'bg-[#f0f5e8]',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80',
    tag: 'Trending',
    title: 'WEAR THE TREND',
    desc: 'Stay ahead of fashion with our curated trending pieces. Bold, fresh and made for the modern lifestyle.',
    btn: 'View Trends',
    titleColor: 'text-[#0a1a00]',
    btnColor: 'bg-[#0a1a00]',
  },
];

const Slider = () => {
  return (
    <Swiper
      direction={'vertical'}
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      mousewheel={true}
      modules={[Pagination, Autoplay, Mousewheel]}
      className="mySwiper rounded-lg mt-10"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className={`${slide.bg} w-full h-full flex items-center justify-center px-[6%] gap-[4%] text-left`}>

            {/* Left — image */}
            <div className="flex-[0_0_35%] h-full flex items-end">
              <img src={slide.img} alt={slide.title} className="w-full h-[90%] object-cover object-top rounded-t-xl"/>
            </div>

            {/* Right — content */}
            <div className="flex-1 flex flex-col items-start gap-4">
              <span className="text-xs font-semibold tracking-[3px] uppercase text-gray-400">
                {slide.tag}
              </span>
              <h1 className={`${slide.titleColor} text-[clamp(2.2rem,5vw,3.8rem)] font-black uppercase leading-[1.05] m-0`}>
                {slide.title}
              </h1>
              <p className="text-sm text-gray-500 max-w-95 leading-relaxed m-0">
                {slide.desc}
              </p>
              <button className={`${slide.btnColor} mt-2 px-8 py-3 text-white rounded-full text-sm font-semibold hover:opacity-80 transition-opacity cursor-pointer`}>
                {slide.btn}
              </button>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
