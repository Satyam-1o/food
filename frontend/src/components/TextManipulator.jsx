import { useState } from "react";

export default function TextManipulator() {
    const [text, setText] = useState("");

    const toUpperCase = () => setText(text.toUpperCase());
    const toLowerCase = () => setText(text.toLowerCase());

    const wordCount =
        text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Text Manipulator</h2>

            <textarea
                rows="6"
                cols="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text"
            />

            <br /><br />

            <button onClick={toUpperCase}>UPPERCASE</button>
            <button onClick={toLowerCase} style={{ marginLeft: "10px" }}>
                lowercase
            </button>

            <p><strong>Word Count:</strong> {wordCount}</p>
        </div>
    );
}