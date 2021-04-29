// (C) 2007-2019 GoodData Corporation
import { BulletChart } from "@gooddata/sdk-ui-charts";
import { BulletChartWithAllMeasuresAndViewBy } from "./base";
import { ScenarioGroupNames } from "../_infra/groupNames";
import { responsiveScenarios } from "../_infra/responsiveScenarious";
import { IResponsiveSize } from "../_infra/responsiveScenarious";
import { ReferenceLdm } from "@gooddata/reference-workspace";

const sizeVariantsSimple: Array<IResponsiveSize> = [
    { label: "without x axis title", width: 650, height: 120 },
    { label: "without x axis labels, with x axis title", width: 650, height: 80 },
];

const simpleScenarios = responsiveScenarios(
    "BulletChart",
    ScenarioGroupNames.Responsive,
    BulletChart,
    {
        primaryMeasure: ReferenceLdm.Won,
        config: { enableCompactSize: true, legend: { enabled: false } },
    },
    sizeVariantsSimple,
);

const sizeVariantsComplex: Array<IResponsiveSize> = [
    { label: "without x axis, without y axis (very small container)", width: 80, height: 50 },
    { label: "without x axis labels", width: 650, height: 50 },
    { label: "without y axis labels", width: 140, height: 354 },
    { label: "without y axis title", width: 165, height: 354 },
];

const complexScenarios = responsiveScenarios(
    "BulletChart",
    ScenarioGroupNames.Responsive,
    BulletChart,
    {
        ...BulletChartWithAllMeasuresAndViewBy,
        config: { enableCompactSize: true, legend: { enabled: false } },
    },
    sizeVariantsComplex,
);

export default [...complexScenarios, ...simpleScenarios];