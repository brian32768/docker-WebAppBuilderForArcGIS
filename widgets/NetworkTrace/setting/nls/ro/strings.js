define({
  "taskUrl": "URL operaţie",
  "setTask": "Setare",
  "setTaskPopupTitle": "Setare activitate",
  "validate": "Setare",
  "inValidGPService": "Introduceți un serviciu valid de geoprocesare.",
  "noOutputParameterWithGeometryType": "Serviciul de geoprocesare selectat trebuie să aibă cel puțin un parametru de ieșire cu un tip de geometrie specificat. Selectați un alt serviciu de geoprocesare.",
  "invalidOutputGeometry": "Tipul de geometrie de ieșire al serviciului de geoprocesare selectat nu este compatibil cu setările de proiect. Rezultatele serviciului de geoprocesare nu pot fi salvate.",
  "GPFeatureRecordSetLayerERR": "Introduceți un serviciu de geoprocesare doar cu intrări de tip 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Număr de parametri de intrare este fie sub 1, fie mai mult de 3. Introduceți un serviciu de geoprocesare valid.",
  "projectSetting": {
    "title": "Setări proiect",
    "note": "Notă: Setările de proiect sunt opționale; după configurare, utilizatorul poate stoca proiecte în straturile hartă web dorite cu arie cu rețea indisponibilă și parametri de intrare. Utilizatorul poate stoca alți parametri de ieșire din fila “Ieșire”.",
    "projectPolygonLayer": "Strat tematic poligon al proiectului",
    "outputParameterName": "Nume parametru de ieșire",
    "projectPointLayer": "Strat tematic punct al proiectului",
    "selectLabel": "Selectare",
    "polygonLayerHelp": "<p>Se vor afișa straturile tematice de tip poligon cu următoarele condiții:<br/><ul><li>Stratul tematic trebuie să aibă capacități de editare, respectiv 'Creare', 'Ștergere' și 'Actualizare'</li><li>Stratul tematic trebuie să aibă 2 câmpuri cu numele și tipul de date exacte:</li><ul><li>nume (câmp tip șir)</li><li>globalid (câmp de tip GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Straturi poligon de ieșire din URL activitate vor fi afișate<p/>",
    "pointLayerHelp": "<p>Va fi afișat stratul tematic cu puncte cu condițiile următoare: <br/><ul><li>Stratul tematic trebuie să aibă capacități de editare, respectiv 'Creare', 'Ștergere' și 'Actualizare'</li><li>Stratul tematic trebuie să aibă 2 câmpuri cu numele și tipul de date exacte:</li><ul><li>tip intrare (câmp tip șir)</li><li>projectid (câmp tip GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Steag",
    "barrier": "Barieră",
    "skip": "Omitere",
    "title": "Intrare",
    "inputTooltip": "Sugestie instrument",
    "typeText": "Tip",
    "symbol": "Simbol",
    "summaryEditorText": "Text rezumat",
    "summaryTextTitle": "Introduceți textul de afișat pentru fila de intrare"
  },
  "summaryTab": {
    "title": "Ieşire",
    "summaryFieldsetText": "Setări rezumat",
    "inputOutput": "Intrare/ieșire",
    "field": "Câmp",
    "operator": "Operator",
    "inputOperatorCountOption": "Număr",
    "outputOperatorCountOption": "Număr",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Sumă",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Max",
    "fieldOperatorMeanOption": "Medie",
    "expressionAddButtonText": "Adăugați",
    "expressionVerifyButtonText": "Verificare",
    "summaryEditorText": "Text rezumat",
    "zoomText": "Zoom automat după urmărire",
    "summarSettingTooltipText": "Adăugare număr de intrări/ieșiri",
    "symbol": "Simbol",
    "outputParametersText": "Parametri de ieșire",
    "skipText": "Poate fi omis",
    "visibilityText": "Vizibil",
    "exportToCsvText": "Export în CSV",
    "settitngstext": "Setările",
    "saveToLayerText": "Salvare în strat (opțional)",
    "inputLabel": "Etichetă",
    "inputTooltip": "Sugestie instrument",
    "outputDisplay": "Text de afişat",
    "addFieldTitle": "Adăugare câmp",
    "setScale": "Setare scară",
    "enterDisplayText": "Introducere text de afișat",
    "saveToLayerHelp": "<p>Stratul cu condițiile următoare va fi afișat:<br/><ul><li>Stratul tematic trebuie să aibă capacități de editare, respectiv 'Creare', 'Ștergere' și 'Actualizare'</li><li>Stratul tematic trebuie să aibă 2 câmpuri cu numele și tipul de date exacte:</li><ul><li>parametername (câmp tip șir)</li><li>projectid (câmp tip Guid)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Introduceți textul de rezumat de afișat pentru fila de ieșire",
    "addSummaryItemsTitle": "Adăugare elemente de rezumat"
  },
  "validationErrorMessage": {
    "webMapError": "Niciun strat tematic disponibil în hartă web. Selectați o hartă web validă.",
    "inputTypeFlagGreaterThanError": "Intrare de tip marcator nu poate fi mai mult de unu.",
    "inputTypeFlagLessThanError": "Cel puțin o intrare de tip marcator este necesară.",
    "inputTypeBarrierErr": "Intrare de tip barieră nu poate fi mai mult de unu.",
    "inputTypeSkipErr": "Intrare de tip omitere nu poate fi mai mult de unu.",
    "displayTextForButtonError": "Textul de afișare pentru butonul 'Rulare’ nu poate fi necompletat.",
    "UnableToLoadGeoprocessError": "Imposibil de încărcat serviciu de geoprocesare.",
    "invalidSummaryExpression": "Expresie nevalidă",
    "validSummaryExpression": "Succes!",
    "invalidProjectSettings": "Setări de proiect nevalide.<br/> Selectați o valoare valabilă în '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Sugestie: furnizați eticheta de afișare pentru panoul de rezultate al parametrului de ieșire.",
    "displayTextHint": "Sugestie: acesta va fi afișat în panoul detalii pentru acest parametru de ieșire.",
    "inputTextHint": "Sugestie: creați propria expresie mai jos utilizând butonul de adăugare a elementelor de rezumat.",
    "expressionHint": "Sugestie: selectați elementele și faceți clic pe adăugare pentru a crea expresia."
  }
});