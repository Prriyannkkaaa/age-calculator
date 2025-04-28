function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
  
    if (!birthdateInput) {
      alert('Please select your birthdate!');
      return;
    }
  
    // Luxon DateTime
    const DateTime = luxon.DateTime;
  
    const birthDate = DateTime.fromISO(birthdateInput);
    const now = DateTime.now();
  
    const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();
  
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days);
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  