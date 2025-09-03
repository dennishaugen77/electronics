import { Button } from "../Atoms/Button"
import { SvgIcon } from "../Atoms/SvgIcon"

export const Header = () => {
    return (
        <div className="flex">
            <div className="flex flex-col max-width mx-auto">
                <div className="flex">
                    <p className="ml-auto text-xs">orders</p>
                </div>
                <div className="flex py-7.5">
                    <img src="/images/electronics1.png" width={250}></img>
                    <div className="flex flex-1">
                        <div className="flex py-1 gap-1 mx-auto max-w-[550px] w-full">
                            <input 
                                placeholder="Search...."
                                className="outline-0 border-1 border-gray-200 px-[0.8rem] py-[0.3rem] min-h-15 w-full input-shadow  rounded-sm"
                            ></input>
                            <Button variant="solid" className="!h-full ">
                                <SvgIcon name="search" width={23} height={23}></SvgIcon>
                            </Button>
                        </div>
                    </div>
                    
                    <div className="flex gap-5 items-center">
                        <SvgIcon name="heart1" width={30} height={30} className="cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out"></SvgIcon>
                        <SvgIcon name="user" width={34} height={34} className="cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out"></SvgIcon>
                        <SvgIcon name="shopping" width={35} height={35} className="cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out"></SvgIcon>
                    </div>
                </div>
            </div>
        </div>
        
    )
}