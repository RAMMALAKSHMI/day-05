//ANONYMOUS FN
var arr = [1,2,3,4,5,6,7,8,9];
var StrArr = ["one","two","three","four"];
//a. Odd Numbers
var odd=function(arr){
    var res=arr.filter((ele)=>ele%2!=0);
    return res;
}
console.log(odd(arr));
//string to title cap conversion
var Titlecap=function(StrArr){
    var temp = [];
    var res=[];
      for(var i=0;i<StrArr.length;i++){
          temp = StrArr[i].split("");
          temp[0]=temp[0].toUpperCase();
          res.push(temp.join(""));
        
    }
    return res;
}
  console.log(Titlecap(StrArr));
//Sum
var sum = function(arr){
    var res = 0;
    for(i=0;i<arr.length;i++){
        res = res + arr[i];
    }
    return res;
}
console.log(sum(arr));
//Prime numbers
var Prime = function(arr){
    var count = 0;
    var res = [];
    for(var i=0;i<arr.length;i++){
      
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j == 0){
                count++;
            }
        }
        if(count == 2){
            res.push(arr[i]);
        }
        count = 0;
    }
    return res;
}
console.log(Prime(arr));
//Palindrome
var arr1 = [101,232,51615,526,858,96578];
var res = [];
var pal = function(arr1){
for(var i=0;i<arr1.length;i++){
    var rev = arr1[i].toString();
    var rev1 = rev.split("").reverse().join("");
if(rev1 == arr1[i]){
    res.push(rev1);
}
}
return res;
}
console.log(pal(arr1));
//MEDIAN
var arrx = [1,3,5,7,9,11];
var arry = [2,4,6,8,10,12];
var resarr = [];
var medfn = function(arrx,arry){
  for(var i=0;i<arrx.length||i<arry.length;i++){
  resarr.push(arrx[i]);
  resarr.push(arry[i]);
  }
  var mid = (resarr.length)/2;
  var median = (resarr[mid]+resarr[mid-1])/2
  return median;
  }
console.log(medfn(arrx,arry));
//Remove Duplicates
var dup = [1,5,3,5,1,6,9,8,9];
var result = [];
var res = function(dup){
  dup.sort();
  for(var i=0;i<dup.length;i++){
    if(dup[i] != dup[i+1]){
      result.push(dup[i]);      
    }
  }
  return result;
}
console.log(res(dup));