<<<<<<< HEAD
import React from 'react';
import { slack, google, atlassian, dropbox, shopify } from './import';
import './Brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='google' />
    </div>
    <div>
      <img src={slack} alt='slack' />
    </div>
    <div>
      <img src={atlassian} alt='atlassian' />
    </div>
    <div>
      <img src={dropbox} alt='dropbox' />
    </div>
    <div>
      <img src={shopify} alt='shopify' />
    </div>
  </div>
);

=======
import React from 'react';
import { slack, google, atlassian, dropbox, shopify } from './import';
import './Brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

>>>>>>> abb6cdcb667df92cf953df7054999e17c717296b
export default Brand;