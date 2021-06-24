import _ from 'lodash';

export function paginate (movies, page, pageSize) {
    const startIndex = (page - 1) * pageSize;
    return _(movies).slice(startIndex).take(pageSize).value();
}