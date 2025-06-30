import { CategoryTemplate } from "@/components/categoryList/categoryList";

interface Observer {
    observerToken: string,
    update(category: CategoryTemplate): void
    data: CategoryTemplate[]
}

export class CategoryService {
    private categoryObserver: Observer[];

    constructor() {
        this.categoryObserver = []
    }

    public subscribe(fn: Observer): void {
        this.categoryObserver.push(fn)
    }

    public unsubscribe(fn: Observer): void {
        this.categoryObserver.filter((subscribe) => subscribe !== fn)
    }

    public addCategory(category: CategoryTemplate) {
        this.categoryObserver.forEach(subscriber => subscriber.update(category))
    }
}

export class Subscriber implements Observer {
    constructor(public observerToken: string, public data: CategoryTemplate[] = []) { }

    update(category: CategoryTemplate) {
        this.data.push(category)
        console.log(this.observerToken, this.data)
    }
}

export const categoryService = new CategoryService();