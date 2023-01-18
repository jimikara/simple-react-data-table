import React from 'react'

export default function DataTableRow(props) {
  return (
    <tr>
      <td>{ props.rowData.rank }</td>
      <td className='icon'>
        <img 
          width='24' 
          src={ props.rowData.team.logo } 
          alt={ `${props.rowData.team.name} club crest` }
        />
      </td>
      <td>{ props.rowData.team.name }</td>
      <td>{ props.rowData.all.played }</td>
      <td>{ props.rowData.all.win }</td>
      <td>{ props.rowData.all.draw }</td>
      <td>{ props.rowData.all.lose }</td>
      <td>{ props.rowData.points }</td>
      <td>{ props.rowData.goalsDiff }</td>
    </tr>
  )
}