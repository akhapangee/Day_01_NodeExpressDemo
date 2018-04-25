module.exports = function(){
    return{
        students:[],
        getAll: function(){
            return this.students;
        },
        insert: function(student){
            this.students.push(student);
        }
    }
}