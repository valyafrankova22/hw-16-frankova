function point(x, y, r) {
    const l = Math.sqrt(x*x + y*y);
    return  l < r ? `Точка лежит внутри круга` : `Точка лежит вне круга`;
}

console.log(point(4, 9, 10));
