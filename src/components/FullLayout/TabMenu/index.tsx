import { menu } from "./dummy"

export const TabMenu = () => {
    return (
        <div className="w-full border-b-1 border-gray-200">
            <div className="flex max-width mx-auto">
                <div className="flex mx-auto">
                    {
                        menu.map((el, idx) => {
                            return <div className="p-3" key={idx}><p className="capitalize text-sm">{el.field}</p></div>
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

