/* Import our react hooks
Necessary Context, css, history and params from react router dom.

export ArticleForm function, grab get article components from article context.

 */
import { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"

