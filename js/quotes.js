const quotes = [
    {
        quote : "당신이 세상에서 보고 싶은 변화가 되십시오.",
        author : "마하트마 간디",        
    },
    {
        quote : "삶이 있는 한 희망은 있다.",
        author : "키케로",
    },
    {
        quote : "행동은 모든 성공의 기본 열쇠다.",
        author : "파블로 피카소",
    },
    {
        quote : "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        author : "알베르트 아인슈타인",
    },
    {
        quote : "어제보다 나은 오늘이 되도록 노력하라.",
        author : "마하트마 간디",
    },
    {
        quote : "성공은 결코 우연이 아니다.",
        author : "콜린 파월",
    },
    {
        quote : "불가능을 가능하게 만드는 유일한 방법은 시도하는 것이다.",
        author : "무하마드 알리",
    },
    {
        quote : "성공은 최종 목적지가 아니라 여정이다.",
        author : "벤 스위트랜드",
    },
    {
        quote : "실패는 성공을 위한 준비 과정이다.",
        author : "존 맥스웰",
    },
    {
        quote : "하루하루 최선을 다해 살다 보면 어느새 위대한 삶을 살게 될 것이다.",
        author : "조지 로렌스",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;