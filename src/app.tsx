import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

import logo from "./assets/logo-nlw-expert.svg";

const note = {
  date: new Date(),
  content: "Hello World!",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} />

      <form className="mt-6">
        <input
          type="text"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          placeholder="Busque em suas notas..."
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard note={note} />
      </div>
    </div>
  );
}
