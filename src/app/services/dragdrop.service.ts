import { CategoryTemplate } from "@/components/categoryList/categoryList"

export type DrugDropArrayType = CategoryTemplate[]
class DragDropObject {
    constructor() {

    }

    private moveElement(array: DrugDropArrayType[], first: number, second: number) {
        const element = array.splice(first, 1)[0]
        return array.splice(second, 0, element)

    }
}

export const dragDropObject = new DragDropObject();