"use client";

import Announcements from "@/components/Announcements";
import Quiz from "@/components/Quiz";

const QuizPage = () => {
    return (
        <div className="h-screen p-4 flex gap-4 flex-col xl:flex-row">
            {/* LEFT */}

            <div className="h-full xl:w-2/3 bg-white p-4 rounded-md">
                <Quiz />
            </div>

            {/* RIGHT */}
            <div className="xl:w-1/3 flex flex-col gap-8">
                <Announcements />
            </div>
        </div>
    );
};

export default QuizPage;
