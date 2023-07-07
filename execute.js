window.onload = function () {
  console.log("已載入Holodex Copy Samune插件");
  document.body.addEventListener("keydown", async (event) => {
    console.log(`禁左${event.key}制`);
    const identity = document
      .querySelector(".v-tooltip__content.menuable__content__active")
      ?.firstChild?.href?.split("/")
      .slice(-1)[0];
    if (!identity) {
      return;
    }
    if (event.isComposing || event.key === "c") {
      let result = await fetch(
        `https://ivy-solid-september.glitch.me/proxy?url=${`https://img.youtube.com/vi/${identity}/maxresdefault.jpg`}`
      );
      let response = await result.json();
      if (response.error) {
        result = await fetch(
          `https://ivy-solid-september.glitch.me/proxy?url=${`https://img.youtube.com/vi/${identity}/sddefault.jpg`}`
        );
        response = await result.json();
      }
      var url = `data:image/jpg;base64,${response.buffer}`;
      await clip(url);
    } else if (event.isComposing || event.key === "x") {
      navigator.clipboard.writeText(`https://youtu.be/${identity}`);
    }
    const img = document.querySelector("#SamuneIcon");
    div.classList.add("SamuneIconAnimation");
    setTimeout(() => {
      div.classList.remove("SamuneIconAnimation");
    }, 1100);
  });
  const div = document.createElement("div");
  div.id = "SamuneIcon";
  div.src = "https://i.ibb.co/3fjN5vX/s3-R2-Yt-W-Joe-8w-SIp4-Pg-BA.png";
  document.querySelector(".justify-end.mv-toolbar-btn").appendChild(div);
};
