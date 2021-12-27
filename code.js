var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36","60fa219d-f314-4316-b713-82100ae442ba"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png","frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"3ZQWxtBBmh7CECDpUmbu1T.vhl8yHvue","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"YtMkuguMuXJeFRyRxEOHqdzEnKbq9.OF","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png","frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"UXxcfJJU0ElxRaARNIbSuAiroR4c_VZr","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png","frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"XddtPX4t7HEq3h8tdHxurM6846QLo4jb","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png","frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"aF53tK7uS3uCTrJhv5pwiMXpkZhWxxCR","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"onion","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"afSMfitzBB1lRGAWT8BfYhGYD7qgoWnP","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"},"60fa219d-f314-4316-b713-82100ae442ba":{"name":"well.png_1","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"H92KBPAe7caLEHc5.jLcSo64XPpacKER","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/60fa219d-f314-4316-b713-82100ae442ba.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

for (var i = 50; i < 400; i=i+50) 
{
  var carrot = createSprite(i, 50, 20, 20);
  carrot.setAnimation("carrot");
}

for (var num = 50;num < 150; num = num + 50){
   var brinjal = createSprite(num, 120, 20, 20)
   brinjal.setAnimation("brinjal");
}

for (var num = 300;num < 400; num = num + 50){
   var brinjal = createSprite(num, 120, 20, 20)
   brinjal.setAnimation("brinjal");

}

for (var num = 50;num < 150; num = num + 50){
   var capcisum = createSprite(num, 180, 20, 20)
   capcisum.setAnimation("capcisum");

}

for (var num = 300;num < 400; num = num + 50){
   var capcisum = createSprite(num, 180, 20, 20)
   capcisum.setAnimation("capcisum");

}

for (var num = 50;num < 150; num = num + 50){
   var onions = createSprite(num, 250, 20, 20)
   onions.setAnimation("onion");
  
}

for (var num = 300;num < 400; num = num + 50){
   var onions = createSprite(num, 250, 20, 20)
   onions.setAnimation("onion");
  
}

for (var num = 50;num < 400; num = num + 50){
   var tomatos = createSprite(num, 320, 20, 20)
   tomatos.setAnimation("tomato");
}

for (var num = 190;num < 200; num = num +100){
   var well = createSprite(200, 200, 40, 40)
   well.setAnimation("well.png_1");
}

function draw() {
  
  background(rgb(139,69,19));
  drawSprites();

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
