import React, { Component } from "react";
import Nestable from "react-nestable";

const items = [
   { id: 0, text: "Item 1" },
   {
		id: 1,
		text: "Item 2",
		children: [
			{ id: 2, text: "Item 3" },
			{ id: 3, text: "Item 4" },
			{
				id: 4,
				text: "Item 5",
				children: [
				   { id: 5, text: "Item 6" },
				   { id: 6, text: "Item 7" },
				   { id: 7, text: "Item 8" },
				],
			},
			{ id: 8, text: "Item 9" },
			{ id: 9, text: "Item 10" },
		],
    },
];

class NTable extends Component {
	state = {
		example: 1,
		defaultCollapsed: false,
	};

   collapse = (collapseCase) => {
      if (this.refNestable) {
         switch (collapseCase) {
            case 0:
               this.refNestable.collapse("NONE");
               break;
            case 1:
               this.refNestable.collapse("ALL");
               break;
            case 2:
               this.refNestable.collapse([1]);
               break;
			default:
				this.refNestable.collapse("NONE");   
         }
      }
   };

   renderItem = ({ item, collapseIcon, handler }) => {
      return (
         <div>
            {handler}
            {collapseIcon}
            {item.text}
         </div>
      );
   };

   render() {
      const { defaultCollapsed } = this.state;

      return (
         <div>
            <Nestable
               items={items}
               collapsed={defaultCollapsed}
               renderItem={this.renderItem}
               ref={(el) => (this.refNestable = el)}
			   maxDepth ={30}
            />
         </div>
      );
   }
}

export default NTable;
