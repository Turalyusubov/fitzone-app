import React from 'react'
import { useEffect, useState } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Pagination from './Pagination'

export default function Exercises({ exercises, setExercises, bodyPart }) {
    const [itemsToShow, setItemsToShow] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []

            if (bodyPart === 'all') {
                exercisesData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exercisesOptions
                )
            } else {
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exercisesOptions
                )
            }

            setExercises(exercisesData)
        }

        fetchExercisesData()
    }, [bodyPart])

    useEffect(() => {
        if (!itemsToShow) {
            setItemsToShow(exercises.slice(0, 8))
        }
    }, [])

    return (
        <div className='p-4 sm:p-12' id='exercises-section'>
            <h4 className='ml-auto mr-auto capitalize text-center 
            sm:w-1/2 font-bold text-xl sm:text-2xl md:text-4xl mb-5 md:mb-12'>Showing Results</h4>
            <div className="exercises flex flex-wrap justify-center">
                {itemsToShow.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </div>
            <Pagination
                data={exercises}
                itemsPerPage={8}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setItemsToShow={setItemsToShow}
                setPages={setPages}
                pages={pages}
            />
        </div>
    )
}
