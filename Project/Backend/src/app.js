const express = require('express');
require('./db/conn');
const Register = require('./models/register')
const app = express();
const hbs = require('hbs');
const path = require('path');
const bcrypt = require('bcryptjs')
const PORT = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

console.log(partial_path);
console.log(template_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));
app.set('views', template_path);
app.set('view engine', 'hbs');
hbs.registerPartials(partial_path);

app.get('/', (req, res) => {
   res.render('index');
});

app.post('/register', async (req, res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(cpassword === password){
            const registerEmployee = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                gender : req.body.gender,
                phno : req.body.phone,
                age : req.body.age,
                password : req.body.password,
                confirmPassword : req.body.confirmpassword
            });

            const registered = await registerEmployee.save();
            res.status(200).render('index');
        }else{
            res.send("Your password is not matching. Write password properly")
        }

    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const username = await Register.findOne({email:email});
        const checkPassword = username.password;

        const isMatch = await bcrypt.compare(password, checkPassword);

        if(isMatch){
            res.render('index');
        }
        else{
            res.send("Invalid login details");
        }

    } catch (error) {
        res.send("There is some technical issue please Try agian later")
    }
})

app.listen(PORT, () => {
    console.log("Listening to the port ", PORT);
});