import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects have always been my passion. Being in the web development industry for over 1 and a half year and serving more than 20 happy clients worldide, I'm always motivated do even more!
                </p>
                <p>
                Hi, my name is Ismael Costa Dantas from Tianguá, Brazil. I'm a full-stack web developer with an ongoing Bacherlors degree in Computer Engineering. Wanna know what technologies i'm profecient to give you the best work possible? React and responsive design for your frontend, and for your backend? SQL, Docker, Node, MongoDB, ORMs and all of that within the MSC architecture. I also know OOP and for my programming languages i can offer you the best in JavaScript and Python. Get in touch today with the details of your project, let's get started! Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About