class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount = 73.5;
getCount() { var playerCountRef = database.ref("playerCount"); playerCountRef.on("value", data => { playerCount = data.val(); }); }
 }

