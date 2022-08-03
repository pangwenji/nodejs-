const v8 = require('v8');
const heapSpace = v8.getHeapSpaceStatistics();

function display(space) { 
  console.log(`${space.space_name.padEnd(23, ' ')}`,
  `${format(space.space_size)}`,
  `${format(space.space_used_size)}`,
  `${format(space.space_available_size)}`,
  `${format(space.physical_space_size)}`);
}
function format(size) {
  return `${(size / 1024 / 1024).toFixed(2)}M`.padEnd(10, ' ');
}
for (let i = 0; i < heapSpace.length; i++) {
  const space = heapSpace[i]
  switch (space.space_name) { 
    case 'read_only_space':
      display(space)
      break;
  }
}