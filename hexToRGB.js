function hexToRGB(x) {
    const r = parseInt(x.slice(1, 3), 16)
    const g = parseInt(x.slice(3, 5), 16)
    const b = parseInt(x.slice(5, 7), 16)
    
    return [ r, g, b ]
}