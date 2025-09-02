import { FC } from "react"
import { Product } from "@/pages/Main/Home/dummy"
import { Button } from "@/components/Atoms/Button"

export const ProductShowCard: FC<{product: Product}> = ({product}) => {
    return (
        <div className='flex flex-col p-6 bg-primerose'>
            <img src={product.img}></img>
            <p className='text-blue font-medium'>{product.title}</p>
            <p className='mt-1 font-medium'>${ product.priceFrom.toFixed(2) }</p>
            <div className='flex mt-1'>
                {
                    Array.from({ length: product.rate}).map((_, idx) => {
                        return (
                            <img src='/svgs/star-full.svg' width={15} key={idx}></img>
                        )
                    })
                }
                {
                    Array.from({ length: 5 - product.rate }).map((_, index) => {
                        return (
                            <img src='/svgs/star.svg' width={15} key={index}></img>
                        )
                    })
                }
            </div>
            <Button variant='solid' className='mt-2 !bg-black hover:!bg-primary !w-33'>Add to cart</Button>
        </div>
    )
}