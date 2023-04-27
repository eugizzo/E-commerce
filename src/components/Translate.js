import React, { useTransition } from 'react'

const Translate = (language, text) => {
    const [Translated]=useTransition(text, language)
  return (
    <div>
      <label className='label'>output</label>
      <h1 className='title'>{Translated}</h1>
    </div>
  )
}

export default Translate
