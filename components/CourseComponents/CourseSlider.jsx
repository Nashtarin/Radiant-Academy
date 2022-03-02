import React from 'react';
import CourseCard from './CourseCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CourseSlider = ({allCourses}) => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <>
            <div className="course-card">
                <Slider {...settings}>
                    {
                        allCourses?.data?.map(course => (
                            <CourseCard key={course._id} course={course}/>
                        ))
                    }
                </Slider> 
                <style jsx global>
                    {`
                        .card-single{
                            width: 90% !important;
                        }
                        .slick-list{
                            padding-bottom: 4rem;
                        }
                        .slick-prev:before {
                            color: #32007E;
                        }
                        
                        .slick-next:before {
                            color: #32007E;
                        }
                        
                        .slick-slide:focus {
                            outline: none;
                        }
                        
                        .slick-dots {
                            bottom: 0px;
                        }
                        
                        .slick-dots li button:before {
                            font-size: 0.75rem;
                            opacity: 1;
                            color: #CCDEE2;
                        }
                        
                        .slick-dots li.slick-active button:before {
                            opacity: .75;
                            color: #F2522F;
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default CourseSlider;