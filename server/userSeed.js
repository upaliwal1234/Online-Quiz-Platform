const mongoose = require('mongoose')
const User = require('./model/User')

mongoose.connect('mongodb://127.0.0.1:27017/Online-Quiz')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('error in connecting to DB', err); })

const dummyUser = [
    {
        name: 'xyz',
        email: 'xyz@abc.com',
        password: 'main nahi bataunga',
        quizCreated: ['6548f33eecfbdea4f73bdbc0']
    }
]

async function seed3() {
    await User.insertMany(dummyUser);
    console.log('data seeded successfully');
}

seed3();