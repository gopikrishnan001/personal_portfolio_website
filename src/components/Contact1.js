
export default function Contact1(){
    const config = {
        email:'gokrish2004@gmail.com',
        phone:'9361684586'
    }
    return <section id='contact' className='flex flex-col  bg-secondary py-20 px-5'>
       
        <div className=' flex flex-col  items-center text-white'>
            <h1 className='text-4xl  border-b-4  border-[#1a3951] mb-5 w-[140px] font-bold'>Contact </h1>
            <p className='pb-5'>if you want to discuss more in detail, please contact me.</p>
            <p  className='py-2'><span className='font-bold'>Email:</span>{config.email} </p>
            <p  className='py-2'><span className='font-bold'>phone:</span>{config.phone}</p>
                </div>

    </section>
} 