import sanityClient from "@sanity/client";
import React, { Component, useState, useEffect } from "react";

const ccmSanityClient = sanityClient({
  projectId: "ip162aeb",
  dataset: "production",
  useCdn: true
});

const useSanityQuery = (query = "") => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const response = await ccmSanityClient.fetch(query);
                if (mounted) {
                    setData(response);
                    setIsLoading(false);
                }
            } catch (e) {
                if (mounted) {
                    setError(e);
                    setIsLoading(false);
                }
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

    return {
        data,
        isLoading,
        error
    };
};

export function SanityQuery(props) {
    const { children, query, ...options } = props;
    const result = useSanityQuery(query);
    return children && result ? children(result) : null;
}