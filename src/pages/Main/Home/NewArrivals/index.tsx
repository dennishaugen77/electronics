import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { popularProducts } from '../dummy';
import { ProductCard } from '@/components/Parts/ProductCard';

import 'swiper/css';
import 'swiper/css/pagination';

export const NewArrivals = () => {
    return (
        <div className="max-width mx-auto flex flex-col">
            <p className="text-mxl font-bold">New Arriavals</p>
            <div className='my-20'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            popularProducts.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}><ProductCard product={product} key={index}/></SwiperSlide>            
                                )
                            })
                        }
                    </Swiper>
                </div>  
        </div>
    )
}