export default function About() {
  // throw new Error("About error");
  return (
    <main className="container mx-auto my-[100px] px-20">
      <div>
        <h3 className="text-2xl pb-5">關於這個站點一些訊息</h3>
        <p className="text-xs opacity-80 py-2">
          &#10148; 它是一個半開放式的網站,主要功能只有一個,提供視頻在綫播放!
        </p>
        <p className="text-xs opacity-80 py-2">
          &#10148; 它隸屬於某個網站集群, 扮演服務節點的角色.
        </p>
        <p className="text-xs opacity-80 py-2">
          &#10148;
          但這個網站本身并不存儲任何數據,你不會看到任何資料列表和其他列表條目資訊.
        </p>
        <p className="text-xs opacity-80 py-2">
          &#10148; 你不會在這個網站找到任何公開的播放入口.
        </p>
        <p className="text-xs opacity-80 py-2">
          &#10148; 使用動態加密鏈接,并驗證用戶合法性之後才可以播放視頻.
        </p>
        <p className="text-xs opacity-80 py-2">
          &#10148;
          加密鏈接有過期限制,一定時間之後,小於10分鐘,該鏈接將失效,無法再次訪問.
        </p>
        <p className="text-xs opacity-80 py-2">&#10148; FREEDOM INTERNET</p>
      </div>
    </main>
  );
}
