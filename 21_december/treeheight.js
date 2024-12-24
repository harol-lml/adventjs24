/**
* @param {{ value: string; left: any; right: any }} tree
* @returns {number} - Height of the tree.
*/
function treeHeight(tree) {

    const dfs = (node) => {
        if(node ===  null) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        return Math.max(left, right) + 1
    }
    let cont = dfs(tree)
    return cont
}

// Tree definition
const tree = {
    value: '🎁',
    left: {
      value: '🎄',
      left: {
        value: '⭐',
        left: null,
        right: null
      },
      right: {
        value: '🎅',
        left: null,
        right: null
      }
    },
    right: {
      value: '❄️',
      left: null,
      right: {
        value: '🦌',
        left: null,
        right: null
      }
    }
  }

  // Graphical representation of the tree:
  //        🎁
  //       /   \
  //     🎄     ❄️
  //    /  \      \
  //  ⭐   🎅      🦌

  // Function call
  console.log(treeHeight(tree))
  // Returns: 3