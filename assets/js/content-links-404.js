/* Stackly content-area click routing
 * All clickable elements between the site header and footer redirect to 404.html.
 * Header, mobile offcanvas, search overlay and footer controls remain untouched.
 */
(function () {
    function isExcluded(element) {
        return !!element.closest('header, footer, .offcanvas__info, .offcanvas__overlay, .search-wrap');
    }

    document.addEventListener('click', function (event) {
        var clickable = event.target.closest('a, button, [role="button"]');
        if (!clickable || isExcluded(clickable)) return;

        // Keep native browser behavior from firing another action before routing.
        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.href = '404.html';
    }, true);
})();
