// _Body.js
const _Body = ({ dayName, dateString }) => {
    return (
        <main>
            <div className="header">
                <h1>{dayName}</h1>
                <h2>{dateString}</h2>
                <div className="total">Total: ₹10,104.78</div>
            </div>
            <div className="milk-limit">
                Milk Limit: <strong>195.25L</strong> | 24L (min)
            </div>
        </main>
    );
};

export default _Body;
