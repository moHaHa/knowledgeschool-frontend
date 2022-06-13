/* eslint-disable prefer-const */
import _ from 'lodash'

export const fillformInMainForm = {
  draw (form, mappingData) {
    let fill = new Object()
    const snakeKays = new Array()
    for (let i = 0; i < mappingData.length; i++) {
      const element = mappingData[i]
      snakeKays.push(element[1])
    }
    const snakeList = new Array()
    for (const key in form) {
      mappingData.forEach((el) => {
        if (el[1] === key) {
          snakeList.push([key, form[key]])
        }
      })
    }
    const mainList = new Array()
    for (let i = 0; i < snakeList.length; i++) {
      const element = snakeList[i]
      mappingData.forEach((el) => {
        if (el[1] === element[0]) {
          mainList.push([el[0], element[1]])
        }
      })
    }
    fill = Object.fromEntries(mainList)
    return { fill }
  }
}
export const arraAndTree = {
  ToFlat (tree) {
    function recurse (nodes, path) {
      return _.map(nodes, function (node) {
        let newPath = _.union(path, [node.name])
        return [
          _.assign(
            { pathname: newPath.join(' > '), level: path.length },
            _.omit(node, 'children')
          ),
          recurse(node.children, newPath)
        ]
      })
    }
    return _.flattenDeep(recurse(tree, []))
  },
  toNested (list, idAttr, parentAttr, childrenAttr) {
    if (!idAttr) idAttr = 'id'
    if (!parentAttr) parentAttr = 'parent'
    if (!childrenAttr) childrenAttr = 'children'
    let treeList = []
    let lookup = {}
    list.forEach(function (obj) {
      lookup[obj[idAttr]] = obj
      obj[childrenAttr] = []
    })
    list.forEach(function (obj) {
      if (obj[parentAttr] !== null) {
        if (lookup[obj[parentAttr]] !== undefined) {
          lookup[obj[parentAttr]][childrenAttr].push(obj)
        } else {
          //;
          treeList.push(obj)
        }
      } else {
        treeList.push(obj)
      }
    })
    return treeList
  },
  arrayOfids_To_arrayofObj (ids, array) {
    let subArray = []
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      for (let j = 0; j < array.length; j++) {
        const obj = array[j]
        if (id === obj['id']) {
          subArray.push(obj)
          break
        }
      }
    }
    return subArray
  },
  fromIdsArrayGetTree (tree, idsArrayOfSubTree) {
    let array = this.ToFlat(tree)
    let subArray = this.arrayOfids_To_arrayofObj(idsArrayOfSubTree, array)
    let subTree = this.toNested(subArray)
    return subTree
  }
}
