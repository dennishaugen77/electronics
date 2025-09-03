import { popularCategories } from "../dummy"

export const PopularCategories = () => {
    return (
        <div className="flex">
            <div className="flex flex-col mx-auto max-width ">
                <p className="py-15 text-mxl font-semibold">Popular Categories</p>
                <div className="flex justify-between">
                    {
                        popularCategories.map((category, index) => {
                            return (
                                <div key={index} className="flex flex-col">
                                    <img src={category.img} width={200}/>
                                    <p className="!text-center font-medium text-lg">{category.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}