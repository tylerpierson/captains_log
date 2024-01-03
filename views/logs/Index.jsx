const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Logs Index Page</h1>
            <a href="/logs/new">Create a new Captain's Log Entry</a>
            <ul>
                {
                    props.logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index