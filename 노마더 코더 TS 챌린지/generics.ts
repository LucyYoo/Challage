type Last = {
    <T>(arr: T[]): T
}

//type으로 정의하는 경우
type Prepend = {
    <T>(arr:T[], item: T): T
}

//바로 함수로 실행하는 경우
// function prepend<T>(arr: T[], item:T): T{
//     arr.unshift(item);
//     return item;
// }

const last: Last = (arr) => arr[arr.length-1];

const prepend: Prepend = (arr, item) => {
    arr.unshift(item);
    return item;
}
