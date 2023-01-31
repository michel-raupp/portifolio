import About from "./components/about";
import Footer from "./components/footer";
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
      <Footer />
    </>
  );
}

export default App;
