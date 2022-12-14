import React from 'react'
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <div className="grid md:grid-cols-2">
        <iframe
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.35491648177!2d20.282514448937967!3d44.815403288471224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1670937840113!5m2!1sen!2srs"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="First"
            />
            <input className="border m-2 p-2" type="tel" placeholder="Phone" />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 mx-2 hover:shadow-xl hover:shadow-indigo-500/50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
