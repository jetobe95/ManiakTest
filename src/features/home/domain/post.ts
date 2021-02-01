export default class Post {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
  ){};


  static fromJson(json:any):Post{
    return new Post(
      json.id,
      json.title,
      json.description,
      json.image
    );
  }
}
