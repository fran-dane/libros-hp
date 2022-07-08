(async () => {
    const {value : pais} = await Swal.fire({
         title: 'Bienvenido',
         text: 'Selecciona tu páis',
        // html:
        //  icon: 'question',
         confirmButtonText: 'Seleccionar',
         footer: 'Esta informacion es importante',
        // width:
         padding: '1rem',
        // background:
        // grow:
         backdrop: 'true',
        // timer:
        // timerProgressBar:
        // toast:
         position: 'center',
         allowOutsideClick: 'true',
         allowEscapeKey: 'false',
         allowEnterKey: 'false',
         stopKeydownPropagation: 'false',

         input: 'select',
	    inputPlaceholder: `Pais`,
	    inputValue: '',
	    inputOptions: {
            Argentina : 'Argentina',
            Uruguay : 'Uruguay',
        },

         customClass: {
             
             	// container:
             	popup: 'popup-class',
             	// header:
             	// title:
             	// closeButton:
             	// icon:
             	// image:
             	// content:
             	// input:
             	// actions:
             	// confirmButton:
             	// cancelButton:
             	// footer:	

         },

        showConfirmButton: true,
	    confirmButtonColor: '#A3937C',
	    confirmButtonAriaLabel: 'Confirmar',

    });

    if (pais) {
        Swal.fire({
            icon : 'info',
            title : `Seleccionaste ${pais}`,
            confirmButtonColor: '#A3937C',
        })
    } else {
        const {value : pais} = await Swal.fire({
            title: 'Bienvenido',
            text: 'Selecciona tu páis',
           // html:
           //  icon: 'question',
            confirmButtonText: 'Seleccionar',
            footer: 'Esta informacion es importante',
           // width:
            padding: '1rem',
           // background:
           // grow:
            backdrop: 'true',
           // timer:
           // timerProgressBar:
           // toast:
            position: 'center',
            allowOutsideClick: 'true',
            allowEscapeKey: 'false',
            allowEnterKey: 'false',
            stopKeydownPropagation: 'false',
   
            input: 'select',
           inputPlaceholder: `Pais`,
           inputValue: '',
           inputOptions: {
               Argentina : 'Argentina',
               Uruguay : 'Uruguay',
           },
   
            customClass: {
                
                    // container:
                    popup: 'popup-class',
                    // header:
                    // title:
                    // closeButton:
                    // icon:
                    // image:
                    // content:
                    // input:
                    // actions:
                    // confirmButton:
                    // cancelButton:
                    // footer:	
   
            },
   
           showConfirmButton: true,
           confirmButtonColor: '#A3937C',
           confirmButtonAriaLabel: 'Confirmar',
   
       });
   
       if (pais) {
           Swal.fire({
               icon : 'info',
               title : `Seleccionaste ${pais}`
           })
       }
    }


})()
