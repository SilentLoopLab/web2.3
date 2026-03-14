function myStartsWith(src, dst) {
    if (typeof src !== "string" || typeof dst !== "string") return false;
    for (let i = 0; i < dst.length; ++i) {
        if (src[i] !== dst[i]) return false;
    }
    return true;
}
const str1 = "JavaScript";
const str2 = "Script";
console.log(myStartsWith(str1, 5));
