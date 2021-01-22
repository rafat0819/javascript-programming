

// Question 1
function kilometerToMeter(km){

    //Check if km is inputed as a number
    if (typeof km == "number"){
        //Check if the inputed value of km is a positive number
        if(km >= 0){
            var m = km * 1000;
            return m;
        }

        //If the inputed value of km is negative, an error is displayed
        else{
            console.log("Please input a positive value");
        }
    }

    //If the inputed value of km is a non-number, an error is displayed
    else{
        console.log("Please input a number");
    }
}


//Question 2
function budgetCalculator(watch, phone, laptop){

    //Checking if input of number of watches is a number
    if (isNaN(watch)){
        console.log("Please enter how many watches in number!")
    }

    //Checking if input of number of phones is a number
    else if (isNaN(phone)){
        console.log("Please enter how many phones in number!")
    }
 
    //Checking if input of number of laptops is a number
    else if (isNaN(laptop)){
        console.log("Please enter how many laptops in number!")
    }

    //Checking if input of number of watches is a positive number    
    else if (watch < 0){
        console.log("Number of watches must be positive!")
    }

    //Checking if input of number of phones is a positive number    
    else if (phone < 0){
        console.log("Number of phones must be positive!")
    }

    //Checking if input of number of laptops is a positive number    
    else if (laptop < 0){
        console.log("Number of laptops must be positive!")
    }

    //If all the checks are satisfied, we do the calculation
    else{
        var totalWatch = watch * 50;
        var totalPhone = phone * 100;
        var totalLaptop = laptop * 500;
    
        return totalLaptop+totalPhone+totalWatch
    }

}


//Question 3
function hotelCost(days){

    //Checking if input of number of days is a number
    if (isNaN(days)){
        console.log("Please enter how many days in number!")
    }
    
    //Checking if input of number of days is a positive number    
    else if(days < 0){
        console.log("Number of days must be positive!");
    }

    //If 0 < days <= 10
    else if(days >= 0 && days <= 10){
        cost = days * 100;
        return cost;
    }

    //If 10 < days <= 20
    else if(days >10 && days <= 20){
        var cost = (100*10) + ((days-10) * 80);
        return cost;
    }

    //If days > 20
    else{
        var cost = (100*10) + (80*10) + ((days-20) * 50);
        return cost;
    }
}


//Question 4
//This is the array used for function megaFriend (question 4)
arr = ['Robin', 'Zamal', 'Rubbel', 0, 'Hassan']

function megaFriend(){

    //Check if array is empty
    if (arr.length == 0){
        console.log("The array is empty!")
    }
    else{
        var longest = arr[0];
        for (var i = 0;  i < arr.length; i++){

            //Check if an item of array is a non-string value
            if(typeof arr[i] != 'string'){
                console.log("Array contains a non-string value!")
            }
            else{
                var friend = arr[i]
                if(friend.length > longest.length){
                    longest = friend;
                }
            }
        }
        return longest;
    }
}


/*The functions are called in this section. 
Feel free to change the parameters to test the functions*/

//Question 1
console.log(kilometerToMeter(5));

//Question 2
console.log(budgetCalculator('a',-5,6));

//Question 3
console.log(hotelCost(-2));

//Question 4
console.log(megaFriend());