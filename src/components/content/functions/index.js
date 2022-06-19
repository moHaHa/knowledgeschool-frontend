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
export const getElementComponent = function (type) {
  let component = null
  switch (type) {

  case 'image':
    component = 'd-img'
    break
  case 'text-read':
    component = 'd-text-read'
    break
  case 'textarea-read':
    component = 'd-textarea-read'
    break

  default:
    component = 'd-input'
    break
  }
  return component
}
export const getAttrComponent = function (element) {
  let newaAttr = {}
  switch (element.type) {
  case 'select_dropdown':
    newaAttr.label = element.display_name
    newaAttr.api = element.details.table
    newaAttr.name = element.field
    newaAttr['item-value'] = (x) => x.id
    newaAttr['item-text'] = 'name'
    newaAttr.valuesPath = 'data.data'
    break

  default:
    newaAttr.label = element.display_name
    element.required ? (newaAttr.rules = 'required') : (newaAttr.rules = null)
    break
  }
  return newaAttr
}

export const getColumnDefs_fromSchema = function () {
  let columnDefs = []
  return columnDefs
}

export const schemaTo = {
  columnDefs (schema) {
    let obj = { schema }
    console.log(obj)
    let mappingData = [
      [
        'array',
        ['hi', 'schema'],
        [
          ['field', 'field'],
          ['headerName', 'display_name']
        ]
      ]
    ]

    let newObj = this.fillformInMainForm.draw(obj, mappingData).fill
    let columnDefs = newObj.hi
    return columnDefs
  },
  mappingData (schema) {
    let mappingData = this.makeMapping(schema)
    return mappingData
  },
  makeMapping (schema) {
    let array = []
    let columnDefs = this.columnDefs(schema)
    columnDefs.forEach((element) => {
      array.push([element.field, element.field])
    })
    return array
  },
  fillformInMainForm: {
    draw (form, mappingData) {
      let fill = new Object()
      const snakeKays = new Array()
      for (let i = 0; i < mappingData.length; i++) {
        const element = mappingData[i]
        if (element[0] === 'array') {
          snakeKays.push(element[1][1])
        } else {
          snakeKays.push(element[1])
        }
      }
      const snakeList = new Array()
      for (const key in form) {
        mappingData.forEach((el) => {
          if (el[0] === 'array') {
            if (el[1][1] === key) {
              snakeList.push([key, form[key]])
            }
          } else if (el[1] === key) {
            snakeList.push([key, form[key]])
          }
        })
      }
      const mainList = new Array()
      for (let i = 0; i < snakeList.length; i++) {
        const element = snakeList[i]
        mappingData.forEach((el) => {
          if (el[0] === 'array') {
            if (el[1][1] === element[0]) {
              console.log(el[1])
              const newArray = Array()
              for (let i = 0; i < element[1].length; i++) {
                const ele = element[1][i]
                newArray.push(this.draw(ele, el[2]).fill)
              }
              mainList.push([el[1][0], newArray])
            }
          } else if (el[1] === element[0]) {
            mainList.push([el[0], element[1]])
          }
        })
      }
      console.log(mainList)
      fill = Object.fromEntries(mainList)
      return { fill }
    }
  }
}
