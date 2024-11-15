import { FaFacebook } from 'react-icons/fa';
import HeroImg from '../assets/vecteezy_cartoon-character-with-the-desk-working-concept-illustration_44448949.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";
export default function Hero() {
    const config = {
        subtitle:'Im a Front-end developer',
        social:{
            twitter:'https://x.com/GopiKrishn51385',
            facebook:'https://www.facebook.com/TheDummyPage/',
            linkedin:'https://www.linkedin.com/in/gopikrishnan-gk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }

    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='w-1/2 flex-col'>
        <h1 className=' text-white text-6xl font-hero-font '>hi, <br/>Im Gopikrishnan
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.twitter} className='flex pr-5  hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href={config.social.facebook} className='flex pr-5  hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className='  hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
           </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}