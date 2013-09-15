/*global document:false, Element:false */
(function() {
    'use strict';

    if (Element && !Element.prototype.closest) {
        Element.prototype.closest = function(selector, filter) {
            var node = this, found;

            filter = typeof filter === 'string' ?
                document.querySelector(filter) : filter;
            while (!found && node instanceof Element && node !== filter) {
                found = node.matches(selector);
                node = !found ? node.parentNode : node;
            }
            return found ? node : null;
        };
    }
}());
