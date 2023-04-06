# What is this?
These are some personal notes on how to use react-chartjs-2 that I found helpful for myself

# If you view this on github
The code below will render very ugly on github. I suggest you to view the content in a markdown preview, that supports `style` tags.

# Example and documentation for react-chartjs-2

IMPORTANT: **react-chartjs-*2*** currently (2022) **runs on chart.js version *3***

## Code

- const [options](https://www.chartjs.org/docs/3.1.0/api/classes/chart.html#options) = {
  - scales: {
    - [x](https://www.chartjs.org/docs/3.1.0/api/interfaces/cartesianscaleoptions.html): {
      - [grid](https://www.chartjs.org/docs/3.1.0/api/interfaces/gridlineoptions.html): {
        - display: false,
      - },
    - },
    - [y](https://www.chartjs.org/docs/3.1.0/api/interfaces/cartesianscaleoptions.html): { // don't use `yAxes`. It has less customization features (like min/max)
      - min: 5, // start from y=5, instead of 0
      - [grid](https://www.chartjs.org/docs/3.1.0/api/interfaces/gridlineoptions.html): {
        - color: ['red', 'blue', 'yellow', 'black'],
        - borderWidth: 5,
        - drawOnCharArea: false,
      - },
      - [ticks](https://www.chartjs.org/docs/3.1.0/api/interfaces/cartesianscaleoptions.html#ticks){
      - }
    - },
  - },

  - plugins: {
    - [legend](https://www.chartjs.org/docs/3.1.0/api/interfaces/plugin.html): {
      - position: 'top' as const,
      - display: true, // [false = hide legend](https://stackoverflow.com/a/67912430/6702598)
    - },
    - [title](https://www.chartjs.org/docs/3.1.0/api/interfaces/plugin.html): {
      - display: false,
    - },
    - [tooltip](https://www.chartjs.org/docs/latest/configuration/tooltip.html): {
      - [// HowTo: completely customize tooltip](https://www.chartjs.org/docs/3.6.0/samples/tooltip/html.html)
      - enabled: true,
      - [callback](https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks): {
        - footer: () => {
          - return "this is shown in the bottom";
        - },
      - },
    - },
  - },
- };
- const [chartData](https://www.chartjs.org/docs/3.1.0/api/interfaces/chartdata.html) = {
    - labels: ['one','two','three','four','five','six','seven'],
    - [datasets](https://www.chartjs.org/docs/3.1.0/api/#chartdataset): [
      - {
        - label: 'label of dataset 1',
        - data: [1,2,3,4,5,6,7],
      - },
      - {
        - data: [3,3,3,3,3,3,3],
        - backgroundColor: 'red',
      - },
    - ],
  - };
- &nbsp;
- &nbsp;
- [&lt;Bar](https://www.chartjs.org/docs/3.1.0/api/classes/chart.html)
 options={options} [data](https://www.chartjs.org/docs/3.1.0/api/classes/chart.html#data)={chartData} height={150} /&gt;


<style>
  ul li {
    list-style-type: none;
  }

  ul{ padding-left: 0px; }
  ul ul { padding-left: 1em; }
  ul ul ul { padding-left: 1em; }
  ul ul ul ul { padding-left: 1em; }
  ul ul ul ul ul { padding-left: 1em; }
</style>