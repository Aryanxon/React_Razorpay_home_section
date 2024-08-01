import React from 'react'

        

function Slideroptions({text, icon, button}) {
  return (
    <>
        <li className='text-white text-xs cursor-pointer my-1 py-2 px-2 hover:bg-slate-100/10 hover:border-l-2 border-green-400 flex items-center gap-2 w-full'>{icon}{text}
        <div className='w-6'>{button}</div>
        </li>
    </>
  )
}

export default Slideroptions
