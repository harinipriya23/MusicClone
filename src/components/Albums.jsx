import React from "react";
import { useNavigate } from "react-router-dom";

const Albums = ({ name, desc, image, id }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)}
     className="min-w-[180px] p-3 m-2 rounded cursor-pointer hover:bg-slate-800">
      <img className="rounded" src={image} />
      <p className="mt-2 font-semibold text-base">{name}</p>
      <p className=" text-slate-300 text-sm">{desc}</p>
    </div>
  );
};

export default Albums;
