import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import '../models/recursive-map.model';

@Injectable({
  providedIn: 'root'
})

export class MapperService {

  constructor() { }

  public mapToCamelCase(object) {
    let newObj = _.recursiveMap(object, function (x) {
      return _.mapKeys(x, function (val, key) {
        return _.camelCase(key)
      })
    })
    return newObj
  }

  public mapToSnakeCase(object) {
    let obj = _.recursiveMap(object, function (x) {
      return _.mapKeys(x, function (val, key) {
        return _.snakeCase(key)
      })
    })
    let newObj = _.recursiveMap(obj, function (x) {
      return _.mapValues(x, function (val, key) {
        return typeof val === "boolean" ? (val ? 1 : 0) : val;
      })
    })
    return newObj
  }

}