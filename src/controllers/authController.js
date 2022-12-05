const userService = require("../services/userService");

const getAuth = async (req, res) => {
    const { rut, password } = req.body;

    try {
        const user = await userService.getUserByRut(rut);

        try {
            if(user.password==password){
                res.status(200).json({ "status": true, "result": "Usuario logeado" });
            }
        } catch (error) {
            res.status(200).json({ "status": false, "result": "Datos incorrectos" });
        }


    } catch (error) {
        console.log(error);
    }
  
};

module.exports = {
    getAuth
}