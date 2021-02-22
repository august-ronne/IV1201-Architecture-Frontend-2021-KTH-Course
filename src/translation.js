let current = null;

/**
 * Initializes the language according to the parameters of the url.
 */
export async function initLang() {
    let params = new URLSearchParams(window.location.search);
    await setLang(params.get("lang") || "en_us");
}

/**
 * Loads the <code>current</code> variable with the relevant strings.
 * @param name current chosen language for the application
 */
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

/**
 * Main translation method.
 * @param {*} key the key for the relevant string in the catalogue of available strings
 * @param {*} values variables in string text
 */
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