import React from 'react'

function Footersection({ scrollToNav }) {
    return (
        <div className='footer-main bg-black'>
            <div className='flex flex-wrap  gap-[30px] overflow-hidden p-[50px] max-400:px-[20px] items-center justify-center'>
                <div className='w-[30%] max-1165:w-[40%] max-668:w-[70%] max-400:w-[100%]'>
                    <img className='mb-[20px]' src="./assets/images/Homiee.png" alt="" />
                    <p className='inline'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facilis doloribus! Laboriosam facere sequi officiis commodi velit non et, dignissimos atque cumque laudantium ea perferendis perspiciatis doloremque dolor voluptatibus eligendi!</p>
                    <ul className='social-media flex gap-[17px] mt-[30px]'>
                        <li className='socisl-media p-[10px] rounded-full'>
                            <img className='w-[18px] ' src="assets/images/icons/facebook.png" alt="" />
                        </li>
                        <li className='socisl-media p-[10px] rounded-full'>
                            <img className='w-[18px]' src="assets/images/icons/instagram.png" alt="" />
                        </li>
                        <li className='socisl-media p-[10px] rounded-full'>
                            <img className='w-[15px]' src="assets/images/icons/icons8-x.png" alt="" />
                        </li>
                        <li className='socisl-media p-[10px] rounded-full'>
                            <img className='w-[18px]' src="assets/images/icons/in.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold mb-[10px]'>Contactus</h1>
                    <p>414d parker Rd , <br/> Allentown new mexico 312545</p>
                </div>
                <div className='rilative'>

                    <ul className='phone-icon flex flex-col gap-4'>
                        <li className='flex gap-2 hover:cursor-pointer'>
                            <img className='w-[22px]' src="./assets/images/icons/phone.png" alt="" />
                            <a href="tel:+91000000000" className='text-nowrap'>+91 000000000</a>
                        </li>
                        <li className='flex gap-2 hover:cursor-pointer'>
                            <img className='w-[22px]' src="./assets/images/icons/mail.png" alt="" />
                            <span className='text-nowrap'>homie@gmail.com</span>
                        </li>
                        <li className='flex gap-2 hover:cursor-pointer'>
                            <img className='w-[22px]' src="./assets/images/icons/website.png" alt="" />
                            <span className='text-nowrap'>www homie.com</span>
                        </li>
                    </ul>
                </div>
                <div onClick={scrollToNav} className='arrow-main fixed bottom-[30px] right-[30px]'>
                    <img className='w-[15px]' src="./assets/images/icons/arrow.png" alt="" />
                </div>
            </div>

            <div className='flex justify-center '>
                <div className='p-[20px] text-center border-t border-white w-[70%] '>
                    Copy rights@
                </div>

            </div>
        </div>
    )
}

export default Footersection
