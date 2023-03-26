import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function YoutubePort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Youtube'
  const version = '1.0.0'

  await createPort({
    template: resolve(templateFolder, `aura.user.css`),
    replacements: {
      ...colorSchemes.dark,
      ...info,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
    },
  })
}
