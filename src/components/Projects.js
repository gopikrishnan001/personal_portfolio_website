import websiteImg1 from'../assets/e commerce 3.jpg';
import websiteImg2 from'../assets/0ebdf5eaecbcab493384f45b09fda87b0b20900173ce05c6a05f9dc4a3004c16.webp';
import websiteImg3 from'../assets/d5fe2938-f306-4509-b8d0-0e16d4997af83.jpg';
import { MdDescription } from 'react-icons/md';
export default function Projects(){
    const config= {
        projects:[
            {
                image:websiteImg1,
                description:'online shopping website',
                link:'https://github.com/personal portfolio/onlineshopping'
            },
            {
                image:websiteImg2,
                description:'food E-commerce website like swiggy',
                link:'https://github.com/personal portfolio/food delivery'
            },
            {
                image:websiteImg3,
                description:'fitness website',
                link:'https://fitnesswebsite.ccbp.tech/'
            }
        ]
    }
    return <section id='projects' className="flex flex-col py-32 px-5 justify-center bg-secondary text-white" >
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
           <h1 className='text-4xl  border-b-4 border-[#1f3e55] mb-5 w-[150px] font-bold'>projects</h1>
           <p>These are some of my best projects , I have built these with css,html,bootstrap and tailwindcss</p>
        </div>
       
        </div>
        <div className="w-full ">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((project) => (
              
                <div className='relative'> <img className='h-[300px] w-[500px] 'src={project.image}/> 
                <div className='project-description'> <p className='text-center px-5 py-5'>{project.description}</p>
                <div className='flex justify-center'>
            <a className='btn' target='blank' href={project.link}>View project</a>
        </div>
        </div>  
               
                </div>
                
            ))}
            </div>
        </div>
    </section>
}