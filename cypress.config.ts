import { defineConfig } from "cypress";

export default defineConfig({

  env: {
    //Form Page
    heroName: "Krzysiek",
    alterEgo: "Super Krzysiek",
    heroPower: "Weather Changer",

    //Stepper Page
    stepperName: "Krzysiek",
    stepperAddress: "Kowalska 5/7"
  },

  e2e: {
    pageLoadTimeout : 5000
  },
});
