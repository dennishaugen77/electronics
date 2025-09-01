import type { ReactNode, FC } from "react"
import { TabMenu } from "./TabMenu"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface FullLayoutProps {
    children: ReactNode
}

export const FullLayout: FC<FullLayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col h-full">
            <Header/>
            <TabMenu/>
            {children}
            <Footer/>
        </div>
    )
}