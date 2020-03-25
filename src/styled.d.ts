import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        small?: string

        bold?: string

        borderRadius?: string

        colors?: {
            main: string
            string: string
        }
    }

}