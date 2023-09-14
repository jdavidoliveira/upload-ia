import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Github } from "lucide-react"
import { Textarea } from "./components/ui/textarea"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline" onClick={() => {window.location.href = 'https://github.com/rocketseat'}}>
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea placeholder="Inclua o prompt para a IA...." />
            <Textarea />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{prompt}'}</code> ou <code className="font-bold">{'{transcription}'}</code> no seu prompt para adicionar a transcrição
          </p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  )
}

export default App
