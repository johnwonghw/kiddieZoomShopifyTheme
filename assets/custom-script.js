$(function() {
  $('body').on('click', '.type-toggler', function() {
    $(this).closest('.collection-wrapper').find('.collection-type-wrapper').toggle('show')
    if ($(this).closest('.collection-wrapper').find('.collection-type-wrapper').hasClass('show')) {
      $(this).text('-')
    } else {
      $(this).text('+')
    }
  })

  // jQuery('body').on('click', function() {
  //   console.log('asdf')
  // })
});