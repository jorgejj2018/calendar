import './App.css';
import Calendar from './component/calendar'
import CreateClassTopic from './component/form'
function App() {
  return (
    <div className="App">
      <CreateClassTopic/>
      <Calendar/>
    </div>
  );
}

export default App;
