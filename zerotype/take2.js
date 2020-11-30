const ApiKey = '8b8b95f0-7f22-436a-83ca-332f0d02d315'
				const input = 'HarmonicAngel'
				document.getElementById("ign").innerHTML=input
				const freeChamp = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name'+ input + '?api_key=RGAPI-' + ApiKey
				const proxyVar ='https://cors-anywhere.herokuapp.com/'
				fetch(proxyVar + freeChamp)
  					.then(blob => blob.json())
					.then(data => {
						console.log(data);
						const sumLevel = data.summonerLevel
						document.getElementById("lvl").innerHTML=sumLevel
					})
					.catch(e => {
						console.log(e);
						return e;
					});