import lightmodeBtn from '../src/images/icon-moon.svg'
import darkmodeBtn from '../src/images/icon-sun.svg'
import React from 'react';
import lightbg from '../src/images/bg-desktop-light.jpg'
import darkbg from '../src/images/bg-desktop-dark.jpg'
import { render } from 'react-dom';

const totalJobs=document.querySelectorAll('.task').length;
function App() {
  const [jobs,setJobs]= React.useState(totalJobs)
  const[mode,setMode]=React.useState('dark')
  const handleComplete=(e)=>{
    if(e.target.parentElement.classList.contains("completed")){
      e.target.parentElement.classList.remove("completed");
      setJobs(jobs+1)
    }
    else{
      e.target.parentElement.classList.add("completed");
      setJobs(jobs-1)
    }

  }
  React.useEffect(()=>{
   const tasksLeft=[...document.querySelectorAll('.task')].filter((task)=>task.classList.contains('completed')===false).length
   setJobs(tasksLeft)
  },[])
  React.useEffect(()=>{
    if(mode==='light'){
      document.querySelector('.section-top').style.backgroundImage=`url('${lightbg}')`;
      document.querySelector('.main').style.background="#fafafa";
      document.querySelector('.bottom-header').style.background="white"
      document.querySelector('.tasks-container').style.background="white"
      document.querySelector('.filter-btn').style.color="#494C6B"
      document.querySelector('.clear').style.color="#494C6B"
      document.querySelector('.task-name').style.color="#494C6B"
    }
    else{
      document.querySelector('.section-top').style.backgroundImage=`url('${darkbg}')`;
      document.querySelector('.main').style.background=" hsl(235, 21%, 11%)";
      document.querySelector('.bottom-header').style.background="hsl(235, 24%, 19%)";
      document.querySelector('.tasks-container').style.background="hsl(235, 24%, 19%)"
      document.querySelector('.filter-btn').style.color="hsl(234, 39%, 85%)"
      document.querySelector('.clear').style.color="hsl(234, 39%, 85%)"
      document.querySelector('.task-name').style.color="hsl(234, 39%, 85%)"
    }
  })
  const showAll=()=>{
    const tasks=document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.style.display="flex"
    });
  }
  const showCompleted=()=>{
    const tasksCompleted=document.querySelectorAll('.completed');
    const tasks=document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.style.display="none"
    });
    tasksCompleted.forEach(task => {
      task.style.display="flex"
    });

  }
  const showActive=()=>{
    const tasksCompleted=document.querySelectorAll('.completed');
    const tasks=document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.style.display="flex"
    });
    tasksCompleted.forEach(task => {
      task.style.display="none"
    });
  }
  const clear=()=>{
    document.querySelectorAll('.completed').forEach((task)=>task.classList.remove('completed'))
    setJobs(totalJobs)
  }
  return (
    <div className="main">
      <div className="section-top">
        <div className="heading">
          <h1>Todo</h1>
          <button className="mode-btn btn"><img src={`${mode==='light'?lightmodeBtn:darkmodeBtn}`} alt="" onClick={()=>setMode(mode==='light'?'dark':'light')}/></button>
        </div>
        <div className="section-bottom">
          <div className="bottom-header">
            <button className="btn btn-check"></button>
            <h3 className="task-name">Create a new job</h3>
          </div>
          <div className="tasks-container">
            <div className="task">
            <button className="btn btn-check" onClick={handleComplete}></button>
            <h3 className="task-name">Create online Javascript course</h3>
            </div>
            <div className="task">
            <button className="btn btn-check" onClick={handleComplete}></button>
            <h3 className="task-name">Jog around park 3x</h3>
            </div>
            <div className="task">
            <button className="btn btn-check" onClick={handleComplete}></button>
            <h3 className="task-name">C10 minutes meditation</h3>
            </div>
            <div className="task">
            <button className="btn btn-check" onClick={handleComplete}></button>
            <h3 className="task-name">Read for 1 hour</h3>
            </div>
            <div className="task">
            <button className="btn btn-check" onClick={handleComplete}></button>
            <h3 className="task-name">Pick up groceries</h3>
            </div>
            <div className="task">
            <button className="btn btn-check" onClick={handleComplete}></button>
            <h3 className="task-name">Complete Todo app on Frontend Mentor</h3>
            </div>
            <div className="task-footer">
              <p>{jobs} items left</p>
              <div className="filter-btns">
                <button className="btn filter-btn" onClick={showAll}>All</button>
                <button className="btn filter-btn" onClick={showActive}>Active</button>
                <button className="btn filter-btn" onClick={showCompleted}>Completed</button>
              </div>
              <div className="reset">
                <button className="btn clear" onClick={clear}>Clear Completed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
