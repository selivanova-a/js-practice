//Сколько минимум шагов понадобиться, чтобы пройти массив до конца
// Если ближайшие числа не повторяются, то можно двигаться толь вперед и назад на один элемент
//Если, число на котором мы стоим повторяется в массиве, то мы перемещаемся сразу на место повтора

const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.on('line', (line) => {
  let islands = line.split(' ')
  const visited = new Set();
  let steps = 0;
  let current = 0;

  while (current < islands.length) {
    if (!visited.has(current)) {
      visited.add(current);
      if (islands[current] === islands[current + 1]) {
        current += 1;
        steps += 1;
      } else if (islands[current] === islands[current - 1]) {
        current -= 1;
        steps += 1;
      } else {
        const nextIsland = islands.indexOf(islands[current], current + 1);
        if (nextIsland !== -1) {
          steps += nextIsland - current;
          current = nextIsland;
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }

  return steps;
  readline.close();
}).on('close', () => process.exit(0));