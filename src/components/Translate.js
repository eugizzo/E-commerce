import React, { useTransition } from 'react'

const Translate = (languages, text) => {
    const [Translated]=useTransition(text, languages)
  return (
    <div>
      <label className='label'>output</label>
      <h1 className='title'>{Translated}</h1>
    </div>
  )
}

export default Translate
