import * as _ from "lodash";


declare module "lodash" {
  interface LoDashStatic {
    recursiveMap<TValue>(array, mapper): any;
  }
  interface LoDashExplicitWrapper<TValue> {
    recursiveMap(): LoDashExplicitWrapper<TValue>;
  }
}

_.mixin({
  recursiveMap
});

function recursiveMap(obj, mapper) {
  return mapper(_.mapValues(obj, function (v) {
    if (_.isArray(v))
      return _.values(_.recursiveMap(v, mapper));
    if (_.isPlainObject(v))
      return _.recursiveMap(v, mapper);
    else
      return v;
  }));
}