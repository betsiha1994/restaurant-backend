const express = require("express");
const restaurantController = require("../controllers/RestaurantController");
const { upload } = require("../config/cloudinary"); 

const router = express.Router();

// Create a restaurant (with image upload)
router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    console.log("BODY:", req.body); // name, location, description
    console.log("FILE:", req.file); // Multer file info
    next(); // continue to controller
  },
  restaurantController.createRestaurant
);

// Update a restaurant (optional new image)
router.put(
  "/:id",
  upload.single("image"),
  restaurantController.updateRestaurant
);

// Get all restaurants
router.get("/", restaurantController.getAllRestaurants);

// Get restaurant by ID
router.get("/:id", restaurantController.getRestaurantById);

// Delete a restaurant
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
