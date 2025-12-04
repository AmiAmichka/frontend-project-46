const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

export const formatToPlain = (data, path = '') => {
  let result = ''

  data.forEach(({ key, type, oldValue, newValue, childrenResult }) => {
    const finalPath = `${path}${key}`
    switch (type) {
      case 'nested':
        result += formatToPlain(childrenResult, `${finalPath}.`)
        break
      case 'changed':
        result += `Property '${finalPath}' was updated. From ${stringify(
          oldValue,
        )} to ${stringify(newValue)}\n`
        break
      case 'deleted':
        result += `Property '${finalPath}' was removed\n`
        break
      case 'added':
        result += `Property '${finalPath}' was added with value: ${stringify(
          newValue,
        )}\n`
        break
      default:
        break
    }
  })

  return result
}
