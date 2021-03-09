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
import { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"
import { useHistory } from "react-router"

export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)

    const history = useHistory()

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <>
        <h3 className="articleHeader">Articles</h3>
        <div className="articles">
            {
                articles.map(article => {
                    return <ArticleCard key={article.id} article={article} />
                })
            }
        </div>
        <div className="articleButtonDiv">
            <button className="addArticleButton" onClick={() => {history.pushState("/articles/create")}}>
            Add Article
            </button>
        </div>
        
        </>

    )
}