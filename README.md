# checkEnv
Initialize environment variables with dotenv then compare process.env with a ref file.

```javascript
require('check-env')(options)
```
* **[options]** 
  * **[checkPath]** Path to the ref file. *Default ".env.default"*
  * **[shouldExit]** Exit application if a variable in ref file does not exist in process.env *Default false*
 
Other options are passed to ``dotenv.config()``;
  
 
