/*Import history from react router dom, useEffect useContext useState from react
Import Article Card, Article.css. 
Make ArticleList function, import Article Context, useContext(ArticleContext), bring in
{articles, getArticles} via context.
Setting state to an empty array, declaring our state variable of article, and our callback
function of setArticles.
const [articles, setArticles] = useState([])
useEffect will call getArticles(), our dependency array will remain empty.
This will not run again.
ArticleList will return the html representation for our Articles page. 
article.map() for every article return ArticleCard with a key of {article.id}
and article={article}.
Add Article button with onClick which will push us to /articles/create

..
 */

import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { useHistory } from "react-router-dom"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"