import { useState, createContext } from "react"
/* messageProvider will fetch saved messages from the database.
We will use this to render the message List.
Create message Context export 
useState([]) variables [messages, setmessages].
messageProvider returns messageContext.Provider.
set value equal to message useState variable, get request, post, and delete functions.


Will also need fetch calls with a POST and DELETE Method.
*/
export const ArticleContext = createContext()

export const ArticleProvider = (props) => {

    const [ articles , setArticles ] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
        .then(response => response.json())
        .then(setArticles)
    }

    const getArticleById = (articleId) => {
        return fetch(`http://localhost:8088/articles/${articleId}`)
        .then(res => res.json())
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

    const updateArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(article)
        })
          .then(getArticles)
      }

    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
        .then(getArticles)
    }


    return (
       <ArticleContext.Provider value={{
           articles, getArticles, addArticle, deleteArticle, updateArticle, getArticleById
       }}>
           {props.children}
       </ArticleContext.Provider>
    )

}