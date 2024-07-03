import classNames from 'classnames'
import React, { useContext } from 'react'
import { BsGooglePlay } from "react-icons/bs";
import { Context } from '../context'
import GenreList from './GenreList';

const Sidebar = () => {

    const { open } = useContext(Context)
    const genres = [
        {
            title: 'movie list',
            path: '/genre/movie/list',
            type : 'movie'
        },
        {
            title: 'TV list',
            path: '/genre/tv/list',
            type: 'tv'
        },
    ]

    let beforeInstallPromptEvent
    const installButton = document.querySelector('.installButton');
    window.addEventListener("beforeinstallprompt", function(e) {
        e.preventDefault();
        beforeInstallPromptEvent = e
        // installButton.style.display = 'block'
        installButton.addEventListener("click", function() {
            e.prompt();
        });
        installButton.hidden = false;
    });

    const install = () => {
        beforeInstallPromptEvent.prompt();
    }

  return (
    <aside className={classNames('bg-slate-950 transition-all duration-1000 overflow-x-hidden absolute sm:static top-16 z-20 -left-full w-64 min-w-64 calc-h-screen-16 overflow-y-auto border-t border-slate-800 px-5', {'!left-0': open})}>
        <div className=''>
            <div>
                {
                    genres.map((genre, key) => (
                        <GenreList key={key} genre={genre} />
                    ))
                }
            </div>

            <div className='border-t border-slate-800 pt-3 mt-3'>
                <span className='min-[381px]:text-xl text-white cursor-pointer font-medium whitespace-nowrap overflow-hidden text-ellipsis' title="❤">Made With By Samir</span>
                <button onClick={install} className='installButton flex font-medium mt-3 gap-2 capitalize min-[381px]:text-lg h-11 w-[90%] rounded-md items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition-all duration-500 text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                    <span><BsGooglePlay/></span>
                    install the app
                </button>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar