var backgroundIMG, backgroundz;
var question1,question2,question3,question4,question5,question6,question7,question8,question9,question10;
var answer11, answer21, answer31, answer41;
var answer12, answer22, answer32, answer42;
var answer13, answer23, answer33, answer43;
var answer14, answer24, answer34, answer44;
var answer15, answer25, answer35, answer45;
var answer16, answer26, answer36, answer46;
var answer17, answer27, answer37, answer47;
var answer18, answer28, answer38, answer48;
var answer19, answer29, answer39, answer49;
var answer10, answer20, answer30, answer40;
var score = 0;

function preload(){
  backgroundIMG = loadImage("background(2).jpg");

  answer11IMG = loadImage("button1Q1.jpg");
  answer21IMG = loadImage("button2Q1.jpg");
  answer31IMG = loadImage("button3Q1.jpg");
  answer41IMG = loadImage("button4Q1.jpg");

  answer12IMG = loadImage("button1Q2.jpg");
  answer22IMG = loadImage("button2Q2.jpg");
  answer32IMG = loadImage("button3Q2.jpg");
  answer42IMG = loadImage("button4Q2.jpg");

  answer13IMG = loadImage("button1Q3.jpg");
  answer23IMG = loadImage("button2Q3.jpg");
  answer33IMG = loadImage("button3Q3.jpg");
  answer43IMG = loadImage("button4Q3.jpg");

  answer14IMG = loadImage("button1Q4.jpg");
  answer24IMG = loadImage("button2Q4.jpg");
  answer34IMG = loadImage("button3Q4.jpg");
  answer44IMG = loadImage("button4Q4.jpg");

  answer15IMG = loadImage("button1Q5.jpg");
  answer25IMG = loadImage("button2Q5.jpg");
  answer35IMG = loadImage("button3Q5.jpg");
  answer45IMG = loadImage("button4Q5.jpg");

  answer16IMG = loadImage("button1Q6.jpg");
  answer26IMG = loadImage("button2Q6.jpg");
  answer36IMG = loadImage("button3Q6.jpg");
  answer46IMG = loadImage("button4Q6.jpg");

  answer17IMG = loadImage("button1Q7.jpg");
  answer27IMG = loadImage("button2Q7.jpg");
  answer37IMG = loadImage("button3Q7.jpg");
  answer47IMG = loadImage("button4Q7.jpg");

  answer18IMG = loadImage("button1Q8.jpg");
  answer28IMG = loadImage("button2Q8.jpg");
  answer38IMG = loadImage("button3Q8.jpg");
  answer48IMG = loadImage("button4Q8.jpg");

  answer19IMG = loadImage("button1Q9.jpg");
  answer29IMG = loadImage("button2Q9.jpg");
  answer39IMG = loadImage("button3Q9.jpg");
  answer49IMG = loadImage("button4Q9.jpg");

  answer10IMG = loadImage("button1Q10.jpg");
  answer20IMG = loadImage("button2Q10.jpg");
  answer30IMG = loadImage("button3Q10.jpg");
  answer40IMG = loadImage("button4Q10.jpg");
}

