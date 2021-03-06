import mongoose from 'mongoose';
// An interface that describe the properties 
// that are required to create a new User
interface UserAttrs {
    email: string,
    password: string
}

// An interface that describe the properties 
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

//interface that describe the properties
//that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    createdAt: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
},
    { timestamps: true });

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// const user = User.build({
//     email: 'test@test.com',
//     password: 'password'
// })
// console.log(user.password)
export { User };

