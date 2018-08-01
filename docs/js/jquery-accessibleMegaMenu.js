$(document).ready(function () {
$('.megamenu').accessibleMegaMenu();
});

$('.megamenu').accessibleMegaMenu({

  // unique ID's are required to indicate aria-owns, aria-controls and aria-labelledby
  uuidPrefix: "accessible-megamenu", 

  // default css class used to define the megamenu styling
  menuClass: "accessible-megamenu", 

  // default css class for a top-level navigation item in the megamenu
  topNavItemClass: "accessible-megamenu-top-nav-item", 

  // default css class for a megamenu panel
  panelClass: "accessible-megamenu-panel", 

  // default css class for a group of items within a megamenu panel
  panelGroupClass: "accessible-megamenu-panel-group", 

  // default css class for the hover state
  hoverClass: "hover", 

  // default css class for the focus state
  focusClass: "focus", 

  // default css class for the open state}); 
  openClass: "open",

  // default open delay when opening menu via mouseover
  openDelay: 0,

  // default open delay when opening menu via mouseover
  closeDelay: 250 

});
