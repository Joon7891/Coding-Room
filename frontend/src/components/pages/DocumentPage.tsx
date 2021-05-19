import React, { useState, useCallback } from "react";
import { useParams } from "react-router";

function DocumentPage() {
  const { uid } = useParams<{ uid: string }>();

  return <div>{uid}</div>;
}

export default DocumentPage;
