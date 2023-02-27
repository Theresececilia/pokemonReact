import React from 'react'
import classes from './Pagination.module.css'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button className={classes.button} onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button className={classes.button} onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
