import React, { useEffect } from "react";
import ReactJWPlayer from "react-jw-player";
//"react-jw-player" là một thư viện bên thứ ba (third-party library) được xây dựng để đơn giản hóa việc tích hợp JWPlayer vào ứng dụng React.
//  Nó cung cấp một giao diện React đơn giản để hiển thị và tương tác với JWPlayer

function JWPlayerVideo2() {
  const myPlaylist = [
    {
      file: "https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/A03_4960.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "English",
          kind: "captions",
          default: true,
        },
      ],
    },
    {
      file: "https://qig.vn/Images/quangich202320nam.mp4#t=2.3",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/b038563096e653b80af71j.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "Spanish",
          kind: "captions",
          default: false,
        },
      ],
    },
  ];

  return (
    <div style={{ width: "630px", height: "340px" }}>
      <ReactJWPlayer
        // isAutoPlay={true}
        playerScript="https://content.jwplatform.com/libraries/tqjyvT9W.js"
        playlist={myPlaylist}
      />
    </div>
  );
}

export default JWPlayerVideo2;
