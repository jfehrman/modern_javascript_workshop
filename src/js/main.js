import jQuery from 'jquery';
jQuery.fn.card = require('./jquery.card');

/**
 * On ready function.
 */
jQuery(function() {

  jQuery.get('./api/index.json', json => {

    var talks = json;

    for (var i = 0, length = talks.length; i < length; i++) {
      var talk = talks[i];

      jQuery('.anchor').card({
        "title": talk.title,
        "name": talk.persons[0].full_public_name,
        "picture": "data:image/jpeg;base64,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",
        "abstract": talk.abstract
      });
    }
  })
});