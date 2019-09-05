import * as React from 'react';

import { Dropdown, Icon, Menu } from 'antd';

import { Translation } from 'react-i18next';

const Flag = require('react-flags').Flag;

const languages = [
  { key: 'cs', icon: '🇨🇿', name: 'Česky' },
  { key: 'en', icon: '🇬🇧', name: 'English' }
];

export const LanguagePicker = () => {
  return (
    <Translation>
      {(t, options) => {
        const currentLanguage = languages.find(l => l.key === options.lng);
        return (
          <Dropdown
            overlay={
              <Menu
                onClick={value => {
                  options.i18n.changeLanguage(value.key);
                }}
                selectedKeys={[options.i18n.language]}
              >
                {languages.map(l => (
                  <Menu.Item key={l.key}>
                    <Flag country={l.key} /> {l.name}
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <span className="antd-header-content-item">
              {currentLanguage ? (
                <Flag country={currentLanguage.key} />
              ) : (
                <Icon type="global" />
              )}
            </span>
          </Dropdown>
        );
      }}
    </Translation>
  );
};
