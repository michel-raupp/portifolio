import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Work from "./components/work";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
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
