import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col font-Geist bg-white lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0  z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="hero imgage"
            loading="lazy"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block  py-px mb-4 text-lg font-bold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
              ZiyoKids
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Farzandingiz uchun
              <span className="inline-block text-deep-purple-accent-400">
                eng yaxshi yordamchi
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              ZiyoKids - interaktiv ta'lim platformasi. Qiziqarli viktorinalar, video darslar - aqlini charxlash va kelajak kasblariga tayyorlash uchun!
            </p>
            <div className="flex items-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-[#FF553E] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Boshlash
              </Link>
              <Link
                to="/subjects"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Darslar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
