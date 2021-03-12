define({
  "_widgetLabel": "Agregacija podataka",
  "startPage": {
    "defaultStartPageInstructions": "Ovaj vidžet će vam pomoći da obradite i prosledite podatke iz datoteke u izabrani sloj u mapi.<br/> <br/> Vrednosti u polju moraju da budu odvojene zapetom, tabulatorom, tačka zapetom ili vertikalnom crtom.",
    "dragDrop": "Prevuci i otpusti",
    "browse": "Idi na datoteku",
    "or": "ILI",
    "userPrivilege": "Vaš nalog nema dozvolu za kreiranje ili izmenu podataka.",
    "userCredits": "${widgetName} zahteva kredite za upotrebu ${locator} lokatora.",
    "contactAdmin": "Kontaktirajte administratora organizacije da biste zatražili dodatne kredite.",
    "contactAdminEdit": "Kontaktirajte administratora organizacije da biste zatražili privilegije za uređivanje.",
    "canUseLocator": "Lokator ${locator} biće korišćen za lokaciju funkcija.",
    "notEnoughCredits": "Nema dovoljno kredita.",
    "locationAndField": "Informacije za lokaciju i polje",
    "locationAndFieldHint": "Izaberite vrednosti iz polja koje treba da se koristi za ažuriranje ciljanog sloja.",
    "cannotUseLocator": "Nije moguće koristiti ${widgetName}",
    "noAnonymousEdit": "Sloj ${layerName} ne podržava anonimno uređivanje.",
    "pleaseLogin": "Prijavite se na ${org} organizacije ili kontaktirajte adminstratora organizacije da bi vam anonimno uređivanje bilo omogućeno.",
    "invalidEdit": "Pogrešne privilegije",
    "unableToAccess": "Nije moguće pristupiti ${layerName}",
    "appropriateCredentials": "Potvrdite da ste se prijavili sa odgovarajućim akreditivima.",
    "shared": "Kontaktirajte administratora organizacije da biste zatražili pristup ${layerName} sloju.",
    "targetLayerLabel": "Ciljani sloj",
    "homeButtonLabel": "Matična stranica",
    "mappingErrorMsg": "Kliknite na strelicu pored da biste definisali polja"
  },
  "mapping": {
    "schemaMapping": "Informacije polja",
    "schemaMappingHint": "Odaberite polja iz datoteke koja su povezana sa poljima u sloju.",
    "locationMapping": "Informacije o lokaciji",
    "locationMappingHint": "Odaberite tipove adresa ili informacije o koordinatama koje očekujete od datoteke."
  },
  "locationMapping": {
    "locationMappingPageHint": "Odaberite tip lokacije",
    "useAddress": "Locirajte koristeći adresu",
    "useAddressHint": "Podaci sadrže informacije o adresi",
    "useCoordinates": "Locirajte koristeći koordinate",
    "useCoordinatesHint": "Podaci sadrže vrednosti X/Y koordinate"
  },
  "address": {
    "addressPageHint": "Odaberite tip adrese",
    "singleField": "Jedno polje",
    "singleFieldHint": "Izaberite polje koje sadrži informacije za adresu",
    "multiField": "Više polja",
    "multiFieldHint": "Izaberite polja koja sadrže informacije za adresu"
  },
  "coordinates": {
    "coordinatesPageHint": "Izaberite polja koja sadrže podatke o koordinatama"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Odaberite izvorno polje koje je povezano sa ciljnim poljem",
    "sourceField": "Podudarajuće izvorno polje",
    "targetField": "Ciljno polje"
  },
  "buttons": {
    "addToMap": "Dodaj na mapu",
    "submit": "Prosledi",
    "download": "Preuzimanje"
  },
  "review": {
    "matched": "Pronađeno",
    "reviewMatched": "Pronađne lokacije",
    "reviewMatchedHint": "Pogledajte lokacije koje su pronađene.",
    "unMatched": "nije pronađeno",
    "reviewUnMatched": "Lokacije nisu pronađene",
    "reviewUnMatchedHint": "Pregledaj lokacije koje nisu pronađene. Stavke koje nisu ispravljene neće biti poslate.",
    "duplicate": "Dupliraj",
    "reviewDuplicate": "Duplirane lokacije",
    "reviewDuplicateHint": "Pregledajte lokacije koje se već nalaze u sloju. Stavke koje nisu adresirane neće biti poslate.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Koristi:",
    "fromLayer": "Ciljana informacija",
    "target": "Cilj",
    "source": "Izvor",
    "fromFile": "Informacije o izvoru",
    "locationControlHint": "Pregled informacija o adresi",
    "duplicateAction": "Izaberite akciju",
    "item": "Zapis",
    "locateFeature": "Lociraj funkciju",
    "removeFeature": "Ukloni funkciju",
    "featureLocated": "Lokacija pronađena",
    "valuesDoNotMatch": "Ne poklapa se sa postojećom vrednošću",
    "sync": "Sinhronizuj informacije o adresi sa informacijama o polju",
    "noFeaturesSaved": "Nema uspešno sačuvanih funkcija",
    "someFeaturesSaved": "${num} funkcija(e) sačuvane uspešno.",
    "someFeaturesNotSaved": "${num} funkcija(e) nisu sačuvane uspešno.",
    "feature": "Informacije za pregled funkcije",
    "locationInfo": "Informacije za pregled lokacije",
    "selectValue": "Izaberi vrednost",
    "reviewData": "Pregled podataka",
    "reviewDataHint": "Pregled vaših podataka pre slanja u sloj.",
    "reviewFeatureHint": "Pregledajte ili uredite informacije za funkciju i lokaciju.",
    "duplicateModify": "Duplikat, potrebna je promena",
    "duplicateSave": "Sačuvaj kao novu funkciju"
  },
  "warningsAndErrors": {
    "invalidCSV": "Greška prilikom pronalaženja stavki iz CSV, proverite da li je izabrana važeća CSV datoteka.",
    "noLayersWarning": "Nije podešen validni ciljani sloj, proverite konfiguraciju.",
    "loadWarning": "Za ovaj vidžet potreban je izvor podataka usluge funkcije. Podesite vidžet da biste definisali izvor podataka.",
    "saveError": "Greška pri čuvanju geoobjekata.",
    "consumesCredits": "Ova alatka troši kredite kada se koristi sa ArcGIS Online World Geocoding servisom",
    "noValue": "Izaberite polje",
    "mappingTitle": "",
    "locationMappingComplete": "Mapiranje lokacije je završeno",
    "fieldMappingComplete": "Mapiranje polja je završeno",
    "settingsCleared": "Postavke će biti obrisane.",
    "proceed": "Želite li da nastavite?",
    "itemMoveMatch": "Stavka je locirana i pomerena na pronađenu listu lokacija",
    "itemMoveUnMatched": "Nije moguće locirati stavku. Pomereno na lokaciju lista koje nisu pronađene.",
    "itemWillBeLocated": "Stavke će biti uklonjene sa liste lokacija duplikata.",
    "cannotLocate": "Nije moguće locirati stavku. Potvrdi informacije za lokaciju.",
    "invalidMessage": "Pogrešna vrednost.",
    "rangeMessage": "Vrednost mora da bude manja od ${num} karaktera.",
    "locatorError": "Pogrešan lokator ili nije dostupan.",
    "notConfigured": "lokator nije podešen za trenutne opcije za lokaciju",
    "noMoreLocators": "nema dodatnih podešenih lokatora"
  },
  "featureToolbar": {
    "locate": "Lociraj",
    "save": "Sačuvaj zapis",
    "cancel": "Otkaži uređivanja",
    "cancelTitle": "Otkaži uređivanja",
    "cancelMessage": "Otkaži uređivanja za trenutni zapis?"
  }
});