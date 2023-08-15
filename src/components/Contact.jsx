import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Contact = () => {

        useEffect(() => {
                AOS.init({
                        delay: 100, // values from 0 to 3000, with step 50ms
                        duration: 1500,
                        once: true
                });
        }, [])

        return (
                <div name='contact' className='w-full bg-gradient-to-b from-zinc-600 to-zinc-700 text-white pt-20'>
                        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                                <div data-aos='fade-down'>
                                        <p className='text-4xl font-bold border-b-4  border-gray-500 inline'>Contact</p>
                                        <p className='py-6'>Have something in mind? Let's connect </p>
                                </div>
                                <div data-aos='fade-right' className='flex justify-center items-center'>
                                        <form
                                                action='https://getform.io/f/679f308b-6d31-46f1-baa1-4a9671e6d07d'
                                                method='POST'
                                                className='flex flex-col w-full md:w-1/2'
                                        >
                                                <input
                                                        type='text'
                                                        name='name'
                                                        placeholder='Enter your name'
                                                        className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none'
                                                />
                                                <input
                                                        type='text'
                                                        name='email'
                                                        placeholder='Enter your email'
                                                        className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                                />
                                                <textarea
                                                        name='message'
                                                        placeholder='Enter your message'
                                                        rows='10'
                                                        className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none'
                                                >

                                                </textarea>

                                                <button
                                                        className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                                                >
                                                        Connect
                                                </button>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default Contact
