import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import GlobalOutlined from '@ant-design/icons/lib/icons/GlobalOutlined';
import { Dropdown, Menu } from 'antd';
import { useRecoilState } from 'recoil';
import { currentLanguage } from '../atoms/language';
import { languageItems } from '../constants/languageItems';
import "./LanguagePicker.scss"

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
            <span className="dropdown"><GlobalOutlined /> <DownOutlined /></span>
        </Dropdown>
    )
}