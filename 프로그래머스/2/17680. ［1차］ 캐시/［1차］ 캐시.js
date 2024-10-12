function solution(cacheSize, cities) {
    const cache = new Set(); 
    let time = 0;

    if (cacheSize === 0) {
        return cities.length * 5;
    }

    cities.forEach((element) => {
        const city = element.toLowerCase();
        
        if (cache.has(city)) {
            time += 1;
            cache.delete(city);
        } else {
            time += 5;
            if (cache.size >= cacheSize) {
                cache.delete([...cache][0]); 
            }
        }
 
        cache.add(city);
    });

    return time;
}
