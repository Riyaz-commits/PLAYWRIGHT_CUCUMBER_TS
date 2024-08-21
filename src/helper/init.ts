const fs = require("fs-extra")


try{

    fs.ensureDir("test-tesults")
    fs.emptyDir("test-tesults")

}catch(error){

    console.log("Folder not creted "+error)
}
