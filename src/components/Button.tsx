type ButtonProps = {
    onClick: () => void;
    label: string;
    disabled: boolean;
    icon?: React.ReactNode;
};

function Button({onClick, label, disabled, icon}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 disabled:bg-white/20 disabled:text-white/50 disabled:cursor-not-allowed transition-all duration-300"
        >
            {icon}
            {label}
        </button>
    );
}

export default Button;