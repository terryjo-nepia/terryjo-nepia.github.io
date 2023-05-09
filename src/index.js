import '@matterport/webcomponent';
import hoeaIcon from './hoea-logo.png';
import sampleImage from './artpiece closeup.png';
import saleArt from './artpieceSale.png';

const main = async () => {
  const mpSdk = await document.querySelector('matterport-viewer').playingPromise;
  
  mpSdk.Mattertag.data.subscribe({
    onAdded: function (index, item, collection) {
      console.log('Mattertag added to the collection', index, item, collection);
    },
    onRemoved: function (index, item, collection) {
      console.log('Mattertag removed from the collection', index, item, collection);
    },
    onUpdated: function (index, item, collection) {
      console.log('Mattertag updated in place in the collection', index, item, collection);
    }
  });


// the ID of the Mattertag you want to disable

  // disable tag actions (opening, navigating, hovering)

  
  
  
// ... acquired through previous calls to `mpSdk.Tag.add` or through `mpSdk.T
  

  
 
  
  
const iconMapping = {
    'HWcPGOobFGe': hoeaIcon,
    'P85t1Du0kTa': hoeaIcon,
    '68gOQEEHjhA': hoeaIcon,
    '0njJWt75bkH': hoeaIcon,
    'Pkb8NTDCfGM': hoeaIcon,
  };

  // Register the custom icons
  Object.keys(iconMapping).forEach((iconId) => {
    mpSdk.Mattertag.registerIcon(iconId, iconMapping[iconId]);
  });

  // Subscribe to the Mattertag data collection and edit their icons
  mpSdk.Mattertag.data.subscribe({
    onAdded: function(index, mattertag) {
      const iconId = mattertag.sid in iconMapping ? mattertag.sid : 'defaultIcon';
      mpSdk.Mattertag.editIcon(mattertag.sid, iconId);
    },
    onUpdated: function(index, mattertag) {
      const iconId = mattertag.sid in iconMapping ? mattertag.sid : 'defaultIcon';
      mpSdk.Mattertag.editIcon(mattertag.sid, iconId);
    }
  });

  // Add sandbox to Mattertag with ID 'HWcPGOobFGe' and include an image
  const tagId77 = 'P85t1Du0kTa';
  
  const [sandboxId] = await mpSdk.Tag.registerSandbox(`
  
  <style>
  body {
    color: #000;
  back
    height: 700px;
    font-family: "Times New Roman", Times, serif;

  }

  #loadPage, #loadThirdPage {
   background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  }

  .attachment-carousel .attachment-carousel-view .attachment {
    height: 5000px;
  }

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }

  .modal-content {
    position: relative;
    margin: auto;
    padding: 0;
    width: 90%;
    max-width: 1200px;
  }

  .close {
    color: white;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
  }

  img.enlarge {
    cursor: pointer;
  }

  p {
    font-size: 16px
  }
</style>

<div id='content'>
<img src="${saleArt}" alt="Your Image" style="width: 100%;" />



</div>
<button id='loadPage'>Add to cart</button>
<button id='loadPage'>More from Artist</button>
<button id='loadPage'>Contact Artist</button>

<script>
  const loadPageBtn = document.getElementById('loadPage');
  const content = document.getElementById('content');

  const anotherPageContent = \`
  <img src="${saleArt}" alt="Your Image" style="width: 100%;" />

    <p>Added to cart.</p>
    <button id='loadThirdPage'>Go to checkout</button>
  \`;

  const thirdPageContent = \`
    <h1>Third Page7</h1>
    <p>This is the content of the third page.</p>
  \`;

  loadPageBtn.addEventListener('click', () => {
    content.innerHTML = anotherPageContent;
    loadPageBtn.style.display = 'none'; // Hide the button on the second page
    const loadThirdPageBtn = document.getElementById('loadThirdPage');
    loadThirdPageBtn.addEventListener('click', () => {
      content.innerHTML = thirdPageContent;
    });
  });
</script>
  ` , {
    size: {
      w: 350, // Adjust the width as needed
      h: 400, // Adjust the height as needed
    },
  });
  
  mpSdk.Tag.attach(tagId77, sandboxId);

  const tagId1 = '68gOQEEHjhA';

const [sandboxId1] = await mpSdk.Tag.registerSandbox(`
  <style>
    body {
      color: #000;
      background-color: #fff;

      font-family: "Times New Roman", Times, serif;
      margin-left: 40px;
    }

    #loadPage, #loadThirdPage {
      background-color: #f4511e;
      border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;
      font-size: 16px;
      margin: 4px 2px;
      opacity: 0.6;
      transition: 0.3s;
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
    }

    .attachment-carousel .attachment-carousel-view .attachment {
      height: 5000px;
    }

    /* Modal styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
      position: relative;
      margin: auto;
      padding: 0;
      width: 90%;
      max-width: 1200px;
    }

    .close {
      color: white;
      font-size: 28px;
      font-weight: bold;
      position: absolute;
      top: 10px;
      right: 15px;
      cursor: pointer;
    }

    img.enlarge {
      cursor: pointer;
    }

    iframe {
      height: 700px; /* Adjust this value to set the desired height */
    }
  </style>

  <div id='content'>
    <img src="${sampleImage}" alt="Your Image" style="height: 450px;" />  
  </div>
  
  <button id='loadPage'>Add to cart</button>

  <script>
    const loadPageBtn = document.getElementById('loadPage');
    const content = document.getElementById('content');

    const anotherPageContent = \`
      <img src="${sampleImage}" alt="Your Image" style="width: 50%;" />  
      <h1>Artpiece Name</h1>
      <p>Added to cart.</p>
      <button id='loadThirdPage'>Go to checkout</button>
    \`;

    const thirdPageContent = \`
      <h1>Third Page3</h1>
      <p>This is the content of the third page.</p>
    \`;

    loadPageBtn.addEventListener('click', () => {
      content.innerHTML = anotherPageContent;
      loadPageBtn.style.display = 'none'; // Hide the button on the second page
      const loadThirdPageBtn = document.getElementById('loadThirdPage');
      loadThirdPageBtn.addEventListener('click', () => {
        content.innerHTML = thirdPageContent;
      });
    });
  </script>
`, {
  size: {
    w: 1240, // Adjust the width as needed
    h: 800 // Adjust the height as needed
  },
});

mpSdk.Tag.attach(tagId1, sandboxId1);

  

  const tagId3 = 'Pkb8NTDCfGM';

// Get the label and description of the tag
const tagData = await mpSdk.Tag.data.subscribe(tagId3);
const { label, description } = tagData;


const [sandboxId3] = await mpSdk.Tag.registerSandbox(`
<style>
body {
  color: #000;
  background-color: #fff;

  font-family: "Times New Roman", Times, serif;

}

#loadPage, #loadThirdPage {
 background-color: #f4511e;
border: none;
color: white;
padding: 16px 32px;
text-align: center;
font-size: 16px;
margin: 4px 2px;
opacity: 0.6;
transition: 0.3s;
display: inline-block;
text-decoration: none;
cursor: pointer;
}

.attachment-carousel .attachment-carousel-view .attachment {
  height: 5000px;
}

/* Modal styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  position: relative;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

.close {
  color: white;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}

img.enlarge {
  cursor: pointer;
}
</style>

<div id='content'>

<img src="${saleArt}" alt="Your Image" style="width: 100%;" />
</div>
<button id='loadPage'>Add to cart</button>

<script>
const loadPageBtn = document.getElementById('loadPage');
const content = document.getElementById('content');

const anotherPageContent = \`
<h1>Artpiece Name</h1>
  <p>Added to cart.</p>
  <button id='loadThirdPage'>Go to checkout</button>
\`;

const thirdPageContent = \`
  <h1>Third Page2</h1>
  <p>This is the content of the third page.</p>
\`;

loadPageBtn.addEventListener('click', () => {
  content.innerHTML = anotherPageContent;
  loadPageBtn.style.display = 'none'; // Hide the button on the second page
  const loadThirdPageBtn = document.getElementById('loadThirdPage');
  loadThirdPageBtn.addEventListener('click', () => {
    content.innerHTML = thirdPageContent;
  });
});
</script>
`, {
  size: {
    w: 350, // Adjust the width as needed
    h: 500, // Adjust the height as needed
  },
});

mpSdk.Tag.attach(tagId3, sandboxId3);


const id = "HWcPGOobFGe"
mpSdk.Tag.editBillboard(id, {
    label: '',
  description: '',
});



const tagId6 = 'HWcPGOobFGe';

const [sandboxId6] = await mpSdk.Tag.registerSandbox(`
  <style>
  #content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #content * {
    max-width: 100%;
    max-height: 100%;
  }
  </style>
 
  <div id='content'>
    <iframe class="test" src= 'https://www.torotech.co.nz/untitled' scrolling="no" frameBorder="0" width="100%" height='1700px' ></iframe>

  </div>


  
  <script>
    /* Add any custom scripts here */
  </script>
`, {
  size: {
    w: 350, // Adjust the width as neede6
    h: 950, // Adjust the height as needed
  },
});

mpSdk.Tag.attach(tagId6, sandboxId6);



};

  


main();
