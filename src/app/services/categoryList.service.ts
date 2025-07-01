import { CategoryTemplate } from "@/components/categoryList/categoryList";
import { v4 as uuid } from 'uuid';

interface IObserver {
    observerToken: string,
    update(tableid: string, category: CategoryTemplate): void
    add(category: CategoryTemplate): void
    data: CategoryTemplate[]
}

const templateCatalog: CategoryTemplate = {
    title: "Избранная музяка",
    tableId: uuid(),
    columns: [
        {
            name: "Автор",
            columnTitle: "author",
        },
        {
            name: "Название",
            columnTitle: "title",
        },
        {
            name: "Просмотры",
            columnTitle: "views",
        },
        {
            name: "В подписках",
            columnTitle: "favorite",
        },
    ],
};

export class CategoryService {
    private categoryObserver: IObserver[];
    public editable: boolean = false;

    constructor() {
        this.categoryObserver = []
    }

    public subscribe(fn: IObserver, callback: (sub: IObserver) => void): void {
        this.categoryObserver.push(fn)
        return callback(fn)
    }

    public unsubscribe(fn: IObserver): void {
        this.categoryObserver.filter((subscribe) => subscribe !== fn)
    }

    public updateCategory(tabletoken: string, category: CategoryTemplate) {
        this.categoryObserver.forEach(subscriber => subscriber.update(tabletoken, category))
    }

    public createTemplate(title: string) {
        this.categoryObserver.forEach(subscriber => subscriber.add({ ...templateCatalog, title: title }))
    }

    public setEditable(edit: boolean) {
        this.editable = edit;
    }
}

export class Subscriber implements IObserver {
    constructor(public observerToken: string, public data: CategoryTemplate[] = []) { }

    update(tabletoken: string, category: CategoryTemplate) {
        this.data.find(category => category.tableId === tabletoken)
        console.log(category)
    }

    add(category: CategoryTemplate): void {
        this.data.push(category)
    }

    public getData() {
        return this.data;
    }
}

export const categoryService = new CategoryService();