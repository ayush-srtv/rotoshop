import Promise from "bluebird";
import compose from "lodash/fp/compose";
import curry from "lodash/fp/curry";

const _bind = (fn, cxt) => fn.bind(cxt);

const _delete = key => delete localStorage[key];

const { parse, stringify } = JSON;
const resolve = _bind(Promise.resolve, Promise);
const getItem = _bind(localStorage.getItem, localStorage);
const setItem = curry(_bind(localStorage.setItem, localStorage));

const storage = {
  get: compose(
    resolve,
    parse,
    getItem
  ),
  set: (key, value) =>
    compose(
      resolve,
      setItem(key),
      stringify
    )(value),
  delete: compose(
    resolve,
    _delete
  )
};

export default storage;
