console.log("Hello");
const toPostURL="https://pleasant-scythe-blossom.glitch.me/memes/";
const meme= {
    name: "NiranjanJS",
    url: "https://cdn.vox-cdn.com/thumbor/PSLYCBn2BjUj8Zdbf4BD6SMus-0=/0x0:1800x1179/920x613/filters:focal(676x269:964x557):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66741310/3zlqxf_copy.0.jpg",
    caption: "uahodfnaodf",
};

console.log("To be posted:",meme);


async function postmeme() {
    // start karne wala hu
    console.log("i am going to post the meme");
  
    //options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meme),
    };
  console.log(options.body);
    //fetch
      const response = await fetch(toPostURL, options);
      console.log(response.status);
  }
  