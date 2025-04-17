export function random(len: number) {
  let options = "waeirkxnfocxuvjakfmnaosicuj3549651lkweljfasfnkal564sujea";
  let length = options.length;
  let ans = "";
  for (let i = 0; i < len; i++) {
    ans += options.charAt(Math.floor(Math.random() * length));
  }
  return ans;
}
