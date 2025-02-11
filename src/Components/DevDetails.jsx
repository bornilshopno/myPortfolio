import Marquee from 'react-fast-marquee';

import { Link } from 'react-router-dom';

import Aos from 'aos';
import Project from './Project';
import ProjectLayout from './ProjectLayout';





const DevDetails = () => {
    Aos.init()

    return (
        <div>
            <div>
                <h2 className='text-center bg-gradient-to-b from-[#273344] to-[#234668] py-10 font-bold text-5xl text-amber-400 '>Skills and Expertises</h2>
                <Marquee autoFill={true} pauseOnHover={true} className="bg-gradient-to-b from-[#234668] to-[#495765]">
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
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-3 text-amber-400 font-bold'>MONGO DB<br /><span className='text-xl'>Basic CRUD</span></h1>
                    </div>
                </Marquee>
            </div>
            <Project></Project>

        <ProjectLayout></ProjectLayout>
            


        </div>
    );
};

export default DevDetails;