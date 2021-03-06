/**
 * Publish-Subscribe
 * http://xmpp.org/extensions/xep-0060.html
 */
var XEP0060 = [ 'subscribe',
                'unsubscribe',
                'items',
                'publish',
                'retract' ];

var DERIVED = [ 'item' ];

/**
 * Expose the actions.
 */
module.exports = [].concat(
  XEP0060,
  DERIVED );
