import { useParams } from "react-router-dom"
import { brandOptions, categoryOptions, connectivityOptions, headphoneTypeOptions, sortOptions } from "./dummy";
import Nouislider from 'nouislider-react';
import { useState } from "react";
import { Checkbox } from "@/components/Atoms/Checkbox";
import { slideProducts } from "../Home/dummy";
import { SvgIcon } from "@/components/Atoms/SvgIcon";
import { ProductCard } from "@/components/Parts/ProductCard";
import 'nouislider/dist/nouislider.min.css';
import MultiRangeSlider from "@/components/Atoms/RangeSlider";
import { changeToTitle } from "@/components/utils/helper";

export const Categories = () => {
    const params = useParams();

    return (
        <div className="flex px-2.5 pt-7.5">
            <div className="max-width mx-auto flex flex-col">
                <div className="pb-3">
                    <h1 className="capitalize">{ changeToTitle(params.category) }</h1>
                    <div className="flex">
                        <p className="text-gray-500 cursor-pointer">Home&nbsp;/&nbsp;</p>
                        <p className="text-gray-500 capitalize cursor-pointer">{ changeToTitle(params.category) }</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-2/9 flex flex-col mr-10">
                        <ByCategories/>
                        <ByPrice/>
                        <ByBrand/>
                        <ByConnectivity/>
                        <ByHeadphoneType/>
                    </div>
                    <div className="flex flex-col flex-1 pr-1 py-2">
                        <div className="flex justify-between">
                            <p>Showing all {slideProducts.length} results</p>
                            <div className="flex pr-1 items-center gap-3">
                                <p>Sort By:</p>
                                <div className="relative ">
                                    <select className="cursor-pointer text-cbase text-gray-500 capitalize appearance-none w-full rounded bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none">
                                        <option value="" selected disabled>Default sorting</option>
                                        {
                                            sortOptions.map((option, idx) => {
                                                return <option value={option.key} key={idx}>{option.value}</option>
                                            })
                                        }
                                    </select>
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <SvgIcon name='chevron-down' width={15}></SvgIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-5 gap-4">
                            {
                                slideProducts.map((product, index) => {
                                    return (
                                        <ProductCard product={product} key={index}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ByCategories = () => {
    return (
        <div className="flex flex-col">
            <h2 className="mb-0.5">By Categories</h2>
            <div className="flex mb-6 mt-2 pb-5 border-b border-gray-300">
                <div className="relative">
                    <select className="cursor-pointer text-cbase text-gray-500 capitalize appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-dotted">
                        <option value="" selected disabled>Select an option</option>
                        {
                            categoryOptions.map((option, idx) => {
                                return <option value={option.value} key={idx}>{option.field}</option>
                            })
                        }
                    </select>
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                        <SvgIcon name="chevron-down" width={20}/>
                    </div>
                </div>
                <div className="bg-gray-200 flex items-center px-1.5">
                    <img src="/svgs/chevron-right.svg" width="22"></img>
                </div>
            </div>
        </div>
    )
}

const ByPrice = () => {

    return (
            <div className="h-45 border-b border-gray-300">
                <h2 className="pb-4">By Price</h2>
                <MultiRangeSlider
                    min={33}
                    max={149}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
                
            </div>
    )
}

const ByBrand = () => {
    return (
        <div className="flex flex-col border-b border-gray-300">
            <h2 className="mt-4 mb-2">By Brand</h2>
            <div className="my-3 flex flex-col">
                {
                    brandOptions.map((option, idx) => {
                        return <Checkbox key={idx} defaultChecked={false} label={option.field} className="my-1"/>
                    })
                }
            </div>
            <div className="flex mb-4">
                <p className="underline text-sm ml-auto">Reset</p>
            </div>
        </div>
    )
}

const ByConnectivity = () => {
    return (
        <div className="flex flex-col border-b border-gray-300">
            <h2 className="mt-4 mb-2">By Connectivity</h2>
            <div className="my-3 flex flex-col">
                {
                    connectivityOptions.map((option, idx) => {
                        return <Checkbox key={idx} defaultChecked={false} label={option.field} className="my-1"/>
                    })
                }
            </div>
            <div className="flex mb-4">
                <p className="underline text-sm ml-auto">Reset</p>
            </div>
        </div>
    )
}

const ByHeadphoneType = () => {
    return (
        <div className="flex flex-col border-b border-gray-300">
            <h2 className="mt-4 mb-2">By Headphone Type</h2>
            <div className="my-3 flex flex-col">
                {
                    headphoneTypeOptions.map((option, idx) => {
                        return <Checkbox key={idx} defaultChecked={false} label={option.field} className="my-1"/>
                    })
                }
            </div>
            <div className="flex mb-4">
                <p className="underline text-sm ml-auto">Reset</p>
            </div>
        </div>
    )
}