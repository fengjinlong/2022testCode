function arraytotree(arr) {
  const result = [];
  const treeMap = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    treeMap[item.id] = {
      ...item,
      children: [],
    };
  }
  for (const item of arr) {
    let id = item.id;
    let pid = item.pid;

    const treeItem = treeMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!treeMap[pid]) {
        treeMap[pid] = {
          children: [],
        };
      }
      treeMap[pid][children].push(treeItem);
    }
  }
  console.log("re", result);
}
arraytotree([
  { id: 1, pid: 0, name: 0 },
  { id: 2, pid: 1, name: 1 },
  { id: 3, pid: 1, name: 2 },
  { id: 4, pid: 3, name: 3 },
  { id: 5, pid: 4, name: 4 },
]);
