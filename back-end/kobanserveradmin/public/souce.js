const data = [{
    "produits": [
      {
        "id": 1,
        "nom": "Smartphone Galaxy S21",
        "prix": 899.99,
        "categorie": "Électronique",
        "marque": "Samsung",
        "appreciation": 4.5,
        "stock": true,
        "description": "Smartphone haut de gamme avec écran AMOLED 120Hz"
      },
      {
        "id": 2,
        "nom": "Casque sans fil Noise Cancelling",
        "prix": 349.99,
        "categorie": "Électronique",
        "marque": "Sony",
        "appreciation": 4.8,
        "stock": true,
        "description": "Casque Bluetooth avec réduction de bruit active"
      },
      {
        "id": 3,
        "nom": "T-shirt en coton",
        "prix": 24.99,
        "categorie": "Vêtements",
        "marque": "Nike",
        "appreciation": 4.2,
        "stock": true,
        "description": "T-shirt 100% coton respirant"
      },
      {
        "id": 4,
        "nom": "Robot mixeur intelligent",
        "prix": 129.99,
        "categorie": "Cuisine",
        "marque": "Philips",
        "appreciation": 4.3,
        "stock": false,
        "description": "Robot de cuisine multifonction 1200W"
      },
      {
        "id": 5,
        "nom": "Sac à dos ordinateur",
        "prix": 59.99,
        "categorie": "Accessoires",
        "marque": "Eastpak",
        "appreciation": 4.4,
        "stock": true,
        "description": "Sac à dos résistant avec compartiment pour ordinateur"
      },
      {
        "id": 6,
        "nom": "Montre connectée",
        "prix": 199.99,
        "categorie": "Électronique",
        "marque": "Huawei",
        "appreciation": 4.1,
        "stock": true,
        "description": "Montre sportive avec suivi d'activité et GPS"
      },
      {
        "id": 7,
        "nom": "Chaussures de running",
        "prix": 89.99,
        "categorie": "Chaussures",
        "marque": "Adidas",
        "appreciation": 4.6,
        "stock": true,
        "description": "Chaussures légères pour la course à pied"
      },
      {
        "id": 8,
        "nom": "Liseuse électronique",
        "prix": 139.99,
        "categorie": "Électronique",
        "marque": "Amazon",
        "appreciation": 4.7,
        "stock": true,
        "description": "Écran haute résolution sans éblouissement"
      },
      {
        "id": 9,
        "nom": "Casserole antiadhésive",
        "prix": 39.99,
        "categorie": "Cuisine",
        "marque": "Tefal",
        "appreciation": 4.0,
        "stock": true,
        "description": "Set de 3 casseroles avec revêtement antiadhésif"
      },
      {
        "id": 10,
        "nom": "Enceinte Bluetooth",
        "prix": 79.99,
        "categorie": "Électronique",
        "marque": "JBL",
        "appreciation": 4.5,
        "stock": true,
        "description": "Enceinte portable résistante à l'eau"
      },
      {
        "id": 11,
        "nom": "Jeu de société stratégie",
        "prix": 49.99,
        "categorie": "Jouets",
        "marque": "Asmodee",
        "appreciation": 4.9,
        "stock": true,
        "description": "Jeu de plateau pour 2-4 joueurs"
      },
      {
        "id": 12,
        "nom": "Batterie externe 20000mAh",
        "prix": 45.99,
        "categorie": "Électronique",
        "marque": "Anker",
        "appreciation": 4.4,
        "stock": true,
        "description": "Charge rapide pour smartphones et tablettes"
      },
      {
        "id": 13,
        "nom": "Pull en laine",
        "prix": 65.99,
        "categorie": "Vêtements",
        "marque": "Tommy Hilfiger",
        "appreciation": 4.3,
        "stock": false,
        "description": "Pull chaud pour l'hiver"
      },
      {
        "id": 14,
        "nom": "Appareil photo instantané",
        "prix": 119.99,
        "categorie": "Électronique",
        "marque": "Fujifilm",
        "appreciation": 4.2,
        "stock": true,
        "description": "Imprime les photos immédiatement"
      },
      {
        "id": 15,
        "nom": "Tapis de yoga",
        "prix": 29.99,
        "categorie": "Sport",
        "marque": "Decathlon",
        "appreciation": 4.1,
        "stock": true,
        "description": "Tapis antidérapant épais 5mm"
      },
      {
        "id": 16,
        "nom": "Cafetière programmable",
        "prix": 89.99,
        "categorie": "Cuisine",
        "marque": "Krups",
        "appreciation": 4.3,
        "stock": true,
        "description": "Préparation jusqu'à 12 tasses"
      },
      {
        "id": 17,
        "nom": "Écouteurs sans fil",
        "prix": 159.99,
        "categorie": "Électronique",
        "marque": "Apple",
        "appreciation": 4.7,
        "stock": true,
        "description": "Écouteurs avec étui de charge"
      },
      {
        "id": 18,
        "nom": "Jeans slim",
        "prix": 79.99,
        "categorie": "Vêtements",
        "marque": "Levi's",
        "appreciation": 4.5,
        "stock": true,
        "description": "Jeans stretch confortable"
      },
      {
        "id": 19,
        "nom": "Drone avec caméra 4K",
        "prix": 499.99,
        "categorie": "Électronique",
        "marque": "DJI",
        "appreciation": 4.8,
        "stock": true,
        "description": "Stabilisation d'image professionnelle"
      },
      {
        "id": 20,
        "nom": "Mixeur plongeant",
        "prix": 59.99,
        "categorie": "Cuisine",
        "marque": "Moulinex",
        "appreciation": 4.2,
        "stock": true,
        "description": "Puissance 750W avec accessoires"
      },
      {
        "id": 21,
        "nom": "Lunettes de soleil",
        "prix": 129.99,
        "categorie": "Accessoires",
        "marque": "Ray-Ban",
        "appreciation": 4.6,
        "stock": true,
        "description": "Verres polarisés UV400"
      },
      {
        "id": 22,
        "nom": "Tablette Android",
        "prix": 299.99,
        "categorie": "Électronique",
        "marque": "Samsung",
        "appreciation": 4.4,
        "stock": true,
        "description": "Écran 10.1 pouces 128Go"
      },
      {
        "id": 23,
        "nom": "Tente 4 places",
        "prix": 199.99,
        "categorie": "Extérieur",
        "marque": "Quechua",
        "appreciation": 4.3,
        "stock": true,
        "description": "Montage rapide, imperméable"
      },
      {
        "id": 24,
        "nom": "Clavier mécanique gaming",
        "prix": 109.99,
        "categorie": "Électronique",
        "marque": "Razer",
        "appreciation": 4.7,
        "stock": false,
        "description": "Rétroéclairage RGB personnalisable"
      },
      {
        "id": 25,
        "nom": "Bouteille isotherme",
        "prix": 24.99,
        "categorie": "Accessoires",
        "marque": "Thermos",
        "appreciation": 4.5,
        "stock": true,
        "description": "Maintient la température 24h"
      },
      {
        "id": 26,
        "nom": "Aspirateur robot",
        "prix": 349.99,
        "categorie": "Maison",
        "marque": "iRobot",
        "appreciation": 4.6,
        "stock": true,
        "description": "Navigation intelligente, programmable"
      },
      {
        "id": 27,
        "nom": "Haut de sport",
        "prix": 34.99,
        "categorie": "Vêtements",
        "marque": "Under Armour",
        "appreciation": 4.2,
        "stock": true,
        "description": "Matériau respirant anti-odeurs"
      },
      {
        "id": 28,
        "nom": "Projecteur HD",
        "prix": 429.99,
        "categorie": "Électronique",
        "marque": "Epson",
        "appreciation": 4.4,
        "stock": true,
        "description": "Résolution 1080p, 3500 lumens"
      },
      {
        "id": 29,
        "nom": "Parfum homme",
        "prix": 89.99,
        "categorie": "Beauté",
        "marque": "Dior",
        "appreciation": 4.8,
        "stock": true,
        "description": "Eau de toilette 100ml"
      },
      {
        "id": 30,
        "nom": "Chaise de bureau ergonomique",
        "prix": 249.99,
        "categorie": "Bureau",
        "marque": "Herman Miller",
        "appreciation": 4.9,
        "stock": true,
        "description": "Réglage multiple, support lombaire"
      },
      {
        "id": 31,
        "nom": "Console de jeu portable",
        "prix": 199.99,
        "categorie": "Jeux",
        "marque": "Nintendo",
        "appreciation": 4.7,
        "stock": true,
        "description": "Bibliothèque de jeux rétro"
      },
      {
        "id": 32,
        "nom": "Couteau de chef",
        "prix": 129.99,
        "categorie": "Cuisine",
        "marque": "Zwilling",
        "appreciation": 4.8,
        "stock": true,
        "description": "Acier inoxydable haute qualité"
      },
      {
        "id": 33,
        "nom": "Étagère murale",
        "prix": 79.99,
        "categorie": "Maison",
        "marque": "Ikea",
        "appreciation": 4.1,
        "stock": true,
        "description": "Bois massif, longueur 120cm"
      },
      {
        "id": 34,
        "nom": "Veste en cuir",
        "prix": 399.99,
        "categorie": "Vêtements",
        "marque": "Schott",
        "appreciation": 4.9,
        "stock": false,
        "description": "Cuir véritable, doublure chaude"
      },
      {
        "id": 35,
        "nom": "Imprimante laser",
        "prix": 179.99,
        "categorie": "Bureau",
        "marque": "HP",
        "appreciation": 4.3,
        "stock": true,
        "description": "Impression recto-verso automatique"
      },
      {
        "id": 36,
        "nom": "Baskets mode",
        "prix": 119.99,
        "categorie": "Chaussures",
        "marque": "Puma",
        "appreciation": 4.4,
        "stock": true,
        "description": "Semelle confort, design urbain"
      },
      {
        "id": 37,
        "nom": "Tondeuse à barbe",
        "prix": 59.99,
        "categorie": "Beauté",
        "marque": "Philips",
        "appreciation": 4.2,
        "stock": true,
        "description": "20 réglages de longueur"
      },
      {
        "id": 38,
        "nom": "Sac de couchage",
        "prix": 89.99,
        "categorie": "Extérieur",
        "marque": "The North Face",
        "appreciation": 4.5,
        "stock": true,
        "description": "Température confort -10°C"
      },
      {
        "id": 39,
        "nom": "Écran PC 27 pouces",
        "prix": 249.99,
        "categorie": "Électronique",
        "marque": "LG",
        "appreciation": 4.6,
        "stock": true,
        "description": "IPS, 144Hz, QHD"
      },
      {
        "id": 40,
        "nom": "Kit de maquillage",
        "prix": 69.99,
        "categorie": "Beauté",
        "marque": "MAC",
        "appreciation": 4.7,
        "stock": true,
        "description": "12 teintes, pinceaux inclus"
      },
      {
        "id": 41,
        "nom": "Raquette de tennis",
        "prix": 149.99,
        "categorie": "Sport",
        "marque": "Babolat",
        "appreciation": 4.5,
        "stock": true,
        "description": "Poids léger, équilibre tête légère"
      },
      {
        "id": 42,
        "nom": "Câble USB-C",
        "prix": 15.99,
        "categorie": "Électronique",
        "marque": "Anker",
        "appreciation": 4.3,
        "stock": true,
        "description": "Charge rapide 100W, 2m"
      },
      {
        "id": 43,
        "nom": "Serviette de plage",
        "prix": 29.99,
        "categorie": "Extérieur",
        "marque": "Rip Curl",
        "appreciation": 4.0,
        "stock": true,
        "description": "Grand format, séchage rapide"
      },
      {
        "id": 44,
        "nom": "Lego Technic",
        "prix": 179.99,
        "categorie": "Jouets",
        "marque": "Lego",
        "appreciation": 4.9,
        "stock": true,
        "description": "Voiture de course, 1580 pièces"
      },
      {
        "id": 45,
        "nom": "Bougie parfumée",
        "prix": 24.99,
        "categorie": "Maison",
        "marque": "Yankee Candle",
        "appreciation": 4.4,
        "stock": true,
        "description": "Parfum vanille, durée 60h"
      },
      {
        "id": 46,
        "nom": "Tapis de souris gaming",
        "prix": 34.99,
        "categorie": "Électronique",
        "marque": "SteelSeries",
        "appreciation": 4.5,
        "stock": true,
        "description": "Grand format 900x400mm, anti-dérapant"
      },
      {
        "id": 47,
        "nom": "Pèse-personne connecté",
        "prix": 49.99,
        "categorie": "Santé",
        "marque": "Withings",
        "appreciation": 4.3,
        "stock": true,
        "description": "Mesure masse grasse, application smartphone"
      },
      {
        "id": 48,
        "nom": "Mug isotherme",
        "prix": 19.99,
        "categorie": "Cuisine",
        "marque": "Contigo",
        "appreciation": 4.2,
        "stock": true,
        "description": "Conserve la chaleur 6h, anti-fuites"
      },
      {
        "id": 49,
        "nom": "Tapis de course pliable",
        "prix": 599.99,
        "categorie": "Sport",
        "marque": "ProForm",
        "appreciation": 4.4,
        "stock": false,
        "description": "Moteur 2.5CV, inclinaison réglable"
      },
      {
        "id": 50,
        "nom": "Écharpe en cachemire",
        "prix": 89.99,
        "categorie": "Vêtements",
        "marque": "Burberry",
        "appreciation": 4.8,
        "stock": true,
        "description": "100% cachemire, plusieurs coloris"
      }
    ]
  }]

  export default data