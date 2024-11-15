import ResumeImg from '../assets/freepik__upload__83207.jpeg';
export default function Resume (){
    const config={
        link:'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf&ved=2ahUKEwjRyLrx1N2JAxUizjgGHQW1N3QQFnoECAoQAQ&usg=AOvVaw3g38XYBu-GQ99umVCU_4A8'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-primary py-32 px-5'>
        <div className='md:w-1/2  px-20 flex md:justify-end py-5 justify-center'>
            <img  className='w-[400px] ' src={ResumeImg}/>   
        </div>
        <div className=' flex md:w-1/2   justify-center'>
        <div className='flex flex-col justify-center text-white px-10 py-5'>
            <h1 className='text-4xl  border-b-4 border-[#6f8a9e] mb-5 w-[140px] font-bold'>Resume </h1>
            <p className='pb-5'>you can view my Resume <a className='btn' href={config.link}> Download</a></p>
             </div>
        </div>
    </section>
} 