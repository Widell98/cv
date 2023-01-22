import twitter from './images/twitter.png'
import logo from './images/curriculum.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'



function App() {
  return (
    <div className="App">

      <section class="hero">
        <nav>
          <img
            class="logo"
            alt="Erik Widell´s logga"
            src={logo}
          />
          <ul>
          
            <li>About me</li>
            <li>Projects</li>
            <li>Contacs</li>
          </ul>
          <button class="hamburger" id="hamburger">
          <i class="fas fa-bars"> </i>  
          </button>
        </nav>
        <div class="hero-area">
          <div class="hero-text">
            <h1> Erik Widell</h1>
            <p>Full Stack Developer</p>
            <div class="button">About me</div>
          </div>
          <div class="socials">
            <div>
              <a href="https://www.twitter.com" class="social">
                <img src={twitter} class="twitter" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com" class="social">
                <img src={linkedin} class="linkedin" />
              </a>
            </div>
            <div>
              <a href="https://www.github.com" class="social">
                <img src={github} class="github" />
              </a>
            </div>
          </div>
        </div>

      </section>
      <section class="sub-section">
        <div class="information">
          <h2>About me</h2>
          <p> Hello. My name is Erik Widell. I am a Software Developer etc..</p>
        </div>
        <div class="headshot-container">
          <img class="headshot" src="" />
        </div>
      </section>
      <section class="sub-section-alternative">
        <h2>Projects</h2>
        <div class="project-container">

          <div class="project-card">
            <img class="project-image" src="" alt="Project One Image" />
            <h3> Project One </h3>
            <p class="subtext">This is my project and some text about it </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/widell98">View Here</a></p>
          </div>

          <div class="project-card"> 
          <img class="project-image" src="" alt="Project One Image" />
            <h3> Project Two </h3>
            <p class="subtext">This is my project and some text about it </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/widell98">View Here</a></p>
          </div>
          <div class="project-card">
          <img class="project-image" src="" alt="Project One Image" />
            <h3> Project Three </h3>
            <p class="subtext">This is my project and some text about it </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/widell98">View Here</a></p>
             </div>
          <div class="project-card">
          <img class="project-image" src="" alt="Project One Image" />
            <h3> Project Four </h3>
            <p class="subtext">This is my project and some text about it </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/widell98">View Here</a></p>
             </div>

        </div>
      </section>
      <footer></footer>


      <script src="src/App.js"></script>
      <div id="root"></div>
    </div>
  );
}

export default App;
