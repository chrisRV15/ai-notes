import Link from 'next/link'
import Image from 'next/image'
import { shadow } from '@/styles/utills'
import { Button } from './ui/button';
import DarkModeToggle from './DarkModeToggle';
import { LogOut } from 'lucide-react';
import LogoutButton from './LogoutButtton';


function Header() {
    const user = 1; 
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
        style={{
            boxShadow: shadow
        }}>
        <Link href="/">
            <Image
                src="/logo.png"
                alt="AI Notes Logo"
                width={50}
                height={50}
                className='rounded-full'
                priority
                />
            
            <h1 className='flex flex-col text-2xl font-semibold leading-6'>
                AI-<span>Notes</span>
            </h1>
        </Link>

        <div className='flex gap-4'>
            {user ? (
                <LogoutButton />
            ) : (
                <>
                <Button asChild>
                    <Link href="/sign-up" className='hidden sm:block'>
                        Sign Up
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                </Button>
                </>
            )}
            <DarkModeToggle />
        </div>
    </header>
  )
}

export default Header