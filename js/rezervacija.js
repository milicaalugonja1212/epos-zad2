function validacijaMaila(mail) {
  return mail.indexOf("@") > -1 && mail.lastIndexOf(".") > mail.indexOf("@");
}

function validacijaImenaPrezimena(imePrezime) {
  return imePrezime.indexOf(" ") > 0 && imePrezime.lastIndexOf(" ") != (imePrezime.length - 1);
}

function validacijaDrzavaGrad(imePrezime) {
  return imePrezime.indexOf(" ") > 0 && imePrezime.lastIndexOf(" ") != (imePrezime.length - 1);
}

function validirajFormu() {
  var forma = document.forms["forma"];
  var formaValidna = validacijaImenaPrezimena(forma["ime"].value) &&
    validacijaMaila(forma['mail'].value) &&
    validacijaDrzavaGrad(forma["drzava"].value);
  if (formaValidna) {
    alertify.success("Rezervacija uspesna");
  } else {
    alertify.error("Nisu popunjena sva obavezna polja");
  }
  return formaValidna;
}

var date = new Date();
var datumPreuzimanja = date.toISOString().slice(0,10);
var vremePreuzimanja = date.getHours() + ':' + date.getMinutes();

document.getElementById('date').value = datumPreuzimanja;
document.getElementById('vreme-p').value = vremePreuzimanja;

var date2 = new Date();
date2.setDate(date2.getDate() + 10);
var datumVracanja = date2.toISOString().slice(0,10);
var vremeVracanja = date2.getHours() + ':' + date.getMinutes();

document.getElementById('datum-v').value = datumVracanja;
document.getElementById('vreme-v').value = vremeVracanja;


$(document).ready(function() {
  // $("#adresa").geocomplete({
  //   formId: "#forma"
  // });

  $('#forma').on('submit', function(e) {
    e.preventDefault();
  })
});