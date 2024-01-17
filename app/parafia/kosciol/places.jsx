import React from 'react'
import Image from 'next/image'

const Places = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] my-[5vh] bg-white'>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawa.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Nawa Główna</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawa.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Nawa Boczna (chór)</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/boczna.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/boczna.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/oltarz.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Oltarz</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/oltarz.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Dolny Kosciol</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/piwnica.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/piwnica.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/ambona.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Ambona</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/ambona.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Zakrystia</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/zakrystia.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/zakrystia.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/niebo.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Niebo</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/niebo.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div>
    </div>
  )
}

export default Places