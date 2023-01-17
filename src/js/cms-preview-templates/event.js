import React from "react";
import ReactMarkdown from 'react-markdown'
import format from "date-fns/format";

export default class EventPreview extends React.Component {
  render() {
    const {entry} = this.props;

    return (
        <div class="w-full mt-4 border-t border-rered flex flex-col text-rered px-2">          
            <div class="w-full flex flex-row">
                <div class="w-1/4 md:w-1/5 py-4 md:border-r border-rered">
                    Date
                </div>  
                <div class="w-3/4 md:w-4/5 py-4 pl-4">
                    Évènements 
                </div>
            </div>
            <div class="w-full flex flex-row">
                <div class="w-1/4 md:w-1/5 py-4 md:border-r border-rered flex flex-col justify-center">

                    <span class="text-xs">
                        <ReactMarkdown>{ format(entry.getIn(["data", "date"]), "dddd") }</ReactMarkdown>
                    </span>   
                    <span class="text-xl md:text-2xl font-bold">
                        <ReactMarkdown>{ format(entry.getIn(["data", "date"]), "DD") }</ReactMarkdown>
                    </span>  
                    <span class="text-sm md:text-md capitalize">
                        <ReactMarkdown>{ format(entry.getIn(["data", "date"]), "MMMM") }</ReactMarkdown>
                    </span>           
                </div>
                <div class="w-3/4 md:w-4/5 pl-4 py-2 flex">
                    
                    <a href={ entry.getIn(["data", "link"]) } class="h-full w-full" target="_blank">
                    
                    <div class="p-4 w-full flex flex-row shadow-md rounded-xl items-center text-sm md:text-base">                                        
                        <span class="font-bold"><ReactMarkdown>{ entry.getIn(["data", "place"]) }</ReactMarkdown></span>
                        <span class="mx-2">/</span>
                        <span class=""><ReactMarkdown>{ entry.getIn(["data", "name"]) }</ReactMarkdown></span>                                        
                    </div>
                    
                    </a>
                    
                </div>
            </div>                                    
        </div>
    );
  }
}