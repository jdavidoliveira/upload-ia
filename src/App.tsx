import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Github } from "lucide-react"

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
    </div>
  )
}

export default App
