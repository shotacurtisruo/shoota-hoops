import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import './glow.css';


function App() {
  useEffect(() => {
    const glowContainer = document.querySelector('.glow-container');

    function getRandomShape() {
      const shapes = ['50%', '0%', '25%'];
      return shapes[Math.floor(Math.random() * shapes.length)];
    }

    function createGlow() {
      const glow = document.createElement('div');
      glow.classList.add('glow');
      glow.style.top = `${Math.random() * 100}%`;
      glow.style.left = `${Math.random() * 100}%`;
      glow.style.width = `${Math.random() * 100 + 50}px`;
      glow.style.height = glow.style.width;
      glow.style.borderRadius = getRandomShape();
      glowContainer.appendChild(glow);

      setTimeout(() => {
        glow.remove();
      }, 4000); // Duration of the animation + buffer

      setTimeout(createGlow, Math.random() * 2000 + 1000); // Create a new glow at random intervals
    }

    createGlow();
  }, []);
  return (
    <div className="container">
      <div className="glow-container"></div>
      <div className='col-left'>
        <div className='row-row1'>
          <h1 id='header'>Welcome to Shoota-hoops</h1>

          <p>Interested in free basketball lessons for your kids? <br></br> For (Ages 10 and up to High School)
            <br></br>
            Want to improve your skills?
            <br></br>
            Your at the right place!
            
            
            
          </p>
          <p id='important'>Please read through carefully!</p>
        </div>
        <div className='row-row2'>
          <p>
            If interested please shoot me a text and  please go over this form attached below:<br></br>
            If you are looking for individual training, please shoot me a text or call me. Prices will vary.
            <br></br>
            
            <a href='https://docs.google.com/document/d/1FCVs77eJlRshRJgtyXuOPdq1NY-hFEDukl9rFMRgwXw/edit?usp=sharing'>Shoota-Hoops General Info</a>
            <br></br>
            <a href='https://docs.google.com/document/d/1bi4CP3ZyI6bIH4OHoFVz0rseN2N-I5S-gFTX9PZb1hA/edit?usp=sharing'>Waiver Form</a>

           
            

          </p>
          
        </div>




        <div className='row-row3'>
          <h2>Contact info:</h2>
          <p>Please feel free to reach out via text, phone call or email!
            <br></br>
            Email: <a href="scruo@ucdavis.edu">scruo@ucdavis.edu</a>
            <br></br>
            Phone: 1-707-721-9987
            <br></br>
            Linkedln: <a href="https://www.linkedin.com/in/shota-ruo-1869b7244/">More About Me!</a>
          </p>
          

          
        </div>
      </div>
      <div className='col-right'>
        <h1>Hi this is Shota.</h1>
        <p>I am currently a student at UC Davis studying computer science. This might make you wonder - well then why am I offering free basketball lessons? As a student, I am often spending my time coding or studying. However my love for basketball still lingers.  My passion for basketball started during middle school, which then eventually led to me playing during high school. Now in college, basketball no longer could be a priority due to academics. 
          So I thought to myself: how can I do both? This is where I came up
          with the idea of providing free lessons for the youth and community while using my web developing skills to create this page. 
          I truly believe that basketball is more than just a game; it's a powerful medium that forges lifelong friendships, teaching teamwork, trust, and camaraderie both on and off the court.
        </p>
        

      </div>
    </div>
  );
}

export default App;
