const React = require('react')

function Show(props) {
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href="/logs">Go back to Index Page</a>
            <p>
                {props.log.entry}
            </p>
            <p>
                {props.log.shipIsBroken? 'The ship is broken.' : 'The ship is not broken.'}
            </p>
            <h3>
                Log was created @ {new Date(props.log.createdAt).toLocaleString()}
            </h3>
        </div>
    )
}

module.exports = Show