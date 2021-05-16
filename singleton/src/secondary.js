import * as ModuleSingleton from './singleton.js';


function getSingleton() {
    return new ModuleSingleton.Singleton();
}

export {
  getSingleton,
}
