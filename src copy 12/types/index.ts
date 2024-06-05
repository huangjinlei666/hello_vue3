//定义一个接口，限制person对象属性
export interface PersonInter {
    id:string,
    name:string,
    age:number,
}

//一个自定义类型
export type Persons=Array<PersonInter>//写法一
// export type Persons=PersonInter[]//写法二