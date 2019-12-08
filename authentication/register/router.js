const {
    register
} = require("./controller");

const router = require("express").Router();
//const { checkToken } = require("../../auth/token_validation");

//router.post("/",checkToken, createUser);
router.post("/", register);
/*router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserById);
router.patch("/",checkToken, updateUsers);
router.delete("/",checkToken, deleteUser);
router.post("/login",login);*/


module.exports = router;