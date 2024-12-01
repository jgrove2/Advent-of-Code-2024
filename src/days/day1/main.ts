export function day1(list: number[][]) {
    let list1 = [];
    let list2 = [];
    for (let i = 0; i < list.length; i++) {
        list1.push(list[i][0]);
        list2.push(list[i][1]);
    }
    return `${part1(list1, list2)}, ${part2(list1, list2)}`;
}

function part1(list1: number[], list2: number[]) {
    const sortedList1 = sortList(list1);
    const sortedList2 = sortList(list2);
    return findDifferenceBetweenLists(sortedList1, sortedList2);
}

function part2(list1: number[], list2: number[]) {
    let total = 0;
    for (let j = 0; j < list1.length; j++) {
        let temp: number = 0;
        for (let i = 0; i < list1.length; i++) {
            if(list1[j] === list2[i]) {
                temp+=1;
            }
        }
        total += temp * list1[j];
    }
    return total;
}

function sortList(list: number[]) {
    return list.sort((a, b) => a - b);
}

function findDifferenceBetweenLists(list1: number[], list2: number[]) {
    let diff = 0;
    for (let i = 0; i < list1.length; i++) {
        diff += Math.abs(list1[i] - list2[i]);
    }
    return diff;
}