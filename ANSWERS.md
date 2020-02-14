- Mention two parts of Express that you learned about this week.

`1. Express is built mainly upon the idea of middleware—or chaining functionality together. This includes things like routes, adding security, etc.`

`2. Express is built upon REST principals`

- Describe Middleware?

`Middleware are just functions that execute in a particular order to produce a certain response to a server request`

- Describe a Resource?

`A resource is a thing—a noun such as a User, Post, or Todo—that can be requested via a URI location with different HTTP verbs (get, post, put, delete) in order to read, create, update, or delete that thing`

- What can the API return to help clients know if a request was successful?

`A status code usually in the 200 range. 200 being if there was content returned, 201 if there was a resource created, 204 if the operation was successful but no data was returned`

- How can we partition our application into sub-applications?

`Mainly by using routes, and breaking routes into their own folders. Further partitioning can be done by breaking middleware into its own folder, etc.`