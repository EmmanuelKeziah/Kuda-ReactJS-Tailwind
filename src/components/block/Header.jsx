import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from 'react-router-dom'
import Button from '../reusable/Button';
import Icon from '../../assets/nigeria-logo.svg'

const Header = () => {
  return (
    <header className='w-full shadow-md bg-white '>
        <div className=" max-w-[1280px] m-auto flex  items-center justify-between px-8 py-2 text-sm ">
            <main className=' flex items-center gap-20 '>
                <section>
                    <Link to="/" >
                        <div>
                            <img src="/kuda-logo.svg" alt="Kuda-logo" className="h-auto w-20" />
                        </div>
                    </Link>
                </section>

                <section className=" hidden md:flex items-center gap-10 text-[#40196D] font-bold relative">
                    <div className="relative group">
                        <Link to="/personal">
                            <nav className="flex items-center gap-1 cursor-pointer">
                                <span>Personal</span>
                                <MdArrowDropDown size={20} />
                            </nav>
                        </Link>
                        
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md hidden group-hover:opacity-100   group-hover:block z-50">
                        <Link to="/electricity" className="block px-4 py-2 hover:bg-gray-100">
                            Electricity
                        </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <Link to="/business">
                            <nav className="flex items-center gap-1 cursor-pointer">
                                <span>Business</span>
                                <MdArrowDropDown size={20} />
                            </nav>
                        </Link>

                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                        <Link to="/discover-business" className="block px-4 py-2 hover:bg-gray-100">
                            Discover Business
                        </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <Link to="/company">
                            <nav className="flex items-center gap-1 cursor-pointer">
                                <span>Company</span>
                                <MdArrowDropDown size={20} />
                            </nav>
                        </Link>
                        
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                        <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                            Blog
                        </Link>
                    </div>
                </div>

                <div className="relative group">
                    <Link to="/help">
                        <nav className="flex items-center gap-1 cursor-pointer">
                            <span>Help</span>
                            <MdArrowDropDown size={20} />
                        </nav>
                    </Link>

                    <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                    <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
                        Contact Us
                    </Link>
                    </div>
                </div>
                </section>
            </main>

            <section className=' hidden md:flex font-bold text-base items-center gap-x-4'>
                <Button
                    label="Sign In"
                    style=" text-[#40196D] px-6 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer"
                />

                <Button
                    label="Join Kuda"
                    style="text-[#E5E5E5] bg-[#40196D] cursor-pointer px-6 py-2 rounded-md font-semibold hover:scale-105 transition-all duration-300 ease-in-out ml-3"  
                />

                <span>
                    <img src={Icon} alt="Kuda-logo" className='h-6 w-6 object-contain' />
                </span>
            </section>

        </div>


    </header>
  )
}

export default Header;