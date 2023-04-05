function calculate() {
  let numbers = document.getElementById("numbers").value;
  let total = document.getElementById("total").value;
  let solution = knap(numbers, total);
  alert("The solution is " + solution + "!");
}

function knap(numbersList, total){

  const numbers = numbersList.split(',').map(Number);
  let sol;
  for (let i = 1; i < numbers.length; i++) {
    let nums = combinations(numbers, i);
    for (let j = 0; j < nums.length; j++) {
      const num = nums[j];
      if (total == getTotal(num)){

        return num;
      }
    }

    
  }
  return 'no solution found!';
}

function combinations(list, n) {
  if (n === 1) return list.map(item => [item]);

  const result = [];

  list.forEach((item, index) => {
    const remainingList = list.slice(index + 1);
    const combinationsOfRemainingList = combinations(remainingList, n - 1);

    combinationsOfRemainingList.forEach(combination => {
      result.push([item].concat(combination));
    });
  });

  return result;
}

function getTotal(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

