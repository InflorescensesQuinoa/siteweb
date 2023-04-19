import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/Git/GitHub/siteweb-inflorescences-quinoa-fr/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/Git/GitHub/siteweb-inflorescences-quinoa-fr/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
