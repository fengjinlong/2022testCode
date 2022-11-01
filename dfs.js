const islandPerimeter = (grid) => {
  let r = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return 1; // 当前正好越界，说明穿过了一个边界，周长+1
    }
    if (grid[i][j] == 0) {
      // 从土地来到了海水，说明穿过了一个边界，周长+1
      return 1;
    }
    if (grid[i][j] == 2) {
      // 之前访问过，直接返回，返回0，无周长收益
      return 0;
    }
    // 到此，当前点为1，将它改为2，代表已访问
    grid[i][j] = 2;
    // 继续往四个方向“扩散”，目标是遇到边界和海水，答案随着递归出栈向上返回，得出大的答案
    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        r += dfs(i, j); // dfs的入口
      }
    }
  }
  console.log("r", r);
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
let a = 2;
let b = a;
