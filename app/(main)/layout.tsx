import {Sidebar} from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";


type Props = {
    children: React.ReactNode;
};

const MainLayout = ({
    children,
}: Props) => {
    return(
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex"/>
            <main className="pl-0 lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1050px] mx-auto pt-6 h-full">
                    {children}
                </div>
            </main>
            
        </>
    );
};

export default MainLayout;