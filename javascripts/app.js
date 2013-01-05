// Use ratchet as a reference for your template markup

var HomeTemplate = [
  '<div class="content">',
  ' <h1>Hello World!</h1>',
  ' <div class="button-block click-me">Click Me!</div>',
  '</div>'
].join('\n');

var HomeView = Jr.View.extend({
  render: function() {
    this.$el.html(HomeTemplate);
    return this;
  },

  events: {
    'click .click-me': 'onClickClickMeButton'
  },

  onClickClickMeButton: function() {
    this.goToNextPage();
  },

  goToNextPage: function() {
    Jr.Navigator.navigate('cool',{
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    })
  }
});

var CoolTemplate = [
  '<header class="bar-title">',
  ' <div class="header-animated">',
  '   <div class="button-prev">Back</div>',
  '   <h1 class="title">Cool Page</h1>',
  '</header>',
  '<div class="content">',
  '  <summary>This page is just really cool!</summary>',
  '</div> '
].join('\n');

var CoolView = Jr.View.extend({
  render: function() {
    this.$el.html(CoolTemplate);
    return this;
  },

  events: {
    'click .button-prev': 'onClickButtonPrev'
  },

  onClickButtonPrev: function() {
    this.goToHomePage();
  },

  goToHomePage: function() {
    Jr.Navigator.navigate('',{
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    })
  }

});

var AppRouter = Jr.Router.extend({
  routes: {
    '': 'home',
    'cool': 'cool'
  },

  home: function() {
    this.renderView(new HomeView());
  },

  cool: function() {
    this.renderView(new CoolView());
  }
});

var appRouter = new AppRouter();
Backbone.history.start();
