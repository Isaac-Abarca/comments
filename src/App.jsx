import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ReadComments from './components/ReadComments';
import ViewComments from './components/ViewComents';
import { useState } from 'react';

function App() {

  const [comments, setComments] = useState([]);

  return (
    <div className='container-body'>
      <h1>Comments</h1>
      <ReadComments comments={comments} setComments={setComments}/>
      <ViewComments comments={comments} setComments={setComments}/>
    </div>
  )
}

export default App
