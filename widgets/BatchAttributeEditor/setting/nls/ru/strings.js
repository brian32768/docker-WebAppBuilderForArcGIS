define({
  "page1": {
    "selectToolHeader": "Выберите метод выборки записей для пакетного обновления.",
    "selectToolDesc": "Виджет поддерживает три метода для создания выбранного набора записей для обновления. Вы можете выбрать один из этих методов. Если вам необходимо больше одного из этих методов, создайте новый экземпляр виджета.",
    "selectByShape": "Выбрать по области",
    "shapeTypeSelector": "Щелкните инструменты, которые вы хотите разрешить",
    "shapeType": {
      "point": "Точка",
      "line": "Линия",
      "polyline": "Полилиния",
      "freehandPolyline": "Произвольная полилиния",
      "extent": "Экстент",
      "polygon": "Полигон",
      "freehandPolygon": "Произвольный полигон"
    },
    "freehandPolygon": "Полигон произвольной формы",
    "selectBySpatQuery": "Выбрать по объекту",
    "selectByAttQuery": "Выбрать по объекту & Связанные объекты",
    "selectByQuery": "Выбрать по запросу",
    "toolNotSelected": "Выберите метод выборки",
    "noDrawToolSelected": "Выберите один из инструментов рисования"
  },
  "page2": {
    "layersToolHeader": "Выберите слои для обновления и опции инструмента выборки, если доступны.",
    "layersToolDesc": "Выбранный на первой странице метод выборки будет использоваться для выборки и обновления набора слоев, указанных ниже.  Если вы отметите более одного слоя, для обновления будут доступны только общие редактируемые поля.  В зависимости от инструмента выборки, могут потребоваться дополнительные опции.",
    "layerTable": {
      "colUpdate": "Обновить",
      "colLabel": "Слой",
      "colSelectByLayer": "Выбрать по слою",
      "colSelectByField": "Поле запроса",
      "colhighlightSymbol": "Символ выделения"
    },
    "toggleLayers": "Переключение видимости слоев",
    "noEditableLayers": "Нет редактируемых слоев",
    "noLayersSelected": "Выберите один или несколько слоев перед обработкой."
  },
  "page3": {
    "commonFieldsHeader": "Выберите поля для пакетного обновления.",
    "commonFieldsDesc": "Ниже будут перечислены только общие редактируемые поля.  Выберите поля, которые вы хотите обновить.  Если одно и то же поле в разных слоях использует различные домены, будет показан и использован только один домен.",
    "noCommonFields": "Нет общих полей",
    "fieldTable": {
      "colEdit": "Редактируемый",
      "colName": "Имя",
      "colAlias": "Псевдоним",
      "colAction": "Действия"
    }
  },
  "tabs": {
    "selection": "Задать тип выборки",
    "layers": "Задать слои для обновления",
    "fields": "Задать поля для обновления"
  },
  "errorOnOk": "Введите все параметры перед сохранением конфигурации",
  "next": "Далее",
  "back": "Назад",
  "save": "Сохранить символ",
  "cancel": "Отмена",
  "ok": "OK",
  "symbolPopup": "Выбор символа",
  "editHeaderText": "Текст для отображения в верхней части виджета",
  "widgetIntroSelectByArea": "Используйте один из указанных ниже инструментов для создания поднабора объектов для обновления.  Если строка <font class='maxRecordInIntro'>выделена</font>, максимальное число записей превышено.",
  "widgetIntroSelectByFeature": "Используйте инструмент, представленный ниже, для выбора объекты из слоя <font class='layerInIntro'>${0}</font>. Этот объект будет использоваться для выбора и обновления всех пересекающихся объектов. Если строка <font class='maxRecordInIntro'>выделяется цветом</font>, это означает, что было превышено максимальное число записей.",
  "widgetIntroSelectByFeatureQuery": "Используйте инструмент ниже, чтобы выделить объект на слое <font class='layerInIntro'>${0}</font>.  Атрибут <font class='layerInIntro'>${1}</font> этого объекта будет использован для запроса указанных ниже слоев и обновления полученных объектов.  Если строка <font class='maxRecordInIntro'>выделена</font>, максимальное число записей превышено.",
  "widgetIntroSelectByQuery": "Введите значение для создания выбранных наборов.  Если строка <font class='maxRecordInIntro'>выделена</font>, максимальное число записей превышено."
});