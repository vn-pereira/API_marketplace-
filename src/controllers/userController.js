const mongoose = require("../config/database");
const userSchema = require("../models/UserModel");
const user = new mongoose.model("UserModel", userSchema);

module.exports = class userController{
    static getAll(){
      return (req, resp) =>{
        user.find({}, (err, result) =>{
          if(err)
          return err;
          resp.send (result); 
        });  
      };  
    };

    static getById(){
     return (req, resp) =>{
       const id = req.params.id;
        user.find({idUser: id}, (err, result) => {
            if(err)
            return err;
            resp.send(result);
        });   
      }; 
    };

    static insertUser(){
      return async (req, resp) =>{
        const {idUser, nomeUser, emailUser, senhaUser, cpfUser, telefoneUser, enderecoUser} = req.body;
         
        const user = new User({
            idUser,
            nomeUser,
            emailUser,
            senhaUser,
            cpfUser,
            telefoneUser,
            enderecoUser
        });
        await user.save((err) => {
            if (err) 
            res.send(err);
          });
          res.send("User creted successful!");
        };
    }

    static updateUser(){
        return async(req, resp) =>{
          const {nomeUser, emailUser, senhaUser, telefoneUser, enderecoUser} = req.body;   
            user.find({"nomeUser": id}, (err, result)=>{
                if (err) 
                return err;

                result[0].nomeUser = nomeUser;
                result[0].emailUser = emailUser;
                result[0].senhaUser = senhaUser;
                result[0].telefoneUser = telefoneUser;
                result[0].enderecoUser = enderecoUser;
                result[0].save();
                
                resp.status(200).send('Updated data as successful');
            });
        };
    };
    
};

