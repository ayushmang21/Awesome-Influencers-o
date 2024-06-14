'use client';
import React from 'react'
import Navbar from './(main)/Navbar';
import Footer from './(main)/Footer';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';
import { EffectCoverflow } from 'swiper/modules';

const Home = () => {
  return (
    <>
      <Navbar />

      <>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-wrap justify-between mb-16">
              <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                  Your Talent
                  <br />
                  Our Platform
                </motion.h1>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                  Welcome to Awesome Influencers, where we bring together brands and influencers to create impactful partnerships.
                </motion.p>
              </div>
              <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg  md:left-16 md:top-16 lg:ml-0">
                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                    // loading="lazy"
                    alt="Photo by Kaung Htet"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden rounded-lg ">
                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
                    // loading="lazy"
                    alt="Photo by Manny Moreno"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className='h-[200px] bg-gradient-to-b from-transparent to-black' >
          </section>

          <section className='bg-black mx-auto max-w-screen-2xl p-4 md:p-8'>
            <div className='flex flex-col'>
              <div className=' mx-auto'>
                <h3 className='text-white text-4xl pt-4'>Testimonials</h3>
              </div>
              <div>
                <Swiper
                  className='mySwiper'
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  loop={true}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  modules={[EffectCoverflow]}
                >
                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "I used this website to collaborate with influencers for my clothing brand, and the results were amazing! The influencer I worked with helped increase my brand awareness and sales. Highly recommend this platform for brands looking to reach a wider audience."
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "As an influencer, I love using this website to connect with brands. The platform is easy to use, and I've had multiple successful collaborations that have helped me grow my following. If you're an influencer looking for brand partnerships, this is the place to be!"
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "I've tried other influencer marketing platforms before, but none have been as effective as this one. The website connects brands with influencers seamlessly, and the quality of influencers is top-notch. I've seen a significant increase in engagement and sales since using this platform."
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "This website has been a game-changer for my beauty brand. I was able to find influencers that perfectly aligned with my brand values and target audience. The collaborations resulted in a huge boost in brand visibility and customer engagement. Thank you for providing such a valuable service!"
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "I was hesitant to try influencer marketing for my small business, but this website made the process so easy and effective. I was able to find influencers within my budget and niche, and the return on investment was incredible. I'm now a believer in the power of influencer marketing, all thanks to this platform."
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        I can't say enough good things about this website. It has completely transformed the way I approach marketing for my fitness brand. The influencers I've partnered with have helped me reach a larger audience and increase my online presence. If you're a brand looking to collaborate with influencers, look no further!"
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "I've been using this website to find influencers for my travel agency, and the results have been beyond my expectations. The influencers I've worked with have helped showcase our services to a wider audience and drive more traffic to our website. I highly recommend this platform to any business looking to boost their online presence."
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='card bg-white'>
                      <p className='card-body'>
                        "I was skeptical about influencer marketing until I tried this website. The platform makes it easy to find and connect with influencers who are a perfect fit for my brand. The collaborations have brought a fresh perspective to my marketing strategy and helped me tap into new markets. I couldn't be happier with the results."
                      </p>
                    </div>
                  </SwiperSlide>

                </Swiper>

                {/* <div class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                  </div>
                  <div class="swiper-pagination"></div>

                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>

                  <div class="swiper-scrollbar"></div>
                </div> */}

              </div>
            </div>
          </section>

          <section className='h-[200px] bg-gradient-to-t from-transparent to-black' >
          </section>

        </div>

      </>

      <Footer />
    </>
  )
}

export default Home;