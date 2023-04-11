import React, { useEffect } from 'react'
import { useFetcher } from 'react-router-dom'

export default function Pagination({ data, setItemsToShow, itemsPerPage, currentPage, setCurrentPage, setPages, pages, bodyPart }) {
    const pageCount = data.length / itemsPerPage - Math.floor(data.length / itemsPerPage) != 0 ?
        Math.floor(data.length / itemsPerPage) + 1
        : Math.floor(data.length / itemsPerPage)
    const intervalStart = (currentPage - 1) * itemsPerPage
    const intervalEnd = intervalStart + itemsPerPage

    useEffect(() => {
        const pages = Array.from({ length: pageCount }, (_, index) => index + 1)
        setPages(pages)
        setCurrentPage(1)
    }, [data])

    useEffect(() => {
        setItemsToShow(data.slice(intervalStart, intervalEnd))
        setCurrentPage(1)
    }, [bodyPart])

    useEffect(() => {
        setItemsToShow(data.slice(intervalStart, intervalEnd))
    }, [currentPage, bodyPart, data])

    const previousPage = () => {
        setCurrentPage(currentPage - 1 === 0 ? 1 : currentPage - 1)
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1 > pageCount ? pageCount : currentPage + 1)
    }

    console.log(currentPage)

    const firstPageNum = 1
    const middleLeftPageNum = currentPage <= 4 ? 2 : '...'
    const leftPageNum = currentPage <= 4 ? 3 : (currentPage >= pageCount - 3 ? pageCount - 4 : currentPage - 1)
    const centralPageNum = currentPage <= 4 ? 4 : (currentPage >= pageCount - 3 ? pageCount - 3 : currentPage)
    const rightPageNum = currentPage <= 4 ? 5 : (currentPage >= pageCount - 3 ? pageCount - 2 : currentPage + 1)
    const middleRightPageNum = currentPage >= pageCount - 3 ? pageCount - 1 : '...'

    const paginationArray = [firstPageNum, middleLeftPageNum, leftPageNum, centralPageNum, rightPageNum, middleRightPageNum, pageCount]

    return (
        <div className='text-center flex gap-1 justify-center mt-4'>
            <div className="flex gap-2">
                {currentPage !== 1 && <p className='cursor-pointer hover:bg-orange-300 hover:-translate-x-2 transition duration-300 flex items-center bg-orange-200 px-1 pl-4 pr-2 rounded-l-full disabled' onClick={currentPage !== 1 ? previousPage : ''}>
                    <span >Previous</span>
                </p>}
                {pageCount > 9 ?
                    paginationArray.map(pageNum =>
                        <span
                            onClick={() => pageNum !== '...' ? setCurrentPage(pageNum) : ''}
                            className={pageNum === '...' ? 'disabled' : (currentPage == pageNum ? 'bg-orange-600 text-yellow-50 rounded-full px-3 py-1' :
                                'cursor-pointer hover:bg-orange-300 transition duration-300 bg-orange-200 rounded-full px-3 py-1')}>
                            {pageNum}</span>) :
                    pages.map(pageNum =>
                        <span
                            onClick={() => pageNum !== '...' ? setCurrentPage(pageNum) : ''}
                            className={currentPage == pageNum ? 'bg-orange-600 text-yellow-50 rounded-full px-3 py-1' :
                                'cursor-pointer hover:bg-orange-300 transition duration-300 bg-orange-200 rounded-full px-3 py-1'}
                        >{pageNum}</span>)
                }
                {currentPage !== pageCount && <p className='cursor-pointer hover:bg-orange-300 hover:translate-x-2 transition duration-300 flex items-center bg-orange-200 px-1 pr-4 pl-2 rounded-r-full' onClick={currentPage !== pageCount ? nextPage : ''}>
                    <span >Next</span>
                </p>}
            </div>

        </div>
    )
}
