import React from "react";
import ReactMarkdown from 'react-markdown'
import format from "date-fns/format";

const TagEntry = ({tags}) =>
    <li className="mr-2 text-sm inline-block mb-4">
        <a href="/" className="bg-rebeige rounded-full py-1 px-6">
            <span className="text-rered uppercase font-semibold">#{ tags }</span>
        </a>
    </li>;

const TagEntries = ({data}) => data && data.length > 0
    ? <ul className="text-rered mt-4">
        {data.map((tags) => <TagEntry tags={tags} />)}
    </ul>
    : "";

export default class ActuPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let illu = getAsset(entry.getIn(["data", "illu"]));
    const entryTagEntries = entry.getIn(["data", "tags"]);
    const tagEntries = entryTagEntries ? entryTagEntries.toJS() : [];

    return <div> 
    <div className="w-11/12 lg:w-4/6 m-auto pt-8 pb-4 flex flex-row px-2 justify-center tracking-tighter">
        <div className="flex flex-col md:flex-row w-full items-center">
            <div className="w-full max-w-xs md:max-w-sm h-full">{ illu && <img className="object-contain object-top w-full h-full" src={ illu } /> }</div>
            <div className="w-full md:pl-4">
                <h2 className="mt-4 md:mt-0 text-2xl md:text-3xl font-bold uppercase text-redarkgrey">
                    { entry.getIn(["data", "title"]) }
                </h2>
                <p className="my-4">
                    {/*  Date format ? */}
                    <span className="text-rered">le { format(entry.getIn(["data", "date"]), "DD.MM.YYYY") }</span>
                </p>
                <TagEntries data={tagEntries} />
            </div>
        </div>
    </div>
    <div className="w-11/12 lg:w-4/6 m-auto text-rered mt-2 pb-8 px-2 justify-center flex flex-row flex-wrap">
        <span class="w-full border-t-4 border-rebeige mb-4 md:mb-8 md:mt-4"></span>
        <div className="w-full mb-8 text-rered text-xl md:text-2xl markdown tracking-tighter">
            <ReactMarkdown>{ entry.getIn(["data", "intro"]) }</ReactMarkdown>
        </div>
        <div className="w-full markdown text-redarkgrey text-md md:text-lg font-medium tracking-tighter">
            <ReactMarkdown>{ entry.getIn(["data", "body"]) }</ReactMarkdown>
        </div>
    </div> 
    </div>;

  }
}