jQuery(document).ready(function(){
  jQuery('#parallax .parallax-layer')
  .parallax({
    mouseport: jQuery('html')
  },
  {

    //backgroundsky
    xparallax: 0.2,
    yparallax: 0.2
  },{},{},{
    yparallax: 0.6
  },{
    xparallax: false,
    yparallax: false
  });
});
