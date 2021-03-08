import logo from './logo.svg';
import './App.css';
import MainBlock from './components/MainBlock';
import ChildBlock from './components/ChildBlock';
import NewNote from './components/NewNote';
// import { Note } from './components/Note';

function App() {
  return (
    <div className="App">
      {/* <MainBlock name={"Elisha"}><ChildBlock></ChildBlock></MainBlock> */}
      <NewNote></NewNote>
    </div>
  );
}

export default App;
