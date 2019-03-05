/*
 * Copyright (C) Highsoft AS
 */

import React from "react";
import Highcharts from "highcharts";

/**
 * Properties for a Highcharts component
 */
export interface HighchartsReactProps {

    /* *
     *
     *  Properties
     *
     * */

    /**
     * Indexer for custom properties
     */
    [key: string]: any;

    /**
     * Flag for `Chart.update` call (Default: true)
     */
    allowChartUpdate?: boolean;

    /**
     * Reference to the chart factory (Default: chart)
     */
    constructorType?: keyof Highcharts;

    /**
     * Highcharts namespace
     */
    highcharts?: Highcharts;

    /**
     * Highcharts options
     */
    options?: Highcharts.Options;

    /**
     * Flags for `Chart.update` call: redraw, oneToOne, and animation. (Default:
     * [true, true, true]
     */
    updateArgs?: Array<boolean>;

    /* *
     *
     *  Functions
     *
     * */

    /**
     * Callback for the chart factory
     */
    callback?: Highcharts.ChartCallbackFunction;
}

/**
 * Highcharts component for React
 */
export default
class HighchartsReact
extends React.PureComponent<HighchartsReactProps> {

    /* *
     *
     *  Constructor
     *
     * */

    /**
     * Creates a new Highcharts component.
     *
     * @param props
     *        Optional React props
     */
    constructor(props: HighchartsReactProps);

    /* *
     *
     *  Properties
     *
     * */

    /**
     * Chart reference
     */
    public readonly chart: Highcharts.Chart;

    /**
     * React reference
     */
    public readonly container: React.RefObject;

    /* *
     *
     *  Functions
     *
     * */

    /**
     * Creates the chart.
     */
    componentDidMount(): void;

    /**
     * Updates the chart. Can be turned off in the optional React props.
     */
    componentDidUpdate(): void;

    /**
     * Destroys the chart right before the component gets destroyed.
     */
    componentWillUnmount(): void;

    /**
     * Places the chart into the React container.
     */
    render(): React.ReactNode;
}
