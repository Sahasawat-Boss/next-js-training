import Image from "next/image"

const Home = () => {
  return (
    <main className="p-4 w-screen h-[70vh]">
      <div className="flex justify-center items-center">
        <div className="max-w-3xl flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Crafting Digital Experiences</h1>
          <br />
          <p>From concept to code, we transform your vision into engaging, responsive, and powerful web solutions.</p>

          <section className="flex justify-start gap-2 mt-4">
            <button className="btn-white">
              About -{">"}
            </button>
            <button className="btn">
              learn more -{">"}
            </button>
          </section>

          <section className="rounded-lg px-10 mt-4">
            <Image src={'/images/hero-image.webp'} alt="hero-image.webp" width='700' height='700' />
          </section>
        </div>
      </div>    </main>
  )
}

export default Home