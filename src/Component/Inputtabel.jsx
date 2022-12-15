import React, { useState } from 'react'
import './Table.css';

export default function Inputtabel(props) {
    const data = { id: props.id, name: props.name, department: props.dept, ph_num: props.ph }
    const [value, setvalue] = useState(data)
    function TabelChange(event) {
        if (event.target.id==='id') {
            setvalue({ ...value, id: event.target.value })
        } else if (event.target.id==='name') {
            setvalue({ ...value, name: event.target.value })
        } else if (event.target.id==='dept') {
            setvalue({ ...value, department: event.target.value })
        } else if(event.target.id==='ph_num'){
            setvalue({ ...value, ph_num: event.target.value })
        }
    }
  return (
    <tr>
        <td><input className='inputs' type='text' id='id' value={value.id} onChange={TabelChange}></input></td>
        <td><input className='inputs' type='text' id='name' value={value.name} onChange={TabelChange}></input></td>
        <td><input className='inputs' type='text' id='dept' value={value.department} onChange={TabelChange}></input></td>
        <td><input className='inputs' type='text' id='ph_num' value={value.ph_num} onChange={TabelChange}></input></td>
        <td><button className='edit' onClick={()=>props.save(props.index,value)} type="button">Save</button> <button className='delete' onClick={()=>props.delete(value.id)} type="button">delete</button></td>
    </tr>
  )
}
