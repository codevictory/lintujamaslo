import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import { Dropdown, Menu } from 'antd';
import { useRecoilState } from 'recoil';
import { currentLanguage } from '../atoms/language';
import { languageItems } from '../constants/languageItems';
import "./styles/languagePicker.scss"

export const LanguagePicker = () => {
    const [lang, setLang] = useRecoilState(currentLanguage)

    const menu = (
        <Menu>
            {languageItems.map(lang => {
                return (<Menu.Item key={lang.value} onClick={e => setLang(e.key)}>{lang.label}</Menu.Item>);
            })}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={["click"]}>
            <span className="dropdown">{lang} <DownOutlined /></span>
        </Dropdown>
    )
}