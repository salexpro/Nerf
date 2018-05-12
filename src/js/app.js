/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min';
*/

$(document).foundation();

$('.nav_toggle').click(function() {
    $(this).parent().toggleClass('is_opened');
})

let idx = 2;
setInterval(()=> {
    $('.head_boy_boy, .head_boy_sign').hide();
    $('.head_boy_boy--' + idx +', .head_boy_sign--' + idx).show();
    if (idx == 6) idx = 0;
    idx++;
}, 5000)