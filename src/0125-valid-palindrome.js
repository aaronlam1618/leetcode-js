const isAlphanumeric = (c) => c.match(/^[a-zA-Z0-9]$/);

const isPalindrome = (s) => {
  if (s == null || s.length === 0) {
    return true;
  }
  let start = 0, end = s.length - 1;
  while (start < end) {
    while (start < end && !isAlphanumeric(s[start])) {
      start += 1;
    }
    while (start < end && !isAlphanumeric(s[end])) {
      end -= 1;
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
