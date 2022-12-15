import './App.css';
import Tabel from './Component/Tabel';
import Enter from './Component/Enter';
import React, { useState } from 'react';
import Inputtabel from './Component/Inputtabel';

function App() {
  const [type,settype]=useState(null)
  const [table,settable]=useState([{
    id:1,
    name:'dinesh',
    department:'bca',
    ph_num:65478903
  },
])


  function Add(props){
    settable((values)=>{
      return [...values,props]
    })
  }

  function edit(props){
    settype(props)
  }

  function save(props,value){
    for(let i=0;i<table.length;i++){
      if(props===i){
        table.splice(i,1,value)
        settype(null)
      }
    }
  }

  function tabledelete(props){
    const newlist=table.filter((value)=>{ return value.id !==props})
    settable(newlist)
  }
  return (
    <div>
      <Enter fun={Add}/>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Department</th>
          <th>Ph.number</th>
          <th>Action</th>
        </tr>
        <tbody>
          {table.map((tabel,index)=>{
            return(
              <>
              {tabel.id===type?<Inputtabel delete={tabledelete} index={index} save={save} id={tabel.id} name={tabel.name} dept={tabel.department} ph={tabel.ph_num}/>:<Tabel delete={tabledelete} index={index} id={tabel.id} name={tabel.name} dept={tabel.department} ph={tabel.ph_num} editfun={edit}/>}
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
