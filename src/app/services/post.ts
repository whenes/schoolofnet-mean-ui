export class Post {
  constructor(private _id: String,
    private title: String,
    private body: String,
    private slug: String,
    private created_at: Date) {}
}
