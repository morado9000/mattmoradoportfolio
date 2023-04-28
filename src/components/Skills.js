
export default function Skills() {
    return (
        <section id="skills" className="md:min-h-screen py-20">
            <h1 className="text-6xl mb-32 font-bold text-center" x-intersect="$el.classList.add('fadeInUp')">
                Skills
            </h1>
            <div className="container flex flex-col justify-center mx-auto w-full md:flex-row md:space-x-20 md:w-1/2" x-intersect="$el.classList.add('scale')">
                <div className="flex flex-col justify-center items-center mx-auto space-y-5">
                    <img src={require("../img/React-icon.png")} alt="" className="w-1/2 md:w-full" />
                    <h2 className="text-4xl text-center">React</h2>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto space-y-5">
                    <img src={require("../img/redux_logo.png")} alt="" className="w-1/2 md:w-full" />
                    <h2 className="text-4xl text-center">Redux</h2>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto space-y-5">
                    <img src={require("../img/spring_boot400x400.png")} alt="" className="w-1/2 md:w-full" />
                    <h2 className="text-4xl text-center">Spring Boot</h2>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto space-y-5">
                    <img src={require("../img/1200px-Node.js_logo.png")} alt="" className="w-1/2 md:w-full" />
                    <h2 className="text-4xl text-center">Node.js</h2>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto space-y-5">
                    <img src={require("../img/docker-large_v-trans.png")} alt="" className="w-1/2 md:w-full" />
                    <h2 className="text-4xl text-center">Docker</h2>
                </div>
                <div className="flex flex-col justify-center items-center mx-auto space-y-5">
                    <img src={require("../img/Postgresql_elephant.png")} alt="" className="w-1/2 md:w-1/4" />
                    <h2 className="text-4xl text-center">PostgreSQL</h2>
                </div>
            </div>
        </section>
    )
}