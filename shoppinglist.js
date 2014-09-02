getItems = function(){
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    items = [];

    console.log("Plese enter the item to be added to shopping kart (or enter exit to see the final list of items): ");
    process.stdin.on('data', function(item){
        if(item === 'exit\n')
            showList(items);
        items.push(item);
    });
};

showList = function(listItems){
    console.log('The items added to shopping list are: ');
    console.log(listItems.join(''));
};

getItems();

