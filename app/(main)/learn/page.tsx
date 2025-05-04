import { StickyWrapper } from "@/components/ui/sticky-wrapper";
import { FeedWrapper } from "@/components/ui/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/ui/user-progress";
import { 
    getUserProgress,
    getUnits,
    getCourseProgress,
    getLessonPercentage, 
    getUserSubscription
} from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const unitsData = getUnits();
    const CourseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        units,
        courseProgress,
        LessonPercentage,
        userSubscription,
    ] = await Promise.all(
        [
            userProgressData,
            unitsData,
            CourseProgressData,
            lessonPercentageData,
            userSubscriptionData,
        ]
    );

    if (!userProgress|| !userProgress.activeCourse) { 
        redirect("/courses");
    }
    if (!courseProgress) {
        redirect("/courses");
    }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={!!userSubscription?.isActive}
                />
                My Sticky Sidebar
            </StickyWrapper>
            <FeedWrapper>
                <Header title = {userProgress.activeCourse.title}/>
                 {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson}
                            activeLessonPercentage={LessonPercentage}
                        />
                    </div>
                 ))}
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;