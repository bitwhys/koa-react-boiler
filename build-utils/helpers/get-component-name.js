/**
 * @param resourcePath
 * @param separator
 * @return {string}
 */
const getComponentName = (resourcePath, separator) => {
  return resourcePath
    .split(separator)
    .slice(-5, -1)
    .join(separator)
}

module.exports = getComponentName
