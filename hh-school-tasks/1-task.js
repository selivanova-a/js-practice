/*
Ввод: 2 4 3 2 1 4 1
Вывод: 16
*/

const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.on('line', (line) => {
  let result = 1;
  let nums = line.split(' ').map((num) => Number(num))

  let left = 0;
  let right = nums.length-1;
  let maxArea = 0;

  while (left < right) {
    let width =  Math.min(nums[left], nums[right]);
    let height = right - left;
    const area = width * height;
    maxArea = Math.max(maxArea, area);
    console.log(left, right, maxArea)

    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }

  result = maxArea;
  console.log(String(result));
  readline.close();
}).on('close', () => process.exit(0));