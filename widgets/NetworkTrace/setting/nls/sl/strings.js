define({
  "taskUrl": "URL opravila",
  "setTask": "Nastavi",
  "setTaskPopupTitle": "Nastavi opravilo",
  "validate": "Nastavi",
  "inValidGPService": "Vnesite veljavno geoprocesno storitev.",
  "noOutputParameterWithGeometryType": "Izbrana storitev geoprocesiranja mora imeti vsaj en izhodni parameter z določeno vrsto geometrije. Izberite drugo storitev geoprocesiranja.",
  "invalidOutputGeometry": "Izhodna vrsta geometrije izbrane storitve geoprocesiranja ni združljiva z nastavitvami projekta. Rezultatov storitve geoprocesiranja ni mogoče shraniti.",
  "GPFeatureRecordSetLayerERR": "Vnesite geoprocesno storitev samo z vnosi tipa 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Število vhodnih parametrov je manj kot 1 ali več kot 3. Vnesite veljavno geoprocesno storitev.",
  "projectSetting": {
    "title": "Nastavitve projekta",
    "note": "Opomba: nastavitve projekta so izbirne. Ko so konfigurirane, lahko uporabnik projekt shrani v želene sloje spletne karte z območji izpada omrežja z vhodnimi parametri. Uporabnik lahko shrani druge izhodne parametre iz zavihka \"Izhod\".",
    "projectPolygonLayer": "Sloj poligona projekta",
    "outputParameterName": "Ime izhodnega parametra",
    "projectPointLayer": "Točkovni sloj projekta",
    "selectLabel": "Izberi",
    "polygonLayerHelp": "<p>Prikazani bodo poligonski sloji z naslednjimi pogoji:<br/><ul><li>sloj mora imeti zmožnosti urejanja, tj. \"Ustvari\", \"Izbriši\" in \"Posodobi\";</li><li>sloj mora imeti dve polji s točnim imenom in tipom podatkov:</li><ul><li>ime (polje tipa niz)</li><li>globalid (polje tipa GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Prikazani bodo izhodni poligonski sloji z URL-ja opravila.<p/>",
    "pointLayerHelp": "<p>Prikazani bodo točkovni sloji z naslednjimi pogoji: <br/><ul><li>sloj mora imeti zmožnosti urejanja, tj. \"Ustvari\", \"Izbriši\" in \"Posodobi\";</li><li>sloj mora imeti dve polji s točnim imenom in tipom podatkov:</li><ul><li>tip vhoda (polje tipa niz)</li><li>projectid (polje tipa GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Zastava",
    "barrier": "Protisledni zid",
    "skip": "Preskoči",
    "title": "Vnos",
    "inputTooltip": "Zaslonski namig",
    "typeText": "Vrsta",
    "symbol": "Simbol",
    "summaryEditorText": "Besedilo povzetka",
    "summaryTextTitle": "Zagotovite besedilo za zavihek za vnos"
  },
  "summaryTab": {
    "title": "Izhod",
    "summaryFieldsetText": "Nastavitve povzetka",
    "inputOutput": "Vhod/izhod",
    "field": "polja",
    "operator": "Operator",
    "inputOperatorCountOption": "Število",
    "outputOperatorCountOption": "Število",
    "outputOperatorSkipCountOption": "Preskoči štetje",
    "fieldOperatorSumOption": "Vsota",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Maks",
    "fieldOperatorMeanOption": "Srednja vrednost",
    "expressionAddButtonText": "Dodaj",
    "expressionVerifyButtonText": "Preveri",
    "summaryEditorText": "Besedilo povzetka",
    "zoomText": "Samodejna povečava po sledi",
    "summarSettingTooltipText": "Dodaj vhodno/izhodno štetje",
    "symbol": "Simbol",
    "outputParametersText": "Izhodni parametri",
    "skipText": "Je mogoče preskočiti",
    "visibilityText": "Vidno",
    "exportToCsvText": "Izvozi v CSV",
    "settitngstext": "Nastavitve",
    "saveToLayerText": "Shrani v sloj (izbirno)",
    "inputLabel": "Napis",
    "inputTooltip": "Zaslonski namig",
    "outputDisplay": "Prikazno besedilo",
    "addFieldTitle": "Dodaj polje",
    "setScale": "Nastavi merilo",
    "enterDisplayText": "Vnesi prikazno besedilo",
    "saveToLayerHelp": "<p>Prikazan bo sloj z naslednjimi pogoji:<br/><ul><li>sloj mora imeti zmožnosti \"Ustvari\", \"Izbriši\" in \"Posodobi\";</li><li>sloj mora imeti dve polji z imenom in tipom podatkov:</li><ul><li>ime parametra (polje tipa niz)</li><li>projectid (tip polja Guid)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Zagotovite povzetek besedila za prikaz na zavihku za izhod",
    "addSummaryItemsTitle": "Dodajte elemente povzetka"
  },
  "validationErrorMessage": {
    "webMapError": "Na spletni karti ni na voljo noben sloj. Izberite veljavno spletno karto.",
    "inputTypeFlagGreaterThanError": "Vhod tipa zastavice ne more biti več kot ena.",
    "inputTypeFlagLessThanError": "Zahtevan je vsaj en vhod tipa zastavice.",
    "inputTypeBarrierErr": "Vhod tipa pregrade ne more biti več kot ena.",
    "inputTypeSkipErr": "Vhod tipa preskoka ne more biti več kot ena.",
    "displayTextForButtonError": "Prikazno besedilo za gumb »Zaženi« ne more biti prazno.",
    "UnableToLoadGeoprocessError": "Geoprocesne storitve ni mogoče naložiti.",
    "invalidSummaryExpression": "Neveljaven izraz",
    "validSummaryExpression": "Uspešno!",
    "invalidProjectSettings": "Neveljavne nastavitve projekta<br/> Izberite veljavno vrednost v '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Namig: zagotovite oznako prikaza za ploščo z rezultati izhodnega parametra.",
    "displayTextHint": "Namig: to bo prikazano na plošči s podrobnostmi za ta izhodni parameter.",
    "inputTextHint": "Namig: zgradite svoj izraz spodaj z dodajanjem gumbov za elemente povzetka",
    "expressionHint": "Namig: izberite elemente in kliknite dodaj, da zgradite izraz."
  }
});