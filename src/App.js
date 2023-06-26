import './App.css';
import GoalList from './components/GoalList';

function App() {
  const goalList = [
    {id:'cg1', text:'Finish the Course'},
    {id:'cg2', text:'Use the skills I learned to build a personal project'},
    {id:'cg3', text:'Help others using the knowledge I gained'}
  ]
  return (
    <div className="App">
      <h1>Goals for MERN Course</h1>
      <GoalList goals={goalList} />
    </div>
  );
}

export default App;
