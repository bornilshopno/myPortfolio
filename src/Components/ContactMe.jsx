

const ContactMe = () => {
    return (
        <div className="bg-gradient-b from-gray-500 to-gray-900 flex flex-col lg:flex-row lg:gap-20 w-11/12 md:w-10/12 mx-auto">
            <div className="flex-1">
                <h2>Reach Me </h2>
                <h2> Email: optimisticashraf@gmail.com </h2>
                <h2> Cell: +801911199697</h2>

            </div>
            <div className="flex-1">
                <h2>Send your queries</h2>
            <div className="flex items-end">
            <textarea
                    placeholder="write your message"
                    className="textarea textarea-bordered textarea-md w-full "></textarea>
                    <button className="btn-secondary btn">Send Email</button>
            </div>

            </div>
        </div>
    );
};

export default ContactMe;