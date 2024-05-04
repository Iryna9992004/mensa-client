import $api from '../../../http/index'

export class AdminAuthService{
    static async login(login,password){
        try{
            const admin=await $api.post('/auth/loginAdmin',{login,password});
            if(admin){
                const adminToken=admin.data.adminToken;
                localStorage.removeItem('token');
                localStorage.setItem('adminToken',adminToken);
                return true;
            }
            else{
                return false
            }
        }
        catch(e){
            console.log(e)
            alert('Не вдалось авторизуватися! Неправильний логін або пароль.')
        }
    }
}