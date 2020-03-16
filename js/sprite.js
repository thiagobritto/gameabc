function Sprite(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}	
}

var bg = new Sprite(0,0,600,600),
	spriteBoneco = new Sprite(627,27,87,87),
	jogar = new Sprite(634,146,240,170),
	perdeu = new Sprite(613,356,282,190),// 113
	spritRecord = new Sprite(613,552,282,66),
	novo = new Sprite(613,624,282,66),
	spriteChao= new Sprite(0,600,600,54)
; 

//over(613,356,282,113)
//score(613,480,282,66)
//record(613,552,282,66)
//novo(613,624,282,66)