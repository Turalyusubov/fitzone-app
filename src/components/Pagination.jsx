import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    let dots = false;
  
    return (
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <p
              onClick={() => paginate(1)}
              className='page-link'
              aria-label='Previous'
            >
              <span aria-hidden='true'>&laquo;</span>
            </p>
          </li>
          {pageNumbers.map(number => {
            if (number === 1 || number === totalPosts || (number >= paginate() - 2 && number <= paginate() + 2)) {
              dots = false;
              return (
                <li key={number} className={`page-item ${paginate() === number ? 'active' : ''}`}>
                  <p onClick={() => paginate(number)} className='page-link'>
                    {number}
                  </p>
                </li>
              );
            } else if (!dots) {
              dots = true;
              return (
                <li key={number} className={`page-item disabled`}>
                  <p className='page-link'>
                    ...
                  </p>
                </li>
              );
            }
          })}
          <li className='page-item'>
            <p
              onClick={() => paginate(pageNumbers.length)}
              className='page-link'
              aria-label='Next'
            >
              <span aria-hidden='true'>&raquo;</span>
            </p>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav>
            
//             <ul className='pagination'>
//                 <li className='page-item'>
//                     <p
//                         onClick={() => paginate(1)}
//                         className='page-link'
//                         aria-label='Previous'
//                     >
//                         <span aria-hidden='true'>&laquo;</span>
//                     </p>
//                 </li>
//                 {pageNumbers.map(number => (
//                     <li key={number} className='page-item'>
//                         <p onClick={() => paginate(number)} className='page-link'>
//                             {number}
//                         </p>
//                     </li>
//                 ))}
//                 <li className='page-item'>
//                     <p
//                         onClick={() => paginate(pageNumbers.length)}
//                         className='page-link'
//                         aria-label='Next'
//                     >
//                         <span aria-hidden='true'>&raquo;</span>
//                     </p>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Pagination;
