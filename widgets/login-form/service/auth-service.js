import $api from "../../../http";

export class AuthService{
    static async login(email, password) {
        try {
            const response = await $api.post('/auth/login', { email: email, password: password });
            localStorage.setItem('token', response.data.token);
            return response;
        } catch (error) {
           console.log(error)
        }
    }
    

    static async registration(surname,name,phoneNumber,email,password){
        try{
            const response=await $api.post('/auth/registration',{surname:surname,name:name,phoneNumber:phoneNumber,email:email,password:password});
            localStorage.setItem('token',response.data.token);
            alert('Користувач успішно зареєстрований!')
            return response;
        }
        catch(e){
            console.log(e)
        }
    }
}