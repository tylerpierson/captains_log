const React = require('react')

function Edit(props) {
    const { title, _id, shipIsBroken, entry } = props.log
    return(
        <div>
            <h1>{title} Edit Page</h1>
            <a href="/logs">Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title}/><br/>
                Entry: <textarea rows="5" cols="33" name="entry" defaultValue={entry}></textarea><br/>
                Ship is Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked/>: <input type="checkbox" name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Entry"/>
            </form>
        </div>
    )
}

module.exports = Edit