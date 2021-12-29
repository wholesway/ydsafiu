var userFeed = new Instafeed({
    get: 'user',
    target: "insta",
    resolution: 'low_resolution',
    limit: 1,
    template:
      '<div class="tile"><div class="text">{{model.user.full_name}}</div><img class="item" src="{{image}}"></div>',
    filter: function(image){
      return image.type === 'image';
    },
    accessToken: 'IGQVJYU1R6THFTaFJNMHRuSFA5RTl6QWZA1RlBkeXJOT3BoMVBVV1lmNU9xWXB5R3BObzhySFE5QU8tVXBPM09lR29oY042Vi1WS1M0X1RNdThnQ3NkM3B5NzRMaVQ4T0lNRm9NNkJyYXg4N2RhbndOSAZDZD'
  });
userFeed.run();