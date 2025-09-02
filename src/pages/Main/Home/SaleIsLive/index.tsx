import { Button } from "@/components/Atoms/Button"
import { Product, saleLiveProducts } from "../dummy"
import { FC, useState } from "react"
import clsx from "clsx"

export const SaleIsLive = () => {
    return (
        <div className="flex flex-col max-width mx-auto">
            <p className="text-mxl font-bold">Sale Is Live</p>
            <div className="flex gap-5">
                <div className="w-[39%]">
                    <LiveProductCard product={saleLiveProducts[0]}/>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-5">
                    {
                        saleLiveProducts.slice(1).map((product, index) => {
                            return (
                                <LiveProductCard product={product} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const LiveProductCard: FC<{product: Product}> = ({ product }) => {
    const [isOn, setOn] = useState(false);

    return (
        <div 
            className="bg-primerose-md p-3 relative h-full" 
            onMouseEnter={() => setOn(true)} 
            onMouseLeave={() => setOn(false)}
        >
            <div className="relative w-full">
                <img src={product.img} className="w-full"></img>
                <div className="absolute w-full -right-3 top-25">
                    <Button variant="solid" className={clsx(isOn  ? "!opacity-100 !pointer-events-auto" : "opacity-0 pointer-events-none ", " transition-opacity duration-300 !absolute right-3 bottom-5 !bg-black hover:!bg-primary !p-[7px] !rounded-full")}>
                        <img src="/svgs/heart-2.svg" width={20}></img>
                    </Button>
                </div>
                <div className="absolute w-full -right-3 top-35">
                    <Button variant="solid" className={clsx(isOn  ? "!opacity-100 !pointer-events-auto" : "opacity-0 pointer-events-none ", " transition-opacity duration-300 !absolute right-3 bottom-5 !bg-black hover:!bg-primary !p-[7px] !rounded-full")}>
                        <img src="/svgs/repeat.svg" width={20}></img>
                    </Button>
                </div>
            </div>
            <div className="flex py-2">
                <div className='flex mx-auto'>
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
            </div>
            <p className="w-20 text-blue hover:text-black cursor-pointer font-semibold truncate">{product.title}</p>
            <p className="font-medium">${product.priceFrom.toFixed(2)}</p>
            <Button variant="solid" className="!absolute right-3 bottom-5 !bg-black hover:!bg-primary !p-2 !rounded-full">
                <img src="/svgs/cart.svg" width={18}></img>
            </Button>
        </div>
    )
}