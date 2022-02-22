import React from 'react';
import ArticleSection from '../ArticleSection/ArticleSection';
import AuthorMorePostSection from '../AuthorMorePostSection/AuthorMorePostSection';
import ProfileSection from '../ProfileSection/ProfileSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const SingleForumSection = () => {
    return (
        <div>
            <div className="grid grid-rows-1 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[minmax(600px,_1fr)_350px] gap-2 pt-10 pb-12 px-8 sm:px-20 md:px-20">
                <ArticleSection />
                <div>
                    <ProfileSection />
                    <AuthorMorePostSection />
                </div>
            </div>
            <div className="px-12 lg:px-20">
                <ReviewSection />
            </div>
        </div>
    );
};

export default SingleForumSection;