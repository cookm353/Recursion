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
// console.log(isPalindrome(word))

function findIndex(arr, val) {
  if (arr.length === 1 && arr[0] !== val) {
    return -1
  }

  if (arr[0] === val) {
    return 0
  }

  const result = findIndex(arr.slice(1,), val)
  if (result === -1) return -1
  else return 1 + findIndex(arr.slice(1,), val)
}

let arr = [0, 1, 2, 3, 4, 5]
console.log(findIndex(arr, 6))


function binarySearch(arr, val) {  
  let low = 0
  let high = arr.length - 1
  if (low === high) return -1
  const mid = Math.floor(low + (high - low) / 2)

  console.log(`low: ${arr[low]}, mid: ${arr[mid]}, high: ${arr[high]}`)
  if (arr[mid] === val) {
    return mid
  } else if (arr[mid] < val) {
    return binarySearch(arr.slice(mid, high+1), val)
  } else if (arr[mid] > val) {
    return binarySearch(arr.slice(low, mid+1), val)
  }

}

arr = [1, 3, 6, 8, 12, 15, 18, 19, 27]
const result = binarySearch(arr, 8)
console.log(result)