const skills = [
    {name: "HTML/CSS", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "TailwindCSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},

    {name: "Kotlin", category: "languages"},
    {name: "Java", category: "languages"},
    {name: "Python", category: "languages"},
    {name: "C++/C#", category: "languages"},
    {name: "SQL", category: "languages"},
    {name: "R", category: "languages"},
    {name: "MATLAB", category: "programs"},

    {name: "VSCode", category: "programs"},
    {name: "Spyder", category: "programs"},
    {name: "Unity", category: "programs"},
    {name: "Godot", category: "programs"},
    {name: "Figma", category: "programs"},
    {name: "Jira", category: "programs"},
    {name: "Git/Github", category: "programs"}

]

export const SkillsSection = () => {
    return <section
    id= "skills"
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className= "text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key)=>(
                    <div key= {key} className= "bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className= "font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>;
}