// Importing the plus icon from react-icons/fa6
import { FaPlus } from 'react-icons/fa6';

// Functional component receiving props from parent: dayName, dateString, quantity (object), setQuantity (function)
const _Body = ({ dayName, dateString, quantity, setQuantity }) => {

    // Function to handle input changes for both morning and evening quantities of each item
    const handleChange = (item, time, value) => {
        setQuantity((prev) => ({
            ...prev, // spread previous quantity object
            [item]: {
                ...prev[item], // spread previous data for that item
                [time]: parseInt(value) || 0, // update morning or evening with new value
            },
        }));
    };

    // Static list of milk/curd items with their respective prices
    const data = [
        { name: 'TM 500', price: 20.0 },
        { name: 'SGM 450', price: 25.0 },
        { name: 'COW 500', price: 22.0 },
        { name: 'COW 200', price: 10.0 },
        { name: 'FCM 500', price: 30.0 },
        { name: 'FCM 1000', price: 60.0 },
        { name: 'Curd 120', price: 8.3 },
        { name: 'Curd 500', price: 31.91 },
        { name: 'Curd 5000', price: 354.36 },
    ];

    // Function to calculate subtotal = (morning + evening quantity) * price for each item
    const calculateSubtotal = (item) => {
        const morningQty = quantity[item.name]?.morning || 0; // default to 0 if undefined
        const eveningQty = quantity[item.name]?.evening || 0; // default to 0 if undefined
        return ((morningQty + eveningQty) * item.price).toFixed(2); // round to 2 decimal places
    };

    // JSX returned by the component
    return (
        <main>
            {/* Header section displaying the day, date, and a hardcoded total */}
            <div className="header">
                <h1>{dayName}</h1>
                <h2>{dateString}</h2>
                <div className="total">Total: ₹10,104.78</div> {/* You can calculate this dynamically later */}
            </div>

            {/* Displaying milk delivery limits (optional info for UI) */}
            <div className="milk-limit">
                Milk Limit: <strong>195.25L</strong> | 24L (min)
            </div>

            {/* Table for displaying all products and inputs */}
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Mor</th>
                        <th>Eve</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Looping through each product and rendering a row for it */}
                    {data.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td> {/* Product name */}
                            <td>₹{item.price.toFixed(2)}</td> {/* Product price */}
                            <td>
                                <input
                                    type="number"
                                    value={quantity[item.name]?.morning || ''} // morning value from quantity state
                                    onChange={(e) => handleChange(item.name, 'morning', e.target.value)} // update morning quantity
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={quantity[item.name]?.evening || ''} // evening value from quantity state
                                    onChange={(e) => handleChange(item.name, 'evening', e.target.value)} // update evening quantity
                                />
                            </td>
                            <td>₹{calculateSubtotal(item)}</td> {/* Display subtotal for that item */}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Submit button with plus icon (used for adding entry or moving to next step) */}
            <button type="submit" aria-label="Add Item">
                <FaPlus />
            </button>
        </main>
    );
};

// Exporting the _Body component so it can be used in other files
export default _Body;
