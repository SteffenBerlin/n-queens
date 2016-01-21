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
  
  var solution;
  var resultskeeper = [];
  var board = new Board({n:n});

  var recurse = function(board, currRow) {
    if(currRow === n){
      resultskeeper.push(JSON.parse(JSON.stringify(board.rows())));
    }
    else {
      for(var i = 0; i < board.get(currRow).length; i++){
        board.togglePiece(currRow, i);
        if(board.hasAnyColConflicts() === false && board.hasAnyRowConflicts() === false){
          recurse(board, currRow+1);
        }
        board.togglePiece(currRow, i);
      }
    }
  };
  recurse(board, 0);
  solution = resultskeeper[0];
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount;
  var resultskeeper = [];
  var board = new Board({n:n});

  var recurse = function(board, currRow) {
    if(currRow === n){
      resultskeeper.push(JSON.parse(JSON.stringify(board.rows())));
    }
    else {
      for(var i = 0; i < board.get(currRow).length; i++){
        board.togglePiece(currRow, i);
        if(board.hasAnyColConflicts() === false && board.hasAnyRowConflicts() === false){
          recurse(board, currRow+1);
        }
        board.togglePiece(currRow, i);
      }
    }
  };
  recurse(board, 0);
  solutionCount = resultskeeper.length;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var resultskeeper = [];
  var board = new Board({n:n});
  var recurse = function(board, currRow) {
    if(currRow === n){
      resultskeeper.push(JSON.parse(JSON.stringify(board.rows())));
    }
    else {
      for(var i = 0; i < board.get(currRow).length; i++){
        board.togglePiece(currRow, i);
        if(board.hasAnyColConflicts() === false && board.hasAnyRowConflicts() === false && board.hasAnyMajorDiagonalConflicts() === false && board.hasAnyMinorDiagonalConflicts() === false){
          recurse(board, currRow+1);
        }
        board.togglePiece(currRow, i);
      }
    }
  };
  recurse(board, 0);
  solution = resultskeeper[0];
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  if(resultskeeper.length === 0){
    var noSolutionBoard = new Board({n: n});
    return noSolutionBoard.rows();
  } else {
    return solution;  
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution;
  var resultskeeper = [];
  var board = new Board({n:n});
  var recurse = function(board, currRow) {
    if(currRow === n){
      resultskeeper.push(JSON.parse(JSON.stringify(board.rows())));
    }
    else {
      for(var i = 0; i < board.get(currRow).length; i++){
        board.togglePiece(currRow, i);
        if(board.hasAnyColConflicts() === false && board.hasAnyRowConflicts() === false && board.hasAnyMajorDiagonalConflicts() === false && board.hasAnyMinorDiagonalConflicts() === false){
          recurse(board, currRow+1);
        }
        board.togglePiece(currRow, i);
      }
    }
  };
  recurse(board, 0);
  console.log('Number of solutions for ' + n + ' queens:', resultskeeper.length);
  return resultskeeper.length;
};
