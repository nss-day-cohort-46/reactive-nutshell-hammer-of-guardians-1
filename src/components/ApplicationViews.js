import React from "react"
import { Route } from "react-router-dom"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { MessageProvider } from "./messages/MessageProvider"
import { FriendContext, FriendProvider } from "./friends/FriendProvider"
import { EventProvider } from "./events/EventProvider"

export const ApplicationViews = () => {
  return (
    <>

    {/* ##### Articles ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendContext>
              <EventProvider>

        <Route exact path="/">
          <ArticleList />        
        {/* Render the component for news articles */}
        </Route>

              </EventProvider>
            </FriendContext>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
      
    {/* ##### Friends ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendContext>
              <EventProvider>

        <Route path="/friends">
          {/* Render the component for list of friends */}
        </Route>

              </EventProvider>
            </FriendContext>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
      
      {/* ##### Messages ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendContext>
              <EventProvider>

        <Route path="/messages">
          {/* Render the component for the messages */}
        </Route>

              </EventProvider>
            </FriendContext>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
      
      {/* ##### Tasks ##### */}

      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendContext>
              <EventProvider>

        <Route path="/tasks">
          {/* Render the component for the user's tasks */}
        </Route>

              </EventProvider>
            </FriendContext>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>

      {/* ##### Events ##### */}
      
      <ArticleProvider>
        <TaskProvider>
          <MessageProvider>
            <FriendContext>
              <EventProvider>
              
        <Route path="/events">
          {/* Render the component for the user's events */}
        </Route>

              </EventProvider>
            </FriendContext>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
    </>
  )
}
