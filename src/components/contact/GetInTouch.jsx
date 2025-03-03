import React from 'react'

const GetInTouch = () => {
    return (

        <div className='flex sm:flex-row flex-col sm:py-16  sm:py-4 pt-4 gap-24 sm:px-16 px-4'>
            <div className='GetInTouch flex flex-col gap-8 '>
                <h1 className='uppercase text-red-400 font-bold text-5xl'>get in <span className='text-black'> touch</span></h1>
                <p>If you have any questions, please feel free to contact us.</p>

                <div className='flex gap-4'>
                    <ul>
                        <i className="fa fa-map-marker text-red-400 text-3xl" aria-hidden="true"></i>
                    </ul>
                    <ul>
                        <h1 className='font-bold uppercase'>PATNA ADDRESS</h1>
                        <p>Ram Lakhan Path, Ram Lakhan Singh Market</p>
                        <li>Road No.-24, Rajeev Nagar, Patna-800024</li>
                        <li>Phone : 9835999500, 7717788162</li>
                        <li>Email: roshntn@gmail.com</li>
                    </ul>
                </div>

            </div>

            {/* col-2 */}
            <div className="requestAQuote flex flex-col gap-8 ">
                <h1 className='uppercase text-black font-bold text-5xl'>REQUEST <span className='text-red-400'> A QUOTE</span></h1>

                <div className='bg-gray-100 py-4 px-4 bg-gray-200'>
                    <form action="" className='flex flex-col flex-wrap gap-4'>
                        <ul className='gap-2 sm:flex-row flex-col flex'>
                            <input className=' sm:px-3 py-2 px-2' type="text" name="fname" placeholder='First Name' id="" required/>
                            <input className='sm:px-3 py-2 px-2' type="text" name="lname" placeholder='Last Name' id="" required/>
                        </ul>
                        <ul className='gap-2 flex sm:flex-row flex-col'>
                            <input className='sm:px-3 px-2 py-2' type="email" name="email" placeholder='Email Address' id="" required />
                            <input className='sm:px-3 py-2 px-2' type="text" name="pnum" placeholder='Phone Number' id=""required />
                        </ul>
                        <label className='px-4 bg-white py-4 ' htmlFor="">
                            <select className="w-full py-2 px-2 border-2 bg-[url('https://www.riddhidisplay.com/wp-content/themes/riddhi-display/images/down-img.png')]  bg-no-repeat appearance-none bg-[center_right_1rem] bg-[length:20px_15px]" name="selectedFruit" defaultValue="--Selected Inquiry Type--">
                                <option value="apple">Buying Products</option>
                                <option value="banana">Services</option>
                                <option value="orange">Vendor and Supplier</option>
                                <option value="orange">Customer Services</option>
                                <option value="orange">Career Related</option>


                            </select>
                        </label>

                        <textarea placeholder='Message' className='py-2 px-2 sm:px-4 ' name="message" id="message" cols="30" rows="10"></textarea>
                        <div className='mx-4'>
                            <button className='px-10 rounded-md text-md py-2 bg-red-600 font-bold text-white'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch