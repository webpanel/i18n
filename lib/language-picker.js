import * as React from 'react';
import { Dropdown, Icon, Menu } from 'antd';
import { Translation } from 'react-i18next';
export var LanguagePicker = function () {
    return (React.createElement(Translation, null, function (t, options) { return (React.createElement(Dropdown, { overlay: React.createElement(Menu, { onClick: function (value) {
                options.i18n.changeLanguage(value.key);
            }, selectedKeys: [options.i18n.language] },
            React.createElement(Menu.Item, { key: "cs" }, "\uD83C\uDDE8\uD83C\uDDFF \u010Cesky"),
            React.createElement(Menu.Item, { key: "en" }, "\uD83C\uDDEC\uD83C\uDDE7 English")) },
        React.createElement("span", { className: "antd-header-content-item" },
            React.createElement(Icon, { type: "global" })))); }));
};
//# sourceMappingURL=language-picker.js.map