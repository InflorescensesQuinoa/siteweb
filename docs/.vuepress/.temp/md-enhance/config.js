import { defineClientConfig } from "@vuepress/client";
import "D:/Git/GitHub/siteweb-inflorescences-quinoa-fr/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/Git/GitHub/siteweb-inflorescences-quinoa-fr/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Tabs from "D:/Git/GitHub/siteweb-inflorescences-quinoa-fr/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
});
