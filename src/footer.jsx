import React from 'react';

const Footer = () => {
    return (
        <div className='flex gap-4 place-content-evenly p-10 bg-black mt-3'>
            <div className='w-1/5'>
                <h1 className='text-xl font-bold text-white'>CS — Ticket System</h1>
                <p className=' text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div><h1 className='text-xl font-bold text-white'>Company</h1>
            <p className=' text-white'>About Us</p>
            <p className=' text-white'>Our Mission</p>
            <p className=' text-white'>Contact Saled</p></div>

            <div>
                <h1 className='text-xl font-bold text-white'>Services</h1>
                <p className=' text-white'>Products & Services</p>
                <p className=' text-white'>Customer Stories</p>
                <p className=' text-white'>Download Apps</p>
            </div>
            <div>
                <h1 className='text-xl font-bold text-white'>Information</h1>
                <p className=' text-white'>Privacy Policy</p>
                <p className=' text-white'>Terms & Conditions</p>
                <p className=' text-white'>Join Us</p>
            </div>
            <div>
                <h1 className='text-xl font-bold text-white'>Social Links</h1>
                <p className='text-white'>@CS — Ticket System</p>
                <p className=' text-white'>@CS — Ticket System</p>
                <p className=' text-white'>@CS — Ticket System</p>
            </div>
        </div>
    );
};

export default Footer;