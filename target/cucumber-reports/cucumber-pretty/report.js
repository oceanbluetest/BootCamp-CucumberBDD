$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/PageClass.feature");
formatter.feature({
  "name": "Sample feature name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify amazon search functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@one"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://amazon.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter search keyword \"iphone\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_defs.PageClass_Steps2.i_Enter_search_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_should_verify_page_s_title()"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/resources/features/PageClass2.feature");
formatter.feature({
  "name": "Sample feature name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Open webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@one"
    }
  ]
});
formatter.step({
  "name": "I Open \"\u003cbrowserName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName"
      ]
    },
    {
      "cells": [
        "https://google.com"
      ]
    },
    {
      "cells": [
        "https://amazon.com"
      ]
    },
    {
      "cells": [
        "https://youtube.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Open webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@one"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_should_verify_page_s_title()"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Open webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@one"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://amazon.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_should_verify_page_s_title()"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Open webpages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@one"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Open \"https://youtube.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_Open(java.lang.String)"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should verify page\u0027s title",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.PageClass_Steps.i_should_verify_page_s_title()"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});