function setup(){
  createCanvas(1000,500);
  backgroundz = createSprite(width/2,height/2,width,height);
  backgroundz.addImage(backgroundIMG);
  backgroundz.scale = 0.3;

  question1 = createElement("h2");
  question1.html("Q1. WHICH PLANET IS THE LARGEST IN THE SOLAR SYSTEM ?");
  question1.position(width/8,height/2-200);
  question1.style('color','white');
  answer11 = createSprite(250,200,20,20);
  answer11.addImage(answer11IMG);
  answer11.scale = 0.5;
  answer21 = createSprite(750,200,20,20);
  answer21.addImage(answer21IMG);
  answer21.scale = 0.5;
  answer31 = createSprite(250,300,20,20);
  answer31.addImage(answer31IMG);
  answer31.scale = 0.5;
  answer41 = createSprite(750,300,20,20);
  answer41.addImage(answer41IMG);
  answer41.scale = 0.5;
}
function draw(){
  background("purple");
  if(answer11 != null && mousePressedOver(answer11)){
    question1.hide();
    answer11.destroy();
    answer21.destroy();
    answer31.destroy();
    answer41.destroy();
    answer11 = null;
  }
  if(answer21 != null && mousePressedOver(answer21)){
    question1.hide();
    answer11.destroy();
    answer21.destroy();
    answer31.destroy();
    answer41.destroy();
    answer21 = null;
  }
  if(answer31 != null && mousePressedOver(answer31)){
    question1.hide();
    answer11.destroy();
    answer21.destroy();
    answer31.destroy();
    answer41.destroy();
    answer31 = null;
    score = score + 1;
  }
  if(answer41 != null && mousePressedOver(answer41)){
    question1.hide();
    answer11.destroy();
    answer21.destroy();
    answer31.destroy();
    answer41.destroy();
    answer41 = null;
  }

  if(answer11 == null || answer21 == null || answer31 == null || answer41 == null){
    question2 = createElement("h2");
    question2.html("Q2. IS SUN A PLANET, STAR, OR A METEORITE ?");
    question2.position(width/8,height/2-200);
    question2.style('color','white');
    answer12 = createSprite(250,200,20,20);
    answer12.addImage(answer12IMG);
    answer12.scale = 0.5;
    answer22 = createSprite(750,200,20,20);
    answer22.addImage(answer22IMG);
    answer22.scale = 0.5;
    answer32 = createSprite(250,300,20,20);
    answer32.addImage(answer32IMG);
    answer32.scale = 0.5;
    answer42 = createSprite(750,300,20,20);
    answer42.addImage(answer42IMG);
    answer42.scale = 0.5;
    }
    if(answer12 != null && mousePressedOver(answer12)){
      question2.hide();
      answer12.destroy();
      answer22.destroy();
      answer32.destroy();
      answer42.destroy();
      answer12 = null;
    }
    if(answer22 != null && mousePressedOver(answer22)){
      question2.hide();
      answer12.destroy();
      answer22.destroy();
      answer32.destroy();
      answer42.destroy();
      answer22 = null;
    }
    if(answer32 != null && mousePressedOver(answer32)){
      question2.hide();
      answer12.destroy();
      answer22.destroy();
      answer32.destroy();
      answer42.destroy();
      answer32 = null;
    }
    if(answer42 != null && mousePressedOver(answer42)){
      question2.hide();
      answer12.destroy();
      answer22.destroy();
      answer32.destroy();
      answer42.destroy();
      answer42 = null;
      score = score + 1;
    }
    if(answer12 == null || answer22 == null || answer32 == null || answer42 == null){
    question3 = createElement("h2");
    question3.html("Q3. WHICH PLANET IS THE HOTTEST ?");
    question3.position(width/8,height/2-200);
    question3.style('color','white');
    answer13 = createSprite(250,200,20,20);
    answer13.addImage(answer13IMG);
    answer13.scale = 0.5;
    answer23 = createSprite(750,200,20,20);
    answer23.addImage(answer23IMG);
    answer23.scale = 0.5;
    answer33 = createSprite(250,300,20,20);
    answer33.addImage(answer33IMG);
    answer33.scale = 0.5;
    answer43 = createSprite(750,300,20,20);
    answer43.addImage(answer43IMG);
    answer43.scale = 0.5;
    }
    if(answer13 != null && mousePressedOver(answer13)){
      question3.hide();
      answer13.destroy();
      answer23.destroy();
      answer33.destroy();
      answer43.destroy();
      answer13 = null;
      score = score + 1;
    }
    if(answer23 != null && mousePressedOver(answer23)){
      question3.hide();
      answer13.destroy();
      answer23.destroy();
      answer33.destroy();
      answer43.destroy();
      answer23 = null;
    }
    if(answer33 != null && mousePressedOver(answer33)){
      question3.hide();
      answer13.destroy();
      answer23.destroy();
      answer33.destroy();
      answer43.destroy();
      answer33 = null;
    }
    if(answer43 != null && mousePressedOver(answer43)){
      question3.hide();
      answer13.destroy();
      answer23.destroy();
      answer33.destroy();
      answer43.destroy();
      answer43 = null;
    }
    if(answer13 == null || answer23 == null || answer33 == null || answer43 == null){
      question4 = createElement("h2");
      question4.html("Q4. WHICH LAYER IN THE ATMOSPHERE CONTAINS THE MOST AMOUNT OF ATMOSPHERIC OZONE (CONCENTRATED OZONE) ?");
      question4.position(width/8,height/2-200);
      question4.style('color','white');
      answer14 = createSprite(250,200,20,20);
      answer14.addImage(answer14IMG);
      answer14.scale = 0.5;
      answer24 = createSprite(750,200,20,20);
      answer24.addImage(answer24IMG);
      answer24.scale = 0.5;
      answer34 = createSprite(250,300,20,20);
      answer34.addImage(answer34IMG);
      answer34.scale = 0.5;
      answer44 = createSprite(750,300,20,20);
      answer44.addImage(answer44IMG);
      answer44.scale = 0.5;
    }
    if(answer14 != null && mousePressedOver(answer14)){
      question4.hide();
      answer14.destroy();
      answer24.destroy();
      answer34.destroy();
      answer44.destroy();
      answer14 = null;
    }
    if(answer24 != null && mousePressedOver(answer24)){
      question4.hide();
      answer14.destroy();
      answer24.destroy();
      answer34.destroy();
      answer44.destroy();
      answer24 = null;
      score = score + 1;

    }
    if(answer34 != null && mousePressedOver(answer34)){
      question4.hide();
      answer14.destroy();
      answer24.destroy();
      answer34.destroy();
      answer44.destroy();
      answer34 = null;
    }
    if(answer44 != null && mousePressedOver(answer44)){
      question4.hide();
      answer14.destroy();
      answer24.destroy();
      answer34.destroy();
      answer44.destroy();
      answer44 = null;
    }
    if(answer14 == null || answer24 == null || answer34 == null || answer44 == null){
       question5 = createElement("h2");
       question5.html("Q5. FIRST HUMAN TO GO INTO SPACE ?");
  question5.position(width/8,height/2-200);
  question5.style('color','white');
  answer15 = createSprite(250,200,20,20);
  answer15.addImage(answer15IMG);
  answer15.scale = 0.5;
  answer25 = createSprite(750,200,20,20);
  answer25.addImage(answer25IMG);
  answer25.scale = 0.5;
  answer35 = createSprite(250,300,20,20);
  answer35.addImage(answer35IMG);
  answer35.scale = 0.5;
  answer45 = createSprite(750,300,20,20);
  answer45.addImage(answer45IMG);
  answer45.scale = 0.5;
  }
  if(answer15 != null && mousePressedOver(answer15)){
    question5.hide();
    answer15.destroy();
    answer25.destroy();
    answer35.destroy();
    answer45.destroy();
    answer15 = null;
  }
  if(answer25 != null && mousePressedOver(answer25)){
    question5.hide();
    answer15.destroy();
    answer25.destroy();
    answer35.destroy();
    answer45.destroy();
    answer25 = null;
  }
  if(answer35 != null && mousePressedOver(answer35)){
    question5.hide();
    answer15.destroy();
    answer25.destroy();
    answer35.destroy();
    answer45.destroy();
    answer35 = null;
    score = score + 1;
  }
  if(answer45 != null && mousePressedOver(answer45)){
    question5.hide();
    answer15.destroy();
    answer25.destroy();
    answer35.destroy();
    answer45.destroy();
    answer45 = null;
  }
  if(answer15 == null || answer25 == null || answer35 == null || answer45 == null){
     question6 = createElement("h2");
  question6.html("Q6. HOW MANY MAIN TYPES OF GALAXIES ARE THERE ? WHAT TYPE OF GALAXY IS THE MILKY WAY ?");
  question6.position(width/8,height/2-200);
  question6.style('color','white');
  answer16 = createSprite(250,200,20,20);
  answer16.addImage(answer16IMG);
  answer16.scale = 0.5;
  answer26 = createSprite(750,200,20,20);
  answer26.addImage(answer26IMG);
  answer26.scale = 0.5;
  answer36 = createSprite(250,300,20,20);
  answer36.addImage(answer36IMG);
  answer36.scale = 0.5;
  answer46 = createSprite(750,300,20,20);
  answer46.addImage(answer46IMG);
  answer46.scale = 0.5;
  }
  if(answer16 != null && mousePressedOver(answer16)){
    question6.hide();
    answer16.destroy();
    answer26.destroy();
    answer36.destroy();
    answer46.destroy();
    answer16 = null;
    score = score + 1;
  }
  if(answer26 != null && mousePressedOver(answer26)){
    question6.hide();
    answer16.destroy();
    answer26.destroy();
    answer36.destroy();
    answer46.destroy();
    answer26 = null;
  }
  if(answer36 != null && mousePressedOver(answer36)){
    question6.hide();
    answer16.destroy();
    answer26.destroy();
    answer36.destroy();
    answer46.destroy();
    answer36 = null;
  }
  if(answer46 != null && mousePressedOver(answer46)){
    question6.hide();
    answer16.destroy();
    answer26.destroy();
    answer36.destroy();
    answer46.destroy();
    answer46 = null;
  }
  if(answer16 == null || answer26 == null || answer36 == null || answer46 == null){
     question7 = createElement("h2");
  question7.html("Q7. SCIENTISTS HAVE PROPOSED A MODEL WHICH STATES THAT THE UNIVERSE WAS CREATED 13.8 BILLIONS YEARS AGO, DUE TO STATE OF HIGH TEMPERATURE AND DENSITY. NAME THE MODEL.");
  question7.position(width/8,height/2-200);
  question7.style('color','white');
  answer17 = createSprite(250,200,20,20);
  answer17.addImage(answer17IMG);
  answer17.scale = 0.5;
  answer27 = createSprite(750,200,20,20);
  answer27.addImage(answer27IMG);
  answer27.scale = 0.5;
  answer37 = createSprite(250,300,20,20);
  answer37.addImage(answer37IMG);
  answer37.scale = 0.5;
  answer47 = createSprite(750,300,20,20);
  answer47.addImage(answer47IMG);
  answer47.scale = 0.5;
  }
  if(answer17 != null && mousePressedOver(answer17)){
    question7.hide();
    answer17.destroy();
    answer27.destroy();
    answer37.destroy();
    answer47.destroy();
    answer17 = null;
  }
  if(answer27 != null && mousePressedOver(answer27)){
    question7.hide();
    answer17.destroy();
    answer27.destroy();
    answer37.destroy();
    answer47.destroy();
    answer27 = null;
  }
  if(answer37 != null && mousePressedOver(answer37)){
    question7.hide();
    answer17.destroy();
    answer27.destroy();
    answer37.destroy();
    answer47.destroy();
    answer37 = null;
  }
  if(answer47 != null && mousePressedOver(answer47)){
    question7.hide();
    answer17.destroy();
    answer27.destroy();
    answer37.destroy();
    answer47.destroy();
    answer47 = null;
    score = score + 1;
  }
  if(answer17 == null || answer27 == null || answer37 == null || answer47 == null){    
  question8 = createElement("h2");
  question8.html("Q8. WHAT WAS THE NAME OF THE FIRST HUMAN SPACEFLIGHT ?");
  question8.position(width/8,height/2-200);
  question8.style('color','white');
  answer18 = createSprite(250,200,20,20);
  answer18.addImage(answer18IMG);
  answer18.scale = 0.5;
  answer28 = createSprite(750,200,20,20);
  answer28.addImage(answer28IMG);
  answer28.scale = 0.5;
  answer38 = createSprite(250,300,20,20);
  answer38.addImage(answer38IMG);
  answer38.scale = 0.5;
  answer48 = createSprite(750,300,20,20);
  answer48.addImage(answer48IMG);
  answer48.scale = 0.5;
  }
  if(answer18 != null && mousePressedOver(answer18)){
    question8.hide();
    answer18.destroy();
    answer28.destroy();
    answer38.destroy();
    answer48.destroy();
    answer18 = null;
  }
  if(answer28 != null && mousePressedOver(answer28)){
    question8.hide();
    answer18.destroy();
    answer28.destroy();
    answer38.destroy();
    answer48.destroy();
    answer28 = null;
    score = score + 1;
  }
  if(answer38 != null && mousePressedOver(answer38)){
    question8.hide();
    answer18.destroy();
    answer28.destroy();
    answer38.destroy();
    answer48.destroy();
    answer38 = null;
  }
  if(answer48 != null && mousePressedOver(answer48)){
    question8.hide();
    answer18.destroy();
    answer28.destroy();
    answer38.destroy();
    answer48.destroy();
    answer48 = null;
  }
  if(answer18 == null || answer28 == null || answer38 == null || answer48 == null){
  question9 = createElement("h2");
  question9.html("Q9. HOW IS A BLACK HOLE FORMED ?");
  question9.position(width/8,height/2-200);
  question9.style('color','white');
  answer19 = createSprite(250,200,20,20);
  answer19.addImage(answer19IMG);
  answer19.scale = 0.5;
  answer29 = createSprite(750,200,20,20);
  answer29.addImage(answer29IMG);
  answer29.scale = 0.5;
  answer39 = createSprite(250,300,20,20);
  answer39.addImage(answer39IMG);
  answer39.scale = 0.5;
  answer49 = createSprite(750,300,20,20);
  answer49.addImage(answer49IMG);
  answer49.scale = 0.5;
  }
  if(answer19 != null && mousePressedOver(answer19)){
    question9.hide();
    answer19.destroy();
    answer29.destroy();
    answer39.destroy();
    answer49.destroy();
    answer19 = null;
    score = score + 1;
  }
  if(answer29 != null && mousePressedOver(answer29)){
    question9.hide();
    answer19.destroy();
    answer29.destroy();
    answer39.destroy();
    answer49.destroy();
    answer29 = null;
  }
  if(answer39 != null && mousePressedOver(answer39)){
    question9.hide();
    answer19.destroy();
    answer29.destroy();
    answer39.destroy();
    answer49.destroy();
    answer39 = null;
  }
  if(answer49 != null && mousePressedOver(answer49)){
    question9.hide();
    answer19.destroy();
    answer29.destroy();
    answer39.destroy();
    answer49.destroy();
    answer49 = null;
  }
  if(answer19 == null || answer29 == null || answer39 == null || answer49 == null){
  question10 = createElement("h2");
  question10.html("Q10. HOW OLD IS OUR UNIVERSE ?");
  question10.position(width/8,height/2-200);
  question10.style('color','white');
  answer10 = createSprite(250,200,20,20);
  answer10.addImage(answer10IMG);
  answer10.scale = 0.5;
  answer20 = createSprite(750,200,20,20);
  answer20.addImage(answer20IMG);
  answer20.scale = 0.5;
  answer30 = createSprite(250,300,20,20);
  answer30.addImage(answer30IMG);
  answer30.scale = 0.5;
  answer40 = createSprite(750,300,20,20);
  answer40.addImage(answer40IMG);
  answer40.scale = 0.5;
  }
  if(answer10 != null && mousePressedOver(answer10)){
    question10.hide();
    answer10.destroy();
    answer20.destroy();
    answer30.destroy();
    answer40.destroy();
    answer10 = null;
  }
  if(answer20 != null && mousePressedOver(answer20)){
    question10.hide();
    answer10.destroy();
    answer20.destroy();
    answer30.destroy();
    answer40.destroy();
    answer20 = null;
  }
  if(answer30 != null && mousePressedOver(answer30)){
    question10.hide();
    answer10.destroy();
    answer20.destroy();
    answer30.destroy();
    answer40.destroy();
    answer30 = null;
  }
  if(answer40 != null && mousePressedOver(answer40)){
    question10.hide();
    answer10.destroy();
    answer20.destroy();
    answer30.destroy();
    answer40.destroy();
    answer40 = null;
    score = score + 1;
  }
  drawSprites();
  fill("white");
  text("MARKS: " + score, 700,100);
  textSize(20);
}