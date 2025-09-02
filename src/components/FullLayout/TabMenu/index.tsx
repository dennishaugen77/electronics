import { useNavigate } from "react-router-dom"
import { menu } from "./dummy"

export const TabMenu = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full border-b-1 border-gray-200">
            <div className="flex max-width mx-auto">
                <div className="flex mx-auto">
                    {
                        menu.map((el, idx) => {
                            return <div className="p-3 cursor-pointer" key={idx} onClick={() => navigate(el.link)}><p className="capitalize text-sm hover:text-primary transition-colors duration-200 ease-in">{el.field}</p></div>
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

