const Users = require('../model/model')

const getAllData = async (req,res)=>{
    let data = await Users.find({})
    res.send(data)
}

const deleteData = async (req,res)=>{
    let id = req.params.id
    let deleted = await Users.findByIdAndDelete({_id:id})
    res.send(deleted)
}

const postData = async (req,res)=>{
    let newUser = new Users(req.body)
    newUser.save()
    res.send(newUser)
}


module.exports={getAllData,deleteData,postData}