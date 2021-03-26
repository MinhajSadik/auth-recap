import './App.css';
import Facebook from './Component/Facebook/Facebook';
import GitHub from './Component/GitHub/GitHub';
import Google from './Component/Google/Google';

function App() {
  return (
    <div className="App">
      <Google />
      <Facebook />
      <GitHub/>
    </div>
  );
}

export default App;
