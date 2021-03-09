import React from "react"
import { Route } from "react-router-dom"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { MessageProvider } from "./messages/MessageProvider"
import { FriendProvider } from "./friends/FriendProvider"
import { EventProvider } from "./events/EventProvider"

export const ApplicationViews = () => {
  return (
    <>

    {/* ##### Articles ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendProvider>
              <EventProvider>

        <Route exact path="/">
          <ArticleList />        
        {/* Render the component for news articles */}
        </Route>

              </EventProvider>
            </FriendProvider>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
      
    {/* ##### Friends ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendProvider>
              <EventProvider>

        <Route path="/friends">
          {/* Render the component for list of friends */}
        </Route>

              </EventProvider>
            </FriendProvider>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
      
      {/* ##### Messages ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendProvider>
              <EventProvider>

        <Route path="/messages">
          {/* Render the component for the messages */}
        </Route>

              </EventProvider>
            </FriendProvider>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
      
      {/* ##### Tasks ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendProvider>
              <EventProvider>

        <Route path="/tasks">
          {/* Render the component for the user's tasks */}
        </Route>

              </EventProvider>
            </FriendProvider>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>

      {/* ##### Events ##### */}
      
      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendProvider>
              <EventProvider>
              
        <Route path="/events">
          {/* Render the component for the user's events */}
        </Route>

              </EventProvider>
            </FriendProvider>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
    </>
  )
}
