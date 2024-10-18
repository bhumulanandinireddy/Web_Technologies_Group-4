import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Members.css';

// Sample data for the group members
const members = [
  {
    name: 'Nandini Reddy Bhumula',
    role: 'Content Validator',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/nandini_profilephoto.jpg',
    githubUrl: 'https://github.com/bhumulanandinireddy',
  },
  {
    name: 'Saiesh Reddy Chittireddy',
    role: 'Content Validator',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/saiesh_pp.png',
    githubUrl: 'https://github.com/saieshreddy1234',
  },
  {
    name: 'Joseph Hansen',
    role: 'Web Developer',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/josephHansen_pp.png',
    githubUrl: 'https://github.com/truffer11',
  },
  {
    name: 'Mohammed Fazil Khasim',
    role: 'Web Developer',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/fazil_pp.jpeg',
    githubUrl: 'https://github.com/MohammedFazilKhasim',
  },
  {
    name: 'Kishore Reddy Mamidi',
    role: 'Delivery Lead',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/kishorereddy_pp.jpeg',
    githubUrl: 'https://github.com/kishore7860',
  },
  {
    name: 'Maniteja Vemunoori',
    role: 'Delivery Lead',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/maniteja_pp.png',
    githubUrl: 'https://github.com/Manitejareddy143',
  },
];

const Members = () => {
  return (
    <div className="members">
      <h1>Group Members</h1>
      <p>
        Our dedicated team members worked collaboratively on the survey, <i>'A Survey on DNS over HTTPS: Status, Challenges, Use Cases, and Open Issues,'</i> contributing their skills and insights to bring this project to life.
      </p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.imageUrl} alt={member.name} className="member-img" />
            <h2>{member.name}</h2>
            <p><b>Role:</b> {member.role}</p>
            <p><b>Major:</b> {member.major}</p>
            <a href={member.githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
