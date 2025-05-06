const express = require("express");
const router = express.Router(); 
const menuitem = require("./../models/menuitem");

router.post('/',async(req,res)=>{
    try{
        const data = req.body;

        const newMenuitem = new menuitem(data);

        const response = await newMenuitem.save();
        res.status(200).json(response);

    }
    catch(error)
    {
        res.status(500).json({error:"interal server error"});
    }
});

router.get("/",async(req,res)=>{
    try{
        const response = await menuitem.find();
        res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({error:"internal server error"});
    }
});

router.get("/:tastetype",async(req,res)=>{
    try{
        const tastetype = req.params.tastetype;
        if(tastetype == "sweet" || tastetype == "sour" || tastetype == "spicy" || tastetype == "normal")
        {
            const response = await menuitem.find({taste:tastetype});
            res.status(200).json(response);
        }else{
             res.status(404).json({error:"invalid tastetype"});
        }
        
    }catch(error)
        {
            res.status(500).json({error:"internal server error"});
        }
});

module.exports = router;