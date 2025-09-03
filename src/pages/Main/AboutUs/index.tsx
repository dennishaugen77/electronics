import { Button } from "@/components/Atoms/Button"
import { customers, details } from "./dummy"
import clsx from "clsx"

export const AboutUs = () => {
    return (
        <div className="flex px-2.5">
            <div className="max-width mx-auto flex flex-col">
                <div className='flex flex-col justify-center bg-[url("/images/abtus-1.jpg")] bg-no-repeat bg-cover bg-center min-h-100 mt-6.5 pl-6 relative'>
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient"></div>
                    
                    <div className="relative flex flex-col  gap-5">
                        <h1>Empowering Your Digital World</h1>
                        <p className="text-lg w-1/2 font-medium">Innovative Electronics, Unmatched Quality – Your Trusted Tech Partner</p>
                    </div>
                </div>
                <div className="flex flex-col gap-17 mt-13">
                    {
                        details.map((detail, idx) => {
                            return  (
                                <div className={clsx(
                                    { "flex-row-reverse":idx%2 },
                                    "flex items-center gap-3")}
                                   key={idx}
                                >
                                    <div className={clsx(
                                        idx%2 ? " pl-6.5" : 'pr-6.5',
                                        "flex flex-col w-1/2")}
                                    >
                                        <h1>{detail.title}</h1>
                                        <p className="py-7 capitalize">{detail.describe}</p>
                                        <div className="flex">
                                        <Button variant="solid" className="!text-black hover:!bg-primary !py-5.5">Know More</Button>

                                        </div>
                                    </div>
                                    <div className="flex-1 relative"> 
                                        <img src={detail.img} className="relative z-20"></img>
                                        <div className="absolute z-10 w-full h-full bg-primary top-3 -left-3"></div>
                                    </div>
                                </div>
                            ) 
                        })
                    }
                </div>
                <div className="flex flex-col my-15">
                    <h1 className="capitalize">See why people trust us</h1>
                    <div className="grid grid-cols-3 gap-6 mt-10">
                        {
                            customers.map((el, index) => {
                                return( 
                                    <div className="bg-secondary px-6 py-4 flex flex-col items-center rounded-sm" key={index}>
                                        <p className="!text-center font-medium">{el.description}</p>
                                        <img src={el.img} width={90} className="rounded-full border-1 border-black my-4"></img>
                                        <p className="text-size-2 font-semibold">{el.name}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}