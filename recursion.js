/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1
  }

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0
  }

  return Math.max(words[0].length, longest(words.slice(1)))
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return ""
  }

  return str.slice(0,1) + everyOther(str.slice(2,))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

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

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) {
    return ""
  }

  return revString(str.slice(1,)) + str.slice(0, 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  Object.keys(obj)
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
