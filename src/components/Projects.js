
export default function Projects() {
    return (
        <section id="projects" className="md:min-h-screen py-20">
            <h2 className="text-6xl mb-32 font-bold text-center" x-intersect="$el.classList.add('fadeInUp')">
                      Projects
            </h2>
          <div className="container flex flex-col justify-center items-center mx-auto mb-32 md:space-x-20 md:items-start md:space-y-0 w-full md:flex-row">
              <div className="flex flex-col justify-center items-center space-y-10 max-w-sm md:justify-start md:w-1/2" x-intersect="$el.classList.add('scale')">
                  <h2 className="text-4xl font-bold text-center">
                      Movie Ticketing
                  </h2>
                  <img src={require("../img/ScreenshotMovieTicket.png")} alt="" />
                  <button className="w-24 p-5 m-3 bg-black text-white">
                        <a href="http://movie-loadb-a6hvckbv9y2s-e3ff4712d89c12eb.elb.us-west-1.amazonaws.com">Go</a>
                    </button>
                  <p className="text-center text-gray-400">
                      A website that simulates a movie ticketing site that allows the user to buy tickets for a certain movie. And admin can login to add or delete entries using ui. Frontend built with React, Redux, and Tailwind. Backend is made with Spring Boot and Node.js, and I'm using PostgreSQL for a database. Hosted on AWS with ECS and EFS. To get current movie data, I'm using TheMovieDB API.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-10 max-w-sm md:justify-start md:w-1/2" x-intersect="$el.classList.add('scale')">
                  <h2 className="text-4xl font-bold text-center">
                      Video Game Search
                  </h2>
                  <img src={require("../img/ScreenshotVideoGame.png")} alt="" />
                  <button className="w-24 p-5 m-3 bg-black text-white">
                        <a href="http://video-loadb-huv0givlghmd-4b0785f0aa315e53.elb.us-west-1.amazonaws.com">Go</a>
                    </button>
                  <p className="text-center text-gray-400">
                      Do you just want a simple search app to get the latest video games? This website does just that and only that. Frontend is made with React, Redux, and Tailwind. Using Node.js as a backend. Host on AWS with ECS. Using the IGDB API to get video game data.
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