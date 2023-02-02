import express,{ Application } from "express";
import cors from "cors"
import router from "../route/user.LoginRoute";

export default function BootCampConnection(app:Application){
    app.use(express.json()).use(cors())

    app.use("/api/BootCamp",router)


}