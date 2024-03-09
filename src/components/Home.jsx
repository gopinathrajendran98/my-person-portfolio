import React from "react";
import "./Home.css"
import {FaGithub,FaLinkedin, FaTwitter} from 'react-icons/fa'



const Home = () =>{
       
    return(

        <>

        <section className="home-container">
            <div className="home-content">
             <h2 class="text-start">Hi i am</h2>
             <h3 class="text-start">Gopinath rajendran</h3>
             <p>I am front end developer.</p>
             <a href="resume_001-gopinath.pdf" download>
                <button type="button" class="btn btn-secondary">Download CV</button>
            </a>
            {/* <a href="https://www.shutterstock.com/image-vector/smiley-vector-happy-face-260nw-408014413.jpg" target="/_blank" >
                <button>Hire Me</button>
                
            </a> */}
            </div>
           
           
            <div className='home-img'>
                
                    <div className="tech-icon">
                       <img src={'https://us.123rf.com/450wm/shirokumadesign/shirokumadesign2111/shirokumadesign211100044/177160874-young-man-cartoon-character-people-face-profiles-avatars-and-icons-close-up-image-of-pointing-man-ve.jpg?ver=6'} alt=""/>
                    </div> 
            
            <div className="float-right">
                 <a href="https://github.com/gopinathrajendran98" rel="opener" target="blank"> <FaGithub/> </a>
                 <a href="https://www.linkedin.com/feed/" rel="opener" target='blank'> <FaLinkedin/> </a>
                 <a href="https://twitter.com/home" rel="opener" target="blank"><FaTwitter/></a>
            </div>
            </div>
            </section>
          
           

        {/* <div className="icon-container">
                 <a href="https://github.com/gopinathrajendran98" target="_bank"> <FaGithub/> </a>
                 <a href="www.linkedin.com/in/gopinath-r-186b4120a" target='_bank'> <FaLinkedin/> </a>
                 
                    
               </div> */}
        
        </>

    )

}

export default Home;