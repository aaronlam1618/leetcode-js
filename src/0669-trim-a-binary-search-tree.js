// Solution 1: Postorder
const trimBST = (root, low, high) => {
    if (root == null) {
      return null;
    }
    if (root.val < low) {
      return trimBST(root.right, low, high);
    }
    if (root.val > high) {
      return trimBST(root.left, low, high);
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};
