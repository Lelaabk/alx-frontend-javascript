import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    const u1 = uploadPhoto();
    const u2 = createUser();

    return  Promise.all([u1, u2]).then((value) => {
        console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    }).catch(() => { console.log('Signup system offline')});
}