let vote =18;
if(vote >=18){
    console.log("eligible");
}
else{
    console.log("not");
}
let x=1;
let a=5;
let b=6;
switch(x){
    case 1:
        let c=a+b;
        console.log(c);
        break;
    case 2:
        let d=a-b;
        console.loujg(d);
        break;
    case 3:
        let e=a*b;
        console.log(e);
        break;
    case 4:
        if(b==0){
            console.log("invalide");
            break;
        }
        else{
            let f=a/b;
            console.log(f);
        }
    default:
        console.log("wrong option");
}
