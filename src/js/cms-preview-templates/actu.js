import React from "react";
import ReactMarkdown from 'react-markdown'
import format from "date-fns/format";

const TagEntry = ({tags}) =>
    <li className="mr-2 text-sm inline-block mb-4">
        <a href="/" className="bg-repink rounded-full py-1 px-6">
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

    /*return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
    </div>;*/

    return <div> 
    <div className="w-11/12 lg:w-4/6 m-auto pt-8 pb-4 flex flex-row px-2 justify-center">
        <div className="flex flex-col md:flex-row w-full items-center">
            <div className="w-full h-full">{ illu && <img className="object-contain object-top w-full h-full" src={ illu } /> }</div>
            <div className="w-full md:pl-4">
                <h2 className="text-3xl font-medium text-redarkgrey">
                    { entry.getIn(["data", "title"]) }
                </h2>
                <p className="">
                    {/*  Date format ? */}
                    <span className="text-rered">le { format(entry.getIn(["data", "date"]), "DD.MM.YYYY") }</span>
                    <span className="text-redarkpink"> par </span>
                    <span className="uppercase text-redarkpink font-semibold">
                    { entry.getIn(["data", "author"]) }
                    </span>
                </p>
                <TagEntries data={tagEntries} />
                <div className="text-rered markdown"><ReactMarkdown>{ entry.getIn(["data", "intro"]) }</ReactMarkdown></div>
            </div>
        </div>
    </div>
    <div className="w-11/12 lg:w-4/6 m-auto text-rered mt-2 pb-8 px-2 justify-center flex flex-row">
        <div className="w-full markdown">
            <ReactMarkdown>{ entry.getIn(["data", "body"]) }</ReactMarkdown>
        </div>
    </div> 
    </div>;

  }
}