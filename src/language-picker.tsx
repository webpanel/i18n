import * as React from "react";

import { Dropdown, Menu } from "antd";

import { GlobalOutlined } from "@ant-design/icons";
import { Translation } from "react-i18next";

const languages = [
  { key: "cs", icon: "🇨🇿", name: "Česky" },
  { key: "en", icon: "🇬🇧", name: "English" },
];

export const LanguagePicker = () => {
  return (
    <Translation>
      {(t, options) => {
        const currentLanguage = languages.find(
          (l) => l.key === options.lng.split("-")[0]
        );
        return (
          <Dropdown
            overlay={
              <Menu
                onClick={(info) => {
                  options.i18n.changeLanguage(info.key.toString());
                }}
                selectedKeys={currentLanguage && [currentLanguage.key]}
              >
                {languages.map((l) => (
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
                <GlobalOutlined />
              )}
            </span>
          </Dropdown>
        );
      }}
    </Translation>
  );
};
