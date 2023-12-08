const puppet = require('puppeteer');


// const components = document.querySelector('compDiv');
//div class component/-->span title + div class prices/-->anchor class retailer/-->span website + span price) href 


const amazonSearch = async function (component) {
    const browser = await puppet.launch({ headless : false});
    const page = await browser.newPage();
    await page.goto(`https://www.amazon.com/s?k=hat&ref=cs_503_search`);
    // await page.goto(`https://www.amazon.com/s?k=${component}&crid=1MLGY6Q3ZMJVI&sprefix=${component}%2Caps%2C347&ref=nb_sb_noss_1`);


    const data = await page.evaluate(function()  {
        // const ee = rr.replaceAll(" ", "+");

        // const searchResultsDivs = document.querySelectorAll('.s-result-item');
        // const titles = searchResultsDivs.querySelectorAll('a.a-size-medium.a-color-base.a-text-normal');//innertext, href
        // const price = searchResultsDivs.querySelectorAll('span.a-offscreen');
        // searchResultsDivs.forEach((result)=>{
        //     const title = result.querySelector('span.a-size-medium.a-color-base.a-text-normal').innerText;
        //     const href = result.querySelector('span.a-size-medium.a-color-base.a-text-normal').parentElement.href;
        //     const price = result.querySelector('span.a-offscreen').innerText.toLowerCase();
        //     const TitleString = title.normalize("NFKD").replaceAll(/™/g,'');
        //     console.log(title, price);

            // if(TitleString.contains(component.toLowerCase())){

            //     let comp = document.createElement('div');
            //     comp.className = 'component';

            //     let tSpan = document.createElement('span');
            //     tSpan.innerText = component;
            //     let prices = document.createElement('div');
            //     ret.className = 'prices';
            //     let anch = document.createElement('a')
            //     anch.className = 'retailer';
            //     anch.href = href;
            //     let spanWeb = document.createElement('span');
            //     spanWeb.innerText ="Amazon";
            //     let spanPrice = document.createElement('span');
            //     spanPrice.innerText= price;

            //     anch.appendChild(spanWeb);
            //     anch.appendChild(spanPrice);
            //     prices.appendChild(anch);
            //     comp.appendChild(tSpan);
            //     comp.appendChild(prices);
            //     components.appendChild(comp);
            // }
            
        //})
        //This is an example so we need to do this for multiple known websites
        //Amazon, newegg, cazasouq? bestbuy? 
    });
    console.log(data);
};
const ee = "RTX 4070";
amazonSearch(ee);
const createDiv = (website, linkRef, price) =>{
    //
}