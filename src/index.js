const _ = require('lodash');
const { renameKey } = require('./utils/renameKey');
const { f } = require('./utils/fetch');

_.mixin({
  'mergeByKey' : function(arr1, arr2, key) {
    var criteria = {};
    criteria[key] = null;
    return _.map(arr1, function(item) {
      criteria[key] = item[key];
      return  _.merge(item, {classify: _.find(arr2, criteria)});
    });
  }
});

const satellites = () =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const satsData = await f('https://satellitemap.space/starposA.json');
      const { sats } = _.pick(satsData, ['sats']);
      
      const classifyData = await f('https://satellitemap.space/json/classify.json');
      const { classify } = _.pick(classifyData, ['classify']);
      
      _.forEach(classify, (props) => renameKey(props, 'sat', 'id'));
      const json = _.mergeByKey(sats, classify, ['id']);
    
      resolve(json);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};


/** 
 *  @description Altitude history of Norad ID
 * 
 *  d = days pasts
 *  alt = altitude
 * 
*/
const fixes = (id) =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const fixesData = await f(`https://satellitemap.space/json/${id}.json`);
      const { fixes } = _.pick(fixesData, ['fixes']);
      resolve({fixes});
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

module.exports = {
  satellites,
  fixes
}