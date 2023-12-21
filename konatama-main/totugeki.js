//変数宣言
var bscene = 0;
var sscene = 0;
var gold   = 0;
var sozai  = 0;
var lvl    = 0;
var carx   = 0;
var carxp  = 0;
var bgX = 0;
var coin = 0;
var sec = 1;
var time = 0;
//960,850
//開始時
function setup() {
  canvasSize(1920, 1080);
  lineW(100);
  loadImg(0, "image/title_dot1.jpg");
  loadImg(1, "image/New Piskel (1) (1).png");
  loadImg(2, "image/grassland-dot3.jpg");
  loadImg(3, "image/square-4-removebg-preview.png");
  loadImg(4, "image/coin01_gold01_1.png");
  loadImg(5,"image/Plains-forest2.jpg");
  loadImg(6,"image/vss.png")
  loadSound(0, "");
  setFPS(60);
  getDate()
}
//生麦
//毎FPS
function mainloop() {
  if(bscene == 0) {
    drawImg(0, 0, 0);
    setAlp(15);
    fRect(0,0,1920,1080,"white");
    setAlp(100);
    fRect(460,800,1000,150,"lightskyblue");
    setAlp(100);
    drawImgS(1,460,800,1000,150);
    if(tapC == 1 && tapX >= 460 && tapX <= 1460 && tapY >= 800 && tapY <= 950 ){
      /*     console.log("TAP_C:"+tapC);
          console.log("TAP_X:"+tapX);
          console.log("TAP_Y:"+tapY); */
          
          tapC = 0;
          bscene = 1;
          
        }
  }
//    if(inkey == 32) {
//      bscene = 1;
//    }


  else if(bscene == 1) {
    //console.log("BSCENE: "+bscene);
    setAlp(100);
    //ループ画像
    drawBG(0.5);
    //drawImg(3,1360,1);
    setAlp(50);
    fRect(1360,40,500,100,"black");
    setAlp(100);
    fText(coin, 1500, 90, 90, "white");
    drawImg(4,1200,-60);
    setAlp(50);
    fRect(1200,800,650,230,"white"); // 突撃ボタン表示
    setAlp(100);
    fText("突撃!", 1515, 900, 200, "cyan");
//    tapC == 0;
    //sCir(1700,900,150,"black");

    // debug
    /* if(tapC == 1) {
      console.log("TAP_C:"+tapC);
      console.log("TAP_X:"+tapX);
      console.log("TAP_Y:"+tapY);
      if(tapC == 1) {
        console.log("tapされた");
        if(tapX >= 1200 && tapX <= 1850) {
          console.log("TAP_X が達成");
          console.log("TAP_C:"+tapC);
          console.log("TAP_X:"+tapX);
          console.log("TAP_Y:"+tapY);
        }
        if(tapY >= 800 && tapY <= 1030) {
          console.log("TAP_Y が達成");
          console.log("TAP_C:"+tapC);
          console.log("TAP_X:"+tapX);
          console.log("TAP_Y:"+tapY);
        }
      } else {
        console.log("条件未達成");
        console.log("TAP_C:"+tapC);
        console.log("TAP_X:"+tapX);
        console.log("TAP_Y:"+tapY);  
      }
    } */

    if(tapC == 1 && tapX >= 1200 && tapX <= 1850 && tapY >= 800 && tapY <= 1030 ) {
        tapC = 0;
        bscene = 2;//map
      }
  }
  else if(bscene == 2) {//map画面
    drawBG2(1);
    setAlp(50);
    fRect(0,850,600,105,"white");
    fRect(600,455,105,500,"white");
    fRect(705,455,400,105,"white");
    fRect(1105,455,105,350,"white");
    fRect(1210,700,400,105,"white");
    setAlp(100);
    sCir(250,902,3,"#00ccff");
    setAlp(15);
    sCir(650,902,3,"blue");
    sCir(655,510,3,"blue");
    sCir(1155,510,3,"blue");
    sCir(1160,750,3,"blue");
    setAlp(100);
    sCir(1555,752,3,"#ffff00");
    fText("1", 250, 902, 100, "black");//1
    fText("2", 650, 902, 100, "black");//2
    fText("3", 655, 510, 100, "black");//3
    fText("4", 1155, 510, 100, "black");//4
    fText("5", 1160, 750, 100, "black");//5
    fText("6", 1555, 752, 100, "black");//6
    fRect(197,852,103,103,"black");
    fRect(600,852,103,103,"black");
    //1st
    if(tapC == 1 && tapX >= 197 && tapX <=300 && tapY >= 852 && tapY <= 955 ) {
      tapC = 0;
      bscene = 3;
    }
    //2st
    if(tapC == 1 && tapX >= 600 && tapX <= 700 && tapY >= 852 && tapY <= 955 ) {
      tapC = 0;
      bscene = 4;
    }
    //3st
    if(tapC == 1 && tapX >= 600 && tapX <= 700 && tapY >= 460 && tapY <= 563 ) {
      tapC =0;
      bscene =5;
    }
    //4st
    if(tapC == 1 && tapX >= 1100 && tapX <= 1203 && tapY >= 460 && tapY <= 563 ) {
      tapC = 0;
      bscene = 6;
    }
    //5st
    if(tapC == 1 && tapX >= 1100 && tapX <= 1203 && tapY >= 700 && tapY <= 800 ) {
      tapC = 0;
      bscene = 7;
    }
    //6st
    if(tapC == 1 && tapX >= 1500 && tapX <= 1600 && tapY >= 700 && tapY <= 800 ) {
      tapC = 0;
      bscene = 7;
    }

  }
  else if(bscene == 3) {//1stvs
    vsscene();
  }

  else if(bscene == 4) {//2stvs
    
  }

  else if(bscene == 5) {//3stvs
    
  }
  
  else if(bscene == 6) {//4stvs
    
  }

  else if(bscene == 7) {//5stvs
    
  }

  else if(bscene == 8) {//6st,gollvs
    
  }
  else if(bscene == 9) {//tatakai
    timer_modki();
    
    
  }
  else if(bscene == 10) {//kekka
    fRect(0,0,1920,1080,"red");
  }
}
 //ループ画像本体
function drawBG(spd) {
    bgX = (bgX + spd)%1920;
    drawImg(2, -bgX, 0);
    drawImg(2, 1920-bgX, 0);
}
function drawBG2(spd) {
    bgX = (bgX + spd)%1920;
    drawImg(5, -bgX, 0);
    drawImg(5, 1920-bgX, 0);
}
//vsシーン
function vsscene() {
    setAlp(10);
    fRect(0,0,1920,1080,"#14ff89");
    //fRect(0,0,1920,1080,"red");
    setAlp(100);
    drawImgS(6,489,96,942,888);
    if(tapC == 1 && tapX >= 489 && tapX <= 1431 && tapY >=96 && tapY <= 984 ) {
      bscene = 9;
    }
}
function vsvs() {

}
function hennsei() {

}
var timehyouji = 1;
  var timehyouji = time.toFixed();
function timer_modki() {
  time =  (time + 0.0166666666);
  timehyouji = time.toFixed();
  fText(60 - timehyouji,960,100,100,"white");
  if(time >= 10) {
    sleep(3000);
    bscene = 10;
  }
}

// ビジーwait
function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる
  while (new Date() - startMsec < waitMsec);
}
