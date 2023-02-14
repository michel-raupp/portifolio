import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import ScrollUp from "./components/scrollup";
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
      <ScrollUp />
    </>
  );
}

export default App;
