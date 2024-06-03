'use client'
export default function Nav(){
    return(
            <nav className="navbar bg-base-100 fixed z-10 shadow-md">
                <div className="flex-1">
                    <a className="text-xl font-bold cursor-pointer">Crafty Books</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button">
                            <button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                        <ul 
                        tabIndex={0} 
                        className="
                            menu 
                            dropdown-content 
                            z-[1] 
                            p-2 
                            shadow 
                            bg-base-100 
                            rounded-box 
                            w-52 
                            mt-4
                            font-bold
                            ">
                            <li>
                                <h2>Sklep</h2>
                            </li>
                            <li>
                                <h2>O Mnie</h2>
                            </li>
                            <li>
                                <h2>Galeria</h2>
                            </li>
                            <li>
                                <h2>Kontatk</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}