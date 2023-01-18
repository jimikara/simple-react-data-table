import React from 'react'
import PropTypes from 'prop-types'

export default function Header({ title, subheading }) {
  return (
    <header>
      <div>
        <h1>{title} Standings</h1>
        <span>{subheading}</span>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string
}
