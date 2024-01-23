let startButton, nextButton, soundButton, leftButton, rightButton;
let isStarted = false;
let isNextPressed = false;
let img, img2, img3, img4, startImg;
let currentImage = 0;
let sound, sound2, sound3, sound4;
let zoomFactor = 1.5;
let zoomed = false;

function preload() {
  img = loadImage('artwork.jpg');
  img2 = loadImage('artwork2.jpg');
  img3 = loadImage('artwork3.jpg');
  img4 = loadImage('artwork4.jpg');
  startImg = loadImage('startImage.jpg');
  sound = loadSound('seawaves.mp3');
  sound2 = loadSound('sound2.mp3');
  sound3 = loadSound('sound3.mp3', () => { sound3.setVolume(0.2); });
  sound4 = loadSound('sound4.mp3', () => { sound4.setVolume(0.6); });
}

function setup() {
  createCanvas(960, 485);

  startButton = createButton('ΕΝΑΡΞΗ');
  startButton.position(width / 2 - startButton.width / 2, height / 2);
  startButton.style('width', '100px');
  startButton.style('height', '50px');
  startButton.style('font-size', '20px');
  startButton.mousePressed(() => {
    isStarted = true;
    startButton.hide();
    nextButton.show();
    soundButton.show();
    leftButton.show();
    rightButton.show();
  });

  nextButton = createButton('ΠΛΗΡΟΦΟΡΙΕΣ');
  nextButton.position(width / 6 - nextButton.width / 1, height - 40);
  nextButton.mousePressed(() => isNextPressed = !isNextPressed);
  nextButton.hide();

  soundButton = createButton('ΗΧΟΤΟΠΙΟ');
  soundButton.position(width - 190, height - 40);
  soundButton.style('width', '85px');
  soundButton.style('height', '25px');
  soundButton.style('font-size', '13px');
  soundButton.mousePressed(playSound);
  soundButton.hide();

  leftButton = createButton('<');
  leftButton.position(20, height / 2);
  leftButton.mousePressed(goLeft);
  leftButton.hide();

  rightButton = createButton('>');
  rightButton.position(width - 40, height / 2);
  rightButton.mousePressed(goRight);
  rightButton.hide();
}

function draw() {
  if (isStarted) {
    switch(currentImage) {
      case 0: image(img, 0, 0, width, height); break;
      case 1: image(img2, 0, 0, width, height); break;
      case 2: image(img3, 0, 0, width, height); break;
      case 3: image(img4, 0, 0, width, height); break;
    } 

    if (isNextPressed) { fill(0);
      noStroke();
      rectMode(CENTER);
      let boxWidth = 400;
      let boxHeight = 100;
      rect(width / 2, height / 1.78, boxWidth, boxHeight);

      fill(255);
      textSize(14);
      textAlign(CENTER, CENTER);
      
      if (currentImage === 0) {
        
       text("Το έργο “Βάρκες και παιδιά στην παραλία” είναι", width / 2, height / 2);
      text("ενα έργο του Κωνσταντίνου Βολανάκη, γνωστός ", width / 2, height / 1.9)
      text("και ως ο «πατέρας της ελληνικής θαλασσογραφίας.»", width / 2, height / 1.8)
      text("Το έργο είναι φτιαγμενο με λάδι σε μουσαμά»", width / 2, height / 1.7)
      text("και έχει μέγεθος 30 x 60εκ.   ", width / 2, height / 1.6)

      } else if (currentImage === 1) {
      
       text("Το έργο «Εκκλησία σε ανθισμένο αγρό στη Βαυαρία» είναι", width / 2, height / 2);
      text("ένα έργο του Γεώργιου Ιακωβίδη. Το έργο δημιουργήθηκε τη ", width / 2, height / 1.9)
      text("περίοδο 1880-1890 με λαδι σε μουσαμά", width / 2, height / 1.8)
      text("και έχει μέγεθος 19 x 32 εκ.", width / 2, height / 1.7)
      } else if (currentImage === 2) {
        
       text("Το έργο «Κοριτσάκια καθισμένα στο δρόμο» είναι", width / 2, height / 2);
      text("ένα έργο του Λύτρα Περικλή. Το έργο δημιουργήθηκε τη ", width / 2, height / 1.9)
      text("περίοδο 1929-1939 με λαδι σε μουσαμά", width / 2, height / 1.8)
      text("και έχει μέγεθος 29 x 45,9 εκ.", width / 2, height / 1.7)
      }
      if (currentImage === 3) {
        text("Το έργο «Κέρκυρα» είναι ένα έργο", width / 2, height / 2);
      text("του Βικέντιου Μποκατσιάμπη. Το έργο δημιουργήθηκε τη ", width / 2, height / 1.9)
      text("περίοδο 1901-1933 με λαδι σε μουσαμά", width / 2, height / 1.8)
      text("και έχει μέγεθος 28 x 53 εκ.", width / 2, height / 1.7)
      }
    }
  } else {
    image(startImg, 0, 0, width, height);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Εθνική Πινακοθήκη - Παράρτημα Κέρκυρας", width / 2, height / 2 - 30);
  }
}

function playSound() {
  let currentSound = getCurrentSound();
  if (currentSound.isPlaying()) {
    currentSound.stop();
  } else {
    stopAllSounds();
    currentSound.play();
  }
}

function stopAllSounds() {
  [sound, sound2, sound3, sound4].forEach(sound => {
    if (sound.isPlaying()) {
      sound.stop();
    }
  });
}

function getCurrentSound() {
  if (currentImage === 0) {
    return sound;
  } else if (currentImage === 1) {
    return sound2;
  } else if (currentImage === 2) {
    return sound3;
  } else if (currentImage === 3) {
    return sound4;
  }
}

function goLeft() {
  stopAllSounds();
  currentImage--;
  if (currentImage < 0) {
    currentImage = 3;
  }
}

function goRight() {
  stopAllSounds();
  currentImage++;
  if (currentImage > 3) {
    currentImage = 0;
  }
}
