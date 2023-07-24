import React, { useState } from 'react'
import Slide from './Slide'

const Progress = () => {
    const [percent,setPercent]=useState(0)
  return (
    <div>
<input defaultValue={0} type='range'  min={0} max={100} onChange={(e)=>{
    setPercent(e.target.value)
    console.log(e.target.value)
}} />

<div className='h-[20px] bg-white w-44 rounded-xl ml-10'>
  <Slide percent={percent}/>

</div>
<span className='text-white'>
{`rounded-xl block h-[20px] w-[${percent}%] bg-slate-600`}
</span>

    </div>
  )
}

export default Progress