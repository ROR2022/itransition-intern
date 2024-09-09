
const smallerBetter= (listStr)=>{
    //return the longest common substring of passed arguments contained in listStr
    if(listStr.length==0){
        return "";
    }
    //console.log(listStr[0]);
    const firstElement=listStr[0] || '';
    let l=listStr.length;
    let n=firstElement.length;
    let result="";
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            let sub=listStr[0].substring(i,j);
            let k=1;
            for(k=1;k<l;k++){
                if(!listStr[k].includes(sub)){
                    break;
                }
            }
            if(k==l && result.length<sub.length){
                result=sub;
            }
        }
    }
    return result;
}


const listStr=process.argv.slice(2) || [''];
//console.log(listStr);
console.log(smallerBetter(listStr));