import React from 'react';
import './EmpoweringCampuses.css'; 

import image1 from '../../../assets/campuses/66e9b6cd7013609025eecccaec8e7f519a49a766.png'
import image8 from '../../../assets/campuses/2ab4626b302aa93dc30f861525da1cc993ab3645.png';
import image6 from '../../../assets/campuses/2e0e50d78e2b5e10545a16e26390381c809c4b68.png';
import image9 from '../../../assets/campuses/2e38bf8873ab780fcc929d326aed3a96dbec014f.png';
import image15 from '../../../assets/campuses/5df0284854666c01cd2721833391ca94ddb7d232.png';
import image5 from '../../../assets/campuses/5fe293ac78fcbf46dd2eb7d97fb83ae4e1672887.png';
import image2 from '../../../assets/campuses/6d52f9781dc5fe13ebbe9ef30844161c81654125.png';
import image10 from '../../../assets/campuses/9df1b6efa360dbb5977596ff80b81620d7fecb91.png';
import image16 from '../../../assets/campuses/83da7c259a09997c61e924af0e5e8ca6d889e54e.png';
import image12 from '../../../assets/campuses/319ea602a8967d7ea8681f6547009536fb21cdc9.png';
import image13 from '../../../assets/campuses/71573d3293fa550daede488f1d4d653424724b51.png';
import image11 from '../../../assets/campuses/94552bb9c4a204ff367c273cc62834885c730b02.png';
import image18 from '../../../assets/campuses/185811bcdf2aa582602d0089420509ea0823fc7e.png';
import image17 from '../../../assets/campuses/91432832472dbaaafe0d19ed98870b591628b295.png';
import image7 from '../../../assets/campuses/a8b54314529e4bb009632eafd01b8a3d2c7d1c8a.png';
import image4 from '../../../assets/campuses/a0646e25839ab0dfc1c7d0071687232bab44c927.png';
import image14 from '../../../assets/campuses/c40b7fbcd0a17fe44eea27b420122b8a7b49ce70.png';
import image3 from '../../../assets/campuses/1f276a17670c5ec511f79730688891862899000b.png'

const EmpoweringCampuses = () => {
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16,image17,image18
  ];

  return (
    <div className="empowering-campuses">
      <h2>Empowering Campuses with Smart Vending</h2>
      <div className="college-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`College ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default EmpoweringCampuses;
