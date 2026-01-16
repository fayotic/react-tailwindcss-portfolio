
const project_list = [
    {   id: 1,
        name: "Random Numbers Aren’t: Predictive Analysis of Secure PRNGS using AI and Machine Learning",
        description: "Using real-time images to create secure PRNGs and attempting to decrypt with a trained model.",
        tags: ["Python, ", "OpenCV, ", "Keras, ", "Tensorflow" ],
        repo: "https://github.com/AhegaoPsyops/Random-Numbers-Arent"

    },
    {  
        id: 2,
        name: "Noise Detection Algorithm",
        description: "Analyzing inputted images and using filtering to detect and reduce noise from images.",
        tags: ["MATLAB "],
        repo: "https://github.com/fayotic/noise_detection_alg"

    },
    {  
        id: 3,
        name: "Personal Portfolio Page",
        description: "A personal portfolio page that showcases projects and skills, designed for simplicity. ",
        tags: ["ReactJS, ", "Vite, ", "TailwindCSS"],
        repo: "https://github.com/fayotic/react-tailwindcss-portfolio"

    }
]


export const Projects = () =>{
    return (
    
    <section
    id = "projects"
    className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className= "text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project_list.map((project, key)=>(
                    <div key= {key} className= "bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4 max-w-sm">
                            <h3 className= "font-semibold text-lg mb-5 text-primary">{project.name}</h3>
                  
                            <p className ="mb-5 "> {project.description}</p>
                         
                            <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5"> {project.tags} </p>
                            <a href = {project.repo} className = " text-blue-600 mb-5 wrap-break-word"> {project.repo} </a>
                        
                        </div>
                    </div>
                ))}
            </div>

        </div>
        
    

    </section>);
};