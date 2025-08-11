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
                                        I have hands-on experience developing software solutions that solve real-world problems, from building a mobile app for UBC Track & Field to designing interactive dashboards using React, 
                                        Tailwind CSS, and Node.js. My projects integrate clean UI/UX design with functional, scalable code, and I’m skilled in languages and tools such as JavaScript, Python, C, and Git. 
                                        I approach software development with a focus on efficiency, user experience, and delivering reliable results ahead of schedule.
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
                                        My engineering foundation includes designing and prototyping hardware systems, from circuit analysis and electromagnetics to embedded systems. 
                                        I have built AI-based gesture-controlled robots using Arduino, breadboard circuitry, and embedded C-scripting, integrating hardware functionality with Python-based classification models. 
                                        I excel at bridging theoretical design principles with practical implementation, ensuring systems are both innovative and reliable.
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
                                        As a national champion athlete, varsity team leader, and founder of a profitable swim school, I bring a proven track record of leadership, organization, and vision. 
                                        I have coached national-qualifying track athletes, led athletic fundraising initiatives, and managed client relationships to achieve 100% retention in my business. 
                                        My leadership style blends strategic thinking with empathy, fostering trust and motivating others to reach their goals.
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
