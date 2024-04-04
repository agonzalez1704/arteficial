'use client'
import React, { Fragment } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { RenderLinks } from './helper'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = () => {
  const path = usePathname();
  return (
    <header className="header">
      <Link href="/" className='flex items-center gap-2 md:py-2'>
        <Image src="/assets/images/logo-text.svg" alt="Logo" width={180} height={28} />
      </Link>
      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />

          <Sheet>
            <SheetTrigger>
              <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} className='cursor-pointer ml-2' />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <Fragment>
                <Image src="/assets/images/logo-text.svg" alt="Logo" width={152} height={23} />
                <ul className='header-nav_elements'>
                  {RenderLinks({
                    links: navLinks,
                    className: 'p-18 flex whitespace-nowrap text-dark-700',
                    activeClassname: 'gradient-text'
                  })}
                </ul>
              </Fragment>
            </SheetContent>
          </Sheet>

        </SignedIn>
      </nav>
    </header>
  )
}

export default MobileNav