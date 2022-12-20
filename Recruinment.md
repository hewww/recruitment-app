# RecruitmentApp

Added Cypress framework to project (Folder Cypress)

./cypress/e2e/ -> implement tests

./cypress/POM/ -> Page Object Patterns

./cypress/support/e2e -> testBase included implements afterEach and beforeEach methods

./cypress/support/commands -> future place for additional commands (like login to portal etc.)

./cypress/fixtures/ - place for Json body's with example data (Actually here no needed I think)


NaviBar was visible on all sites and I decided to extend NaviBar for other classes.
This config actually have enabled recording test execution and taking screenshot on fails.

They save on ./cypress/videos and ./cypress/screenshot folders

All values using in test was export to env variable and can be change in cypress.config.ts

To run tests do it from command line -> npx cypress run (or use local cypress.exe app)

Cypress was implement with two patterns of Page Object models (Just to show).
Final solve should be implement one of this.

Some locators should be shorter than actually, this issue can be solved by add parameter to HTML element,I can do this, but I think it is not necessary here.

I believe that interference in the code by the tester is necessary only in justified cases.

In case if project growth in scale 

In the case of an increase in the scale of the project, some methods can be extended by genericity
