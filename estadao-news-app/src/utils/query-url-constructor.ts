export type ParamsStructure = Record<string, string | number | boolean>;

export function queryParamsConstructor(url: string, params: ParamsStructure): string {
  let draft = '';

  for (const [query, value] of Object.entries(params)) {
    const sanatizedValue = typeof value === 'string' ? value.trim() : value;

    if (typeof sanatizedValue === 'boolean') {
      if (sanatizedValue) {
        draft += `&${query}`;
      }
    } else {
      draft += `&${query}=${sanatizedValue}`;
    }
  }

  return url + draft.replace(draft[0], '?');
}
