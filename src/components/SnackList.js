import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Snack from './Snack'

const SnackList = ({snackData, handleCardShow}) => {
  const Snacks = snackData.map(snack => {
    return (
      <Snack
        key={snack.id}
        snack={snack}
        handleCardShow={handleCardShow}
      />
    )
  })

    return (
      <div className='snack-container'>
        {Snacks}
      </div>
    )
}

export default SnackList
