// $(document).ready(function() {
//     $('.dropdown').hover(function() {
//       $(this).addClass('show');
//       $(this).find('.dropdown-menu').addClass('show');
//     }, function() {
//       $(this).removeClass('show');
//       $(this).find('.dropdown-menu').removeClass('show');
//     });
// });
document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});