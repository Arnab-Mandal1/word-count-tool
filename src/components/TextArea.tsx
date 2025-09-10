type TextAreaProps = {
    text: string;
    onTextChange: (newText: string) => void;
};

function TextArea({text, onTextChange}: TextAreaProps) {
    return (
        <div className="mb-6">
            <textarea
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Start typing or paste your text here..."
                className="w-full h-48 p-4 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
        </div>
    );
}

export default TextArea;