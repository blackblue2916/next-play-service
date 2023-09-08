"use client";
import { useState, useEffect } from "react";
import { PlayModal } from "@/components";

export default function GetVideo({ searchParams }) {
  const { conn_key, video_id, user_id, type, server } = searchParams;
  const [videoLink, setVideoLink] = useState("");
  const [bj_name, setBj_name] = useState("");
  const [title, setTitle] = useState("");
  let err_massage =
    "正在请求播放权限,验证链接中......如果验证超过30秒,请刷新页面,或者更換服務器綫路重试!!!";

  useEffect(() => {
    let videoData = {
      conn_key: conn_key,
      video_id: video_id,
      user_id: user_id,
      type: type,
      server: server,
    };
    verifyPlayRequest(videoData);
  }, [videoLink]);

  // 处理播放请求
  // async function getPlayRequest() {
  //   let query = window.location.search.substring(1);
  //   let vars = query.split("&");
  //   let tempData = {
  //     conn_key: "",
  //     video_id: "",
  //     user_id: "",
  //     type: "",
  //   };
  //   if (vars.length > 0) {
  //     vars.forEach((value) => {
  //       let pair = value.split("=");
  //       if (pair[0] == "conn_key") {
  //         //   setConnKey(pair[1]);
  //         tempData.conn_key = pair[1];
  //       }
  //       if (pair[0] == "video_id") {
  //         //   setVideoId(pair[1]);
  //         tempData.video_id = pair[1];
  //       }
  //       if (pair[0] == "user_id") {
  //         //   setUserId(pair[1]);
  //         tempData.user_id = pair[1];
  //       }
  //       if (pair[0] == "type") {
  //         tempData.type = pair[1];
  //       }
  //     });
  //     //   console.log(tempData);
  //     await verifyPlayRequest(tempData);
  //   }
  // }

  // 验证用户数据
  async function verifyPlayRequest(videoData) {
    setTimeout(function () {
      // console.log(tempData.conn_key);
      fetch("https://www.bjloveyou.com/video/verify-play", {
        method: "post",
        mode: "cors",
        credentials: "include",
        headers: {
          // 这里可以加入一个安全 KEY 进一步加强安全性
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          conn_key: videoData.conn_key,
          video_id: videoData.video_id,
          user_id: videoData.user_id,
          type: videoData.type,
          server: videoData.server,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.message);
          // console.log(data.status);
          // console.log(data.videoInfo.link);
          setVideoLink(data.videoInfo.link);
          setBj_name(data.videoInfo.bj_name);
          setTitle(data.videoInfo.title);
          // 获得返回值,包括视频链接
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300);
  }

  return (
    <>
      {videoLink ? (
        <PlayModal videoLink={videoLink} bj_name={bj_name} title={title} />
      ) : (
        <>
          <p className="w-full text-center mt-8">{err_massage}</p>
        </>
      )}
    </>
  );
}
