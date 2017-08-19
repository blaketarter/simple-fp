import fp from './constructor';

import forEach from './instance/forEach';
import map from './instance/map';
import take from './instance/take';
import filter from './instance/filter';
import reject from './instance/reject';
import reduce from './instance/reduce';
import reduceRight from './instance/reduceRight';
import concatAll from './instance/concatAll';
import concatMap from './instance/concatMap';
import pluck from './instance/pluck';
import pick from './instance/pick';
import unique from './instance/unique';
import find from './instance/find';
import reverse from './instance/reverse';
import doEffect from './instance/do';
import skip from './instance/skip';
import compact from './instance/compact';

import zip from './static/zip';
import range from './static/range';
import concat from './static/concat';

fp.prototype.forEach = forEach;
fp.prototype.map = map;
fp.prototype.take = take;
fp.prototype.filter = filter;
fp.prototype.reject = reject;
fp.prototype.reduce = reduce;
fp.prototype.reduceRight = reduceRight;
fp.prototype.concatAll = concatAll;
fp.prototype.concatMap = concatMap;
fp.prototype.pluck = pluck;
fp.prototype.pick = pick;
fp.prototype.unique = unique;
fp.prototype.find = find;
fp.prototype.reverse = reverse;
fp.prototype.do = doEffect;
fp.prototype.skip = skip;
fp.prototype.compact = compact;

fp.zip = zip;
fp.range = range;
fp.concat = concat;

export default fp;
