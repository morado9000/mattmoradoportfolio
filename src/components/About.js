export default function About () {
    return (
        <>
            <section id="intro">
            <div className="container flex flex-col justify-items-center items-center px-6 mx-auto my-20 md:space-x-5 md:space-y-4">
                    <img className="rounded-full md:w-1/4" src={require("../img/PXL_20230309_234126790_Cropped.jpg")} alt="" />
    
                    <div className="flex mb-32 text-center text-2xl md:w-1/2">
                        <p>Welcome. My name is Mathew Morado, and I am looking to start my Software Engineer career. Here, you will find information about myself, as well as various project I have done, and acheivements over the years</p>
                    </div>
            </div>
            </section>
        </>
    )
}