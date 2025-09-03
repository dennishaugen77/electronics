import { moreDetails } from "../dummy"

export const More = () => {
    return (
     <div className="max-width mx-auto grid grid-cols-3 my-20">
        {
            moreDetails.map((el, index) => {
                return (
                    <div className="flex flex-col items-center justify-center" key={index}>
                        <img src={el.icon} width={50}></img>
                        <p className="text-mxl font-semibold">{ el.title }</p>
                        <p className="text-disable my-1">{ el.detail }</p>
                        <p className="cursor-pointer underline text-xs font-medium mt-5">{ el.tag }</p>
                    </div>
                )
            })
        }
     </div>
    )
}