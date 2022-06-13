let fun = function (type) {
  let component = null
  switch (type) {
  case 'text ':
    component = 'erp-input'
    break

  default:
    break
  }
  return component
}
export default fun
