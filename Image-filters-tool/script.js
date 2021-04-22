
var imgOriginal = null;
var canvas = document.getElementById("can");

function loadImg() {
  var imgFile = document.getElementById("fileImg");
  imgOriginal = new SimpleImage(imgFile);
  
  imgOriginal.drawTo(canvas);

}

function check() {
  if(imgOriginal == null || !imgOriginal.complete()) {
    alert("Image not loaded");
  }
  
  clearCanvas();
}

function reset() {
  imgOriginal.drawTo(canvas);
  
}

function grayscale() {
  
  var img = new SimpleImage(imgOriginal);
  for(var pix of img.values()) {
    var r = pix.getRed();
    var g = pix.getGreen();;
    var b = pix.getBlue();
    var avg = (r+g+b)/3;
    pix.setRed(avg);
    pix.setGreen(avg);
    pix.setBlue(avg);    
  }
  img.drawTo(canvas);
  
}

function negative() {
  
  var img = new SimpleImage(imgOriginal);
  for(var pix of img.values()) {
    var r = pix.getRed();
    var g = pix.getGreen();;
    var b = pix.getBlue();
    var rN = 255 - r;
    var gN = 255 - g;
    var bN = 255 - b;
    pix.setRed(rN);
    pix.setGreen(gN);
    pix.setBlue(bN);    
  }
  img.drawTo(canvas);
  
}

function green() {
  var img = new SimpleImage(imgOriginal);
  for(var pix of img.values()) {
    pix.setGreen(255);      
  }
  
  img.drawTo(canvas);
  
}

function red() {
  var img = new SimpleImage(imgOriginal);
  for(var pix of img.values()) {
    pix.setRed(255);      
  }
  
  img.drawTo(canvas);
  
}

function blue() {
  var img = new SimpleImage(imgOriginal);
  for(var pix of img.values()) {
    pix.setBlue(255);      
  }
  
  img.drawTo(canvas);
  
}


function rainbow() {
  
  var image = new SimpleImage(imgOriginal);
   for(var pixel of image.values())
    {
        var avg= (pixel.getGreen()+ pixel.getBlue()+ pixel.getRed())/3;
      
      if(avg<128)
        {
          if(pixel.getY()<=image.getHeight()/7){
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
          }
          if(pixel.getY()>image.getHeight()/7 && pixel.getY()<=image.getHeight()*2/7 ){
              pixel.setRed(2*avg);
              pixel.setGreen(0.8*avg);
              pixel.setBlue(0);
          }
          if(pixel.getY()>image.getHeight()*2/7 && pixel.getY()<= image.getHeight()*3/7)
          {pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);}
          
          if(pixel.getY()>image.getHeight()*3/7 && pixel.getY()<= image.getHeight()*4/7)
          {pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);}
          
          if(pixel.getY()>image.getHeight()*4/7 && pixel.getY()<= image.getHeight()*5/7)
          {pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
              
          }
          if(pixel.getY()>image.getHeight()*5/7 && pixel.getY()<= image.getHeight()*6/7)
          {pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
          }
          if(pixel.getY()> image.getHeight()*6/7)
          {
              pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
          }
          
        }
      else
        {
                 if(pixel.getY()<=image.getHeight()/7){
                   pixel.setRed(255);
                   pixel.setGreen(2*avg-255);
                   pixel.setBlue(2*avg-255);
                 }
                   if(pixel.getY()>image.getHeight()/7 && pixel.getY()<=image.getHeight()*2/7 ){
              pixel.setRed(255);
              pixel.setGreen(1.2*avg-51);
              pixel.setBlue(2*avg-255);
          }
          if(pixel.getY()>image.getHeight()*2/7 && pixel.getY()<= image.getHeight()*3/7)
          {pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);}
          
          if(pixel.getY()>image.getHeight()*3/7 && pixel.getY()<= image.getHeight()*4/7)
          {pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);}
          
          if(pixel.getY()>image.getHeight()*4/7 && pixel.getY()<= image.getHeight()*5/7)
          {pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
              
          }
          if(pixel.getY()>image.getHeight()*5/7 && pixel.getY()<= image.getHeight()*6/7)
          {pixel.setRed(1.2*avg-51);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
          }
           if(pixel.getY()> image.getHeight()*6/7)
          {
              pixel.setRed(0.4*avg+ 153);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(0.4*avg+153);
          }
                 
                 
        }
    }

  image.drawTo(canvas); 
    
}

