import React ,{useState}from 'react'

const Field = () => {
    const [value ,setValue]=useState('')
const submitHandle=(e)=>{
  e.preventDefault()
}
     
  return (
    <div className='filed'>
      <h1>Translate App</h1>
   <label>Enter English</label>
   <form onSubmit={submitHandle}>
<input
className='input'
value={value}
onChange={((e)=>setValue(e.target.value))}/>
</form>

    </div>
  )
}

export default Field
