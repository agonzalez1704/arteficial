'use client'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../../ui/button'
import { RenderLinks } from './helper'

const Sidebar = () => {
  const path = usePathname();
  return (
    <aside className='sidebar'>
      <div className="flex size-full flex-col gap-4">
        <Link href={'/'} className='sidebar-logo'>
          <Image src='/assets/images/logo-text.svg' alt='Logo' width={180} height={28} />
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {RenderLinks({
                links: navLinks.slice(0, 6),
                className: 'sidebar-nav_element group text-gray-700',
                activeClassname: 'bg-purple-600 text-white',
                activeImageClassname: 'brightness-200'
              })}
            </ul>
            <ul>
              {RenderLinks({
                links: navLinks.slice(6),
                className: 'sidebar-nav_element group text-gray-700',
                activeClassname: 'bg-purple-600 text-white',
                activeImageClassname: 'brightness-200'
              })}
              <li className='flex-center cursor-pointer gap-2 p-4 border-t border-slate-200 w-full mt-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-600 bg-cover'>
              <Link href={'/sign-in'}>
                Login
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar