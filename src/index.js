import React from "react";
import ReactDOM from "react-dom";
import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import {IntlProvider, addLocaleData} from 'react-intl';
import menssagesEsp from './locales/es';
import menssagesEn from './locales/en';

addLocaleData(esLocaleData);
var userLang = navigator.language || navigator.userlanguage;


function getZona(){
	if(userLang=='es-ES'){
		return menssagesEsp;
	}else{
		return menssagesEn;
	}
}

ReactDOM.render(
	<IntlProvider locale={userLang} messages={getZona()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);