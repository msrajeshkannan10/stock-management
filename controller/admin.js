const table=require("../model/schema")

const data = async(req,res)=>{
    let {Name,Department,Year,Address}=req.body;
    try {
        const tableData = await table.create({
            Name,
            Department,
            Year,
            Address
        })
        if (!tableData) {
            res.json({
              message: "Enter the pricingplan is not correct--",
              status: false,
            });
          } else {
            res.json({
              message: "pricingplans is created successsfully",
              data: tableData,
              status: true,
            });
          }
    } catch (error) {
    res.json({ message: error.message, status: false });
    }
}

const getData = async(req,res)=>{
    try {
        let u = await table.find()
        if(!u){
      res.json({ message: " not found", status: false });
            
        }
        else{
      res.json({ message: " found", status: true, data:u });

        }
    } catch (error) {
        
    }
}

module.exports={
    data,
    getData
}