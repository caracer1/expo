import { mapToMapExpression } from '@angular/compiler/src/render3/util';

export class ListService {


    wait_list =[
        {name: 'Parsa',size: '5', phone: '9492218182'},
        {name: 'Ben',size: '2', phone: '9493327809'},
        {name: 'Luon',size: '7', phone: '9496768912'},
        {name: 'Preston',size: '4', phone: '9493869011'},
        {name: 'Carlos',size: '6', phone: '9491190582'},
    ];

    getList() {
        return this.wait_list;
    }

    removeFromList(name){
        for (let index = 0; index < this.wait_list.length; index++) {
            if (name == this.wait_list[index]) {
                this.wait_list.splice(index)
            }
                
            
        }

    }
}