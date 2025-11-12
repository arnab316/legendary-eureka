import React from 'react'
const API_BASE_URL = "https://sima-unparenthetical-bicentennially.ngrok-free.dev"
const Scrap = () => {
  return (
    <div>

        <button className='' onClick={()=>{
window.open(`${API_BASE_URL}/user/factory-report`, '_blank');}}>Click me</button>
    </div>
  )
}

export default Scrap