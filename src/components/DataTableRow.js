import React from 'react'
import PropTypes from 'prop-types'

export default function DataTableRow({ rowData }) {
  return (
    <tr>
      <td>{rowData.rank}</td>
      <td className="icon">
        <img width="24" src={rowData.team.logo} alt={`${rowData.team.name} club crest`} />
      </td>
      <td>{rowData.team.name}</td>
      <td>{rowData.all.played}</td>
      <td>{rowData.all.win}</td>
      <td>{rowData.all.draw}</td>
      <td>{rowData.all.lose}</td>
      <td>{rowData.points}</td>
      <td>{rowData.goalsDiff}</td>
    </tr>
  )
}

DataTableRow.propTypes = {
  rowData: PropTypes.object.isRequired
}
