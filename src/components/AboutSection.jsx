import { Code, Rocket, CircuitBoard } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                <div className='grod grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>
                            Electrical Engineering Student & Track Athlete
                        </h3>

                        <p className='text-muted-foreground'>
                            I’m James Kerr—a driven UBC Electrical Engineering student-athlete, national champion hurdler, and lifelong problem-solver. 
                            On the track, I’ve pushed my limits to become a Canadian U20 400mH National Champion, multiple UBC record holder, and leader within my varsity team. 
                            Off the track, I’ve built a diverse portfolio of experiences: coaching athletes to national qualification, founding a swim school that turned a profit in its first season, 
                            and developing software tools like a mobile app that streamlines scheduling and communication for UBC Track & Field. Whether I’m designing circuits, 
                            mentoring teammates, or tackling entrepreneurial projects, I thrive at the intersection of performance, innovation, 
                            and leadership—always seeking ways to inspire growth in myself and those around me.
                        </p>

                        <p className='text-muted-foreground'>

                        </p>

                        <div className='flex flex-col sm:flex-row gap 4 pt-4 justify-center'>
                            <a href='#contact' className='button'> 
                                Get In Touch 
                            </a>

                            <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Software Development</h4>
                                    <p className='text-mutede-foreground'>
                                        - Built responsive, user-focused applications using React, Node.js, and Tailwind CSS, improving usability and efficiency.<br>
                                        - Designed and deployed interactive dashboards and mobile tools that streamlined communication and scheduling for high-performance teams.<br>
                                        - Proficient in JavaScript, Python, and C, with experience in full-stack development and UI/UX optimization.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <CircuitBoard className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Hardware Systems Design</h4>
                                    <p className='text-mutede-foreground'>
                                        - Engineered AI-driven gesture-controlled robotics using Arduino, breadboard circuitry, and embedded C programming.<br>
                                        - Applied circuit analysis, electromagnetics, and electronics design skills to create innovative, functional prototypes.<br>
                                        - Integrated software and hardware systems for real-world applications, ensuring reliability and precision in performance.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Rocket className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Entrepreneruship & Leadership</h4>
                                    <p className='text-mutede-foreground'>
                                        - Founded and grew a profitable private swim school, achieving 100% client retention through quality service and marketing.<br>
                                        - Led athletic and academic teams, balancing leadership with mentorship to help peers achieve personal and collective goals.<br>
                                        - Proven ability to inspire, organize, and deliver results in competitive, high-pressure environments.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
