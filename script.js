$(document).ready(function(){
		
		var turn = true;
		var turn_count = 0;
		$('.box').click(function(){

			turn_count+=1;
			var current = $(this).text();
			console.log(current+turn_count);
			
			var idd = $(this).attr('id');
			console.log(idd+turn_count);
			var x = document.getElementById(idd);
			if(turn){
				// $(this).attr('text','X');
				x.innerText = ' X ';
			}else{
				// $(this).attr('text','O');
				x.innerText = ' O ';
			}
			$(this).attr('class','boxClicked');
			turn = !turn;
			$(this).unbind("click");
			checkForWinner();
		});

		$('.boxClicked').click(function(){
			console.log('clicked already');
		});
		

		$('#newGame').click(function(){
			location.reload();
		});


		function checkForWinner() {
			var isThereAWinner=false;

			var a1 = document.getElementById('a1');
			var a2 = document.getElementById('a2');
			var a3 = document.getElementById('a3');

			var b1 = document.getElementById('b1');
			var b2 = document.getElementById('b2');
			var b3 = document.getElementById('b3');

			var c1 = document.getElementById('c1');
			var c2 = document.getElementById('c2');
			var c3 = document.getElementById('c3');

			if( a1.className == 'boxClicked' && a1.innerText == a2.innerText && a2.innerText == a3.innerText)
				isThereAWinner = true;
			else if( b1.className == 'boxClicked' && b1.innerText == b2.innerText && b2.innerText == b3.innerText)
				isThereAWinner = true;
			else if( c1.className == 'boxClicked' && c1.innerText == c2.innerText && c2.innerText == c3.innerText)
				isThereAWinner = true;
			else if( a1.className == 'boxClicked' && a1.innerText == b1.innerText && b1.innerText == c1.innerText)
				isThereAWinner = true;
			else if(a2.className == 'boxClicked' && a2.innerText == b2.innerText && b2.innerText == c2.innerText)
				isThereAWinner = true;
			else if(a3.className == 'boxClicked' && a3.innerText == b3.innerText && b3.innerText == c3.innerText)
				isThereAWinner = true;
			else if(a1.className == 'boxClicked' && a1.innerText == b2.innerText && b2.innerText == c3.innerText)
				isThereAWinner = true;
			else if(c1.className == 'boxClicked' && c1.innerText == b2.innerText && b2.innerText == a3.innerText)
				isThereAWinner = true;

			if(isThereAWinner){

				if(!turn)
					alert('X wins');  			
				else
					alert('O wins');

			} else if(turn_count == 9){
					alert('DRAW');

			}

		}

	});

