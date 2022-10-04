function lerpColors(colors, amt) {
    // integer part: index in array
    // decimal part: 0 <= scale < 1
    // console.log("amt: " + amt);
    n = (colors.length - 1) * amt;
    // console.log("n: " + n);
    index = floor(n);
    scale = n - index;
    // console.log(scale);
    
    if (colors.length < 1) {
        // invalid colors array
        throw Error("input array of at least one color")
    } else if (amt == 0.0 || index + 1 >= colors.length) {
        return colors[0];
    } else {
        let c1 = colors[index];
        let c2 = colors[index + 1];

        // console.log(index);
        // console.log(c1);
        return lerpColor(c1, c2, scale);
    }
}