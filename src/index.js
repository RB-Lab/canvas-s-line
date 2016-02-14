/**
 * @function label - makes a Path2D repersenting S-curved line
 * @param {Object} style - css-like style object
 * @param {Number} [style.fromx = 0] - x coordinate of the line start
 * @param {Number} [style.fromy = 0] - y coordinate of the line start
 * @param {Number} [style.tox = 0] - x coordinate of the line end
 * @param {Number} [style.toy = 0] - y coordinate of the line end
 * @returns {Path2D} - S-curved line
 */
 /* global Path2D */
export default function sLine({fromx = 0, fromy = 0, tox = 0, toy = 0}){
	const path = new Path2D();
	let c = tox - fromx - 20;
	c = c > 0 ? c / 2 : Math.log(Math.pow(-c, 10)) * 10;
	const cp1x = fromx + c;
	const cp2x = tox - c;
	path.moveTo(fromx, fromy);
	path.bezierCurveTo(cp1x, fromy, cp2x, toy, tox, toy);
	return path;
}
