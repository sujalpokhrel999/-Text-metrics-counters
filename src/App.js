import Count from "./Components/Count";
import CountWords from "./Components/Count";
import './App.css';
function App() {
  return (
    <div className="Wrapper">
   <div className="WordCounter">
     <div className="Input">
     <h1>Word Count Tool From File</h1>
     <input type="file" accept=".txt" id="fileName"></input>
     <button id="click" onClick={Count}>Word Count</button>
   </div>
    <div className="WordCount" id="WordCount">
      <div id="Lines"></div>
      <div id="Words"></div>
      <div id="Characters"></div>
    </div>
   </div>
   </div>
  );
}
export default App;
