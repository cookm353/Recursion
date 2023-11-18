function iterativeDoubler(nums) {
    for (let n of nums) {
        if (Array.isArray(n)) {
            for (let val of n) {
                console.log(val * 2)
            }
        } else {
            console.log(n * 2)
        }
    }
}


function recursiveDoubler(nums) {
    for (let n of nums) {
        if (Array.isArray(n)) {
            recursiveDoubler(n)
        }
        else {
            console.log(n * 2)
        }
    }   
}

function product(nums) {
    if (nums.length === 0) {
      return 1
    }
  
    return nums[0] * product(nums.slice(1))
  }

nums = [1, [2, [3], 4], 5]

const prod = product([1, 2, 3, 4])
// console.log(prod)


function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
      return true
    }
    if (str.slice(0, 1) !== str.slice(str.length - 1,)) {
      return false
    }
    if (str.slice(0, 1) === str.slice(str.length -1,)) {
      return isPalindrome(str.slice(1, str.length -1))
    }
  }

const word = "racecar"
console.log(isPalindrome(word))