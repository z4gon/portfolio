interface SpacerProps {
    amount: string
}

const Spacer: React.FC<SpacerProps> = ({ amount }) => (
    <div style={{ paddingTop: amount }} />
)

export default Spacer
