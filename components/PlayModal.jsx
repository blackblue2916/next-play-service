"use client";
export default function PlayModal({ videoLink, bj_name, title }) {
  const closeModal = () => {
    window.close();
  };
  return (
    <>
      <div className="play-modal">
        <div className="play-modal-container">
          <div className="mx-auto mb-3">
            <p className="text-yellow-400 text-[14px] font-normal text-center px-10">
              您目前觀看的是低碼率標準清晰度視頻,會員可下載高碼率1080P-60幀 /
              4K-60幀無損畫質高清視頻!!!
            </p>
            {videoLink && (
              <iframe
                className="w-full mt-5"
                width="1030"
                height="579"
                src={videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
              ></iframe>
            )}
          </div>
          <p className="text-orange-400 text-center my-3">
            <span>{bj_name}</span>&nbsp;&#9658;&nbsp;
            <span>{title}</span>
          </p>
          <p className="text-purple-400 text-[12px] text-center px-10 opacity-70">
            如果出現無法播放錯誤代碼,請檢查您的網絡環境,更換視頻服務器,以及關閉廣告攔截插件!
          </p>
          <p className="text-white-500 text-center my-6">
            <a
              className="bg-purple-500 py-2 px-8 rounded-md mx-4 cursor-pointer"
              onClick={closeModal}
            >
              CLOSE
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
