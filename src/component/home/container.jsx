import React from 'react'

export default function container({className , children}) {
  return (
    <div className={`max-w-1200px mx-auto ${className}`}>
        {children}
    </div>
  )
}
