import {Sidebar} from "@/components/sidebar";


type Props = {
    children: React.ReactNode;
};

const MainLayout = ({
    children,
}: Props) => {
    return(
        <>
            <Sidebar className="hidden lg:flex"/>
            <main className="pl-0 lg:pl-[256px] h-full">
                <div className="bg-red-500 h-full">
                    {children}
                </div>
            </main>
            
        </>
    );
};

export default MainLayout;