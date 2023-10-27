import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <>
    <div className='container mt-4 'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}> {greeting} </div>
    </>
  )
}