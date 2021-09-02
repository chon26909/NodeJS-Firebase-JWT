const { firestore, auth } = require("../database/firebase");
const vertifyToken = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    req.uid = user.uid;

    const profile_data = {
        email: email,
        firstname: firstname,
        lastname:lastname
    }

    await firestore.collection("users").doc(req.uid).set(profile_data);

    const idToken = await user.getIdToken();

    res.status(200).json({ token: idToken });

  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);

    const idToken = user.getIdToken();
    res.status(200).json({ token: idToken });


  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/profile", vertifyToken, async (req, res) => {
  console.log("uid ", req.uid);

  try {

    const doc = await firestore.collection("users").doc(req.uid).get();

    if (!doc.exists) {
      console.log("No such document!");
    } else {

      res.send(doc.data());

    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
