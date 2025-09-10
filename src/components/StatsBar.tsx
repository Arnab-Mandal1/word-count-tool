import StatCard from "./StatCard";

type StatsBarProps = {
    wordCount: number;
    charCount: number;
    charCountNoSpaces: number;
};

function StatsBar({wordCount, charCount, charCountNoSpaces}: StatsBarProps) {
    return (
        <div className="flex justify-around mb-6">
            <StatCard label="Words" value={wordCount}/>
            <StatCard label="Characters" value={charCount}/>
            <StatCard label="Characters (No Spaces)" value={charCountNoSpaces}/>
        </div>
    );
}

export default StatsBar;