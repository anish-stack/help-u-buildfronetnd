import React, { useState } from 'react';
import './Settings.css'; // Import custom CSS for styling
import Profile from './Tabs/Profile';
import { Documnets } from './Tabs/Documnets';
import Password from './Tabs/Password';
import Enquiry from './Tabs/Enquiry';
import ShareProfile from './Tabs/ShareProfile'; // New ShareProfile component

const Settings = () => {
  // Define tabs as an array of objects
  const tabs = [
    { id: 1, title: 'Profile', content: 'Tab 1 content' },
    { id: 2, title: 'Documnets', content: 'Tab 2 content' },
    { id: 3, title: 'Change Password', content: 'Tab 3 content' },
    { id: 4, title: 'Share Profile', content: 'Share your profile with others' },
    { id: 5, title: 'Enquiry', content: 'Tab 3 content' }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Function to handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      {/* Tab Navigation */}
      <ul className="nav w-100 mt-4 nav-pills mb-4 justify-content-between" id="ex1" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <a
              className={`nav-link border-outline-dark as_btn ${activeTab === tab.id ? 'active' : ''}`}
              href="#!"
              onClick={() => handleTabClick(tab.id)}
              role="tab"
              aria-controls={`ex3-tabs-${tab.id}`}
              aria-selected={activeTab === tab.id}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 1 && <Profile />}
        {activeTab === 2 && <Documnets />}
        {activeTab === 3 && <Password />}
        {activeTab === 4 && <ShareProfile />}
        {activeTab === 5 && <Enquiry />}
      </div>
    </>
  );
};

export default Settings;
