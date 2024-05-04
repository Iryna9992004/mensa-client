import $api from '../../../http/index';

class DeleteService {
  static async delete(id) {
    try {
      const item = await $api.post(`/goods/delete/${id}`);
      return item;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default DeleteService; // Експорт класу DeleteService як default
