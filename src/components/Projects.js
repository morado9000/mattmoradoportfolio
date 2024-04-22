
export default function Projects() {
    return (
        <section id="projects" className="md:min-h-screen py-20">
            <h2 className="text-6xl mb-32 font-bold text-center" x-intersect="$el.classList.add('fadeInUp')">
                      Projects
            </h2>
          <div className="container flex flex-col justify-center items-center mx-auto mb-32 md:space-x-20 md:items-start md:space-y-0 w-full md:flex-row">
             <div className="flex flex-col justify-center items-center space-y-10 max-w-sm md:justify-start md:w-1/2" x-intersect="$el.classList.add('scale')">
                  <h2 className="text-4xl font-bold text-center">
                      Rubios Home Page
                  </h2>
                  <img src={require("../img/rubiosmaterialscreen.png")} alt="" />
                  <button className="w-24 p-5 m-3 bg-black text-white">
                        <a href="https://morado9000.github.io/rubios-material/">Go</a>
                    </button>
                  <p className="text-center text-gray-400">
                      A recreation of the Rubios hompage. My goal was to implement a UI design utilized in the real world. Built with MaterialUI in React to execute the page's reponsive design.
                  </p>
                </div>

              <div className="flex flex-col justify-center items-center space-y-10 max-w-sm md:justify-start md:w-1/2" x-intersect="$el.classList.add('scale')">
                  <h2 className="text-4xl font-bold text-center">
                      Movie Ticketing
                  </h2>
                  <img src={require("../img/ScreenshotMovieTicket.png")} alt="" />
                  <button className="w-24 p-5 m-3 bg-black text-white">
                        <a href="https://github.com/morado9000/movie-ticketing-redux">Go</a>
                    </button>
                  <p className="text-center text-gray-400">
                      A website that simulates a movie ticketing site that allows the user to buy tickets for a certain movie. And admin can login to add or delete entries using ui. Frontend built with React, Redux, and Tailwind. Backend is made with Spring Boot and Node.js, and I'm using PostgreSQL for a database. Hosted on AWS with ECS and EFS. To get current movie data, I'm using TheMovieDB API.
                  </p>
                </div>
  
                <div className="flex flex-col justify-center items-center space-y-10 max-w-sm md:justify-start md:w-1/2" x-intersect="$el.classList.add('scale')">
                  <h2 className="text-4xl font-bold text-center">
                      React Fake Store
                  </h2>
                  <img src={require("../img/ScreenshotStore.png")} alt="" />
                  <button className="w-24 p-5 m-3 bg-black text-white">
                        <a href="https://morado9000.github.io/reactfakestore">Go</a>
                    </button>
                  <p className="text-center text-gray-400">
                      A fake online store with a selection of items for the user to buy. Users can filter by category, sort by alphabetical order by ascending and descending, and sort by price ascending and descending. Built with React and Styled Components. Hosted on GitHub pages.
                  </p>
              </div>
          </div>
      </section>
    )
}