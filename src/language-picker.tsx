import * as React from 'react';

import { Dropdown, Icon, Menu } from 'antd';

import { Translation } from 'react-i18next';

export const LanguagePicker = () => {
  return (
    <Translation>
      {(t, options) => (
        <Dropdown
          overlay={
            <Menu
              onClick={value => {
                options.i18n.changeLanguage(value.key);
              }}
              selectedKeys={[options.i18n.language]}
            >
              <Menu.Item key="cs">🇨🇿 Česky</Menu.Item>
              <Menu.Item key="en">🇬🇧 English</Menu.Item>
            </Menu>
          }
        >
          <span className="antd-header-content-item">
            <Icon type="global" />
          </span>
        </Dropdown>
      )}
    </Translation>
  );
};
