import Quill from 'quill'
import quillEditor from '../lib/editor/index.vue'
import { App } from 'vue'
quillEditor.install = function (app: App) {
  app.component(quillEditor.name, quillEditor)
}
export { Quill, quillEditor }
