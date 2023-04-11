// AULA 3

var listaFilmes = []
listaFilmes[0] = 'https://andrew-hankinson.co.uk/wp-content/uploads/2015/10/1042136_1338502907783_full-e1444587343951.jpg'
listaFilmes[1] = 'https://th.bing.com/th/id/R.a58642859cc1513deae040680d7140f9?rik=W31MouTWNiGz0A&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2014%2f05%2fGuardians-of-the-Galaxy-poster-2.jpg&ehk=M1Oxah2hMA3k5CqjTQwWHYsQkdNf3B9X%2bX5UAn94pU8%3d&risl=&pid=ImgRaw&r=0'
listaFilmes[2] = 'https://i.jeded.com/i/star-wars-episode-v--the-empire-strikes-back.13948.jpg'
listaFilmes[3] = 'https://th.bing.com/th/id/OIP.w40m_vX6GCQu-lOF_7IH0wHaLH?pid=ImgDet&rs=1'
listaFilmes[4] = 'https://th.bing.com/th/id/R.231c7bf8b7452c5050b4688fb295ed96?rik=GL0mb%2bxCWovFbA&pid=ImgRaw&r=0'
listaFilmes[5] = 'https://th.bing.com/th/id/R.fe9e3f678c4fd91fc3e6fe7f839d4282?rik=Q8MmFskGwS%2bpfw&pid=ImgRaw&r=0'
listaFilmes[6] = 'https://th.bing.com/th/id/R.18a7a78dc227e11541f0e45fedd4b164?rik=aBOQyO%2bKK%2faIaA&pid=ImgRaw&r=0'
listaFilmes[7] = 'https://th.bing.com/th/id/OIP.MNHbGVCljAbvuUStISSGwAHaLH?pid=ImgDet&rs=1'

var nomesFilmes = []
nomesFilmes = ['Back to the Future (1985)', 'Guardians of the Galaxy (2014)', 'Star Wars: Episode V', '10 Things I Hate About You (1999)', 'The Batman (2022)', 'Dead Poets Society (1989)', 'Little Women (2019)', 'Harry Potter and the POA (2004)']

for (var i=0; i<listaFilmes.length; i++) {
  document.write("<div class='poster'><img src=" + listaFilmes[i] + ">" + "<h3 class= 'nomes'>" + nomesFilmes[i] + "</h3></div>");
}
