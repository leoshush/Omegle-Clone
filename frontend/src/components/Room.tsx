import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

function Room() {
  const [searchParams,setSearchParams]  =  useSearchParams();
  const name  = searchParams.get('name');
  useEffect(()=>{

  },[name])
  return (
    <h1>Hi {name}</h1>
  )
}

export default Room