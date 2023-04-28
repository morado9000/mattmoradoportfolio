
export default function Journey() {
    
    return (
        <section id="journey" className="md:min-h-screen py-20">
            <h1 className="text-6xl mb-32 font-bold text-center" x-intersect="$el.classList.add('fadeInUp')">
                My Journey
            </h1>
            <div className="container flex flex-col justify-center mx-auto mb-32 md:space-x-20 md:space-y-0 w-full md:flex-row">
                <div className="flex flex-col justify-start items-center space-y-10  md:w-1/2">
                    <div className="flex flex-col justify-center items-center md:space-x-20 mx-auto md:flex-row" x-intersect="$el.classList.add('scale')">
                        <img src={require("../img/fresnostate_400x400.png")} alt="" className="rounded-full w-1/2"  x-intersect="$el.classList.add('scale')" />
                        <img src={require("../img/aws-certified-cloud-practitioner.png")} alt="" className="rounded-full w-1/2" />
                        <img src={require("../img/bitwise_400x400.jpg")} alt="" className="rounded-full w-1/2" x-intersect="$el.classList.add('scale')" />
                        
                    </div>
                    <p className="text-center text-gray-400" x-intersect="$el.classList.add('fadeInUp')">
                        I started my programming journey early during high school in 2012 at CART (Center For Advanced Research and Technology) where I learned HTML, CSS, JavaScript, and Java. After developing an interest in a Software Engineering career, I would major in Computer Science and Mathematics at California State University, Fresno and receive a Bachelor's Degree from 2013 to 2018. After being unsure of what area I wanted to focus in, I found my answer in 2020 when I picked up a book in Angular, where I learned  it and MVC concepts. In 2022, I took an online bootcamp at Bitwise Workforce training where I learned React and modern concepts such as hooks. In 2023, I got a AWS Cloud Practitioner certification i educate myself on cloud concepts, and to get my own applications on the cloud. I hope my journey will remain eventful through the following years.
                    </p>
                </div>
            </div>
        </section>
    )
}