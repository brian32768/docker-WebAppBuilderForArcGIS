define({
  "_widgetLabel": "Agregácia údajov",
  "startPage": {
    "defaultStartPageInstructions": "Tento widget bude asistovať so spracovaním a odoslaním dát zo súboru do vybranej vrstvy v mape.<br/><br/> Hodnoty v súbore musia byť oddelené čiarkou, tabulátorom, bodkočiarkou alebo zvislou čiarou.",
    "dragDrop": "Potiahnuť a pustiť",
    "browse": "Prejsť do súboru",
    "or": "ALEBO",
    "userPrivilege": "Váš účet nemá povolenie na vytvorenie alebo upravenie údajov.",
    "userCredits": "${widgetName} vyžaduje kredity na použitie lokátora ${locator}.",
    "contactAdmin": "Ak chcete požiadať o ďalšie kredity, kontaktujte správcu organizácie.",
    "contactAdminEdit": "Ak chcete požiadať o zmenu oprávnení, kontaktujte správcu organizácie.",
    "canUseLocator": "Lokátor ${locator} bude použitý pre lokalizovanie prvkov.",
    "notEnoughCredits": "Nedostatok kreditov.",
    "locationAndField": "Informácie o umiestnení a poli",
    "locationAndFieldHint": "Vyberte hodnoty zo súboru, ktorý by mal byť použitý na aktualizáciu cieľovej vrstvy.",
    "cannotUseLocator": "Nie je možné použiť ${widgetName}",
    "noAnonymousEdit": "Vrstva ${layerName} nepodporuje anonymné editovanie",
    "pleaseLogin": "Pre povolenie anonymnej editácie sa prihláste do organizácie ${org} alebo kontaktujte správcu organizácie.",
    "invalidEdit": "Neplatné oprávnenia",
    "unableToAccess": "Nebolo možné získať prístup k ${layerName}",
    "appropriateCredentials": "Overte, či ste sa prihlásili pomocou príslušných údajov.",
    "shared": "Ak chcete požiadať o prístup k vrstve ${layerName}, kontaktujte správcu organizácie.",
    "targetLayerLabel": "Cieľová vrstva",
    "homeButtonLabel": "Domov",
    "mappingErrorMsg": "Pre definovanie polí kliknite na šípku ďalej"
  },
  "mapping": {
    "schemaMapping": "Informácie o poli",
    "schemaMappingHint": "Vyberte zo súboru polia, ktoré korelujú s poľami vo vrstve.",
    "locationMapping": "Informácie o umiestnení",
    "locationMappingHint": "Vyberte zo súboru typ adresy alebo informácie o súradniciach, ktoré môžete očakávať."
  },
  "locationMapping": {
    "locationMappingPageHint": "Vyberte typ umiestnenia",
    "useAddress": "Umiestnite pomocou adresy",
    "useAddressHint": "Údaje obsahujú informácie o adrese",
    "useCoordinates": "Umiestnite pomocou súradníc",
    "useCoordinatesHint": "Dáta obsahujú hodnoty súradnice X/Y"
  },
  "address": {
    "addressPageHint": "Vyberte typ adresy",
    "singleField": "Jedno pole",
    "singleFieldHint": "Vyberte pole, ktoré obsahuje informácie o adrese",
    "multiField": "Viac polí",
    "multiFieldHint": "Vyberte polia, ktoré obsahujú informácie o adrese"
  },
  "coordinates": {
    "coordinatesPageHint": "Vyberte polia, ktoré obsahujú súradnice"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Vyberte zdrojové pole, ktoré sa viaže na cieľové pole",
    "sourceField": "Zodpovedajúce zdrojové pole",
    "targetField": "Pole cieľa"
  },
  "buttons": {
    "addToMap": "Pridať do mapy",
    "submit": "Odoslať",
    "download": "Stiahnuť"
  },
  "review": {
    "matched": "Nájdené",
    "reviewMatched": "Nájdené umiestnenia",
    "reviewMatchedHint": "Skontrolovať umiestnenia, ktoré boli nájdené.",
    "unMatched": "neboli nájdené",
    "reviewUnMatched": "Umiestnenia neboli nájdené",
    "reviewUnMatchedHint": "Skontrolovať umiestnenia, ktoré neboli nájdené. Položky, ktoré nie sú opravené, nebudú odoslané.",
    "duplicate": "Zdvojiť",
    "reviewDuplicate": "Zdvojiť umiestnenia",
    "reviewDuplicateHint": "Skontrolovať umiestnenia, ktoré už bol nájdené vo vrstve. Položky, ktoré nie sú adresované, nebudú odoslané.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Použitie:",
    "fromLayer": "Cieľové informácie",
    "target": "Cieľ",
    "source": "Zdroj",
    "fromFile": "Zdrojové informácie",
    "locationControlHint": "Skontrolovať informácie o adrese",
    "duplicateAction": "Vybrať akciu",
    "item": "Záznam:",
    "locateFeature": "Umiestniť prvok",
    "removeFeature": "Odstrániť prvok",
    "featureLocated": "Nájdené umiestnenie",
    "valuesDoNotMatch": "Nezodpovedá existujúcej hodnote",
    "sync": "Synchronizovať informácie o adrese s informáciami o poli",
    "noFeaturesSaved": "Neboli úspešne uložené žiadne prvky",
    "someFeaturesSaved": "${num} prvkov úspešne uložených.",
    "someFeaturesNotSaved": "${num} prvkov nebolo úspešne uložených.",
    "feature": "Skontrolovať informácie o prvku",
    "locationInfo": "Skontrolovať informácie o umiestnení",
    "selectValue": "Vybrať hodnotu",
    "reviewData": "Skontrolovať údaje",
    "reviewDataHint": "Skontrolujte vaše údaje pred ich odoslaním do vrstvy.",
    "reviewFeatureHint": "Skontrolujte alebo upravte vaše informácie o prvku a umiestnení.",
    "duplicateModify": "Duplicita, vyžaduje zmenu",
    "duplicateSave": "Uložiť ako nový prvok"
  },
  "warningsAndErrors": {
    "invalidCSV": "Pri načítaní položiek z súboru CSV došlo k chybe, skontrolujte, či je vybraný platný súbor CSV.",
    "noLayersWarning": "Nebola konfigurovaná platná cieľová vrstva, skontrolujte konfiguráciu.",
    "loadWarning": "Tento widget vyžaduje zdroj údajov zo služby pre prvky (Feature Service). Konfigurovať widget pre definovanie zdroja údajov.",
    "saveError": "Chyba pri ukladaní prvkov.",
    "consumesCredits": "Tento nástroj využíva kredity ak je používaný s geokódovacou službou ArcGIS Online World.",
    "noValue": "Vybrať pole",
    "mappingTitle": "",
    "locationMappingComplete": "Mapovanie umiestnenia dokončené",
    "fieldMappingComplete": "Mapovanie poľa dokončené",
    "settingsCleared": "Nastavenia budú vymazané.",
    "proceed": "Chcete pokračovať?",
    "itemMoveMatch": "Položka bola umiestnená a presunutá do zoznamu nájdených umiestnení",
    "itemMoveUnMatched": "Nie je možné umiestniť položku. Presunutá do zoznamu nenájdených umiestnení.",
    "itemWillBeLocated": "Položka bude odstránená zo zoznamu duplikovaných umiestnení.",
    "cannotLocate": "Nie je možné umiestniť položku. Overiť informácie o umiestnení.",
    "invalidMessage": "Neplatná hodnota.",
    "rangeMessage": "Hodnota musí mať menej než ${num} znakov.",
    "locatorError": "Lokátor neplatný alebo nedostupný.",
    "notConfigured": "Lokátor nie je konfigurovaný pre aktuálne umiestňovacie možnosti",
    "noMoreLocators": "žiadne ďalšie konfigurované lokátory"
  },
  "featureToolbar": {
    "locate": "Umiestniť",
    "save": "Uložiť záznam",
    "cancel": "Zrušiť úpravy",
    "cancelTitle": "Zrušiť úpravy",
    "cancelMessage": "Zrušiť úpravy aktuálneho záznamu?"
  }
});