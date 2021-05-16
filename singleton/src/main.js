import * as ModuleSingleton from './singleton.js';
import * as ModuleSecondary from './secondary.js';

let singleton = new ModuleSingleton.Singleton();
singleton.value = 3;
let singletonSecondary = ModuleSecondary.getSingleton();

export {
  singleton,
  singletonSecondary,
}
