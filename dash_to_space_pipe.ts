import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"dash_to_space"
})
export class ConvertToSpace implements PipeTransform{
    transform(value: string): string{
        return value.replace('-',' ');
    }
}