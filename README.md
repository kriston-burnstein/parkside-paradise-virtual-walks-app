# <img src="https://user-images.githubusercontent.com/65462564/218569434-57c4efb7-5dda-40a7-88b2-358fbd43bd99.png" width="70"/><br>Parkside Paradise Virtual Walks

### Breathtaking and immersive virtual walks through US National Parks
<img width="1278" alt="parkside-landing" src="https://user-images.githubusercontent.com/65462564/218576517-8a5aeb81-b2b4-4652-a7b4-5a8cc0a12883.png">

### Curated immersive virtual walks through US National Parks. Where you're invited to relax, unwind, and experience the splendor of some of the US's most mesmerizing landscapes.

Allows users to log in, set up a profile, bookmark and save their favorite walks, like/unlike their favorite walks, and upload their own walks. Imagined during the pandemic and built for anyone anywhere that wants to get away to the vast and beautiful outdoors but isn't able to at the moment. A chance to relax, unwind, reset, and recharge. 

### Visit the deployed site:
https://parkside-virtual-walks-app.herokuapp.com/<br>

### Demo user:
email: tester1234@gmail.com<br>
password: tester1234

---

### Tech used:
- **Frontend:** JavaScript, EJS, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport, bcrypt
- **Media Handling:** Cloudinary, Multer
- **Logging & Debugging:** Morgan
- **Testing:** Jest, Supertest
- **Environment & Configuration:** dotenv
- **Development Utilities:** Nodemon

### Enhancements and optimizations will include:
- This is an ongoing labor of love that I'm really enjoying tweaking, polishing, streamlining, and optimizing as I go
- I'm currently working on the ability to search and sort walks by park name, terrain, guide, state, and speaking guide or just nature sounds only 
- I'm also working on adding more fleshed out profile features 
- As well as adding a section to get-started page discussing recent in-the-news litigation and controversy surrounding filming in US National Parks

---

### To run:

### Install

`npm install`

### Environment setup

- Create a `.env` file in config folder and add the following as `key=value`
  - PORT=2121 (can be any port example: 3000)
  - DB_STRING=`'your database URI'`
  - CLOUD_NAME=`'your cloudinary cloud name'`
  - API_KEY=`'your cloudinary api key'`
  - API_SECRET=`'your cloudinary api secret'`

### Running the application

- For Production <br>
`npm start`

- For Development <br>
`npm run dev`
---

### Testing:
This project uses Jest for unit testing, along with additional libraries including supertest and mongodb-memory-server for specific functionalities.

### Running tests
To run the tests locally: 
`npm test`

### Coverage
- Coverage reports can be generated using:
`npm run test:coverage`
- The coverage summary will be displayed in the CLI upon completion of the test run
- Detailed reports will also be generated and available in the designated `coverage` directory

### Writing tests
For guidelines on writing tests, please refer to the <a href="https://jestjs.io/docs/getting-started" target="_blank">Jest documentation</a> and consult existing tests within the `__tests__` directory