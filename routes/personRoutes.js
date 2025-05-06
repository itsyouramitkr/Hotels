const express = require("express");
const router = express.Router(); 
const person = require("./../models/person");


router.post('/', async(req, res) => {
    try{
        const data = req.body;
    /*   
    */

        const newPerson = new person(data);
        /*
        create a new person document using the mongoose model
        newPerson is not just a simple object.
  
        It’s an instance of the Person model (from Mongoose).

        That means it has special powers — like .save() to directly save into MongoDB!

        Example:
        Imagine Person is like a class or a blueprint.
        When you do new person(data), you're creating a proper Person object with all the behavior (methods) attached.

        const data = { name: "John", age: 25 };
        Now create a new document
        const newPerson = new person(data);
        newPerson is now a mongoose document with methods like `.save()`
        await newPerson.save();
        */

        const response =  await newPerson.save()

        console.log("Data saved");
        res.status(200).json(response);
    }
    catch(error)
    {
        console.log("error on saving person data",error);
        res.status(500).json({error:"internal server error"});
    }

});

router.get('/',async(req,res)=>{
    try{
        const data =await person.find();
        console.log("Data retrived");
        res.status(200).json(data);
    }
    catch(error)
    {
        console.log("error on fetching  person data",error);
        res.status(500).json({error:"internal server error"});
    }
});

router.get('/:worktype',async(req,res)=>{
    try{
        const worktype = req.params.worktype; // extract the worktype form the url 
        if(worktype == "chef" || worktype =="waiter" || worktype == "manager")
        {
            const response = await person.find({work:worktype});
            console.log("response fetched");
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"invalid worktype"});
            
        }
    }catch(error)
    {
        console.log("error on fetching  worktype",error);
        res.status(500).json({error:"internal server error"});
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const personId  = req.params.id; // extract the id from the parameter.
        const updatedpersondata = req.body; // update the data for the person.
        console.log(updatedpersondata);

        const response  = await person.findByIdAndUpdate(personId,updatedpersondata,{ // personId se find karega ki kon sa document(rows) hai
            new : true, //  return the update document.
            runValidator : true  // run the moongoose validations
        });
        
        if(!response)
        {
            return res.status(404).json({error:"person not found"});
        }
        console.log("data person updated");
        res.status(200).json(response);
    }
    catch(error)
    {
        console.log("error on upating",error);
        res.status(500).json({error:"internal server error"});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if(!response)
        {
            return res.status(404).json("person not found");
        }
        console.log("data person deleted");
        res.status(200).json({message:"person deleted successfully"});
    }
    catch(error)
    {
        console.log("error on deleting",error);
        res.status(500).json({error:"internal server error"});
    }
   
})



module.exports = router;