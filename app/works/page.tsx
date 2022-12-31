import React from 'react'
import InfiniteLooper from '../components/InfiniteLooper'

function Works() {
  return (
    <InfiniteLooper speed={1} direction="right">
      <div className="contentBlock contentBlock--two">
        <i>PINO</i>
      </div>
    </InfiniteLooper>
  )
}

export default Works
