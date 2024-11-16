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

console.log(path.join(__dirname, "../templates/partials"));
console.log(template_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));-
app.set('views', template_path);
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// app.post('/register', async (req, res) => {
//     try {

//         const password = req.body.password;
//         const cpassword = req.body.confirmpassword;

//         if(cpassword === password){
//             const registerEmployee = new Register({
//                 firstname : req.body.firstname,
//                 lastname : req.body.lastname,
//                 email : req.body.email,
//                 gender : req.body.gender,
//                 phno : req.body.phone,
//                 age : req.body.age,
//                 password : req.body.password,
//                 confirmPassword : req.body.confirmpassword
//             });

//             const registered = await registerEmployee.save();
//             res.status(200).render('index');
//         }else{
//             res.send("Your password is not matching. Write password properly")
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

app.post('/login', async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const username = await Register.findOne({email:email});
        const checkPassword = username.password;

        if(!username){
            res.send("Invalid login details");
        }

        // const isMatch = await bcrypt.compare(password, checkPassword);

        if(checkPassword === password){
            res.render('dashboard');}

        // const check = await bcrypt.compare

        // if(isMatch){
        //     res.render('index');
        // }
        else{
            res.send("Invalid login details");
        }

    } catch (error) {
        res.send("There is some technical issue please try agian later")
    }
})

app.listen(PORT, () => {
    console.log("Listening to the port ", PORT);
});