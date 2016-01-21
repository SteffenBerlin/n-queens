/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //create resultskeeper = [];
  //create empty board var board = Board(n)
    //create recursive routine passing in row and board
      //if row is n 
        // push board onto resultskeeper
      //go over row
        //place rook at current palce by toggle
        //if no conflict using has no conflicts
          // call recursive routine on the next row
        //toggle current back to 0
  //call recursive function
  //assign one solution to solution
  if(n === 1){
    return [[1]];
  }
  else if(n===7){
    return "we are at 7";
  }
  var solution;
  var resultskeeper = [];
  var board = new Board({n:n});
  console.log("this is our board", JSON.stringify(board.rows()));
  // console.log('this is our board',board);

  var recurse = function(board, currRow) {
    console.log("this is our board in recurse", JSON.stringify(board.rows()));
    console.log("this is our current row", currRow);
    if(currRow === n){
      // debugger;
      // var copy = JSON.parse(JSON.stringify(board));
      // console.log("this is clone", JSON.stringify(copy));
      // console.log('this is clone',copy);
      resultskeeper.push(JSON.parse(JSON.stringify(board.rows())));
    }
    else {
      console.log("this is the length", board.get(currRow).length);
      for(var i = 0; i < board.get(currRow).length; i++){
        board.togglePiece(currRow, i);
        console.log("this is our board in after toggle1", JSON.stringify(board.rows()));
        if(board.hasAnyColConflicts() === false && board.hasAnyRowConflicts() === false){
          console.log("this is our board before recursion", JSON.stringify(board.rows()));
          recurse(board, currRow+1);
        }
        board.togglePiece(currRow, i);
      }
    }
  };
  recurse(board, 0);
  console.log('this is our resultskeeper', resultskeeper);
  solution = resultskeeper[0];
  console.log("this is our resultskeeper", resultskeeper);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
