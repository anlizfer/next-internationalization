import 'server-only'

const dictionaries = {
    en:()=> import('../dictionaries/en.json').then((module)=>module.default),
    es:()=> import('../dictionaries/es.json').then((module)=>module.default),
}

export const getDictionary = async (locale) =>{
    console.warn(locale);
    if(locale=="favicon.ico"){
        locale="es";
    }
    return dictionaries[locale]()
} 