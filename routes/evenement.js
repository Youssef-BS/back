const express = require('express');
const EventCtrl = require("../Controller/evenementController");
const upload = require("../configuration/configupload")
const router = express. Router();
const passport = require("passport");
const Roles = require('../model/role');
const {  inRole } = require("../security/Rolemiddleware");
const { client, GenerationStyle, Status } = require("imaginesdk");
const axios = require('axios');
const path = require('path');

router.post("/create",EventCtrl.apiCreateEvent)
router.get("/all",EventCtrl.apiGetAllEvent )
router.get("/getid/:id",EventCtrl.apiGetEventById)
router.delete("/deletebyid/:id",EventCtrl.apiDeleteEvent)
router.put("/update/:id",EventCtrl.apiUpdateEvent)


// Endpoint to handle image generation request

  router.post('/generate-image', async (req, res) => {
    const { text } = req.body;
    const response = await imagine.generations(
     text,
      {
        style: GenerationStyle.IMAGINE_V4_CREATIVE,
      }
    );
  
    if (response.status() === Status.OK) {
      const image = response.getOrThrow();
      const imageName = "output.png";
      const imagePath = path.join( 'generator', imageName);
      image.asFile(imagePath);
      console.log("Image generation successful!");
      const imageUrl = `http://localhost:3000/getimage/${imageName}`;
      res.status(200).json({ imageUrl });
    } else {
      console.error(response.errorOrThrow());
    }
  });
  const imagine = client("vk-d5p2eD4rda5JP4y9rQd4g13PAcyeVYcqRYCk9SYmFQPfT");




module.exports = router;