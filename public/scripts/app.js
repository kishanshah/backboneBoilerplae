$(document).ready(function(event) {
  console.log ('App has loaded')
  var LogoView = Backbone.View.extend({
  tagName: "div",
  className: "column",
  template: _.template("<h1><%= songName %>, spending cheese. <%= songName %>, on PC's. We doing <%= songName %> in WDI, its just Alex, James and Andy.</h1>"),
  initialize: function() {
    this.render();
  },
    render: function() {
      var data = {
        songName: "Big Pimpin"
      };
      var renderedTemplate = this.template(data);
      this.$el.html(renderedTemplate);
      console.log(this.$el);
      $('body').append(this.$el);
    }
  })

  var myFact = new LogoView();
});
