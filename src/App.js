import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { GetData } from './components/GetREducer';

function App() {
  const dispatch= useDispatch()
const {array} = useSelector((prev)=> prev)


  const getRequest= async ()=>{
   dispatch(GetData())

}
  return (
    <div className="App">
     {array.map((el)=>{
     return(
<div style={{border:'1px solid red'}}>

  <h1> {el.name}</h1>,
  <h1> {el.username}</h1>,
  <h2>{el.phone}</h2>
</div>
     )
      
     })}
     <button onClick={getRequest}>click</button>
    </div>
  );
}

export default App;
