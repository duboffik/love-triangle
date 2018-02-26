/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    //preferences[length]
    var count = 0;
    var i =0;
//
    while (i<=preferences.length-1 ) {
        i++;
        var pref1, pref2, pref3;

        if (preferences[i-1] != i) {
            pref1 = preferences[i-1];

            if ((preferences[pref1-1] != pref1) && (preferences[pref1-1] != i)) {
                pref2 = preferences[pref1-1];

                if (preferences[pref2-1] === i) {
                    pref3 = preferences[pref2 - 1];
                    count++;
                }
            }
        }
    }
    return count/3;
};
