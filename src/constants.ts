import { ConfigurationTarget } from 'vscode'

export const COMMAND_NAME = 'toggleFormat'
export const FORMATTING_SETTINGS = [
  'formatOnPaste',
  'formatOnSave',
  'formatOnType'
]
export const CONFIGURATION_TARGET = ConfigurationTarget.Global
export const ENABLED_TEXT = 'Formatting: $(check)'
export const DISABLED_TEXT = 'Formatting: $(x)'
