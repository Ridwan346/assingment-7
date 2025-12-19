import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="flex ">
    <ul className="flex gap-4 ">
      <li>Home</li>
      <li li className=''>FAQ</li>
      <li li className=''>Changelog</li>
      <li li className=''>Blog</li>
      <li li className=''>Download</li>
      <li className=''>Contact</li>
      <button className='border px-2 rounded-xl bg-[#422AD5]'>New Ticket</button>
    </ul>
  </div>
  </div>
        </div>
    );
};

export default Nav;