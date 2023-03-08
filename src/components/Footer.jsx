import React from 'react'

export default function Footer() {
  return (
    <div className="bg-black text-white py-10 flex justify-around">
      <div>
        <img
          width={200}
          src="https://pwskills.com/images/PWSkills-white.png"
          alt=""
        />
        <p className='my-5'>Email us:support@pwskills.com</p>

        <img
          width={70}
          src="https://pwskills.com/images/iso-9001-2015.svg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">PW Skills</h2>
        <hr className="my-5 w-32 mx-auto border-1 bg-yellow-400 border-yellow-400 " />
        <div className="flex gap-10">
          <ul>
            <li>About us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Job Assistance</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className=" text-2xl font-bold">Products</h2>
        <hr className="my-5 w-32 mx-auto border-1 bg-yellow-400 border-yellow-400" />
        <div>
          <ul>
            <li>PW Skills Lab</li>
            <li>Job Portal</li>
            <li>Experience Portal</li>
            <li>Become an Affilate</li>
            <li>Hall of Fame</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
