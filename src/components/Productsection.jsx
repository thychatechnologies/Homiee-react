import React from 'react'

function Productsection() {
    return (
        <div className='product-section py-[100px] min-999:py-[200px] '>
            <div className=' max-999:hidden flex flex-col gap-[200px]'>
                <div className='flex justify-end '>
                    <div className='product-1 flex w-[60%]  items-center bg-primary rilative'>
                        <img className='flex-1 absolute left-[480px]  max-1649:left-[380px] w-[25%]  max-1084:left-[280px] max-1220:left-[300px]' src="./assets/images/Chilli.png" alt="" />
                        <div className='flex-1  pl-[100px] py-[65px] pr-[180px] max-1084:py-[25px] max-1165:py-[35px] max-1220:py-[50px] max-1234:pl-[130px] min-1233:pr-[180px]   max-1300:py-[55px]  max-1328:py-[60px] max-1328:px-[160px]'>
                            <h1 className='font-bold text-3xl'>CHILLY POWDER</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quia nulla aspernatur magni officiis eveniet ad hic ducimus consequuntur fugiat necessitatibus soluta placeat nemo, expedita eos repellat quas doloremque doloribus.</p>
                        </div>
                        <img className='w-[10%] flex-1 absolute right-[0px] inline-block' src="./assets/images/Pepper in wood bowl.png" alt="" />
                    </div>
                </div>

                <div className='flex'>
                    <div className='product-1 flex w-[60%]  items-center bg-primary rilative'>
                        <img className='w-[10%] flex-1 absolute left-[0px] inline-block' src="./assets/images/woodbowl.png" alt="" />
                        <div className='flex-1  pl-[100px] py-[65px] pr-[180px] max-1084:py-[25px] max-1165:py-[35px] max-1220:py-[50px] max-1234:pl-[130px] min-1233:pl-[230px] max-1300:py-[55px]  max-1328:py-[60px] max-1328:px-[160px] '>
                            <h1 className='font-bold text-3xl'>CHILLY POWDER</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quia nulla aspernatur magni officiis eveniet ad hic ducimus consequuntur fugiat necessitatibus soluta placeat nemo, expedita eos repellat quas doloremque doloribus.</p>
                        </div>
                        <img className='flex-1 absolute right-[480px] max-1649:right-[350px] w-[25%] max-1084:right-[280px] max-1220:right-[300px]' src="./assets/images/Temeric.png" alt="" />
                    </div>
                </div>


                <div className='flex justify-end '>
                    <div className='product-1 flex w-[60%]  items-center bg-primary rilative'>
                        <img className='flex-1 absolute left-[480px] max-1649:left-[380px] w-[25%] max-1084:left-[280px] max-1220:left-[300px]' src="./assets/images/Coriande.png" alt="" />
                        <div className='flex-1  pl-[100px] py-[65px] pr-[180px] max-1084:py-[25px] max-1165:py-[35px] max-1220:py-[50px] max-1234:pl-[130px] min-1233:pr-[180px] max-1300:py-[55px]  max-1328:py-[60px] max-1328:px-[160px]'>
                            <h1 className='font-bold text-3xl'>CHILLY POWDER</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quia nulla aspernatur magni officiis eveniet ad hic ducimus consequuntur fugiat necessitatibus soluta placeat nemo, expedita eos repellat quas doloremque doloribus.</p>
                        </div>
                        <img className='w-[10%] flex-1 absolute right-[0px] inline-block' src="./assets/images/Coriander.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="min-999:hidden flex gap-[30px] justify-center  flex-wrap">
                <div class="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <img class="rounded-t-lg p-[30px]" src="./assets/images/Chilli.png" alt="" />
                    <div class="p-5 flex flex-col items-center">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Chilli Powder</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise itions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-btnclr rounded-lg focus:ring-4 focus:outline-none ">
                            Buy now
                        </a>
                    </div>
                </div>

                <div class="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                <img class="rounded-t-lg p-[30px]" src="./assets/images/Temeric.png" alt="" />
                   
                    <div class="p-5 flex flex-col items-center">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Chilli Powder</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise itions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-btnclr rounded-lg focus:ring-4 focus:outline-none ">
                            Buy now
                        </a>
                    </div>
                </div>

                <div class="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                <img class="rounded-t-lg p-[30px]" src="./assets/images/Coriande.png" alt="" />
                    <div class="p-5 flex flex-col items-center">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Chilli Powder</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise itions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-btnclr rounded-lg focus:ring-4 focus:outline-none ">
                            Buy now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productsection
