/*global document:false, Element:false */
(function() {
    'use strict';

    if (Element && !Element.prototype.closest) {
        Element.prototype.closest = function(selector, filter) {
            var node = this, found;

            filter = typeof filter === 'string' ?
                document.querySelector(filter) : filter;
            while (node instanceof Element &&
                !(found = node.matches(selector)) &&
                node !== filter) {
                node = node.parentNode;
            }

            return found ? node : null;
        };
    }
}());
