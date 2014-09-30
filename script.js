$(document).ready(function(){
		
		var arr = new Array(3);
		for(var i=0;i<3;i++){
				arr[i] = new Array(3);
				arr[i][0] = document.getElementById('a'+(i+1));
				arr[i][1] = document.getElementById('b'+(i+1));
				arr[i][2] = document.getElementById('c'+(i+1));
		}
		console.log(arr);

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


			//horizontal and vertical
			for (var i = 0; i < 3; i++)
				if( arr[i][0].className == 'boxClicked' && arr[i][0].innerText == arr[i][1].innerText && arr[i][1].innerText == arr[i][2].innerText){
					isThereAWinner = true;
					break;
				}else if( arr[0][i].className == 'boxClicked' && arr[0][i].innerText == arr[1][i].innerText && arr[1][i].innerText == arr[2][i].innerText){
					isThereAWinner = true;
					break;
				}
			//diagonal
			if(a1.className == 'boxClicked' && a1.innerText == b2.innerText && b2.innerText == c3.innerText)
				isThereAWinner = true;
			else if(c1.className == 'boxClicked' && c1.innerText == b2.innerText && b2.innerText == a3.innerText)
				isThereAWinner = true;

			if(isThereAWinner)
				if(!turn)
					alert('X wins');  			
				else
					alert('O wins');
			else if(turn_count == 9)
					alert('DRAW');

		}

	});

