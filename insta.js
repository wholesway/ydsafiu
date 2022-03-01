var userFeed = new Instafeed({
  get: 'user',
  target: "insta",
  resolution: 'low_resolution',
  limit: 5,
  template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
  accessToken: 'IGQVJXLVowV2d2cm9wd2p5cXdrUnVmWmdkSjQ4N1NpX3A0SkdnUHRYX3J3aTlPSjBjUTZAYVVNSanVGSVRVNnZA5TjZAYdGl0V3duOGt4Xy11Nk91MUdjY3pyTXk0Q2NnR0xTcy1VNHM1aWFjTzItWllsOAZDZD'
});
userFeed.run();