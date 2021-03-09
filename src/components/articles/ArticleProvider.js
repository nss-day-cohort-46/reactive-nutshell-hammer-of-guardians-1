import { useState, createContext } from "react"
/* ArticleProvider will fetch saved articles from the database.
We will use this to render the Article List.
Create Article Context export 
useState([]) variables [articles, setArticles].
ArticleProvider returns ArticleContext.Provider.
set value equal to article useState variable, get request, post, and delete functions.


Will also need fetch calls with a POST and DELETE Method.
*/

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {

    const [ articles, setArticles ] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
        .then(response => response.json())
        .then(setArticles)
    }

    const addArticle = articleObj => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getArticles)
    }

    const articleDelete = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
        .then(getArticles)
    }


    return (
       <ArticleContext.Provider value={{
           articles, getArticles, addArticle, articleDelete
       }}>
           {props.children}
       </ArticleContext.Provider>
    )

}