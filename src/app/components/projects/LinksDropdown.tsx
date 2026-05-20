'use client'

import React, { useState } from 'react'
import { Project } from '@/app/lib/definitions'
import { BasicButton } from '../BasicButton'

interface LinksDropdownProps {
  proj: Project
}

const LinksDropdown:React.FC<LinksDropdownProps> = ({ proj }) => {

  const [ dropdownOpen, setDropdownOpen ] = useState<boolean>(false);

  return (
    <div className='relative flex-1'>
      <BasicButton text='Links' isButton={true} action={() => {setDropdownOpen(prev => !prev)}} className='w-full'/>
      {dropdownOpen && <div className='absolute top-full left-0 mt-1 z-10 bg-box-bg rounded-xl shadow-xl p-1'>
        {proj.links.map((link) => 
          <BasicButton key={link.name} text={link.name} isButton={false} href={link.url} className='block my-1'/>
        )}
      </div>}
    </div>
  )
}

export default LinksDropdown