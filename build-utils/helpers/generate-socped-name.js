const getComponentName = require("./get-component-name")
const createUniqueIdGenerator = require("./create-unique-id-generator")

const uniqueIdGenerator = createUniqueIdGenerator()

const generateScopedName = (localName, resourcePath) => {
  const componentUnixName = getComponentName(resourcePath, "/")
  const componentWindowsName = getComponentName(resourcePath, "\\")

  const componentName =
    componentUnixName > componentWindowsName
      ? componentUnixName
      : componentWindowsName

  return `${uniqueIdGenerator(componentName)}_${uniqueIdGenerator(localName)}`
}

module.exports = generateScopedName
