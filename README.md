# lodash-worker-browserify-webpack

This repo is to show how lodash 2.4.1 errors if it is packaged with browserify or webpack and then used in a web worker.

The value to test when attempting to dynamically discover what the global context is in a browser environment is `self`. `window` is available in the main browser environment, but `self` is available in both the normal and worker environment. For extra insurance you can check both.

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

You should see half the tests fail.
