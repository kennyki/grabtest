var max = 1000000000;

function solution(A, currentCount) {
  if (!currentCount) {
    currentCount = 0;
  }

  var source = A.shift();

  var hasHitMax = A.some(function(target) {
    if (source === target) {
      currentCount++;
    }

    if (currentCount >= max) {
      return true;
    }
  });

  if (hasHitMax) {
    return max;
  }

  if (A.length > 1) {
    return solution(A, currentCount);
  }

  return currentCount;
}

console.log(solution([3, 5, 6, 3, 3, 5, 6]));