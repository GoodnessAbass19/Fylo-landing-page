const Access = () => {

    return (
        <section className="md:mt-20 mt-10">
            <div className="bg-gray-800 md:max-w-screen-lg rounded-xl md:mx-auto mx-5">
                <div className="md:p-10 text-center">
                    <div className="md:text-4xl text-2xl font-semibold text-center">
                        <h2>Get early access today</h2>
                    </div>

                    <div className="md:p-6 p-3 text-lg">
                        <p>It can only take minutes to sign up and our free starter tier is extremely generous.If you have any questions, our support team would be happy to help you.</p>
                    </div>

                    <div className="p-4 md:p-0 justify-around flex flex-wrap">
                        <input type="text" placeholder="example@gmail.com" required className="md:w-3/5 w-full p-4 rounded-full md:my-0 my-4 text-black"/>
                        <button className="rounded-full md:w-2/6 w-full p-4 bg-cyan-600 hover:bg-cyan-400">Get Started For Free</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Access;