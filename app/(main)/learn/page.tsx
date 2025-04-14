import { StickyWrapper } from "@/components/ui/sticky-wrapper";
import { FeedWrapper } from "@/components/ui/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/ui/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const [
        userProgress
    ] = await Promise.all(
        [userProgressData]
    );

    if (!userProgress|| !userProgress.activeCourse) { 
        redirect("/courses");
    }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
                My Sticky Sidebar
            </StickyWrapper>
            <FeedWrapper>
                <Header title = {userProgress.activeCourse.title}/>
                My Feed 
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;