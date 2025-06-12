import Link from 'next/link'
import Image from 'next/image'
import { shadow } from '@/styles/utills'


function Header() {
    const user = null; 
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
                "Logout"
            ) : (
                <></>
            )}
        </div>
    </header>
  )
}

export default Header