import {StatusEnum} from './enum/status.enum';

interface ICore {
    flight: number
    core: {
        reuse_count: number
        status: string
    }
}

interface IPayload {
    payload_type: string
    payload_mass_kg: number
    payload_mass_lbs: number
}

interface ISpaceX {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string;
        video_link: string
    },
    rocket: {
        rocket_name: string
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}

///////////////////////////////////////////////////////////////////////////////


// 2) протипізувати функції:
interface IUser{
    name:string;
    age:number;
    gender:string;
}

const user:IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}


function sum(a:number, b:number):number {
    return a + b
}

function showSum(a:number, b:number):void {
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number) :IUser{
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)

if (StatusEnum.UnAuthorization === res.status) {
    console.log('UnAuthorization');
}
