/*global document:false, Element:false */
(function() {
    if (Element) {
        Element.prototype.matchesUntil = function(selector, filter) {
            var matches = this.matches(selector), parent;

            filter = typeof filter === 'string' ?
                document.querySelector(filter) : filter;
            if (matches || this === filter) {
                return matches;
            } else {
                parent = this.parentElement;
                if (parent) {
                    return parent.matchesUntil(selector, filter);
                } else {
                    return matches;
                }
            }
        };
    }
}());
