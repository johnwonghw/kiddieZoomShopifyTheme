$(function() {
  $('body').on('click', '.type-toggler', function() {
    if ($(this).closest('.collection-wrapper').find('.collection-type-wrapper').is(':visible')) {
      $(this).text('+')
    } else {
      $(this).text('-')
    }
    $(this).closest('.collection-wrapper').find('.collection-type-wrapper').toggle('fast')
  })

  // jQuery('body').on('click', function() {
  //   console.log('asdf')
  // })
});