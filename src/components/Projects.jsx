import logo from '../images/curriculum.png'
import github from '../images/githubcv.png'

function Projects () {
    return (
        <section class="sub-section-alternative">
        <h2>Projects</h2>
        <div class="project-container">

          <div class="project-card">
            <img class="project-image" src={github} alt="Project One Image" />
            <h3> Among people </h3>
            <p class="subtext">
              A crm system made for AmongPeople AB. Written in Javscript, React
              </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/Widell98/CRMSystem">View Here</a></p>
          </div>

          <div class="project-card"> 
          <img class="project-image" src={github} alt="Project One Image" />
            <h3> MovieRating </h3>
            <p class="subtext">
             A MovieRating website where you rate movies. Project contains both backend & frontend written in C# and javascript & react </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/Widell98/MovieRating">View Here</a></p>
          </div>
          
          <div class="project-card">
          <img class="project-image" src={github} alt="Project One Image" />
            <h3> Currency Converter </h3>
            <p class="subtext">
              This is one of my first projects made almost two years ago, it´s an currencyconverter written in c#.
              </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/Widell98/CurrencyConverter/tree/main">View Here</a></p>
             </div>
          <div class="project-card">
          <img class="project-image" src={github} alt="Project One Image" />
            <h3> Project Four </h3>
            <p class="subtext">
              This is my cv project, the one you´re currently using
               </p>
            <hr/>
            <p class="subtext"><a class="project-link" href="https://github.com/Widell98/cv">View Here</a></p>
             </div>

        </div>
      </section>
    )

}

export default Projects