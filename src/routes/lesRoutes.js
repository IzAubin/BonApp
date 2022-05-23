var express = require("express");
var router = express.Router();
var pageHome = require("../controller/pageHome.js");
var pageClient = require("../controller/pageClient.js");
var pageAdmin = require("../controller/pageAdmin.js");
var pageAdminCommande = require("../controller/pageAdminCommande.js");

router.get("/", pageHome.getHomepage);

router.post("/menu", pageClient.postPanier);

router.get("/inventaire", pageAdmin.getInventaire);
router.get("/addRecette", pageAdmin.getAddRecette);
router.post("/addRecette", pageAdmin.postAddRecette);
router.get("/enCours", pageAdminCommande.getCommandeEnCours);
router.post("/enCours", pageAdminCommande.postCommandeEnCours);


router.post("/actifRecette", pageAdmin.postInventaire);
router.post("/inventaire", pageAdmin.postActifRecette);

// router.post("/placecommande", pageBase.placeCommande);
router.post("/ajouterAuPanier", pageClient.ajouterAuPanier);

router.get("/menu", pageClient.getMenu);
router.post("/menu", pageClient.postMenu);

router.get("/panier", pageClient.getPanier);
router.post("/panier", pageClient.postPanier);

router.get("/historique", pageClient.getHistorique);

module.exports = router;
