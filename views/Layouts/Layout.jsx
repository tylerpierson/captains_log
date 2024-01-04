const React = require('react')
const Navbar = require('../Layouts/Navbar')

class Layout extends React.Component {
    render() {
      return (
        <html>
          <head>
            <link rel="stylesheet" href="/css/style.css" />
          </head>
          <body>
            {this.props.children}
          </body>
        </html>
      )
    }
  }
  
  module.exports = Layout