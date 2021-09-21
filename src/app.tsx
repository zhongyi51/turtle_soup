import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import {useStoryList} from "@/hooks/story";
import { getCookie } from 'react-use-cookie';
import {getHistory} from "@/util/cookies";

export const layout = ({initialState}: {
  initialState: { settings?: LayoutSettings; };
}): BasicLayoutProps => {
  const storyList=useStoryList();
  return {
    menuDataRender:(menuData)=>{
      return [{name:"故事",children:storyList}];
    },
    headerContentRender:(props)=>{
      return (<div style={{width:"100%",textAlign:"center"}}>通关次数：{getHistory().length}</div>)
    }
  };
};

