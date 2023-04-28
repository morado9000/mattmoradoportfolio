export default function About () {
    return (
        <>
            <section id="intro" className="py-20 md:min-h-screen">
                <h1 className="text-6xl mb-32 font-bold text-center" x-intersect="$el.classList.add('fadeInUp')">
                    Welcome
                </h1>
                <div className="container flex flex-col justify-items-center items-center px-6 mx-auto mb-20 md:space-x-5 md:space-y-4">
                        <img className="rounded-full md:w-1/4" src={require("../img/PXL_20230309_234126790_Cropped.jpg")} alt="" x-intersect="$el.classList.add('scale')"/>
        
                        <div className="flex text-center text-2xl md:w-1/2" x-intersect="$el.classList.add('fadeInUp')">
                            <p>Welcome. My name is Mathew Morado, and I am looking to start my Software Engineer career. Here, you will find information about myself, as well as various project I have done, and achievements over the years.</p>
                        </div>
                </div>
            </section>
        </>
    )
}