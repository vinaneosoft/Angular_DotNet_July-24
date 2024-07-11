export class TechnicalBook {
    constructor(
        public id="",
        public bookName="",
        public bookAuthor="",
        public bookPrice=0,
        public bookPublishDate:Date | string="",
        public bookDescription="",
        public bookImage="Images/book.jpg"
    )
    {}

}
