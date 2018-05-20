import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Snack from './Snack'

const SnackList = ({snackData}) => {
  const Snacks = snackData.map(snack => {
    console.log(snack.id)
    return (
      <Snack
        key={snack.id}
        snack={snack}
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
