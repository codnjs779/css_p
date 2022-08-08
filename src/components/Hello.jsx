import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import { I18nextProvider, FormattedString } from "i18Lib";
const Hello = () => {
    const { t } = useTranslation();
    const [langList, setLangList] = useState([ {id:0, lang:"ko"}, {id:1, lang:"en"} ]);
    const [langState, setLangState]  = useState(null);
console.log('langeState', langState);
    const langBtn = langList.map((item) => {
        return <button key={item.id} onClick={(e) => {setLangState(e.target.innerHTML)}}>{item.lang}</button>
    })
    return (
        <>
            <div>
                {langBtn}
            </div>
          <div><FormattedString msg='hello' /></div>
        </>

    );
};

export default Hello;