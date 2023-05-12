const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hadGlute ? <span> does </span> : <span> does not </span>
                }
                have gluten
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakerBy()}</p>
            <a href={`/breads/${bread.id}/edit`}>
                <button>EDIT</button>
            </a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
            <li>
                <a href={'/breads'}> Go home </a>
            </li>

        </Default>
    )
}

module.exports = Show