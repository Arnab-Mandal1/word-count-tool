type HeaderProps = {
    title: string;
    subtitle: string;
};

function Header({title, subtitle}: HeaderProps) {
    return (
        <header className="text-center mb-6">
            <h1 className="text-5xl font-extrabold text-white tracking-wider">{title}</h1>
            <p className="text-white/80 mt-2 text-lg">{subtitle}</p>
        </header>
    );
}

export default Header;