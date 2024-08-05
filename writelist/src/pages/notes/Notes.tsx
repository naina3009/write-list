import { FC, useState } from "react";
import Inputs from "../../components/input/Inputs";
import Buttons from "../../components/buttons/Buttons";
import "./Notes.css"

interface Note {
    id: number;
    task: string;
    isDone: boolean;
}

const Notes: FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [task, setTask] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task === "") {
            return;
        }
        const newNote: Note = {
            id: Date.now(),
            task,
            isDone: false,
        };
        setNotes([...notes, newNote]);
        setTask("");
    };

    const handleTaskDone = (id: number) => {
        setNotes(notes.map(note =>
            note.id === id ? { ...note, isDone: !note.isDone } : note
        ));
    };

    const handleDeleteTask = (id: number) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="note">
            <div className="container-fluid main">
                <form onSubmit={handleSubmit} className="input">
                    <div className="w-100">
                        <Inputs
                            value={task}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                            placeHolder={"Write something..."}
                            required={true}
                            name={"todo"}
                            id={"todo"} 
                        />
                    </div>
                    <Buttons 
                        label={"Add"} 
                        className="button" 
                        type={"submit"}
                     />
                </form>
            </div>
            <div className="notes">
                {notes.map(note => (
                    <div key={note.id} className="d-flex flex-row">
                        <p className={`notes-data ${note.isDone ? 'done' : ''}`}>{note.task}</p>
                        <div className="ms-2">
                            <Buttons
                                label={note.isDone ? "Mark as Not Done" : "Mark as Done"}
                                onClick={() => handleTaskDone(note.id)}
                                className={note.isDone ? "btn-success" : "btn-danger"}
                                type={"button"}
                            />
                            <Buttons
                                label={"Delete"}
                                onClick={() => handleDeleteTask(note.id)}
                                className={"btn-danger ms-2"}
                                type={"button"}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;
