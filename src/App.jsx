import Header from "./Elements/Header";
import Main from "./Elements/Main";
import MainTop from "./Elements/MainTop";

function App() {
  return (
    <div className="App">
      <div className="project-top">
        <Header />
        <MainTop />
      </div>
      <Main />
    </div>
  );
}

export default App;
