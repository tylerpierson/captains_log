const React = require('react')

class Navbar extends React.Component {
    render() {
      return (
        <html>
          <head>
            <link rel="stylesheet" href="/css/style.css" />
          </head>
          <nav>
            <a href="/logs">Index Page</a>
            <div class="edit-btns">
                <form action={`/logs/${this.props._id}?_method=DELETE`} method="POST">
                    <input type="submit" value={`Delete this Entry`} class="nav-delete"/>
                </form>
                <a href={`/logs/${this.props._id}/edit`}>{`Edit this Entry`}</a>
            </div>
          </nav>
        </html>
      )
    }
  }
  
  module.exports = Navbar