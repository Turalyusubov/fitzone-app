import React, { useRef } from 'react'
import BodyPart from './BodyPart'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export default function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
    const scrollBarRef = useRef(null);

    const handleLeftArrowClick = () => {
        scrollBarRef.current.scrollLeft -= 500;
    };

    const handleRightArrowClick = () => {
        scrollBarRef.current.scrollLeft += 500;
    };

    return (
        <div className='mt-12'>
            <div
                className="flex gap-5 md:gap-10 overflow-x-auto scrollbar-hide 
                snpa-start snap-x snap-mandatory scroll-smooth p-2"
                ref={scrollBarRef}
            >
                {data.map((item) => (
                    <div className=""
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                    >
                        <BodyPart
                            item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                        />
                    </div>
                ))}
            </div>
            <div className="arrows flex justify-center gap-10 mt-10">
                <div
                    className="left-arrow text-orange-600 text-4xl cursor-pointer"
                    onClick={handleLeftArrowClick}
                >
                    <BsArrowLeft />
                </div>
                <div
                    className="right-arrow text-orange-600 text-4xl cursor-pointer"
                    onClick={handleRightArrowClick}
                >
                    <BsArrowRight />
                </div>
            </div>

        </div>
    )
}