import pug from 'pug';

export async function preprocessPug(pugOptions = {}, filterOptions = {}, {filename, content}) {

    let match = content.match(/<template lang="pug">(\s|\S)*?<\/template>/);
    if (!match) {
        return null;
    }
    let htmlMarkup = match[0].replace('<template lang="pug">', '').replace('</template>', '');
    const codeMarkup = await new Promise((resolve, reject) =>
        pug.render(htmlMarkup, (err, result) => {
            if (err) {
                reject(err);
            } else {
                let resultString = content.replace('<template lang="pug">' + htmlMarkup + '</template>', result);
                resolve(resultString);
            }
        })
    );
    return {code: codeMarkup.toString()};
}

export default function pugConverter(pugOptions, filterOptions) {
    return preprocessPug.bind(null, pugOptions, filterOptions);
}


