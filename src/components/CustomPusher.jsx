import React from "react";
export default function CustomPusher(props) {
  let last_known_scroll_position = 0;
  let ticking = false;

  function doSomething(scroll_pos) {
    console.log("scrolling", scroll_pos);
  }

  window.addEventListener("scroll", function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
  return <>{props.children}</>;
}
