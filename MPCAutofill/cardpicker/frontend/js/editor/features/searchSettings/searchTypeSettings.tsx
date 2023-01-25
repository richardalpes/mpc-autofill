/**
 * A toggle to configure how the search engine matches queries to Cards - either precise or fuzzy (forgiving).
 * This component forms part of the Search Settings modal.
 */

import React from "react";

// @ts-ignore  // TODO: https://github.com/arnthor3/react-bootstrap-toggle/issues/21
import Toggle from "react-bootstrap-toggle";
import { ToggleButtonHeight } from "../../common/constants";

interface SearchTypeSettings {
  localFuzzySearch: boolean;
  setLocalFuzzySearch: {
    (newLocalFuzzySearch: boolean): void;
  };
}

export function SearchTypeSettings(props: SearchTypeSettings) {
  return (
    <>
      <h5>Search Type</h5>
      Configure how closely the search results should match your query.
      <br />
      <br />
      <Toggle
        onClick={() => props.setLocalFuzzySearch(!props.localFuzzySearch)}
        on="Fuzzy (Forgiving) Search"
        onClassName="flex-centre"
        off="Precise Search"
        offClassName="flex-centre"
        onstyle="success"
        offstyle="info"
        width={100 + "%"}
        size="md"
        height={ToggleButtonHeight + "px"}
        active={props.localFuzzySearch}
      />
    </>
  );
}
