import React from "react"
import { Route } from "react-router-dom"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList";
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageForm } from "./messages/MessageForm"
import { TaskProvider } from "./tasks/TaskProvider"
import { FriendProvider } from "./friends/FriendProvider"
import { TaskList } from "./tasks/TaskList"
import { ArticleForm } from "./articles/ArticleForm"
import { EventForm } from "./events/EventForm"

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

        <Route path="/articles/create">
          <ArticleForm />
        </Route>

        <Route path="/articles/edit/:articleId(\d+)">
          <ArticleForm />
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
           <MessageList />
         </Route>
         
         <Route path="/messages/create">
           {/* Render the component for the messages */}
           <MessageForm />
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
                    <TaskList />
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
          <EventList />
        </Route>
        
        <Route path="/events/create">
          {/* Render the component for the user's events */}
          <EventForm />
        </Route>

              </EventProvider>
            </FriendProvider>
          </MessageProvider>
        </TaskProvider>
      </ArticleProvider>
    </>
  )
}