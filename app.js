const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user'); 

const Completed = require('./models/people');
const bcrypt = require('bcrypt');
const session = require('express-session');
mongoose.connect('mongodb+srv://Antibiotika224:Rm21021997@cluster0.einau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
   .then(() => {
      console.log("CONNECTION OPEN")
   })
   .catch(err => {
      console.log("CONNECTION ERROR");
      console.log(err)
   })

// view engine setup






app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(session({secret: 'mysecret'}));


app.get('/secret', (req, res) => {
   res.send('SECRET PAGE')
})
app.get('/auth', (req, res) => {
   res.render('authentication/auth.ejs')
})
app.post('/auth/register', async (req, res) => {
   try { 
      const {password, username} = req.body;
      const hash = await bcrypt.hash(password, 12);
      const user = new User({
         username,
         password: hash
      })
      await user.save();
      res.redirect('/auth');
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
  }
})
app.post('/auth/login', async (req, res) => {
   try { 
      const {password, username} = req.body;
      const user = await User.findOne({ username });
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
          res.redirect('/deepseaTraulFLF');
      } else {
         res.send("TRY AGAIN")
      }
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
   }
})

const testRouter = require('./routes/test')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin');
const peoplerouter = require('./routes/people');
const homeRouter = require('./routes/home')
const createdRouter = require('./routes/created')




app.use(express.json())
app.use('/created',createdRouter)
app.use('/user', userRouter);
app.use('/home',homeRouter)
app.use('/admin', adminRouter);
app.use('/people',peoplerouter)
app.use('/test',testRouter)


app.get('/', (req, res) => {
   try {
      res.render('index.ejs')
   } catch (e) {
      console.log(e);
      res.sendStatus(500);
   }
});

app.listen(3000, () => {
   console.log('listening on port 3000')
})
