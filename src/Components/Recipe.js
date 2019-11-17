import React from 'react'

function Recipe({title,calories,im,ingre}) {
    return (
        <div className="div-cl" >
            <h1>{title}</h1><br/>
            <ol>
                {
                    ingre.map(ingred =>(
                        <li>{ingred}</li>
                    ))
                }
            </ol>
            <p><b>Calories = {calories}</b></p><br/>
            <img  src={im} alt="" ></img>
        </div>
    )
}

export default Recipe
