import express from "express";
import { getAllSchools, createSchool } from "../controllers/school";
const models = require("../models/models")

const mongoose = require("mongoose")
const router = express.Router();
const toId = mongoose.Types.ObjectId;


router.get("/school", getAllSchools);
router.post("/school", createSchool);

router.get("/school/:user/:school", async (req,res) => {
    req.params.school = toId(req.params.school)

    const user = await models.User.findById(req.params.user);
    const school = await models.School.findById(req.params.school);
    school.dataBase.users = req.params.user;
    user.school = req.params.school;
    school.save()
    user.save()

    console.log(school)
    res.json(user)
})


router.get("/school/test", async (req,res) => {
    const users = await models.User.find({}).populate({path: "school", model: "School"});
        res.json(users)
})



export default router;