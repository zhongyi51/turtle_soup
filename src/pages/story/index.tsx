import React from "react";
import ProCard from "@ant-design/pro-card";
import {Button} from "antd";
import {StoryCard} from "@/pages/story/component/StoryCard";
import { history } from 'umi';


export default (props: { match: { params: { id: number } } }) => {
  return <ProCard
    style={{
      alignItems:"center"
    }}
    title={"测试卡片"}
  ><StoryCard storyId={props.match.params.id}/>
    <Button
    onClick={()=>history.push(`/story/${Number.parseInt(String(props.match.params.id))+1}`)}
    >下一个故事</Button>
  </ProCard>
}
