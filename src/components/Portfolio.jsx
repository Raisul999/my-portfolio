import React from 'react'
import mgx from '../assets/portfolio/mgx.png'
import goal from '../assets/portfolio/goal.png'
import restro from '../assets/portfolio/restro.png'
import pwa from '../assets/portfolio/pwa.png'
import word from '../assets/portfolio/word.png'

const Portfolio = () => {
        
        const portfolios = [
                {
                        id: 1,
                        src: mgx,
                        link: 'https://www.mgx.com/bd'
                },
                {
                        id: 2,
                        src: goal,
                        link: 'https://mern-goal-setter-5dwx.onrender.com'
                },
                {
                        id: 3,
                        src: restro,
                        link: 'https://restaurant-website-nine.vercel.app/'
                },
                {
                        id: 4,
                        src: pwa,
                        link: 'https://pwa-weather-app-eight.vercel.app/'
                },
                {
                        id: 5,
                        src: word,
                        link: 'https://raisul999.github.io/JavaScript-WordGame/'
                },
        ]
        return (
                <div name='portfolio' className='w-full bg-gradient-to-b from-zinc-600 to-zinc-700 text-white pt-20'>
                        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                                <div>
                                        <p className='text-4xl font-bold inline border-b-4  border-gray-500'>
                                                Portfolio
                                        </p>
                                        <p className='py-6' >
                                                Some of my works
                                        </p>
                                </div>

                                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                                        {
                                                portfolios.map(({ id, src, link }) => (
                                                        <div key={id} className='shadow-md shadow-black-800 rounded-lg'>
                                                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                                                <div className='flex items-center justify-center'>
                                                                        <button
                                                                        onClick={()=>window.open(link, '_blank')} 
                                                                        className='w-1/2 px-6 py-3 duration-200 hover:scale-105'
                                                                        >
                                                                                Demo
                                                                        </button>
                                                                </div>
                                                        </div>
                                                ))
                                        }

                                </div>

                        </div>
                </div>
        )
}

export default Portfolio
