import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/rgg.JPG';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>RagavaPrasanna</span>
              </p>
              <h2 className="about__heading">A full stack developer</h2>
              <div className="about__info">
                <PText>
                  My name is Ragavaprasanna I'm a Full stack developer based in
                  react js ☀️. I describe myself as a passionate developer who
                  loves coding, open source, and the web platform ❤️. Aside from
                  my job, I like to create and contribute to open source
                  projects. That helps me to learn a ton of new stuff, grow as a
                  developer and support other open source projects. Also I enjoy
                  writing technical things ✍️ at my blog. In my free time you
                  can find me playing cricket or jogging or on tech meetups and
                  conferences around friends and family
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://drive.google.com/file/d/14Km06SOZ5gYdZa2rE84ROwMMx63oRirp/view?usp=drivesdk"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Z.K.M Hr.Sec.School, Bodinayakanur']}
              />
              <AboutInfoItem
                title="Collage"
                items={[
                  'CPA College Bodinayakanur',
                  'HKRH College Uthamapalayam',
                ]}
              />
              <AboutInfoItem
                title="University"
                items={['University Of kamaraj']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'Bootstrap',
                  'PHP',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Mysql', 'Mongo db']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018-2019"
                items={['college website developer at cpa college']}
              />
              <AboutInfoItem
                title="2020-2021"
                items={['college website developer at hkrh college ']}
              />
              <AboutInfoItem title="2021-" items={['Full Stack  Developer']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
