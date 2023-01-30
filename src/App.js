import About from "./components/about";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Work from "./components/work";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Work />
    </>
  );
}

export default App;
