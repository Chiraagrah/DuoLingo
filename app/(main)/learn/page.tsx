import { StickyWrapper } from "@/components/ui/sticky-wrapper";
import { FeedWrapper } from "@/components/ui/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/ui/user-progress";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={{ title: "Spanish", imageSrc: "/es.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
                My Sticky Sidebar
            </StickyWrapper>
            <FeedWrapper>
                <Header title = "Spanish" />
                My Feed 
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;