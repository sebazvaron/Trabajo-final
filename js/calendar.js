


  window.onload = function () {
    const form = document.getElementById('form-cita');
    const calendarEl = document.getElementById('calendar');
  
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'es',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: JSON.parse(localStorage.getItem('citas')) || []
    });
  
    calendar.render();
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const address = document.getElementById('address').value;
  
      const cita = {
        title: `${service.charAt(0).toUpperCase() + service.slice(1)} - ${name}`,
        start: `${date}T${time}`
      };
  
      let citas = JSON.parse(localStorage.getItem('citas')) || [];
      citas.push(cita);
      localStorage.setItem('citas', JSON.stringify(citas));
  
      alert('¡Tu cita ha sido reservada!');
      window.location.href = 'index.html';
    });
  };
  
  