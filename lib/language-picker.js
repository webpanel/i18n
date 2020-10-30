import * as React from "react";
import { Dropdown, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Translation } from "react-i18next";
var languages = [
    { key: "cs", icon: "🇨🇿", name: "Česky" },
    { key: "en", icon: "🇬🇧", name: "English" },
];
export var LanguagePicker = function () {
    return (React.createElement(Translation, null, function (t, options) {
        var currentLanguage = languages.find(function (l) { return l.key === options.lng.split("-")[0]; });
        return (React.createElement(Dropdown, { overlay: React.createElement(Menu, { onClick: function (info) {
                    options.i18n.changeLanguage(info.key.toString());
                }, selectedKeys: currentLanguage && [currentLanguage.key] }, languages.map(function (l) { return (React.createElement(Menu.Item, { key: l.key },
                l.icon,
                " ",
                l.name)); })) },
            React.createElement("span", { className: "antd-header-content-item" }, currentLanguage ? (React.createElement("span", { style: { fontSize: 20 } }, currentLanguage.icon)) : (React.createElement(GlobalOutlined, null)))));
    }));
};
//# sourceMappingURL=language-picker.js.map