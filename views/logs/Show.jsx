const React = require('react')
const Layout = require('../Layouts/Layout')
const Navbar = require('../Layouts/Navbar')

function Show(props) {
    return (
        <Layout>
            <Navbar></Navbar>
            <div>
                <h1>{props.log.title}</h1>
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
        </Layout>
    )
}

module.exports = Show