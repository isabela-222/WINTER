// script.js
const draggable = document.querySelector(".draggable");
const dropzone = document.querySelector(".dropzone");
const draggable2 = document.querySelector(".draggable2");
const dropzone2 = document.querySelector(".dropzone2");
const draggable3 = document.querySelector(".draggable3");
const dropzone3 = document.querySelector(".dropzone3");
const draggable4 = document.querySelector(".draggable4");
const dropzone4 = document.querySelector(".dropzone4");
const draggable5 = document.querySelector(".draggable5");
const dropzone5 = document.querySelector(".dropzone5");
const draggable6 = document.querySelector(".draggable6");
const dropzone6 = document.querySelector(".dropzone6");
const draggable7 = document.querySelector(".draggable7");
const dropzone7 = document.querySelector(".dropzonebb7");

function showModal() {
  document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function showGifModal() {
  document.getElementById("myGifModal").style.display = "flex";
}

function hideGifModal() {
  document.getElementById("myGifModal").style.display = "none";
}

function showEndModal() {
  document.getElementById("end").style.display = "flex";
}

////////////////////////////////////////////////////////////////////

// Drag start event
draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone.innerHTML = ""; // Clear previous content
  dropzone.appendChild(img); // Append the new image to the dropzone
});

//////////////////////////////////////////////////////////////////////

// Drag start event
draggable2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone2.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone2.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone2.innerHTML = ""; // Clear previous content
  dropzone2.appendChild(img); // Append the new image to the dropzone
});

///////////////////////////////////////////////////////////////////

// Drag start event
draggable3.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone3.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone3.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone3.innerHTML = ""; // Clear previous content
  dropzone3.appendChild(img); // Append the new image to the dropzone
});

////////////////////////////////////////////////////////////////////////

// Drag start event
draggable4.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone4.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone4.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone4.innerHTML = ""; // Clear previous content
  dropzone4.appendChild(img); // Append the new image to the dropzone
});

///////////////////////////////////////////////////////////////////

// Drag start event
draggable5.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone5.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone5.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone5.innerHTML = ""; // Clear previous content
  dropzone5.appendChild(img); // Append the new image to the dropzone
});

///////////////////////////////////////////////////////////////////////

// Drag start event
draggable6.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone6.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone6.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone6.innerHTML = ""; // Clear previous content
  dropzone6.appendChild(img); // Append the new image to the dropzone
});

///////////////////////////////////////////////////////////////////////

// Drag start event
draggable7.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "imgs/g1.png");
});

// Drag over event
dropzone7.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
});

// Drop event
dropzone7.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/uri-list");

  // Create an img element and set its source to the dropped image URL
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Dropped image";
  img.style.maxWidth = "100%"; // Optional: limit image size
  dropzone7.innerHTML = ""; // Clear previous content
  dropzone7.appendChild(img); // Append the new image to the dropzone
});

/////////////////////////////////////////////////////////////////////////

