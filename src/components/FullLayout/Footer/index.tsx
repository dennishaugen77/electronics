import { footerDetails, links } from "./dummy"

export const Footer = () => {
    return (
        <div className="w-full flex flex-col bg-background">
            <div className="w-full flex border-t-1 border-b-1 border-gray-200">
                <div className="max-width mx-auto">
                    <div className="grid grid-cols-4 py-15">
                        {
                            footerDetails.map((el, index) => {
                                return (
                                    <div className="px-3.5 flex flex-col" key={index}>
                                        <h2 className="mb-[15px]">{ el.title }</h2>
                                        { el.detail && <p className="text-sm">{ el.detail }</p> }
                                        { el.sublist?.map((s, idx) => (
                                            <div key={idx}>
                                                <p className="text-sm">{ s?.field }</p>
                                                { !!s.img && <img src={s.img} width={202}></img> }
                                            </div>
                                        )) }
                                    </div>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <div className="max-width mx-auto justify-between py-3 flex">
                    <div className="divide-x-1 flex">
                        <p>Copyright | Th Shop Mania | Developed by ThemeHunk</p>
                        
                    </div>
                    <div className="flex">
                        {
                            links.map((el, idx) => {
                                return (
                                    <div className="px-[7px] py-[5px]" key={idx}>
                                        <img src={el.img} width={16}/>
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