import { createStore } from "effector"
import { useEvent } from "effector-react"

export const linkStore = useEvent()
export const $errorPage = createStore(true)

$errorPage.on(linkStore, (_, r) => r)