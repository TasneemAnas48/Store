const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    transpileDependencies: [
        'vuetify'
    ],
});
module.exports = {
  runtimeCompiler: true,

  transpileDependencies: [
    'vuetify'
  ]
}