function jackpot() {
  const boxes = [
    { id: "b1", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g1.png"},
    { id: "b2", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g14.png" },
    { id: "b3", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g6.png" },
    { id: "b4", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g11.png" },
    { id: "b5", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g13.png" },
    { id: "b6", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g3.png" },
  ];

  let allCorrect = true;

  // Loop through all boxes and check if they have the correct image
  boxes.forEach((box) => {
    const boxElement = document.getElementById(box.id);
    const imgSrc = boxElement.querySelector("img").src;

    // If the image is correct, add the "green" class, else add "red"
    if (imgSrc === box.correctSrc) {
      boxElement.classList.remove("blue2", "red");
      boxElement.classList.add("green");
    } else {
      boxElement.classList.remove("blue2", "green");
      boxElement.classList.add("red");
      allCorrect = false;
    }
  });

  // Log to confirm the status of `allCorrect`
  console.log("All boxes correct:", allCorrect);

  // If all boxes are correct, unhide the div
  if (allCorrect) {
    console.log("Unhiding div");
    document.getElementById("h").classList.remove("none");
    document.getElementById("hg").classList.remove("none");
    document.getElementById("c").classList.add("none");
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////

function changeOpen() {
  window.location.href = "1.html";
}

function changeOpen1() {
  window.location.href = "2.html";
}
function changeOpenEnd() {
  window.location.href = "https://rnf64n.csb.app/";
}

//////////////////////////////////////////////////////////////////////

const backgroundMusic = new Audio("audio/audio.mp3");

backgroundMusic.loop = true;

const playbackState = getCookie("musicPlaybackState");

if (playbackState === "playing") {
  const currentTime = parseFloat(getCookie("musicCurrentTime"));
  backgroundMusic.currentTime = currentTime;
  backgroundMusic.play();
} else {
  backgroundMusic.play();
}

window.addEventListener("beforeunload", () => {
  setCookie(
    "musicPlaybackState",
    backgroundMusic.paused ? "paused" : "playing"
  );
  setCookie("musicCurrentTime", backgroundMusic.currentTime);
});

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : null;
}

//////////////////////////////////////////////////////////////////////////
function jp() {
  const boxes = [
    { id: "b7", correctSrc: "https://isabela-222.github.io/WINTER/imgs/g7.png" },
  ];

  let allCorrect = true;

  // Loop through all boxes and check if they have the correct image
  boxes.forEach((box) => {
    const boxElement = document.getElementById(box.id);
    const imgSrc = boxElement.querySelector("img").src;

    // If the image is correct, add the "green" class, else add "red"
    if (imgSrc === box.correctSrc) {
      boxElement.classList.remove("blue2", "red");
      boxElement.classList.add("green");
    } else {
      boxElement.classList.remove("blue2", "green");
      boxElement.classList.add("red");
      allCorrect = false;
    }
  });

  // Log to confirm the status of `allCorrect`
  console.log("All boxes correct:", allCorrect);

  // If all boxes are correct, unhide the div
  if (allCorrect) {
    document.getElementById("hg").classList.add("none");

    changeBack();
  }
}

////////////////////////////////////////////////////////////
function changeBack() {
  console.log("death...");
  document.getElementById("h").src = "move/m1.png";
  setTimeout(function () {
    document.getElementById("h").src = "move/m2.png";
    document.getElementById("seb").classList.remove("none");
  }, 600);
  setTimeout(function () {
    document.getElementById("h").src = "move/m3.png";
  }, 700);
  setTimeout(function () {
    document.getElementById("h").src = "move/m4.png";
  }, 800);
  setTimeout(function () {
    document.getElementById("h").src = "move/m5.png";
  }, 900);
  setTimeout(function () {
    document.getElementById("h").src = "move/m6.png";
  }, 1000);
  setTimeout(function () {
    document.getElementById("h").src = "move/m7.png";
  }, 1100);
  setTimeout(function () {
    document.getElementById("h").src = "move/m9.png";
  }, 1200);
  setTimeout(function () {
    document.getElementById("h").src = "move/m10.png";
  }, 1300);
  setTimeout(function () {
    document.getElementById("h").src = "move/m11.png";
  }, 1400);
  setTimeout(function () {
    document.getElementById("h").src = "move/m12.png";
  }, 1500);
  setTimeout(function () {
    document.getElementById("h").src = "move/m13.png";
  }, 1600);
  setTimeout(function () {
    document.getElementById("h").src = "move/m14.png";
  }, 1700);
  setTimeout(function () {
    document.getElementById("h").src = "move/m15.png";
  }, 1800);
  setTimeout(function () {
    document.getElementById("h").src = "move/m16.png";
  }, 1900);
  setTimeout(function () {
    document.getElementById("h").src = "move/m17.png";
  }, 2000);
  setTimeout(function () {
    document.getElementById("h").src = "move/m18.png";
  }, 2100);
  setTimeout(function () {
    document.getElementById("h").src = "move/m19.png";
  }, 2200);
  setTimeout(function () {
    document.getElementById("h").src = "move/m20.png";
  }, 2300);
  setTimeout(function () {
    document.getElementById("h").src = "move/m21.png";
  }, 2400);
  setTimeout(function () {
    document.getElementById("h").src = "move/m22.png";
  }, 2500);
  setTimeout(function () {
    document.getElementById("h").src = "move/m23.png";
  }, 2600);
  setTimeout(function () {
    document.getElementById("n").classList.remove("none");
  }, 2700);
}

///////////////////////////////////////////////////////////////////////////
