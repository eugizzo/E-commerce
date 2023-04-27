import React from 'react'

const Languages = ({language ,onlanguagesChange}) => {
  return (
    <div>
      <label>select languages</label>
      {language}{onlanguagesChange}
    </div>
  )
}

export default Languages
