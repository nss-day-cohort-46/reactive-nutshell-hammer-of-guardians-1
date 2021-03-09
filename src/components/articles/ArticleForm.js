import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"

export const ArticleForm = () => {
    
    const { articles, getArticles, addArticle } = useContext(ArticleContext)

    const [article, setArticle] = useState({
        id: 0,
        userId: 0,
        url: "",
        title: "",
        synopsis: "",
        timestamp: ""
    })

    const history = useHistory()

    useEffect(() => {
        getArticles()
    }, [])

    const handleControlledInputChange = (event) => {
        const newArticle = { ...article }
        newArticle[event.target.id] = event.target.value
        setArticle(newArticle)
    }

    const handleSaveArticle = () => {
        if (article.url === "" || article.title === "" || article.synopsis === "" || article.timestamp === 0 ) {
            window.alert("Please complete all fields")
        } else {
            addArticle({
                url: article.url,
                title: article.title,
                synopsis: article.synopsis,
                timestamp: article.timestamp 
            })
            .then(() => history.push(`/articles`)) 
        }        
    }

    return (
        <form className="articleForm">
            <h2 className="articleFromTitle">New Article</h2>
            <fieldset>
                <div>
                    <label htmlFor="title">Article title: </label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required className="form-control" placeholder="Article Title" value={article.title}></input>
                </div>
                <div>
                    <label htmlFor="timestamp">Date: </label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required className="form-control" value={article.timestamp}></input>
                </div>
                <div>
                    <label htmlFor="synopsis">Article Summary: </label>
                    <input type="text" id="synopsis" onChange={handleControlledInputChange} required className="form-control" placeholder="Article Summary" value={article.synopsis}></input>
                </div>
                <div>
                    <label htmlFor="url">URL: </label>
                    <input type="text" id="url" onChange={handleControlledInputChange} required className="form-control" placeholder="Article URL" value={article.url}></input>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={event => {
                event.preventDefault()
              handleSaveArticle()
            }}>
              Save Article
            </button>
        </form>
    )

}