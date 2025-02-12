import Marquee from 'react-fast-marquee';
import Aos from 'aos';
import ProjectLayout from './ProjectLayout';
import { FaArrowRightFromBracket } from 'react-icons/fa6';





const DevDetails = () => {
    Aos.init()

    return (
        <div>
            <div>
                <h2 className='text-center bg-gradient-to-b from-[#273344] to-[#234668] py-10 font-bold text-5xl text-amber-400 '>Skills and Expertises</h2>
                <Marquee autoFill={true} pauseOnHover={true} className="bg-gradient-to-b from-[#234668] to-[#495765]">
                    <div className='mr-10 my-10'>
                        <h2 className='text-4xl flex gap-5 items-center'>||Front End <FaArrowRightFromBracket /></h2>

                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold text-center'>HTML 5</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold text-center'>CSS 3</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold '>Tailwind CSS</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>JavaScript</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>React.JS</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-3 text-amber-400 font-bold'>Firebase<br /><span className='text-xl'>Authentication</span></h1>
                    </div>
                    <div className='mr-10 my-10'>
                        <h2 className='text-4xl flex gap-5 items-center'>||Back End <FaArrowRightFromBracket /></h2>

                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>Node Js</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>MONGO DB</h1>
                    </div>
                    <div className='mr-10 my-10'>
                        <h2 className='text-4xl flex gap-5 items-center'>||Learning <FaArrowRightFromBracket /></h2>

                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>Next JS</h1>
                    </div>
                </Marquee>
            </div>
          

        <ProjectLayout></ProjectLayout>
            


        </div>
    );
};

export default DevDetails;