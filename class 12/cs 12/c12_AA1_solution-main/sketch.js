var arr = [1,2,3,4,5,6,7,8,9,10];

function find_num(arr,x)
{
  for(var i = 0; i<arr.length; i++)
  {
    if(arr[i]===x)
    {
      return i;
    }
  }
  return -1;
}

function setup() {
  createCanvas(400, 400);
  var result = find_num(arr,10);
  if(result ==-1)
  {
    console.log("number not found");
  }
  else{
    console.log("number found at index:",result)
  }
 
}

function draw() {
  background(220);
}