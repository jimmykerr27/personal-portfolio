import { ArrowDown } from 'lucide-react';

export const HomeSection = () => {
    return (
        <section 
            id='home' 
            className='relative min-h-screen flex flex-col items-center justify-center px-4'
        >
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> James</span>
                        <span className='text-primary ml-2 opacity-0 animate-fade-in-delay-2'> Kerr</span>
                    </h1>

                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        I study electrical engineering with a specialization in digital systems design,
                        biomedical technology, and software. I have a passion for entreprenership, leadership,
                        and finding meaning in my work is important to me.
                    </p>

                    <div>
                        <a href='projects' className='pt-2 button opacity-0 animate-fade-in-delay-4'>
                            View My Projects
                        </a>
                    </div>

                    <div className='absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce'>
                    <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
                    <ArrowDown className='h-5 w-5 text-primary' />
                    </div>
                </div>
            </div>
        </section>
    );
    
};