import Button from "./Button";

type ActionBarProps = {
    onCopy: () => void;
    onClear: () => void;
    isTextEmpty: boolean;
};

function ActionBar({onCopy, onClear, isTextEmpty}: ActionBarProps) {
    return (
        <div className="flex justify-end gap-4">
            <Button onClick={onCopy} label="Copy Text" disabled={isTextEmpty}/>
            <Button onClick={onClear} label="Clear Text" disabled={isTextEmpty}/>
        </div>
    );
}

export default ActionBar;