import React from "react"
import { Route } from "react-router-dom"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"

export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
        <Route exact path="/">
          <ArticleList />        
        {/* Render the component for news articles */}
        </Route>
      </ArticleProvider>
      
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
