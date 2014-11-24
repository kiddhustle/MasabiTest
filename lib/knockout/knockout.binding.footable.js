define(
	['knockout', 'footable'],
	function(ko,$){
		ko.bindingHandlers.footable = {
		    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		        $(element).closest("table").footable();
		    },
		    update: function(element, valueAccessor) {  
		        //this is called when the observableArray changes
		        //and after the foreach has rendered the contents       
		        ko.unwrap(valueAccessor()); //needed so that update is called
		        $(element).closest("table").trigger('footable_redraw');
		    }
		};
		
		ko.bindingHandlers.footable.preprocess = function(value, name, addBindingCallback) {
		    //add foreach binding
		    addBindingCallback('foreach', '{ data: ' + value +  '}');
		    return value;
		};
	}
);
