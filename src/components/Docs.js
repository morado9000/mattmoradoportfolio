export default function Docs () {

    return (
        <>
            <section id="docs" className="md:min-h-screen py-20">
                <h1 className="text-6xl mb-32 font-bold text-center" x-intersect="$el.classList.add('fadeInUp')">
                    Documents
                </h1>
                <div className="container flex flex-col justify-center space-y-10 mb-32 mx-auto" x-intersect="$el.classList.add('fadeInUp')">
                    <div className="flex flex-col items-center mx-auto md:w-1/2">
                        <h2 className="text-4xl font-bold text-center">Resume</h2>
                        <a className="w-24 p-5 m-3 bg-black text-center text-white" href="Matthew_Morado_Resume_2023-1-3.pdf" target="_blank">Go</a>
                    </div>
                    <div className="flex flex-col items-center mx-auto md:w-1/2">
                        <h2 className="text-4xl font-bold text-center">Diploma</h2>
                        <a className="w-24 p-5 m-3 bg-black text-center text-white" href="428210_eDiploma.pdf" target="_blank">Go</a>
                    </div>
                    <div className="flex flex-col items-center mx-auto md:w-1/2">
                        <h2 className="text-4xl font-bold  text-center">AWS Cloud Practitioner</h2>
                        <a className="w-24 p-5 m-3 bg-black text-center text-white" href="AWS Certified Cloud Practitioner certificate.pdf" target="_blank">Go</a>
                    </div>
                </div>
            </section>
        </>
    )
}