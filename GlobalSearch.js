import { modal } from "helpers/common";
import React, {useRef, useEffect} from "react";

// const SHORTCUT_KEY = ["Control b", "Escape"];
const SHORTCUT_KEY = "b";


const GlobalSearch = () => {

  const handler = (key) => {
    if(key.ctrlKey && key.key === SHORTCUT_KEY) {
        modal("#GlobalSearchModal")
    }

    // if (SHORTCUT_KEY.includes(String(key))) {
    // }
  };

  useEventListener("keydown", handler);

  return (
    <>
    <div className="modal fade" id="GlobalSearchModal" tabindex="-1" role="dialog" aria-labelledby="GlobalSearchModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg overflow-hidden" role="dialog">
            <div className="modal-content" style={{height:600}}>
            <div className="modal-header">
                <h5 className="modal-title" id="GlobalSearchModal">Global Search by Anything</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body overflow-auto">
                <div className="form-group px-3 py-1">
                    <input 
                    id="GlobalSearchInput" 
                    className="form-control" 
                    placeholder="Search Here..."
                    autoFocus={true}
                    />
                </div>

                <hr/>

                <div className="mt-2">
                    <h5> Heading 1 </h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span class="badge badge-primary badge-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Dapibus ac facilisis in
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </ul>
                </div>

                <hr/>

                <div className="mt-2">
                    <h5> Heading 2 </h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span class="badge badge-primary badge-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Dapibus ac facilisis in
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default GlobalSearch;


const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();
  
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(() => {
      const eventListener = (event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

