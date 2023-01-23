import Header from './components/Header'
import Information from './components/Information'

function App() {
  return (
    <div className="App">
      <Header />
      <Information />
      <br/>
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
