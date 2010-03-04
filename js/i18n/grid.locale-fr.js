;(function($){
/**
 * jqGrid French Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "Enregistrements {0} - {1} sur {2}",
		emptyrecords: "Aucun enregistrement � afficher",
		loadtext: "Chargement...",
		pgtext : "Page {0} sur {1}"
	},
	search : {
		caption: "Recherche...",
		Find: "Chercher",
		Reset: "Annuler",
		odata : ['�gal', 'diff�rent', 'inf�rieur', 'inf�rieur ou �gal','sup�rieur','sup�rieur ou �gal', 'commence par','ne commence pas par','est dans',"n'est pas dans",'fini par','ne fini pas par','contient','ne contient pas'],
		groupOps: [	{ op: "ET", text: "tous" },	{ op: "OU",  text: "aucun" }	],
		matchText: " correspondance",
		rulesText: " r�gles"
	},
	edit : {
		addCaption: "Ajouter",
		editCaption: "Editer",
		bSubmit: "Valider",
		bCancel: "Annuler",
		bClose: "Fermer",
		saveData: "Les donn�es ont chang� ! Enregistrer les modifications ?",
		bYes: "Oui",
		bNo: "Non",
		bExit: "Annuler",
		msg: {
			required: "Champ obligatoire",
			number: "Saisissez un nombre correct",
			minValue: "La valeur doit �tre sup�rieure ou �gale � 0 ",
			maxValue: "La valeur doit �tre inf�rieure ou �gale � 0",
			email: "n'est pas un email correct",
			integer: "Saisissez un entier correct",
			url: "n'est pas une adresse correcte. Pr�fixe requis ('http://' ou 'https://')",
			nodefined : " n'est pas d�fini!",
			novalue : " une valeur en retour est requise!",
			customarray : "La fonction personnalis�e devrait retourner un array!",
			customfcheck : "La fonction personnalis�e devrait �tre pr�sente en cas de contr�le personnalis�!"
		}
	},
	view : {
		caption: "Voir les enregistrements",
		bClose: "Fermer"
	},
	del : {
		caption: "Supprimer",
		msg: "Supprimer les enregistrements s�lectionn�s ?",
		bSubmit: "Supprimer",
		bCancel: "Annuler"
	},
	nav : {
		edittext: " ",
		edittitle: "Editer la ligne s�lectionn�e",
		addtext:" ",
		addtitle: "Ajouter une ligne",
		deltext: " ",
		deltitle: "Supprimer la ligne s�lectionn�e",
		searchtext: " ",
		searchtitle: "Chercher un enregistrement",
		refreshtext: "",
		refreshtitle: "Recharger le tableau",
		alertcap: "Avertissement",
		alerttext: "Veuillez s�lectionner une ligne",
		viewtext: "",
		viewtitle: "Afficher la ligne s�lectionn�e"
	},
	col : {
		caption: "Afficher/Masquer les colonnes",
		bSubmit: "Valider",
		bCancel: "Annuler"
	},
	errors : {
		errcap : "Erreur",
		nourl : "Aucune adresse param�tr�e",
		norecords: "Aucun enregistrement � traiter",
		model : "Nombre de titres (colNames) <> Nombre de donn�es (colModel)!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam",
				"Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
			],
			monthNames: [
				"Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec",
				"Janvier", "F�vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao�t", "Septembre", "Octobre", "Novembre", "D�cembre"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "n/j/Y",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "g:i A",
				LongTime: "g:i:s A",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "F, Y"
			},
			reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
};
})(jQuery);