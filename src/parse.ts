// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false
function parse(str) {
  const result: any = [];
  let len = str.length;
  const dfs = (chars) => {
    if (chars.length < 2) return;
    let s0 = chars[0];
    let s1 = chars[1];
    if (s0 === "(" && s1 === ")") {
      result.push("(", ")");
      dfs(chars.slice(2));
    } else if (s0 === "[" && s1 === "]") {
      result.push("[", "]");
      dfs(chars.slice(2));
    } else if (s0 === "{" && s1 === "}") {
      result.push("{", "}");
      dfs(chars.slice(2));
    }
  };
  dfs(str);
  return result.length === len;
}
export { parse };
