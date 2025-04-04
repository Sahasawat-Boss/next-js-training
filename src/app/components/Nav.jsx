import Link from "next/link"


const Nav = () => {
    return (
        <nav className='p-4 bg-black/80 text-white'>
            <div className='flex justify-between items-center'>

                <div>Just a very simple Next App</div>

                <li className='flex gap-4'>
                    <Link href={"/"} className="hover:underline">Home</Link>
                    <Link href={"/pages/post"} className="hover:underline">Post</Link>
                    <Link href={"/pages/about"} className="hover:underline">About</Link>
                </li>

            </div>
        </nav>
    )
}

export default Nav