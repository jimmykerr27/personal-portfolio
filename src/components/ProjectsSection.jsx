import { 
    ExternalLink, 
    Github, 
    ArrowRight 
} from "lucide-react";


const projects =[
    {
        id: 1,
        title: 'UBC Training App',
        description: 'An interactive app using React, Tailwind, and Node.js with over 80 active users.',
        image: 'Downloads/UBC_Thunderbirds_Logo.svg.png',
        tags: ['Software Design', 'UI/UX', 'Problem Solving'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 2,
        title: 'AI-Based Gesture-Controlled Robot',
        description: 'Built a tracking robot that follows movement and responds to gestures using computer vision and machine learning.',
        image: '/projects/...',
        tags: ['Hardware', 'Machine Learning', 'System Control'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 3,
        title: 'Valerion',
        description: 'Founded a biomedical engineering startup to develop medical imaging AI classification models, wearable devices, and portable medical equipment for remote care.',
        image: 'Downloads/ValerionLogo.png',
        tags: ['AI', 'Entrepreneurship', 'Engineering'],
        demoUrl: '#',
        githubUrl: '#',
    },
];

export const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> 
                    Featured <span className='text-primary'> Projects </span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects showcasing my skills as listed above. I aim to solve real problems and create usable tools as you'll see each once has practical uses or goals.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >
                            <div className='h-48 overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-1'> {project.title}</h3>

                                <p className='text-muted-foreground text-sm mb-4'>
                                {project.description}
                                </p>

                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a 
                                            href={project.demoUrl} 
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <ExternalLink size={20}/>
                                        </a>

                                        <a 
                                            href={project.githubUrl}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a 
                        href='https://github.com/jimmykerr27'
                        target='_blank'
                        className='button w-fit flex items-center mx-auto gap-2'
                    >
                        Check Out My GitHub <ArrowRight size={16} />
                    </a>

                </div>
            </div>
        </section>
    );
};
