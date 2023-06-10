import React, { useState } from 'react'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'


const Navbar = () => {

  const [active, setActive] = useState('')
  const [toogle, setToogle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex justify-evenly item-center py-3 fixed top-0 z-20 bg-black`}>

      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title
              ? 'text-tertiary'
              : 'text-secondary'
              } text-[18px] font-ledger `}
            onClick={() => setActive(link.title)}>

            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toogle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToogle(!toogle)}
        />
      </div>

      <div className={`${!toogle ? 'hidden' : 'flex'} absolute top-20 right-0 rounded-xl bg-black p-6 mx-4 my-2 min-w-[140px] z-10`}>
        <ul className='list-none flex flex-col gap-4'>

          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? 'text-tertiary'
                : 'text-secondary'
                } font-ledger cursor-pointer text-[16px] `}
              onClick={() => {
                setToogle(!toogle)
                setActive(link.title)
              }}>

              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
      </div>
    </nav >
  )
}

export default Navbar