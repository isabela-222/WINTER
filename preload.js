console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "imgs/aaa.png",
  "imgs/bg.png",
  "imgs/boo.png",
  "imgs/check.png",
  "imgs/demi.png",
  "imgs/final_png-removebg-preview.png",
  "imgs/final-removebg-preview.png",
  "imgs/g1.png",
  "imgs/g2.png",
  "imgs/g3.png",
  "imgs/g4.png",
  "imgs/g5.png",
  "imgs/g6.png",
  "imgs/g7.png",
  "imgs/g8.png",
  "imgs/g9.png",
  "imgs/g10.png",
  "imgs/g11.png",
  "imgs/g12.png",
  "imgs/g13.png",
  "imgs/g14.png",
  "imgs/hail.png",
  "imgs/harvey.png",
  "imgs/maru.png",
  "imgs/p.png",
  "imgs/rib.png",
  "imgs/robbin.png",
  "imgs/WEENIES.png",
  "imgs/wiz.png",
  "move/m1.png",
  "move/m2.png",
  "move/m3.png",
  "move/m4.png",
  "move/m5.png",
  "move/m6.png",
  "move/m7.png",
  "move/m8.png",
  "move/m9.png",
  "move/m10.png",
  "move/m11.png",
  "move/m12.png",
  "move/m13.png",
  "move/m14.png",
  "move/m15.png",
  "move/m16.png",
  "move/m17.png",
  "move/m18.png",
  "move/m19.png",
  "move/m20.png",
  "move/m21.png",
  "move/m22.png",
  "imgs/Screenshot_2024-12-02_131556-removebg-preview.png"
);
