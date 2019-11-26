export const ActionNameFactory = (moduleName, componentName) => {
  const prefix = `${moduleName.toLowerCase()}::${
    componentName ? `${componentName.toLowerCase()}::` : ''
  }`

  const actionNameFactory = actionName => `${prefix}${actionName.toUpperCase()}`

  actionNameFactory.async = actionName => ({
    ASYNC: `${actionNameFactory(actionName)}--async-start`,
    SUCCESS: `${actionNameFactory(actionName)}--async-success`,
    FAIL: `${actionNameFactory(actionName)}--async-fail`,
    CANCEL: `${actionNameFactory(actionName)}--async-cancel`
  })

  return actionNameFactory
}
