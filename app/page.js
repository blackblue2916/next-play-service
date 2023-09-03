import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="container mx-auto my-[70px] text-center px-[42px]">
        <div>
          <h1 className="text-2xl font-bold opacity-90">MONKEY BABA</h1>
          <p className="text-xs opacity-80 py-1">
            歡迎來到&nbsp;<span className="text-orange-300">"猴子爸爸"</span>
            &nbsp;視頻中轉服務站,本站屬於半開放式,任何具備合法密鑰的客戶端才能獲得服務!
          </p>
          <img className="py-3" src="/planet-03.png" alt="" />
          <p className="italic text-xs">
            看上去很神秘哈?
            <a className="text-orange-300" href="/about">
              &nbsp;點擊這裏&nbsp;
            </a>
            獲得一些訊息...
          </p>
        </div>
      </main>
    </>
  );
}
