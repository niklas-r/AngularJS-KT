(function(window, R) {
  var showFragments;

  /**
   * Shows multiple fragments with a timeout
   *
   * @param  {Array} fragments The length of this array decides how many
   *                           times Reveal.nextFragment will be called.
   * @param  {Int}   interval  Amount of timeout
   */
  showFragments = function (fragments, interval) {
    var initialInterval = interval;

    fragments.forEach( function() {
      setTimeout( function () {
        R.nextFragment();
      }, interval );

      interval += initialInterval;
    } );
  };

  R.addEventListener( 'fragmentshown', function( event ) {
    var fragmentChildren = [];

    if (typeof event.fragment.dataset.showAllFragments != "undefined") {

      [].forEach.call( event.fragment.children, function (li) {
        if (li.className.indexOf("fragment") >= 0) {
          fragmentChildren.push(li);
        }
      } );

      showFragments(fragmentChildren, 200);
    }
  } );
}(window, Reveal));