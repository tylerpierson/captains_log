const React = require('react')

function New(props) {
    return(
        <div>
            <h1>New Log Page</h1>
            <a href="/logs">Go back to Index Page</a>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title"/><br/>
                Entry: <input type="textarea" name="entry"/><br/>
                Ship is Broken: <input type="checkbox" name="shipIsBroken"/><br/>
                <input type="submit" value="Create Log"/>
            </form>
        </div>
    )
}

module.exports = New