import { ActionNameFactory } from 'utils/actionFactory'

const getActionName = ActionNameFactory('containers', 'counter')

export const INC_COUNTER = getActionName('INCREASE_COUNTER')
export const DEC_COUNTER = getActionName('DECREASE_COUNTER')
