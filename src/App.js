import FooterApp from "./components/FooterApp";
import NavApp from "./components/NavApp";
import ProjectPartners from "./components/Projectpartners";
import Questions from "./components/Questions";
import TbcxUsaidFirstpage from "./components/TbcxUsaidFirstpage";
import TechnologicalCourse from "./components/TechnologicalCourse";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavApp />
      </header>
      <main>
        <TbcxUsaidFirstpage />
        <TechnologicalCourse />
        <ProjectPartners />
        <Questions />
      </main>
      <footer>
        <FooterApp />
      </footer>
    </div>
  );
}

export default App;
