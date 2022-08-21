export class Post {
    postId?: string;
    postText?: string;
    ownerId?: string;
    createdOn?: string;
    
    constructor(postId?: string, postText?: string, ownerId?: string, createdOn?: string) {
        this.postId = postId;
        this.postText = postText;
        this.ownerId = ownerId;
        this.createdOn =createdOn;
    }
}