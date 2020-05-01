
NICE TO BORROW - SERVER

A web app for users to search, borrow, and share books locally. 

Built with Node with Express for RestAPIs in the backend, and PostgreSQL with Sequelize and Postgis for storing location-based user data.


## Endpoints

| Method | Path                       | Purpose                             | required parameters       | auth |
| ------ | -------------------------- | ----------------------------------- | ---------------------     | ---- |
| GET    | '/'                        | Test if your server is running      | none                      | no   |
| POST   | '/echo'                    | Test POST requests                  | none                      | no   |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password     | no   |
| POST   | '/login'                   | Get a token with email & password   | email, password           | no   |
| GET    | '/me'                      | Get information of this user        | none                      | yes  |
| POST   | '/authorized_post_request' | Test POST requests (token required) | none                      | yes  |
| GET    | '/books'                   | Get books match with the search     | title, language, distance | no   |
| GET    | '/books/:id                | Get book by id                      | bookId                    | no   |
| PACTH  | '/books/:id                | Update requested book's availability| bookId                    | yes  | 

| POST   | '/borroweditems            | Keep track of borowwed books        | bookId, startDate,
                                                                              endDate,userId            | yes  |
| POST   | '/books'                   | Add books to the database           | title, language, author,                                                                                                       description, imageUrl,
                                                                              borrowingPeriod           | yes  |
   
