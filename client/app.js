var React = require('react')

require('./vendor/timesheet.css')
require('./vendor/timesheet')

require('./app.scss')

var Employment = require('./employment')

module.exports = React.createClass({
  render() {
    return (
      <div>
        <Employment />
      </div>
    )
  }
})