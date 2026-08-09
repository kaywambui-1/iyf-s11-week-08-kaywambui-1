function EventExamples() {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    const handleInput = (event) => {
        console.log('input value:', event.target.value);
    };
    const handleItemClick = (itemId) => {
        console.log('Item clicked:', itemId);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>

            <input onChange={handleInput} />

            <button onClick={() => handleItemClick(123)}>
                item 123
            </button>

               <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted');
               }}>
                <button type="submit">Submit</button>
               </form>
        </div>
    );
}

export default EventExamples;