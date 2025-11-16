const baseText =
    "Hung2211 CookiesIsMe genzokun Vinhvjppro BroA DREAM124873 GreatMaster CAOGIA115 Lithiumdeptrai Enderman1062 Kienrich bao5c NoixKiroi HNT7819 Wein Clover_Yuno Thanhhuyhaha MapKhoKhao Trista_VN H1tori dinh011 CORGI PThAnn GrimmRipper KarryYhe MeoMaLy BobOnlaughts TLxD SCP_909";

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

window.addEventListener("DOMContentLoaded", () => {
    const allNames = baseText.split(" ");
    const tracks = document.querySelectorAll("#marquee-wrapper .track");

    tracks.forEach((track, index) => {
    const speed = Number(track.dataset.speed) || 40;

    const shuffled = shuffle(allNames);

    const block = shuffled
        .map((n) => `<div class="name-tag">${n}</div>`)
        .join("");

    track.innerHTML = block + block;

    let offset = 0;
    let last = null;
    let contentWidth = track.scrollWidth / 2 || 1;

    const direction = index === 1 ? -1 : 1;

    function loop(ts) {
        if (!last) last = ts;
        const dt = (ts - last) / 1000;
        last = ts;

      offset -= direction * speed * dt;

        if (direction === 1 && Math.abs(offset) >= contentWidth) {
        offset += contentWidth;
        } else if (direction === -1 && offset >= 0) {
        offset -= contentWidth;
        }

        track.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
    });
});
