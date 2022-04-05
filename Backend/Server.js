const app = require ('../Backend/app')
const connectDatabase = require('./database');

const PORT = 8080;

connectDatabase();
app.listen(PORT, ()=>{
    console.log(`server is running successfully on PORT : ${PORT}`);
})