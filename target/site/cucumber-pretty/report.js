$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hotelpage.feature");
formatter.feature({
  "line": 4,
  "name": "Hotels feature",
  "description": "",
  "id": "hotels-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select property class \u003cstars\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify system displays only \u003cstars\u003e hotels on search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;",
  "rows": [
    {
      "cells": [
        "stars"
      ],
      "line": 16,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;1"
    },
    {
      "cells": [
        "5 stars"
      ],
      "line": 17,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2"
    },
    {
      "cells": [
        "4 stars"
      ],
      "line": 18,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3"
    },
    {
      "cells": [
        "3 stars"
      ],
      "line": 19,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6685676250,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "\nGiven: I am on Hotels Home Page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 10,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select property class 5 stars",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify system displays only 5 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelPageSD.setCityTextField()"
});
