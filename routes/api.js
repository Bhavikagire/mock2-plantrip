const express = require("express")
const router = express.Router()


const postcontroller = require("../controller/postcontroller");
const retrievecontroller = require("../controller/retrievecontroller");
const deletecontroller = require("../controller/deletecontroller");
const sortcontroller = require("../controller/sortcontroller")
const filtercontroller = require("../controller/filtercontroller")

router.post("/post", postcontroller.creatpost)
router.get("/retrieve", retrievecontroller.retrievedata)
router.delete("/delete/:id", deletecontroller.deletedata)
router.get("/filter", filtercontroller.filterdata)
router.get("/sort", sortcontroller.sortdata)

module.exports = router;