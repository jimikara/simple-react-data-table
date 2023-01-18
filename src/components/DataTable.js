import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DataTableRow from './DataTableRow'

export default function DataTable({ tableData, setTableData }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [sortPreferences, setSortPreferences] = useState({ order: 'asc', byValue: 'points' })

  const sortTableData = (order = 'desc', byValue = 'goalsDiff') => {
    if (!tableData || tableData?.length === 0) return

    setSortPreferences({ order, byValue })

    return tableData.sort((a, b) => {
      const sortOrder = order === 'desc' ? [a, b] : [b, a]

      return sortOrder[0][byValue] - sortOrder[1][byValue]
    })
  }

  const setOrderDescending = () => {
    setTableData([...sortTableData()])
  }

  const setOrderAscending = () => {
    setTableData([...sortTableData('asc')])
  }

  const setInitialOrder = () => {
    setTableData([...sortTableData('asc', 'points')])
  }

  const isSortActive = (order, byValue) => {
    return Boolean(sortPreferences.byValue === byValue && sortPreferences.order === order)
  }

  return (
    <div>
      <div className="container">
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>Team</th>
                <th>Played</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>Points</th>
                <th
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}>
                  Goal Diff&apos;
                  <span
                    href="#"
                    role="button"
                    onClick={setOrderDescending}
                    className={`col-sort-icon ${isSortActive('desc', 'goalsDiff') ? 'active' : ''}`}
                    title="sort descending">
                    &#11015;
                  </span>
                  <span
                    href="#"
                    role="button"
                    onClick={setOrderAscending}
                    className={`col-sort-icon ${isSortActive('asc', 'goalsDiff') ? 'active' : ''}`}
                    title="sort ascending">
                    &#11014;
                  </span>
                  {showTooltip && <span className="tooltip">Sort by Goal Difference</span>}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <DataTableRow key={item.team.id} rowData={item} />
              ))}
            </tbody>
          </table>
          <button onClick={setInitialOrder}>Set initial order</button>
        </div>
      </div>
    </div>
  )
}

DataTable.defaultProps = {
  tableData: []
}

DataTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  setTableData: PropTypes.func.isRequired
}
