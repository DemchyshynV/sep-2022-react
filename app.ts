// type MyType = number | string[] | boolean
// const test = (name:number):void => {
//     return [name]
// }
//
// console.log(test('Max'));
//
//
// // const arr:number[] = [1,2,3,4]
// const arr:[number, string] = [2,'2']


// interface IUser<T, DATA2> {
//     name: string;
//     // name?: string;
//     surname: string;
//     age: number;
//     status: boolean
//     data:T
//     data2:DATA2
// }
//
// // const user: Partial<IUser> = {name:'max', status:true}
//
// // const getName = (user: IUser): string => {
// //     return user.name
// // }
// //
// //
// // const user:IUser<string[]> = {status:true,age:18,name:'max',surname:'popov',data:['1,2,3,4', 's','s']}
//
// class User{
//     constructor(private name: string, private age: number) {
//     }
// }

// interface IShape {
//     area: ()=> number;
//     perimeter: () => number
// }
//
// interface IGreeting {
//     greeting: (name: string) => void;
// }
//
// class Rectangle implements IGreeting, IShape {
//     constructor(private a: number, private b: number) {
//     }
//
//     greeting(name: string): void {
//
//     }
//
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
//
// }
//
//
// const rectangle = new Rectangle(1, 2);
//
// // rectangle.greeting()
// // console.log(rectangle.area());
// // console.log(rectangle.perimeter());
//
// class Triangle implements IShape {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
// }
//
//
// const shapes: IShape[] = [new Rectangle(1, 2), new Triangle(1, 2, 3), new Rectangle(4, 5)]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

// const x = () => {
//     return 15
// }

// type Mytype = ReturnType<typeof x>;
//
// const a:Mytype = 'sss'

// const x1 = (): Function => {
//     const f2 = (a:number):number => {
//         return 2
//     }
//     return f2
// }



import {userService} from './services/userService';

userService.getAll().then(({data})=>{
    const {email} = data[3];
})




