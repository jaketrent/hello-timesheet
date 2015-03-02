var React = require('react')

module.exports = React.createClass({
  componentDidMount() {
    new Timesheet('employment', 2000, 2020, [
      ['07/2005', '11/2006', 'BYU-Idaho', 'lorem'],
      ['02/2006', '04/2007', 'Velocity Webworks', 'lorem'],
      ['04/2007', '09/2007', 'LDS Church', 'lorem'],
      ['01/2008', '12/2012', 'LDS Church', 'lorem'],
      ['12/2012', '01/2014', 'O.C. Tanner', 'lorem'],
      ['01/2014', '02/2015', 'Instructure', 'default'],
      ['04/2014', '02/2015', 'Dev Mountain', 'lorem']
    ]);
  },
  render() {
    return <div id="employment">Employment Timesheet</div>
  }
})