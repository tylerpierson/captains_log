const React = require('react')
const Layout = require('../Layouts/Layout')

function New(props) {
    return(
        <Layout>
            <div>
                <h1>New Log Page</h1>
                <a href="/logs">Go back to Index Page</a>
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title"/><br/>
                    Entry: <textarea rows="5" cols="33" placeholder="Add your entry here..." name="entry"></textarea><br/>
                    Ship is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked/><br/>
                    <input type="submit" value="Create Log"/>
                </form>
            </div>
        </Layout>
    )
}

module.exports = New