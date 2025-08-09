class StringUtilites {
    //capitalize and return the first char
    static capitalize (str : string) : string{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    //check palindrome
    static isSimplePalindrome(str : string):boolean {
  const lowerStr = str.toLowerCase();
  return lowerStr === lowerStr.split('').reverse().join('');
}

}
class ArrayUtilites{
    constructor (){}
    //remove dublicate values
    //return new array without duplicates
    public  removeDuplicates<T> (arr : T[]) : T[] {
        return [...new Set(arr)]
    }

}



//task 2 

//borrow and return a book
interface Borrowable{
    borrow(): void;
    return() : void;
}
interface Searchable {
  search(query: string): boolean;
}

//Abstract class
abstract class libraryItem{
    public readonly id: number;
    public title : string;
    protected available : boolean;
    constructor (id : number , title:string , available : boolean){
        this.available = available;
        this.id = id;
        this.title = title;
    }

     public getId(): number {
        return this.id;
    }
    public getTitle () : string{
        return this.title
    }
    public getAvailable() :boolean {
        return this.available
    }
    protected setAvailable(status: boolean) {
    this.available = status;
  }
  //Abstract method
  abstract dispalyInfo():void;

}
class Book extends libraryItem implements Borrowable , Searchable{
     id: number;
     title: string;
    public author: string;
    public pages: number;

    constructor( id: number , title: string , author: string , pages: number ){
        super(1 , "title" , false)
        this.id = id ;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow(): void {
        if(!this.available){
            throw new Error ("the book already borrowed")
        } 
        this.available=false;
        console.log(`this book ${this.title} already borrowed`)
    }
    return(): void {
        this.available = true;
        console.log(`book ${this.title} returned`)
    }
    //search if the book exist or not
    search(query: string): boolean {
        return (this.title.includes(query) || this.author.includes(query));
  }
  //display info (Abstract method)
  dispalyInfo(): void {
      console.log ( `Book ${this.title} , by ${this.author} , ${this.pages} pages`)
  }
}

//member class
class member {
     public readonly memberId: number;
    public name: string;
    private borrowedItems: libraryItem[] = [];

    constructor(memberId: number , name: string  ){
        this.memberId = memberId;
        this.name = name;
        
    }
     borrowItem(item: Borrowable & libraryItem): void {
    item.borrow();
    this.borrowedItems.push(item);
}
    

}
//librarian class
class Librarian {
    public name : string ="";
    private accessLevel : number =1;

  constructor( name: string,  accessLevel: number) {
    this.name = name;
    this.accessLevel = accessLevel;
  }

  addItemToCatalog(item: libraryItem): void {
    console.log(`${this.name} added item: ${item.title}`);
  }
}

//test 
const book1 = new Book(23231, 'TypeScript Basics', 'John Doe', 300);
const member1 = new member(12434, 'Alice');
const librarian1 = new Librarian('Bob' , 1);

book1.dispalyInfo(); // Book: TypeScript Basics by John Doe, 300 pages
member1.borrowItem(book1); // Book "TypeScript Basics" borrowed
librarian1.addItemToCatalog(book1); // Bob added item: TypeScript Basics
