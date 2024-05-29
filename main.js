  document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.querySelectorAll('a[href^="#foot"]').forEach(anchor =>
  {
    anchor.addEventListener('click',function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
      });
    });
  });
    document.querySelectorAll('a[href^="#skills"]').forEach(anchor =>
    {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
        document.querySelectorAll('a[href^="#Home"]').forEach(anchor =>
        {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
        function logout() {
          window.location.href='signin.html';
        }