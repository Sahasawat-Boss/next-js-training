import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <div className='flex justify-between item-center bg-black text-white p-4'>
                <div>Graphio<span className='text-xs text-blue-400'>Clone</span></div>
                <div className='flex gap-4'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/pages/about'}>About</Link>
                    <Link href={'/pages/blog'}>Blog</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav