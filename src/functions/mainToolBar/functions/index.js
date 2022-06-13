/* eslint-disable prefer-const */
import _ from 'lodash'
export function isEmtyArray (array) {
  return array.length === 0
}
export function foundBiger (array, num) {
  let foundBiger = false
  let theBiger = null
  for (let i = 0; i < array.length; i++) {
    const el = array[i]
    if (el > num) {
      foundBiger = true
      theBiger = el
      break
    }
  }
  return { isFoundBiger: foundBiger, theBiger: array.indexOf(theBiger) }
}
export function arrayOfLengths (array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    const element = array.indexOf(array[i])
    newArray.push(element + 1)
  }

  return newArray
}
export function arrayOfIds (array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    newArray.push(element.id)
  }

  return newArray
}
export const getNumPageOfThisNum = {
  getPage (total, num, perPage) {
    const numOfPages = Math.ceil(total / perPage)
    const totlOnePerPage = total / perPage
    const numOfLastPage = numOfPages - totlOnePerPage
    const lessPartofOutCome = Math.round(numOfLastPage * perPage)
    const partOfOutCome = perPage - lessPartofOutCome
    const page = Math.ceil(num / perPage)
    return { pages: numOfPages, numOfLastOne: partOfOutCome, numOfPage: page }
  }
}
export const getFromByLength = {
  getPageNumber (lengthVal, perPage) {
    let pageNumber = Math.ceil(lengthVal / perPage)
    return { pageNumber }
  },

  isPageExist (numOfPage, formsRealLine) {
    let isPageExist = new Boolean()
    isPageExist = false
    for (let i = 0; i < formsRealLine.length; i++) {
      let dataPageArray = formsRealLine[i]
      if (dataPageArray[1] === numOfPage) {
        isPageExist = true
      }
    }
    return isPageExist
  },
  getFrom (lengthVal, numOfPage, formsRealLine) {
    let form = new Object()
    let localIndex = new Number()
    formsRealLine.forEach((element) => {
      if (element[1] === numOfPage) {
        localIndex = lengthVal - element[2]
        formsRealLine.forEach((el) => {
          if (el[1] === numOfPage) {
            form = el[0][localIndex]
          }
        })
      }
    })
    return { form, localIndex }
  }
}

export function getCountOfLastPage (total, perPage, countOfPages) {
  let fullCountOfLastPage = perPage * countOfPages
  let countOfLastPage = fullCountOfLastPage - total
  return countOfLastPage
}

export const getArrayOf = {
  lengths (formsRealLine, perPage) {
    const array = new Array()
    for (let i = 0; i < formsRealLine.length; i++) {
      const page = formsRealLine[i]
      const records = page[0]
      for (let j = 0; j < records.length; j++) {
        // eslint-disable-next-line no-unused-vars
        const singleRecord = records[j]
        const theLength = j + 1
        const theLengthOfI = i + 1
        const total = theLengthOfI * perPage
        const part = total - perPage

        array.push(part + theLength)
      }
    }
    return array
  },
  ids (formsRealLine) {
    const array = new Array()
    for (let i = 0; i < formsRealLine.length; i++) {
      const page = formsRealLine[i]
      const records = page[0]
      for (let j = 0; j < records.length; j++) {
        const singleRecord = records[j]

        array.push(singleRecord.id)
      }
    }
    return array
  },
  idsToLength (formsRealLine, perPage, id) {
    let num = new Number()
    const lengthArray = this.lengths(formsRealLine, perPage)
    const idsArray = this.ids(formsRealLine)
    const mapArray = _.zip(lengthArray, idsArray)
    for (let i = 0; i < mapArray.length; i++) {
      const element = mapArray[i]
      if (element[1] === id) {
        num = element[0]
      }
    }
    return num
  },
  lengthToIds (formsRealLine, perPage, lengthNum) {
    let num = new Number()
    const lengthArray = this.lengths(formsRealLine, perPage)
    const idsArray = this.ids(formsRealLine)
    const mapArray = _.zip(lengthArray, idsArray)
    for (let i = 0; i < mapArray.length; i++) {
      const element = mapArray[i]
      if (element[0] === lengthNum) {
        num = element[1]
      }
    }
    return num
  }
}
export const formObj = {
  cleanEmptyString (payload) {
    for (const propName in payload) {
      if (payload[propName] === '' || payload[propName] === null) {
        delete payload[propName]
      }
    }
    return payload
  }
}
export const resetApiObj = {
  endPoint: undefined,
  mainElementContent: {},
  apiResponse: {
    status: undefined,
    statusText: undefined
  },
  apiContent: {
    current_page: undefined,
    first_page_url: undefined,
    from: undefined,
    last_page: undefined,
    last_page_url: undefined,
    links: [],
    next_page_url: undefined,
    path: undefined,
    per_page: undefined,
    prev_page_url: undefined,
    to: undefined,
    total: undefined
  },
  formsLine: [],
  pageNumArray: [],
  forms: [],
  formsLengths: [],
  formsIds: [],
  formsRealLine: [],
  formsRealLengths: [],
  countOfLastPage: undefined
}
