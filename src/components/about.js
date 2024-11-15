import AboutImg from '../assets/Green Brown Minimalist Shield Hand Logo(1).png';
export default function About (){
    const config = {
        line1:'Ive learned HTML, CSS, responsive design with media queries, and am now exploring Flexbox, JavaScript, and SQL.',
          line2:'My web development skills include HTML and CSS for structuring and styling web pages, along with responsive design using media queries to create adaptable layouts',
            line3:'I’ve also completed projects, including a HiAnime-inspired static site and a fully responsive webpage.'

    }
    return <section className='flex flex-col md:flex-row bg-primary py-32 px-5' id='about'>
        <div className='md:w-1/2  px-20'>
            <img src={AboutImg}/>   
        </div>
        <div className=' flex md:w-1/2   justify-center'>
        <div className='flex flex-col justify-center text-white px-10'>
            <h1 className='text-4xl  border-b-4 border-[#6f8a9e] mb-5 w-[170px] font-bold'>About me </h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p> 
              </div>
        </div>
    </section>
} 