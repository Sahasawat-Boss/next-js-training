import Link from "next/link"

const About = () => {
    return (
        <section>
            <div className='p-4 flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-3xl font-semibold text-center mb-4'>About Graphio Co., Ltd.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolores iste a amet esse deleniti ratione, quibusdam neque, explicabo, accusamus incidunt at possimus ut culpa.</p>
                </div>

                <section className="mt-4 flex">
                    <Link href={'/'} className="border bg-white text-black p-2 px-4 rounded-full">Home</Link>
                </section>

                <figure className='mt-4 grid grid-cols-2 gap-4'>
                    <img src="/images/about.webp" alt="hero-image.webp" width={500} height={500}
                        className='rounded-2xl' />
                    <img src="/images/about.webp" alt="hero-image.webp" width={500} height={500}
                        className='rounded-2xl' />
                    <img src="/images/about.webp" alt="hero-image.webp" width={500} height={500}
                        className='rounded-2xl' />
                    <img src="/images/about.webp" alt="hero-image.webp" width={500} height={500}
                        className='rounded-2xl' />
                </figure>
            </div>
        </section>
    )
}

export default About