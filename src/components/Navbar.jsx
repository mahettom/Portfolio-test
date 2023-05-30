import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toogle, setToogle] = useState(false)



  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-black`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>
          <p className={`text-white text-[18px] font-ledger cursor-pointer`}>Home</p>
        </Link>

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

      </div>

    </nav>
  )
}

export default Navbar