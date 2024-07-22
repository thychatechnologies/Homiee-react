import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Bannersection() {
    return (
        <div className='banner-Section bg-primary bg-hero-banner' id='nav'>
            <img className='w-[250px] absolute w-[100%] h-[600px] transform rotate-12' src="./assets/images/VectorSart.png" alt="" />
            <div className="max-400:py-[25px] py-[50px] relative">
                <div className='flex flex-col flex-col-reverse  gap-y-4 min-856:flex-row justify-center items-center gap-x-8'>
                    <div className="w-[80%] min-856:w-[40%]">

                        <div className='logo-sectins max-868:hidden'>
                            <img className='w-[250px]' src="./assets/images/Homiee.png" alt="" />
                        </div>
                        <h1 className='banner-head font-bold text-5xl max-450:text-3xl'>Hedding content added</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium, dignissimos, quibusdam praesentium beatae eligendi architecto nobis unde minima inventore aut? Repudiandae, totam molestiae? Quia, voluptate. Atque sequi corporis aut!
                            Repudiandae, totam molestiae? Quia, voluptate. Atque sequi corporis aut!
                        </p>
                        <div className="banner-buttens mt-[20px] ">
                            <button className='banner-buttensshopnow text-nowrap'>
                                Shop Now
                                <FontAwesomeIcon icon={faArrowRight} className='ml-[10px]' />
                            </button>
                            <button className='banner-shoponwhatsapp text-nowrap'>
                                <img className='whatsapp-img' src="./assets/images/icons/whatsapp.png" alt="" />
                                Shop on<b className='ml-[5px]'> Whatsapp</b>
                                <FontAwesomeIcon icon={faArrowRight} className='ml-[10px]' />
                            </button>
                        </div>
                    </div>

                    <div className="w-[80%] min-856:w-[40%] flex flex-col items-center shrink">
                        <div className='min-868:hidden  w-[100%] py-[20px]'>
                            <img className='w-[200px] max-400:w-[150px]' src="./assets/images/Homiee.png" alt="" />
                        </div>

                        <img className='banner-img' src="./assets/images/hero_image.png" alt="" />
                    </div>

                </div>
                <div className='absolute top-[92%] min-856:top-[78%] min-450:top-[84%]'>
                    <img className='w-[100px] min-856:w-[200px] min-450:w-[150px] ' src="./assets/images/Leaf.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Bannersection
