import { SvgIcon } from "@/components/Atoms/SvgIcon"
import { Product } from "@/pages/Main/Home/dummy"
import { FC, useState } from "react"
import { Button } from "@/components/Atoms/Button"
import clsx from "clsx"

interface ProductCardProps {
    product: Product
}

export const ProductCard: FC<ProductCardProps> = ({product}) => {
    const [isOn, setOn] = useState(false);

    return (
        <div className={clsx("flex flex-col relative", isOn ? "z-30 card-shadow" : "z-0")} onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)}>
            <div className="mt-1">
                <img src={product.img} width={202} className="z-0"></img>
            </div>
            <p className="!text-center font-medium mt-1">{product.title}</p>
            <p className="!text-center my-3">${product.priceFrom.toFixed(2)}</p>
            <div className="flex">
                <div className="flex mx-auto pb-5">
                    {
                        Array.from({ length: product.rate}).map((_, idx) => {
                            return (
                                <SvgIcon name="star-full" width={15} height={15} key={idx} className="text-primary"></SvgIcon>
                            )
                        })
                    }
                    {
                        Array.from({ length: 5 - product.rate }).map((_, index) => {
                            return (
                                <SvgIcon name="star" width={15} height={15} key={index} className="text-primary"></SvgIcon>
                            )
                        })
                    }
                </div>
            </div>
            <div className={clsx(
                isOn
                    ? "translate-y-22 opacity-100"
                    : "translate-y-30 opacity-0",
                "absolute left-0 bottom-0 w-full py-3 px-2 flex flex-col bg-white card-bottom-shadow transform transition-all duration-500 ease-in-out z-20"
            )}>
                <Button variant="outline" className="mx-auto w-full"><p className="mx-auto">Select Options</p></Button>
                <div className="flex justify-center my-3 gap-2">
                    <p className="font-medium text-sm flex gap-1 items-center group hover:text-gray-500 cursor-pointer">
                        <SvgIcon name="heart1" className="text-black group-hover:text-gray-500" width={16} height={16}/>
                        Wishlist
                    </p>
                    <p className="font-medium text-sm flex gap-1 items-center cursor-pointer hover:text-primary">⇆&nbsp;Compare</p>
                </div>
            </div>
            
        </div>
    )
}