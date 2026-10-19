
import './About.css';

const highlights = [
  {
    number: '01',
    title: 'Full Stack Development',
    description:
      'Building responsive interfaces and learning to connect them with reliable backend services.',
    icon: '</>',
  },
  {
    number: '02',
    title: 'Problem Solving',
    description:
      'Turning ideas into practical solutions through experimentation, debugging, and continuous improvement.',
    icon: '✳',
  },
  {
    number: '03',
    title: 'Continuous Learning',
    description:
      'Exploring new technologies, improving my skills, and growing with every project.',
    icon: '↗',
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__intro animate-fade-up">
          <p className="about__eyebrow">GET TO KNOW ME</p>

          <h2 className="section-title">
            More Than Code.{' '}
            <span className="accent-text">A Mindset.</span>
          </h2>

          <p className="section-subtitle about__subtitle">
            A little about who I am, what I build, and what drives me.
          </p>
        </div>

        <div className="about__content">
          <div className="about__story animate-fade-up">
            <h3 className="about__heading">
              Hello, I'm Satyankita.
            </h3>

            <p>
              I'm passionate about creating thoughtful digital
              experiences that combine creativity, usability, and
              purpose. I enjoy solving problems, exploring new ideas,
              and building applications that make everyday experiences
              simpler and better.
            </p>

            <p>
              My development journey includes working with React,
              JavaScript, Node.js, Express.js, and databases. I enjoy
              learning how frontend interfaces and backend systems work
              together to create complete web applications.
            </p>

            <p>
              I believe in continuous learning, meaningful
              collaboration, and growing through every opportunity.
              I'm excited to contribute to real-world projects and
              learn from people who share a passion for technology.
            </p>

            <div className="about__values">
              <span>Curiosity</span>
              <span>Creativity</span>
              <span>Accountability</span>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, index) => (
              <article
                className="about__card"
                key={item.number}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="about__card-top">
                  <span className="about__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="about__number">{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
