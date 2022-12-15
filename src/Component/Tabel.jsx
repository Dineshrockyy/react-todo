import React from 'react'
import './Table.css';

export default function (props) {
  return (
      <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.dept}</td>
          <td>{props.ph}</td>
          <td>
              <button className='edit' onClick={()=>props.editfun(props.id)}>Edit</button>
              <button className='delete' onClick={()=>props.delete(props.id)}>Delete</button>
          </td>
      </tr>
  )
}
