
import './Table.css';

export default function Enter(props) {
  function fun2(){
    document.getElementById('id').value='';
    document.getElementById('name').value='';
    document.getElementById('dept').value='';
    document.getElementById('ph_num').value='';
  }
  return (
    <div className='entry'>
        <input className='inputs' type='text' id='id' placeholder="Id"></input>
        <input className='inputs' type='text' id='name' placeholder="Name"></input>
        <input className='inputs' type='text' id='dept' placeholder="Department"></input>
        <input className='inputs' type='text' id='ph_num' placeholder="Ph-Number"></input>
        <button className='add' onClick={()=>{props.fun({
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            department: document.getElementById('dept').value,
            ph_num: document.getElementById('ph_num').value,
        },);fun2()}}>Add</button>
    </div>
  )
}
