import {useState} from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import StatsBar from "./StatsBar";
import ActionBar from "./ActionBar";

function WordCounter() {
    const [text, setText] = useState("");

    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const charCount = text.length;
    const charCountNoSpaces = text.replace(/\s/g, "").length;

    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleClear = () => {
        setText("");
    };

    return (
        <div className="bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full max-w-2xl border border-white/20">
            <Header title="Word Counter" subtitle="A simple and fast word counter"/>
            <TextArea text={text} onTextChange={handleTextChange}/>
            <StatsBar
                wordCount={wordCount}
                charCount={charCount}
                charCountNoSpaces={charCountNoSpaces}
            />
            <ActionBar
                onCopy={handleCopy}
                onClear={handleClear}
                isTextEmpty={text.length === 0}
            />
        </div>
    );
}

export default WordCounter;