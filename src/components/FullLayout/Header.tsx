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
                                <img src={'/svgs/search.svg'} width={23}></img>
                            </Button>
                        </div>
                    </div>
                    
                    <div className="flex gap-5">
                        <img src="/svgs/heart.svg" width={30}></img>
                        <img src="/svgs/user.svg" width={34}></img>
                        <img src="/svgs/shopping.svg" width={35}></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}