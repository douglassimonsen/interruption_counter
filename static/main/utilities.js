function strftime(d){
  hours = d.getHours();
  if(hours < 12){
    meridian = 'AM';
  }
  else{
    meridian = 'PM';
    if(hours > 12){
      hours -= 12;
    } 
  }
  minutes = d.getMinutes();
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  return `${hours}:${minutes} ${meridian}`;
}