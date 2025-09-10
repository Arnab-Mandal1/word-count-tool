type StatCardProps = {
    label: string;
    value: number;
};

function StatCard({label, value}: StatCardProps) {
    return (
        <div className="text-center">
            <span className="text-3xl font-bold text-white">{value}</span>
            <span className="block text-sm text-white/80">{label}</span>
        </div>
    );
}

export default StatCard;