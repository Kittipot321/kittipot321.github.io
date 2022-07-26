import logo from '../logo.png'
import { DownloadIcon } from "@heroicons/react/solid";
function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Kittipot Laorngsri. 
                        <br className="hidden lg:inline-block" />I love to programmer.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I want to apply for a job as a back-end developer, which I am a hardworking person. Responsible, honest, enthusiastic and able to get along well with colleagues. Also, I am someone who likes to learn new things all the time.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#getresume"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            <DownloadIcon className="mr-2 -ml-1 w-7 h-7" />
                            Get Resume
                        </a>
                        <a
                            href="#getportfolio"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            <DownloadIcon className="mr-2 -ml-1 w-7 h-7" />
                            Get Portfolio
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={logo}
                    />
                </div>
            </div>
        </section>
    );
}
export default About