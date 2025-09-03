import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from '@/components/Atoms/Link';
import { Product, slideProducts } from './dummy';
import { EffectFade, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { FC } from 'react';
import { PopularProducts } from './PopularProducts';
import { PopularCategories } from './PopularCategories';
import { NewArrivals } from './NewArrivals';
import { SaleIsLive } from './SaleIsLive';
import { More } from './More';
import { SvgIcon } from '@/components/Atoms/SvgIcon';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const Home = () => {

    return (
        <div className="flex flex-col w-full">
            <div className="flex mx-auto max-width bg-secondary my-5 rounded-lg">
                <div className=" flex gap-5.5 mx-auto">
                    <div className="flex">
                        <p className="my-auto text-mxl font-semibold uppercase">Limited Stock! Grab Yours Now</p>
                    </div>
                    <div className="flex">
                        <div className="my-auto py-2 px-[11px] bg-primary rounded-md">
                            <p className="text-cbase font-medium">Starting at $79</p>
                        </div>
                    </div>
                    <div className="relative h-[157px] w-[302px]">
                        <div className="absolute -top-10 right-0 w-[184px]">
                            <img src={'/images/3.png'} width={225}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto max-width flex justify-between">
                <div className="w-[69%]">
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation, Pagination ]}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className="bg-no-repeat bg-cover bg-center h-135 p-12.5" style={{ backgroundImage: 'url(/images/slide-main-1.jpg)' }}>
                                <div className="flex flex-col w-[42%]">
                                    <p className='font-medium'>Innovate. Upgrade. Repeat</p>
                                    <p className='font-semibold text-size-3 mt-3 leading-11'>Smart Tech for a Smater You</p>
                                    <Link value='Shop Now' className='!px-3 !py-2.5 !text-base w-28 mt-5'/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="bg-no-repeat bg-cover bg-center h-135 p-12.5" style={{ backgroundImage: 'url(/images/slide23-1.jpg)' }}>
                                <div className="flex flex-col w-[42%]">
                                    <p className='font-medium'>Power Up Your Lifestyle</p>
                                    <p className='font-semibold text-size-3 mt-3 leading-11'>Smart Solutions for Mordern Living</p>
                                    <Link value='Shop Now' className='!px-3 !py-2.5 !text-base w-28 mt-5'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='w-[29%] h-full'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    effect={'fade'}
                    modules={[EffectFade, Navigation, Pagination ]}
                    navigation={true}
                >
                            <SwiperSlide>
                                <div className="bg-no-repeat px-4 h-135 flex bg-antique">
                                    <div className='flex my-5'>
                                        <div className='flex flex-col'>
                                            {
                                            slideProducts.slice(0, 4).map((el, index) => {
                                                return (
                                                    <SlideProduct el={el} key={index}/>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>                                    
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-no-repeat px-4 h-135 flex bg-antique">
                                    <div className='flex my-5'>
                                    <div className='flex flex-col'>
                                        {
                                        slideProducts.slice(4, 8).map((el, index) => {
                                            return (
                                                <SlideProduct el={el} key={index}/>
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-no-repeat px-4 h-135 flex bg-antique">
                                    <div className='flex my-5'>
                                    <div className='flex flex-col'>
                                        {
                                        slideProducts.slice(8, 12).map((el, index) => {
                                            return (
                                                <SlideProduct el={el} key={index}/>
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-no-repeat px-4 h-135 flex bg-antique">
                                    <div className='flex my-5'>
                                    <div className='flex flex-col'>
                                        {
                                        slideProducts.slice(12).map((el, index) => {
                                            return (
                                                <SlideProduct el={el} key={index}/>
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>
            
            <PopularProducts/>

            <PopularCategories/>
            
            <div className='flex mx-auto max-width bg-antique-md bg-center min-h-[156px] pl-15 my-20' style={{ backgroundImage: 'url(/images/2.png)' }}>
                <div className='w-[27%] flex'>
                    <p className='my-auto text-xl w-70'>FutureTech Electroncs - Innovation Start Here</p>
                </div>
                <div className='flex-1 relative'>
                    <img src={'/images/4.png'} className='absolute -translate-y-7' width={430}></img>
                </div>
                <div className='w-[27%] relative'>
                    <img src={'/images/product16.png'} className='absolute -translate-y-6' width={174}></img>
                </div>
            </div>

            <NewArrivals/>

            <div className='flex mb-20'>
                <img src="/images/123banner.png" className='mx-auto rounded-md' width={1180}></img>
            </div>

            <SaleIsLive/>

            <More/>
        </div>
    )
}

const SlideProduct: FC<{el: Product}> = ({el}) => {
    return (
        <div className='flex relative'>
            <img src={el.img} width={105}></img>
            { el.isSaled && <div className='absolute bg-primary py-3 px-2 rounded-full font-medium'><p className='text-xs'>Sale</p></div> }
            <div className='flex'>
                <div className='flex flex-col p-2 my-auto'>
                    <p className='font-medium'>{el.title}</p>
                    <p>${el.priceFrom.toFixed(2)}</p>
                    <div className='flex'>
                        {
                            Array.from({ length: el.rate}).map((_, idx) => {    
                                return (
                                    <SvgIcon name="star-full" key={idx} width={15} height={15}></SvgIcon>
                                )
                            })
                        }
                        {
                            Array.from({ length: 5 - el.rate }).map((_, index) => {
                                return (
                                    <SvgIcon name="star" key={index} width={15} height={15}></SvgIcon>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

