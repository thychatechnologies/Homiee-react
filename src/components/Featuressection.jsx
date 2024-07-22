import React from 'react'

function Featuressection() {
    return (


        <div className='relative'>
            <div className='card-section flex flex-row max-868:flex-col justify-center items-center gap-[20px]  max-868:gap-[50px] max-1078:gap-[70px] relative'>
                <div className='card'>
                    <div class="card-content max-w-[250px] min-964:max-w-[300px] bg-primary border border-gray-200 rounded-[30px] shadow dark:border-gray-700 p-5 flex flex-col items-center gap-5 relative">
                        <img class="rounded-t-lg w-[80px] h-[90px] object-contain" src="./assets/images/badge.png" alt="" />
                        <div class="flex flex-col gap-3 text-center mb-[23px]">
                            <h5 class="logo text-secondary mb-2 text-1xl font-bold tracking-tight">Quality Assured</h5>
                            <p class="mb-3 font-normal text-white">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                            </p>
                        </div>
                        <button className='readmore bg-btnclr px-[60px] rounded-2xl py-[14px] flex items-center border-2 border-white absolute bottom-[-26px]'>
                            Read More
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div class="card-main max-w-[250px] min-964:max-w-[300px] bg-primary border border-gray-200 rounded-[30px] shadow dark:border-gray-700 p-[25px] flex flex-col items-center gap-5 relative">
                        <img class="rounded-t-lg w-[110px]" src="./assets/images/100-percent.png" alt="" />
                        <div class="flex flex-col gap-3 text-center mb-[23px]">
                            <h5 class="logo text-secondary mb-2 text-1xl font-bold tracking-tight">100% Natural</h5>
                            <p class="mb-3 font-normal text-white">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                            </p>
                        </div>
                        <button className='readmore bg-btnclr px-[60px] rounded-2xl py-[14px] flex items-center border-2 border-white absolute bottom-[-26px]'>
                            Read More
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div class="card-main max-w-[250px] min-964:max-w-[300px] bg-primary border border-gray-200 rounded-[30px] shadow dark:border-gray-700 p-5 flex flex-col items-center gap-5 relative">
                        <img class="rounded-t-lg w-[110px] object-contain" src="./assets/images/no-preservatives.png" alt="" />
                        <div class="flex flex-col gap-3 text-center mb-[23px]">
                            <h5 class="logo text-secondary mb-2 text-1xl font-bold tracking-tight">Quality Assured</h5>
                            <p class="mb-3 font-normal text-white">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order
                            </p>
                        </div>
                        <button className='readmore bg-btnclr px-[60px] rounded-2xl py-[14px] flex items-center border-2 border-white absolute bottom-[-26px]'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <img className='absolute right-0 bottom-[-164px] w-[100px] min-856:w-[200px] min-450:w-[150px]  z-0' src="./assets/images/Leaf 02.png" alt="" />
        </div>


    )
}

export default Featuressection
