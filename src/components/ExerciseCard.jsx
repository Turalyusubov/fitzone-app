import React from 'react'
import { Link } from 'react-router-dom'

export default function ExerciseCard({ exercise }) {
    return (
        <div className='border-t-4 w-full bg-white sm:w-5/12 lg:w-3/12 xl:w-2/12 2xl:w-1/12 overflow-hidden rounded-md shadow border-orange-600 m-6'>
            <Link
                className=''
                to={`/exercise/${exercise.id}`}
            >
                <img src={exercise.gifUrl}
                    className='w-full'
                    alt={exercise.name + ' image'}
                    loading='lazy'
                />
                <div className="bg-white p-2 flex gap-2">
                    <span className='capitalize flex items-center text-white cursor-pointer hover:bg-red-400 text-sm rounded-full px-3 py-1 bg-red-300'>{exercise.bodyPart}</span>
                    <span className='capitalize flex items-center text-white cursor-pointer hover:bg-yellow-400 text-sm rounded-full px-3 py-1 bg-yellow-300'>{exercise.target}</span>
                </div>

                <p className='bg-white capitalize p-2 font-bold'>{exercise.name}</p>
            </Link>
        </div>
    )
}
