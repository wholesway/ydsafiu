var userFeed = new Instafeed({
    get: 'user',
    target: "insta",
    resolution: 'low_resolution',
    limit: 5,
    template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
    accessToken: 'IGQVJYU1R6THFTaFJNMHRuSFA5RTl6QWZA1RlBkeXJOT3BoMVBVV1lmNU9xWXB5R3BObzhySFE5QU8tVXBPM09lR29oY042Vi1WS1M0X1RNdThnQ3NkM3B5NzRMaVQ4T0lNRm9NNkJyYXg4N2RhbndOSAZDZD'
  });
userFeed.run();