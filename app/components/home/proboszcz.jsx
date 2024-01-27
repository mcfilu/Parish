import React from 'react'
import Image from 'next/image'
const Proboszcz = () => {
  return (
    <div className='w-full  flex flex-col md:flex-row bg-white pt-[5vh]'>
        <div className='flex flex-col w-full md:w-[50%] h-full justify-center pl-[5vw] md:pl-[10%] text-black'>
            <h1 className='text-[3.8vh] text-bold font-header2'>Proboszcz</h1>
            <h2 className='text-[5.5vh] font-header2'>Ks. Prałat Dr Leszek Slipek</h2>
            <div className='flex md:hidden w-full md:w-[35%] h-[30vh] relative md:ml-[10%] '>
            {/* <Image src="/slipek_sekcja_no_bg.png" alt="zdjecie proboszcza" fill={true} objectFit='cover'></Image> */}
                <Image src="/slipek_sekcja_removed_2.png" alt="zdjecie proboszcza" fill={true} objectFit='cover' className='h-full'></Image>
            </div>
            <p className='mt-[2vh] md:mt-[5vh] text-[1.8vh]'>Urodził się 10.07.1953 w Legnicy. Ukończył Wyższe Metropolitalne Seminarium Duchowne w Warszawie i w 1978 roku z rąk Kard. Stefana Wyszyńskiego otrzymał święcenia kapłańskie. Przez dwa lata był wikariuszem w parafii Zalesie Dolne. W roku 1980 wyjechał na dalsze studia do Rzymu W 1982 roku uzyskał doktorat z teologii duchowości na Uniwersytecie Gregoriańskim. Po powrocie ze studiów wykładał na Papieskim Wydziale Teologicznym.</p>
            <p className='mt-[2vh] text-[1.8vh]'>Przez cztery lata pełnił funkcję ojca duchownego w Wyższym Seminarium Duchownym w Warszawie. W roku 1987 został proboszczem parafii o wdzięcznej nazwie Jasieniec. Następnie przez dziesięć lat był proboszczem parafii św. Krzysztofa w Podkowie Leśnej.</p>
            <p className='mt-[2vh] text-[1.8vh]'>25 listopada 2001 roku opuścił Miasto Ogród, ponieważ został mianowany przez Kard. Józefa Glempa proboszczem parafii św. Andrzeja Apostoła w Warszawie. Jako proboszcz parafii odpowiedzialny jest za posługę duszpasterską, wykonując zadania nauczania, uświecania i zarządzania.</p>
            <div className='h-[10vh] w-[30%] relative mt-[3vh] mb-[3vh]'>
                <Image alt="podpis" src="/signing.png" fill={true} objectFit='contain'/>
            </div>
        </div>
        <div className='flex w-full md:w-[35%] relative ml-[10%] '>
            {/* <Image src="/slipek_sekcja_no_bg.png" alt="zdjecie proboszcza" fill={true} objectFit='cover'></Image> */}
            <Image src="/slipek_sekcja_removed_2.png" alt="zdjecie proboszcza" fill={true} objectFit='cover' className='h-full'></Image>
        </div>
    </div>
//     <div className='w-full flex bg-white pt-[5vh]'>
//     <div className='flex flex-col flex-1 justify-center pl-[10%]'>
//         <h1 className='text-[5.5vh] text-bold font-header2'>Leszek Slipek</h1>
//         <h2 className='text-[35px] font-header2'>Ksiądz Proboszcz</h2>
//         <p className='mt-[5vh]'> 

//          </p>


//         <div className='flex-1 relative mt-[2vh] mb-[5vh]'>
//             <Image alt="podpis" src="/signing.png" fill={true} objectFit='contain'/>
//         </div>
//     </div>
//     <div className='flex w-[30%] relative ml-[10%]'>
//         <Image src="/slipek_sekcja_removed.png" alt="zdjecie proboszcza" fill={true} objectFit='cover' className='h-full'></Image>
//     </div>
// </div>

  )
}
export default Proboszcz
