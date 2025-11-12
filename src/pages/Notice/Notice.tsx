import React from 'react'
import { Marquee } from "@/components/ui/marquee"
const Notice: React.FC = () => {
  return (
    <div>
    <Marquee >
  <span className='text-red-800'>Note</span>
  <span>This is a system generated notice board. All the notices displayed here are for information purposes only. Please refer to the official communications for any critical updates.
  </span>
</Marquee>
    </div>
  )
}

export default Notice