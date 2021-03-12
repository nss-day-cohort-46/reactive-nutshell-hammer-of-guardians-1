import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"

export const ArticleForm = () => {
    
    const { getArticles, addArticle, updateArticle, getArticleById } = useContext(ArticleContext)
    const { articleId } = useParams()
    const history = useHistory()

    const [article, setArticle] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        url: "",
        title: "",
        synopsis: "",
        timestamp: ""
    })

    useEffect(() => {
        getArticles()
        if (articleId) {
            getArticleById(articleId)
            .then(article => {
                setArticle(article)
            })
        }
    }, [])
    

    const handleControlledInputChange = (event) => {
        const newArticle = { ...article }
            newArticle[event.target.id] = event.target.value
            setArticle(newArticle)
    }

    const handleSaveArticle = () => {
        if (article.url === "" || article.title === "" || article.synopsis === "" ) {
            window.alert("Please complete all fields")
        } else {
           if(articleId){
                updateArticle({
                    userId: article.userId,
                    title: article.title,
                    synopsis: article.synopsis,
                    timestamp: article.timestamp,
                    url: article.url,
                    id: article.id
                })
            .then(() => history.push("/")) 
        } else {
            addArticle({
                    title: article.title,
                    synopsis: article.synopsis,
                    timestamp: article.timestamp,
                    url: article.url,
                    id: article.id
            })
            .then(() => history.push("/"))
        }
        }        
    }


    return (
        <form className="articleForm">
            <h2 className="articleFromTitle">{articleId ? "Edit Article" : "Add Article"}</h2>
            <fieldset>
                <div>
                    <label htmlFor="articleTitle">Article title: </label>
                    <input type="text" name="articleTitle" id="title" onChange={handleControlledInputChange} required className="form-control" placeholder="Article Title" value={article.title}></input>
                </div>
                <div>
                    <label htmlFor="articleSynopsis">Article Summary: </label>
                    <input type="text" name="articleSynopsis" id="synopsis" onChange={handleControlledInputChange} required className="form-control" placeholder="Article Summary" value={article.synopsis}></input>
                </div>
                <div>
                    <label htmlFor="articleURL">URL: </label>
                    <input type="text" name="articleURL" id="url" onChange={handleControlledInputChange} required className="form-control" placeholder="Article URL" value={article.url}></input>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={event => {
                event.preventDefault()
              handleSaveArticle()
            }}>
              {articleId ? "Save Article" : "Add Article"}
            </button>
        </form>
    )

}