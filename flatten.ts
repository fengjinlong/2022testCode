function flatten(obj) {
  if (!isObj(obj)) {
    return;
  }
  const res = {};
  // obj
  // const dfs = (cur, p) => {
  //   if (isObj(cur)) {
  //     if (Array.isArray(cur)) {
  //       // arr
  //     } else {
  //      // obj
  //      for (const key in cur) {
  //         const el = cur[key];
  //         dfs(el, `${p}${p ? "." : ""}${key}`)
  //      }
  //     }
  //   } else {
  //     res[p] = cur;
  //   }
  // };c
  const dfs = (key, val) => {
    if (isObj(val)) {
      if (Array.isArray(val)) {
        val.forEach((item, index) => {
          dfs(`${key}[${index}]`, item);
        });
      } else {
        for (const k in val) {
          const c = val[k];
          dfs(`${key}${key ? "." : ""}${k}`, c);
        }
      }
    } else {
      res[key] = val;
    }
  };
  dfs("", obj);
  return res;
}
export { flatten };
function isObj(obj: any) {
  return typeof obj === "object" && obj !== null;
}
