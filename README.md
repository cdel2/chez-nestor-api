# chez-nestor-api
Chez Nestor Backoffice API

L'application est développée en NodeJS & Express, avec MySQL pour la base de données et Jest pour les tests unitaires.

# install
Pour installer les dépendances :
```
npm install
```

Après avoir installé mysql, pour créer la base de données et les tables:
```
sudo mysql < dump.sql
```

# run
Pour lancer l'application :
```
npm start
```
# test
Pour lancer les tests unitaires :
```
npm test
```

# endpoints
Tous les endpoints sont accessibles vial l'URL http://localhost/3000 complétée de :

 - endpoints customers :
/customers, POST : créer un compte client
/customers/:customerId, GET : récuperer ses informations grâce à son identifiant customerId
/customers/:customerId, PUT : modifier ses informations grâce à son identifiant customerId
/customers/:customerId, DELETE : supprimer son compte  grâce à son identifiant customerId

 - endpoints apartment :
/apartments, POST : créer un apartement
/apartments/:apartmentId, GET : récuperer les informations d'un appartement grâce à son identifiant appartementId
/apartments/:apartmentId, PUT : modifier les informations d'un appartement grâce à son identifiant appartementId
/apartments/:apartmentId, DELETE : supprimer un appartement grâce à son identifiant appartementId

 - endpoints room :
/rooms, POST : créer une chambre
/rooms/:roomsId, GET : récuperer les informations d'une chambre grâce à son identifiant roomId
/rooms/apartment/:apartmentId, GET : récuperer les informations des chambres d'un apartement graĉe à son identifiant apartmentId
/rooms/:roomsId, PUT : modifier les informations d'une chambre grâce à son identifiant roomId
/apartments/:apartmentId, DELETE : supprimer une chambre grâce à son identifiant roomId
