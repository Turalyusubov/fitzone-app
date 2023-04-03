import React from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercies from '../components/SearchExercies'

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <SearchExercies />
            <Exercises />
        </div>
    )
}
