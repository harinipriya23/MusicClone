import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongPlayer = ({image,name,desc,id}) => {
  const {songWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>songWithId(id)} className="min-w-[180px] p-3 m-2 rounded cursor-pointer hover:bg-slate-800">
    <img className="rounded" src={image} />
    <p className="mt-2 font-semibold text-base">{name}</p>
    <p className=" text-slate-300 text-sm">{desc}</p>
  </div>
  )
}

export default SongPlayer