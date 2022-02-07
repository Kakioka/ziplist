function zipList(list1, list2){
    if (list1.length === list2.length){
         return list1.map(function (e, i){
            return [e, list2[i]];
        })
    }else{
        return "Lists were not of equal length, could not zip.";
    }
}

function zipListTheSimpleWay(list1, list2){
   return _.zip(list1, list2);
}

const testList1 = ['a', 'b', 'c'];
const testList2 = [1,2,3];

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));