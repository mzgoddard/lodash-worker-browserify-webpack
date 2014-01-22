# lodash-worker-browserify-webpack

This repo is to show how current lodash errors if it is packaged with browserify or webpack and then used in a web worker.

The value to test for when attempting to dynamically discover is the global context in a browser environment is `self`. `window` is available in the main browser environment, but `self` is available in both the normal and worker environment.

This repo includes a custom version of lodash making the following change to support packaging as a webworker.

```diff
--- custom_lodash.js
+++ custom_lodash.js
@@ -175,7 +175,7 @@
 
   /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
   var freeGlobal = objectTypes[typeof global] && global;
-  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
+  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
     root = freeGlobal;
   }
```


## Build and Test

```shell
npm install
npm test
```
