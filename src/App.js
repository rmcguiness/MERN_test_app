import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [goalList, setGoalList ] = useState([
    {id:'cg1', text:'Finish the Course'},
    {id:'cg2', text:'Use the skills I learned to build a personal project'},
    {id:'cg3', text:'Help others using the knowledge I gained'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    setGoalList((prevGoalList) =>  prevGoalList.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h1>Goals for MERN Course</h1>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={goalList} />
    </div>
  );
}

export default App;
