import * as React from 'react';

import { Dropdown, Icon, Menu } from 'antd';

import { Translation } from 'react-i18next';

const languages = [
  { key: 'cs', icon: '🇨🇿', name: 'Česky' },
  { key: 'en', icon: '🇬🇧', name: 'English' }
];

export const LanguagePicker = () => {
  return (
    <Translation>
      {(t, options) => {
        const currentLanguage = languages.find(
          l => l.key === options.lng.split('-')[0]
        );
        return (
          <Dropdown
            overlay={
              <Menu
                onClick={value => {
                  options.i18n.changeLanguage(value.key);
                }}
                selectedKeys={currentLanguage && [currentLanguage.key]}
              >
                {languages.map(l => (
                  <Menu.Item key={l.key}>
                    {l.icon} {l.name}
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <span className="antd-header-content-item">
              {currentLanguage ? (
                <span style={{ fontSize: 20 }}>{currentLanguage.icon}</span>
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
