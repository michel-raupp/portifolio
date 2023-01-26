import About from "./components/about";
import Header from "./components/header";
import Skills from "./components/skills";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
     <GlobalStyle /> 
      <Header />
      <About />
      <Skills />
    </>
  );
}

export default App;
