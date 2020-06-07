var board;
var border;
window.onload = function () {
    console.log('Dokument geladen');
    (function set_canvas(){
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width  = 600;
        canvas.height = 600; 
    }());
     
    initBoard();
    create_border();
    add_line_to_board();
    show_line();
      
}

function get2DArray(cols,rown) {
   var arr = new Array(cols);
   for(var i =0; i < arr.length;i++){
      arr[i] = new Array(rown);
   }
   return arr;
}

function default_init_array(arry, defalut_value) {

   for(var x = 0; x < arry.length; x++){    
      for(var y = 0; y < arry[0].length; y++){ 
          arry[x][y] =defalut_value;    
      }    
  }
  console.log(board);

  return arry;
}

function initBoard()
{
   board = get2DArray(30,30);
   default_init_array(board, 0);
   (function () {

      for(i = 0; i < board.length; i++)
         for(j = 0; j < board[0].length; j++)
            drawOnePoint(i, j, board[i][j]);   
     
      function drawOnePoint(i, j)
      {
         var canvas = document.getElementsByTagName('canvas')[0];
         ctx = canvas.getContext('2d');
         ctx.fillRect(i*20+10,j*20+10,1,1); 
      }
   })();
}

function add_line_to_board() {
    border.forEach(Linie =>{
        console.log(Linie);
        for(var i = Linie.get_startpunkt().get_x(); i <= Linie.get_endpunkt().get_x(); i++) {
            for (var j = Linie.get_startpunkt().get_y(); j <= Linie.get_endpunkt().get_y(); j++) {
                board[j][i] = 1;
            }
        }
    });
}

function  create_border() {
    border = [];

    const line1 = new Linie(new Punkt(2, 0), new Punkt(5, 0));
    border.push(line1);
    const line2 = new Linie(new Punkt(10, 3), new Punkt(15, 3));
    border.push(line2);
    const line3 = new Linie(new Punkt(10, 3), new Punkt(10, 29));
    border.push(line3);
}

function show_line() {
   var canvas = document.getElementsByTagName('canvas')[0];
   var ctx = canvas.getContext("2d");
  
   border.forEach(linie => {
      ctx.beginPath();
      ctx.moveTo(linie.get_startpunkt().get_x() * 20 +10, linie.get_startpunkt().get_y()*20+10);
      ctx.lineTo(linie.get_endpunkt().get_x() * 20 +10, linie.get_endpunkt().get_y() * 20 +10);
      ctx.stroke();

   });
}