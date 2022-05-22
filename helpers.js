

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);
        
        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.` 
            );
        }
        result.push(valToNumber);
    }
    return result;
}


function findMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
        /* what is going on here ^^ why not (acc + cur) / nums.length? */
    }) / nums.length
}

function findMedian(nums) {
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;
    /* explain again how this works above^^ */

    /* also this is difficult for me to understand */
    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median;
}

/* explanation of this function here, why is 'next' not 'cur'? */ 
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
    /* what is up with the {}? */
}

function findMode(arr) {
    let frequencyCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > count) {
            mostFrequent = key;
            count = frequencyCounter[key];
        }
    }
    return +mostFrequent;

}


module.exports = {
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray,
    createFrequencyCounter
  };