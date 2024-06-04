const app = require('./app');
const {exec} = require('child_process');


const PORT = process.env.PORT || 8081;

// En server.js, borrar de la línea 11 a la 21

const main = async() => {
    try{
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch(error){
        console.log(error);
    }
}

main();
