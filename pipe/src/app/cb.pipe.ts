import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'cb'
})
export class CbPipe implements PipeTransform{

	transform(value: string, n: number =4){

		return value.slice(0,n) + ' '+ Array(value.length-(2 * n) +1).join("X") + ' '+value.slice(-n, value.length);
	}
}