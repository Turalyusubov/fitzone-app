import React from 'react'
import { useEffect, useState } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Pagination from './Pagination'

export default function Exercises({ exercises, setExercises, bodyPart }) {
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = exercises.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className='p-4 sm:p-12'>
            <h4 className='ml-auto mr-auto capitalize text-center 
            sm:w-1/2 font-bold text-xl sm:text-2xl md:text-4xl mb-5 md:mb-12'>Showing Results</h4>
            <div className="exercises flex flex-wrap justify-center">
                {currentPosts.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </div>
            {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={exercises.length}
                paginate={paginate}
            /> */}
        </div>
    )
}
