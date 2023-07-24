import React from 'react'

const Slide = ({percent}) => {
  return (<>
    <div style={{width:`${percent}%`,backgroundColor:'#0075FF',height:'20px',borderRadius:'50px'}} className={``}>
        </div> 
        {/* <div className={`rounded-xl block h-4 w-[${percent}%] bg-slate-600`}></div> */}
    </> )
}

export default Slide