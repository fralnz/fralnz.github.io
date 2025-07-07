import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdRocket, MdSchool, MdWork} from 'react-icons/md';
import "../styles/About.css"

const About = () => (
    <>
        <h1>About Me.</h1>
        <p>Here's a little timeline of my journey so far. Let's expand it <b><u>together</u></b>.</p>
        <VerticalTimeline>
            <VerticalTimelineElement
                iconStyle={{ background: 'var(--timeline-accent1)', color: '#fff' }}
                icon={<MdWork />}
                date="Now"
                contentStyle={{
                    background: 'var(--timeline-accent1)',
                    color: '#fff',
                    textAlign: 'center',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid var(--timeline-accent1)',
                }}
            >
                <h3 className="vertical-timeline-element-title">Open to Work</h3>
                <p>Available to Full Stack opportunities.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'var(--timeline-accent2)',
                    color: '#fff',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid var(--timeline-accent2)',
                }}
                date="Jan 2025 - Jun 2025"
                iconStyle={{ background: 'var(--timeline-accent2)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">
                    Full Stack Developer - Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    DevoTeam Cyber Trust, Lisbon
                </h4>
                <p>
                    Built and tested features for Cyber Security and Compliance platforms
                    using Symfony PHP.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--school"
                contentStyle={{
                    background: 'var(--timeline-accent3)',
                    color: '#fff',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid var(--timeline-accent3)',
                }}
                date="Sep 2023 - Jul 2025"
                iconStyle={{ background: 'var(--timeline-accent3)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Higher VET Student</h3>
                <h4 className="vertical-timeline-element-subtitle">
                    ITS Angelo Rizzoli Academy, Milan
                </h4>
                <p>
                    I studied for two years in a professional course to become a Software
                    Architect Specialist.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: 'var(--timeline-neutral)', color: '#fff' }}
                icon={<MdRocket />}
                date="Start"
                contentStyle={{
                    background: 'var(--timeline-neutral)',
                    color: '#fff',
                    textAlign: 'center',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid var(--timeline-neutral)',
                }}
            >
                <h3 className="vertical-timeline-element-title">Career Began</h3>
                <p>Motivated, curious, and excited to build real-world applications.</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </>
);

export default About;
