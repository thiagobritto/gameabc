

// Plcar

function placar(num){
	if(num==0){return("-")}

	var alf="ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		data=[],
		sis={
			uni: 0,
			des: null,
			cen: null,
			mil: null,
			cmi: null,
			mlo: null
		}
	;
	for(let i=0; i<num-1; i++){
		sis.uni++;
		if(sis.uni>=alf.length){
			sis.uni=0;
			sis.des = (sis.des==null)?0:sis.des+=1;

			if(sis.des>=alf.length){
				sis.des=0;
				sis.cen = (sis.cen==null)?0:sis.cen+=1;

				if(sis.cen>=alf.length){
					sis.cen=0;
					sis.mil = (sis.mil==null)?0:sis.mil+=1;

					if(sis.mil>=alf.length){
						sis.mil=0;
						sis.cmi = (sis.cmi==null)?0:sis.cmi+=1;

						if(sis.cmi>=alf.length){
							sis.cmi=0;
							sis.mlo = (sis.mlo==null)?0:sis.mlo+=1;

							if(sis.mlo>=alf.length){
								sis.mlo=0;
								return("Parabens vc zeraou o jogo");
							}
						}
					}
				}
			}
		}
	}

	for(x in sis){
		if(sis[x]!=null){
			data.unshift(alf[sis[x]]);
		}
	}

	return(data.join(''));

} // Fim da function ====================