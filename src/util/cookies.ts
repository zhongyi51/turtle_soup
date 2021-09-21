import {getCookie, setCookie} from "react-use-cookie";

export function addStoryHistory(id:number):void{
  let preHistory=JSON.parse(getCookie("TURTLE_SUCCESS_HISTORY"));
  preHistory.push(id);
  setCookie("TURTLE_SUCCESS_HISTORY",JSON.stringify(preHistory));
}

export function getHistory():string[]{
  let preCookie=getCookie("TURTLE_SUCCESS_HISTORY");
  if(preCookie){
    return JSON.parse(preCookie);
  }else {
    setCookie("TURTLE_SUCCESS_HISTORY",JSON.stringify([]));
    return [];
  }
}

export function checkStory(id:number){
  const currentHistory=getHistory();
  return currentHistory.includes(id.toString());
}
