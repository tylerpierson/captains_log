const React = require('react')
const Layout = require('../Layouts/Layout')

function Index (props) {
    return (
        <Layout>
            <div>
                <h1>Logs Index Page</h1>
                <a href="/logs/new">Create a new Captain's Log Entry</a>
                <ul>
                    {
                        props.logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete this Entry`} />
                                    </form>
                                    <div>
                                        <a href={`/logs/${log._id}/edit`}><button>{`Edit this Entry`}</button></a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
        
    )
}

module.exports = Index