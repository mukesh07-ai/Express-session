express = require('express');
app = express();
port = 3000;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

session = require('express-session');

app.use(session({
    secret: 'Mukesh',
}))

// app.get('/', (req, res) => {
//     req.session.uname = 'mukesh';
//     res.send('Session created')
// })

app.get('/', (req, res) => {
    if(req.session.user_visit){
        req.session.user_visit++;
        res.send('visit count: ' + req.session.user_visit)
    }
    else{
        req.session.user_visit = 1;
        res.send('this is your first visit')
    }
})




//76ad7e18-36f8-4976-a409-98b7625f7a99
//s%3AfRShUS9yiz-JA6niX4w2wGpzXuCxHBLN.JFggBiKL24e