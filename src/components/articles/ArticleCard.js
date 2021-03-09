/*Import react hooks, article context, article.css,
useHistory and usePrams from react-router-dom 
useContext Article Context {article delete function}
useHistory()
define articleDelete function call deletearticlefunction(article.id)
.then push "/articles"
maybe a useEffect goes here????

Create ArticleCard function, pass in {article}.
returns the html representation of the card.
Use dot notation to access each article property.
Include a delete button that is tied to each articles id.
Our delete button will include an onClick which calls our articleDelete Function.
 */

import React from "react"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"

export const ArticleCard = ({article}) => {

    return (
        <section className="articleCard">
        <h3 className="articleTitle">{article.title}</h3>
        <div className="articleTimestamp">{article.timestamp}</div>
        <div className="articleSynopsis">{article.synopsis}</div>
    <a className="articleUrl" href={article.url}>Full Article</a>

    </section>
    )
}
