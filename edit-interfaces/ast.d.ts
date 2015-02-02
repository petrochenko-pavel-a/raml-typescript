/**
 * source file reference
 */ 
export interface CodeSource extends SourceNode{
    
	/**
 	* path to source file  
 	*/     
    path: string
	/**
 	* file content
 	*/
	content: string	
	
	/**
 	* raml source language 
 	*/	
	language:string;
}


/**
 * generic AST node
 */
export interface SourceNode extends HasLocation{

	/**
	 * list of children - immutable
	 */
	children: SourceNode[]
	
	/**
	 * mutator adds new node to AST
	 */
	addChild(node:SourceNode);
	
	/**
	 * mutator removes existing child
	 */
	removeChild(node:SourceNode);
	
	/**
	* mutator replaces child
	*/		
	replaceNode(original:SourceNode,newOne:SourceNode);
	
	/**
	* list of references to current node
	*/	
	references:NodeReference[]
}

/**
 *  generic range in source file (represents a source node, anchor usage or include)
 */
export interface HasLocation{
	
	/**
	* Parent node null - for  new nodes;
	*/
	parent:SourceNode
	/**
	* position in child nodes array -1 for new nodes
	*/		
	position: number 
	/**
	* start offset nodes array -1 for new nodes
	*/	
	startOffset: number
	/**
	* end offset nodes array -1 for new nodes
	*/	
	endOffset: number
	
	/**
	* file reference
	*/	
	unit:CodeSource	
}

export interface NodeReference extends HasLocation{
	
}

/**
 * refererence to node by include statement
 */
export interface IncludeReference extends NodeReference{
	
	includePath:String
}

/**
 * reference to node by anchor
 */
export interface Anchor extends NodeReference{
	anchorName:String;
}


/**
* list of AST nodes (one of the forms to which included file may be parsed)
*/
export interface NodeList extends SourceNode{
	
		
}

/**
* string literal node
*/
export interface StringLiteral extends Node{
	
	value: string
}
/**
* number literal node
*/
export interface NumberLiteral extends Node{
	value: NumberLiteral
}