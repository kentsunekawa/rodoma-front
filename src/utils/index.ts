import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';
import { BreadCrumbList, CategoryTree, SearchQuery } from 'types';

export const RELEASE_STATUS = {
  0: '未公開',
  1: '公開中',
  2: '限定公開',
} as const;

export const LABEL_LIST = [0, 1, 2, 3, 4, 5, 6, 7] as const;

export const isSelectedExist = (
  selected: string | number | undefined,
  options: {
    value: string | number;
    label: string;
}[]) => {
  for(let i = 0; i < options.length; i ++) {
    if(options[i].value === selected) return true;
  } 
  return false;    
};

export const adjustErrorMessage = (responseErrors: {[key: string]: string[]}) => {
  let newErrors: {[key: string]: string[]} = {};
  for(let k of Object.keys(responseErrors)) {
    let messages: string[] = [];
    for(let i = 0; i < responseErrors[k].length; i++ ){
      const key = responseErrors[k][i] as keyof typeof VALIDATE_ERROR_MESSAGES;
      messages.push(VALIDATE_ERROR_MESSAGES[key]);
    }
    newErrors[k] = messages;
  }
  return newErrors;
}

export const getParam = (name: string, url: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const createBreadCrumbList = (
  searchQuery: SearchQuery,
  categoryTree: CategoryTree
) => {
  let list: BreadCrumbList = [];
  if(searchQuery.category !== 0) {
    categoryTree.forEach(category => {
      if(category.id === searchQuery.category) {
        list.push({
          id: category.id,
          name: category.name,
        });
        if(searchQuery.specialty !== 0) {
          category.specialties.forEach(specialty => {
            if(specialty.id === searchQuery.specialty) {
              list.push({
                id: specialty.id,
                name: specialty.name,
              });
            }
          });
        }
      }
    });
  }
  return list;
};

export const createCategoryTagList = (
  category_id: number,
  supecialty_id: number,
  categoryTree: CategoryTree
) => {
  let list: string[] = [];
  if(category_id !== 0) {
    categoryTree.forEach(category => {
      if(category.id === category_id) {
        list.push(category.name);
        if(supecialty_id !== 0) {
          category.specialties.forEach(specialty => {
            if(specialty.id === supecialty_id) {
              list.push(specialty.name);
            }
          });
        }
      }
    });
  }
  return list;
}

export function formatDate(date: Date, format: string) {

  format = format.replace(/YYYY/, date.getFullYear().toString());
  format = format.replace(/MM/, (date.getMonth() + 1).toString());
  format = format.replace(/DD/, date.getDate().toString());
  format = format.replace(/HH/, date.getHours().toString());
  format = format.replace(/MM/, date.getMinutes().toString());

  return format;
}