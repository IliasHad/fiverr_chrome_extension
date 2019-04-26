
   let counter;

   if(localStorage.getItem('counter') !== null  && localStorage.getItem('username') !== null && localStorage.getItem('minProjects') !== null) {
    counter  = parseInt(localStorage.getItem('counter')) * 60000;
    setInterval(init, counter);
   }
  

   function init() {

      let username = localStorage.getItem('username');
     
        fetch(`https://www.fiverr.com/users/${username}/requests`)
        .then(response => response.text())
        .then(text => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(text, "text/html");
          const specificProjectsShort = htmlDocument.documentElement.querySelectorAll("td.text-wide");
          const specificProjectsLong = htmlDocument.documentElement.querySelectorAll("div.text-wrap");
          const specificProjects = [specificProjectsShort, specificProjectsLong];
          const projectsCount = htmlDocument.documentElement.querySelector(".js-db-status-tabs li  a");
          let data = [projectsCount.dataset.count, specificProjects];
          console.log(specificProjects);
          return  data;
        })
        .then(count => {
    
        
            let countStr = count[0].toString()
    
           localStorage.setItem('count',countStr);
           console.log(localStorage.getItem('count'));
           notifications();
        })
      
   
   
   
  
    function notifications() {
     
   
   
        let count =  parseInt(localStorage.getItem('count'));
        let minProjects = parseInt(localStorage.getItem('minProjects'));
        
   
      if(count >= minProjects ) {
        let opt = {
            type: "basic",
            title: "Fiverr Notifications",
            message: `You have ${count} offers`,
            iconUrl: "img/geek-48.png"
          }
       
        chrome.notifications.create('Fiverr Notif', opt, replyBtnClick);
        function replyBtnClick () {
          console.log(`Great News it's work and you have ${count}`)
          localStorage.removeItem('count');
          console.log(localStorage.getItem('count'));
          console.log(minProjects);
  
      }
      chrome.notifications.onClicked.addListener(function() {
       chrome.tabs.create({url: `https://www.fiverr.com/users/${username}/requests`});
   });
     
    
    }
    else {
      console.log(`Keep Learning, You don't have enough projects to apply`);
      localStorage.removeItem('count');
      console.log(localStorage.getItem('count'));
  
    }
   
    }

   
   }

   

   


