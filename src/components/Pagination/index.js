import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Pagination.scss'

class Pagination extends Component {
  render() {
    const { page = 1, total_results } = this.props.data
    const isVisiblePage = total_results < 20

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(total_results / 20); i++) {
      pageNumbers.push(i)
    }
    return (
      <>
        {!isVisiblePage &&
          <div className="pagination">
            <span>&laquo;</span>
            {
              pageNumbers.map(number => {
                if (number === 1 || number === total_results || (number >= page - 2 && number <= page + 2)) {
                  return (
                    <Link
                      aria-label={`pagination-${page}`}
                      accesskey={`pagination-${page}`}
                      key={number}
                      className={ page === number ? 'active' : null }
                      onClick={() => this.props.makeHttpRequestWithPage(number) }
                      to={`/movie?page=${number}`}>{number}   
                    </Link>
                  )
                }
              })
            }
            <span>&raquo;</span>
          </div>
        }
      </>
    )
  }
}

export default Pagination