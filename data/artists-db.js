const artists = [
  {name: 'Billie Eilish', album2023: false},
  {name: 'Post Malone', album2023: true},
  {name: 'Olivia Rodrigo', album2023: true},
  {name: 'Andy Mineo', album2023: false},
  {name: 'Ivan Cornejo', album2023: false},
  {name: 'Joji', album2023: false},
  {name: 'Kanye West', album2023: false},
  {name: 'Lana Del Rey', album2023: true},
  {name: 'Taylor Swift', album2023: true},
  {name: 'Twenty One Pilots', album2023: false},
  {name: 'Zach Bryan', album2023: true}
];

module.exports = {
  getAll: function() {
    return artists;
  }
};