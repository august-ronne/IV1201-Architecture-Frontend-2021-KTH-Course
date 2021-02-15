let current = null;

export async function initLang() {
    let params = new URLSearchParams(window.location.search);
    await setLang(params.get("lang") || "en_us");
}

export async function setLang(name) {
    current = null;
    try {
        current = await (await fetch("lang/" + name + ".json")).json();
    }
    catch(e) {
        console.error("Translation error: ", e);
        current = {};
    }
}

export function T(key, values = {}) {
    let r = current[key];
    if(r == null)
        return key;
    for(let v in values)
        r = r.replaceAll("{"+v+"}", values[v]);
    return r;
}

export default T;

export const LANG_LIST = ['en_us', 'sv_se'];