import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { popularProducts, Product } from '../dummy';
import { ProductCard } from '@/components/Parts/ProductCard';

import 'swiper/css';
import 'swiper/css/pagination';

export const PopularProducts = () => {
    return (
        <div className='flex'>
            <div className='max-width mx-auto flex flex-col'>
                <p className='py-17 font-bold text-mxl'>Popular Products</p>
                <div>
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
                                    <SwiperSlide><ProductCard product={product} key={index}/></SwiperSlide>            
                                )
                            })
                        }
                    </Swiper>
                </div>  
            </div>
        </div>
    )
}

