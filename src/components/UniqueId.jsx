import {useId} from 'react'

const UniqueId = () => {
   const uid = useId();
  return (
    <div className='ml-20 mt-20'>
        <label className='text-2xl' htmlFor="email" id= {uid+"-email"} >Email: </label>
        <input className='px-10 py-3 border-2 bg-amber-400' type='email' id={uid+"-email"}/>
        <br/>
        <label className='text-2xl' htmlFor="checkbox" id={uid}>Email: </label>
        <input className='px-10 py-3 border-2 bg-amber-400' type='checkbox' id={uid}/>
    </div>
  )
}

export default UniqueId
