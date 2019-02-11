function pet (target) {
      /**
      * 
      */
      function addPet_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/pet',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function updatePet_PUT (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'PUT',url:'/pet',params:paramsData,...info}
          }
      }
    

      /**
      * Multiple status values can be provided with comma separated strings
      */
      function findPetsByStatus_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/pet/findByStatus',params:paramsData,...info}
          }
      }
    

      /**
      * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      */
      function findPetsByTags_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/pet/findByTags',params:paramsData,...info}
          }
      }
    

      /**
      * Returns a single pet
      */
      function getPetById_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/pet/{petId}',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function updatePetWithForm_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/pet/{petId}',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function deletePet_DELETE (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'DELETE',url:'/pet/{petId}',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function uploadFile_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/pet/{petId}/uploadImage',params:paramsData,...info}
          }
      }
    

        return {addPet_POST,updatePet_PUT,findPetsByStatus_GET,findPetsByTags_GET,getPetById_GET,updatePetWithForm_POST,deletePet_DELETE,uploadFile_POST}
    }
function store (target) {
      /**
      * Returns a map of status codes to quantities
      */
      function getInventory_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/store/inventory',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function placeOrder_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/store/order',params:paramsData,...info}
          }
      }
    

      /**
      * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
      */
      function getOrderById_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/store/order/{orderId}',params:paramsData,...info}
          }
      }
    

      /**
      * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
      */
      function deleteOrder_DELETE (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'DELETE',url:'/store/order/{orderId}',params:paramsData,...info}
          }
      }
    

        return {getInventory_GET,placeOrder_POST,getOrderById_GET,deleteOrder_DELETE}
    }
function user (target) {
      /**
      * This can only be done by the logged in user.
      */
      function createUser_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/user',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function createUsersWithArrayInput_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/user/createWithArray',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function createUsersWithListInput_POST (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'POST',url:'/user/createWithList',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function loginUser_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/user/login',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function logoutUser_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/user/logout',params:paramsData,...info}
          }
      }
    

      /**
      * 
      */
      function getUserByName_GET (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'GET',url:'/user/{username}',params:paramsData,...info}
          }
      }
    

      /**
      * This can only be done by the logged in user.
      */
      function updateUser_PUT (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'PUT',url:'/user/{username}',params:paramsData,...info}
          }
      }
    

      /**
      * This can only be done by the logged in user.
      */
      function deleteUser_DELETE (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:false,method:'DELETE',url:'/user/{username}',params:paramsData,...info}
          }
      }
    

        return {createUser_POST,createUsersWithArrayInput_POST,createUsersWithListInput_POST,loginUser_GET,logoutUser_GET,getUserByName_GET,updateUser_PUT,deleteUser_DELETE}
    }

    export default {pet,store,user}
    