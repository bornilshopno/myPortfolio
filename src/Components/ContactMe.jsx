import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegHandPointDown } from "react-icons/fa";

import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json"
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { Element } from 'react-scroll';
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xzhqvt1', 'template_zvgp4rd', form.current, {
        publicKey: 'X4tJUrcuZQMWeQNzS',
      })
      .then(
        () => {
          Swal.fire({
            title: "Mail Sent Successfully!",
            showClass: {
              popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
            },
            hideClass: {
              popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
            }
          });
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='contact'>

     <Element name='contact'>
     <h2 className="mb-5 mt-5 lg:mt-10 text-4xl text-slate-300 font-bold text-center">GET IN TOUCH</h2>

<h2 className="text-lg text-slate-500 font-semibold text-center w-10/12 mx-auto max-w-3xl">Please donot hesitate to reach me out with email or whatsapp for any sort of query or feedback. I would love to hear it from you - - - - get in touch!</h2>
<div className="flex flex-col lg:flex-row text-white text-center items-center justify-center gap-5 py-5"> <p className="flex items-center gap-2 text-blue-600"><MdEmail /> optimisticashraf@gmail.com</p> <p className="flex items-center gap-2 text-green-500"><FaSquarePhone /> <FaWhatsappSquare className="" /> +8801911199697</p></div>

<div className="flex flex-col lg:flex-row py-5">
  <div className="w-10/12 lg:w-1/2 m-auto ">
    <Lottie animationData={contactAnimation} loop={true} className="w-10/12 my-auto lg:mr-5 mx-auto h-80"></Lottie>
  </div>

  <div className='w-10/12 lg:w-1/2 mx-auto'>
    <form className="flex flex-col " ref={form} onSubmit={sendEmail}>
      <h3 className="text-white flex gap-2 justify-start items-center text-xl">Write me a Message <span><FaRegHandPointDown /></span></h3>
      <label className="label text-white flex gap-2 justify-start items-center"> <MdDriveFileRenameOutline /> <span>Your Name</span>        </label>
      <input type="text" name="from_name" className="input input-bordered w-full lg:w-3/4 mx-auto lg:ml-0" required="" />
      <label className="label text-white flex gap-2 justify-start items-center"> <span><MdOutlineMailOutline /></span> Your Email</label>
      <input type="email" name="user_email" className="input input-bordered w-full lg:w-3/4 mx-auto lg:ml-0" required="" />
      <label className="label text-white flex gap-2 justify-start items-center"> <span><FaRegMessage /></span> Message</label>
      <textarea name="message" required="" className="input input-bordered w-full lg:w-3/4 mx-auto lg:ml-0"></textarea>
      <div className='w-full lg:w-3/4 text-right mt-4 lg:mt-10'>
        <input type="submit" value="Send Email" className='btn bg-blue-600 border-none text-white' />
      </div>
    </form>
  </div>

</div>
     </Element>
    </div>
  );
};

export default ContactMe;