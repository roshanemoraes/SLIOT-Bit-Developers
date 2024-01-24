import * as React from "react";
import { useLocation } from 'react-router-dom';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, MarkSeries } from 'react-vis';

const  AdminDetailed = (props) => {
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString();
  const location = useLocation();
  const buttonId = new URLSearchParams(location.search).get('id');
  const BTdata = [
    { x: 35, y: 7 },
    { x: 36, y: 12 },
    { x: 37, y: 3 },
    // Add more data points as needed
    ];

  const HRdata = [
    { x: 72, y: 10 },
    { x: 78, y: 18 },
    { x: 92, y: 15 },
    // Add more data points as needed
    ];

  const BOdata = [
    { x: 88, y: 5 },
    { x: 92, y: 9 },
    { x: 96, y: 18 },
    // Add more data points as needed
    ];

  const ATdata = [
    { x: 28, y: 7 },
    { x: 33, y: 12 },
    { x: 35, y: 8 },
    // Add more data points as needed
    ];

  const Hdata = [
    { x: 42, y: 15 },
    { x: 46, y: 5 },
    { x: 55, y: 12 },
    // Add more data points as needed
    ];

  const CGdata = [
    { x: 0.3, y: 7 },
    { x: 0.8, y: 5 },
    { x: 1.2, y: 12 },
    // Add more data points as needed
    ];

  
  return (
    <>
      <div className="div">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88c0d94f8185042ad61395ab9e4cf83ddae5d4479752bc1f1e83fee6b2cf090b?apiKey=9fb9e78eb1c1477aae06156032301666&"
          className="img"
        /> */}
        <span className="span">
          <span className="span-2">
            <div className="div-2">Health Overview</div>
            <div className="div-15_2">Sector {buttonId}</div>
            {/* <span className="span-3">
              <div className="div-3">
                <div className="div-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c8753a602b1396c920c6e4989c9eb08355235a8bafa2a3c3ec538e1a1658fde?apiKey=9fb9e78eb1c1477aae06156032301666&"
                    className="img-2"
                  />
                </div>
                <div className="div-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f8731000ab24a758da186ef7b73eb423a4aee8d8392eb5dc245616c8e03be8?apiKey=9fb9e78eb1c1477aae06156032301666&"
                    className="img-3"
                  />
                </div>
              </div>
              <div className="div-6">BMI Calculator</div>
            </span> */}
            {/* <span className="span-4">
              <div className="div-7">Last Week</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/753cd2230c41eb5d8dc032f882f64d184d789e7d41b81134146522c2715871bd?apiKey=9fb9e78eb1c1477aae06156032301666&"
                className="img-4"
              />
            </span> */}
          </span>
          <div className="div-8">{formattedDateTime}</div>
          <div className="div-9">
            <div className="div-10">
              <div className="column">
                <div className="div-11">
                  <div className="div-12">
                    <div className="column-2">
                      <div className="div-13">
                        <span className="span-5">
                        <XYPlot width={500} height={450} style={{marginLeft: '400px', marginTop: '0px'}}>
                          <XAxis title="Temperature(C)" style={{ line: { stroke: 'black' } }} />
                          <YAxis title="Count" style={{ line: { stroke: 'black' } }} />

                          <VerticalGridLines style={{ stroke: 'rgba(248, 222, 189, 0.9)' }} />
                          <HorizontalGridLines style={{ stroke: 'rgba(248, 222, 189, 0.9)' }} />

                          <MarkSeries data={BTdata} color="rgba(129, 145, 182, 0.7)" />

                          <rect
                            x={0}
                            y={0}
                            width={300}
                            height={300}
                            style={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                          />
                        </XYPlot>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1c44c64c850e1de4853770f2d75890e60330cb99454ed70194a11435aa450f?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-5"
                          />
                          <div className="div-14">Body Temperature</div>
                        </span>
                        <span className="span-6">
                          <div className="div-15">37</div>
                          <div className="div-16">Celcius</div>
                        </span>
                        <span className="span-7">Normal</span>
                        <span className="span-7.1">
                          <div className="div-15_1">Warnings</div>
                          <div className="div-16_1">0</div>
                          <div className="div-16_2">No messeges</div>
                        </span>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="div-17">
                        <span className="span-8">
                        <XYPlot width={500} height={450} style={{marginLeft: '400px', marginTop: '0px'}}>
                          <XAxis title="BPM" style={{ line: { stroke: 'black' } }} />
                          <YAxis title="Count" style={{ line: { stroke: 'black' } }} />

                          <VerticalGridLines style={{ stroke: 'rgba(214, 128, 151, 0.3)' }} />
                          <HorizontalGridLines style={{ stroke: 'rgba(214, 128, 151, 0.3)' }} />

                          <MarkSeries data={HRdata} color="rgba(129, 145, 182, 0.7)" />

                          <rect
                            x={0}
                            y={0}
                            width={300}
                            height={300}
                            style={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                          />
                        </XYPlot>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8523905baab42f3e20868e0717e3393a7558a87175c5d8d00f7182238b487541?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-7"
                          />
                          <div className="div-18">Heart Rate</div>
                        </span>
                        <span className="span-9">
                          <div className="div-19">98</div>
                          <div className="div-20">BPM</div>
                        </span>
                        <span className="span-10">Normal</span>
                        <span className="span-7.1">
                          <div className="div-15_1">Warnings</div>
                          <div className="div-16_1">1</div>
                          <div className="div-16_2">High BPM for {HRdata[2].y} workers</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="div-9">
            <div className="div-10">
              <div className="column">
                <div className="div-11">
                  <div className="div-12">
                    <div className="column-4">
                      <div className="div-21">
                        <span className="span-11">
                        <XYPlot width={500} height={450} style={{marginLeft: '400px', marginTop: '0px'}}>
                          <XAxis title="Percentage(%)" style={{ line: { stroke: 'black' } }} />
                          <YAxis title="Count" style={{ line: { stroke: 'black' } }} />

                          <VerticalGridLines style={{ stroke: 'rgba(99, 153, 176, 0.3)' }} />
                          <HorizontalGridLines style={{ stroke: 'rgba(99, 153, 176, 0.3)' }} />

                          <MarkSeries data={BOdata} color="rgba(129, 145, 182, 0.7)" />

                          <rect
                            x={0}
                            y={0}
                            width={300}
                            height={300}
                            style={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                          />
                        </XYPlot>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ab879d2df6b1568de6cc5a8a3c014026ffe06f29f972635a3c39781ee1dc73?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-9"
                          />
                          <div className="div-22">Blood Oxygen</div>
                        </span>
                        <span className="span-12">
                          <div className="div-23">96</div>
                          {/* <div className="div-24">/ 72</div> */}
                          <div className="div-20">%</div>
                        </span>
                        <span className="span-13">Normal</span>
                        <span className="span-7.1">
                          <div className="div-15_1">Warnings</div>
                          <div className="div-16_1">1</div>
                          <div className="div-16_2">Low SpO2 level for {BOdata[0].y} workers</div>
                        </span>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="div-13">
                        <span className="span-5">
                        <XYPlot width={500} height={450} style={{marginLeft: '400px', marginTop: '0px'}}>

                          <XAxis title="Temperature(C)" style={{ line: { stroke: 'black' } }} />
                          <YAxis title="Count" style={{ line: { stroke: 'black' } }} />

                          <VerticalGridLines style={{ stroke: 'rgba(248, 222, 189, 0.9)' }} />
                          <HorizontalGridLines style={{ stroke: 'rgba(248, 222, 189, 0.9)' }} />

                          <MarkSeries data={ATdata} color="rgba(129, 145, 182, 0.7)" />

                          <rect
                            x={0}
                            y={0}
                            width={300}
                            height={300}
                            style={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                          />
                        </XYPlot>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1c44c64c850e1de4853770f2d75890e60330cb99454ed70194a11435aa450f?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-5"
                          />
                          <div className="div-14">Ambient Temperature</div>
                        </span>
                        <span className="span-6">
                          <div className="div-15">32</div>
                          <div className="div-16">Celcius</div>
                        </span>
                        <span className="span-7">Normal</span>
                        <span className="span-7.1">
                          <div className="div-15_1">Warnings</div>
                          <div className="div-16_1">0</div>
                          <div className="div-16_2">No messeges</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="div-9">
            <div className="div-10">
              <div className="column">
                <div className="div-11">
                  <div className="div-12">
                    <div className="column-3">
                      <div className="div-17">
                        <span className="span-8">
                        <XYPlot width={500} height={450} style={{marginLeft: '400px', marginTop: '0px'}}>
                          <XAxis title="Percentage(%)" style={{ line: { stroke: 'black' } }} />
                          <YAxis title="Count" style={{ line: { stroke: 'black' } }} />

                          <VerticalGridLines style={{ stroke: 'rgba(214, 128, 151, 0.3)' }} />
                          <HorizontalGridLines style={{ stroke: 'rgba(214, 128, 151, 0.3)' }} />

                          <MarkSeries data={Hdata} color="rgba(129, 145, 182, 0.7)" />

                          <rect
                            x={0}
                            y={0}
                            width={300}
                            height={300}
                            style={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                          />
                        </XYPlot>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8523905baab42f3e20868e0717e3393a7558a87175c5d8d00f7182238b487541?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-7"
                          />
                          <div className="div-18">Humidity</div>
                        </span>
                        <span className="span-9">
                          <div className="div-19">47</div>
                          <div className="div-20">%</div>
                        </span>
                        <span className="span-10">Normal</span>
                        <span className="span-7.1">
                          <div className="div-15_1">Warnings</div>
                          <div className="div-16_1">1</div>
                          <div className="div-16_2">High level for {Hdata[2].y} workers</div>
                        </span>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="div-21">
                        <span className="span-11">
                        <XYPlot width={500} height={450} style={{marginLeft: '400px', marginTop: '0px'}}>
                          <XAxis title="Percentage(%)" style={{ line: { stroke: 'black' } }} />
                          <YAxis title="Count" style={{ line: { stroke: 'black' } }} />

                          <VerticalGridLines style={{ stroke: 'rgba(99, 153, 176, 0.3)' }} />
                          <HorizontalGridLines style={{ stroke: 'rgba(99, 153, 176, 0.3)' }} />

                          <MarkSeries data={CGdata} color="rgba(129, 145, 182, 0.7)" />

                          <rect
                            x={0}
                            y={0}
                            width={300}
                            height={300}
                            style={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                          />
                        </XYPlot>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ab879d2df6b1568de6cc5a8a3c014026ffe06f29f972635a3c39781ee1dc73?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-9"
                          />
                          <div className="div-22">Combustible Gases</div>
                        </span>
                        <span className="span-12">
                          <div className="div-23">0.9</div>
                          {/* <div className="div-24">/ 72</div> */}
                          <div className="div-20">%</div>
                        </span>
                        <span className="span-13">Normal</span>
                        <span className="span-7.1">
                          <div className="div-15_1">Warnings</div>
                          <div className="div-16_1">1</div>
                          <div className="div-16_2">High level for {CGdata[2].y} workers</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="div-45">
            <div className="div-46">
              <div className="column-8">
                {/* <div className="div-47">
                  <div className="div-48">
                    <span className="span-22">
                      <span className="span-23">
                        <div className="div-49">Activity Growth</div>
                        <span className="span-24">
                          <div className="div-50">Jan 2021</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/476544992284d703847ff6aa09526e440ff61e1177adb7bc33337bf42b783c45?apiKey=9fb9e78eb1c1477aae06156032301666&"
                            className="img-13"
                          />
                        </span>
                      </span>
                      <div className="div-51">80%</div>
                      <div className="div-52" />
                      <div className="div-53">
                        <div className="div-54">
                          <div className="div-55">
                            <div className="div-56" />
                            <div className="div-57" />
                          </div>
                          <div className="div-58">
                            <div className="div-59">
                              <div className="div-60" />
                              <div className="div-61" />
                            </div>
                            <div className="div-62">
                              <div className="div-63">
                                <div className="div-64" />
                                <div className="div-65" />
                              </div>
                              <div className="div-66">
                                <div className="div-67">
                                  <div className="div-68" />
                                  <div className="div-69" />
                                </div>
                                <div className="div-70">
                                  <div className="div-71" />
                                  <div className="div-72" />
                                </div>
                              </div>
                            </div>
                            <div className="div-73">
                              <div className="div-74">
                                <div className="div-75">
                                  <div className="div-76" />
                                  <div className="div-77" />
                                </div>
                                <div className="div-78">
                                  <div className="div-79" />
                                  <div className="div-80" />
                                </div>
                              </div>
                              <div className="div-81">
                                <div className="div-82" />
                                <div className="div-83" />
                              </div>
                            </div>
                            <div className="div-84">
                              <div className="div-85" />
                              <div className="div-86" />
                            </div>
                          </div>
                        </div>
                        <div className="div-87">
                          <div className="div-88" />
                          <div className="div-89" />
                          <div className="div-90" />
                        </div>
                      </div>
                      <div className="div-91">
                        <div className="div-92">
                          <div className="div-93" />
                          <div className="div-94" />
                          <div className="div-95" />
                        </div>
                        <div className="div-96">
                          <div className="div-97">
                            <div className="div-98" />
                            <div className="div-99">
                              <div className="div-100" />
                              <div className="div-101">
                                <div className="div-102" />
                                <div className="div-103" />
                              </div>
                            </div>
                          </div>
                          <div className="div-104">
                            <div className="div-105">
                              <div className="div-106">
                                <div className="div-107" />
                                <div className="div-108" />
                              </div>
                              <div className="div-109">
                                <div className="div-110" />
                                <div className="div-111" />
                              </div>
                            </div>
                            <div className="div-112" />
                            <div className="div-113">
                              <div className="div-114" />
                              <div className="div-115" />
                              <div className="div-116" />
                            </div>
                          </div>
                        </div>
                        <div className="div-117">
                          <div className="div-118" />
                          <div className="div-119" />
                          <div className="div-120" />
                        </div>
                      </div>
                      <div className="div-121">
                        <div className="div-122" />
                        <div className="div-123" />
                      </div>
                    </span>
                    <div className="div-124">
                      <div className="div-125">
                        <span className="span-25">
                          <div className="div-126">60%</div>
                          <div className="div-127" />
                        </span>
                        <span className="span-26">
                          <div className="div-128">40%</div>
                          <div className="div-129" />
                        </span>
                        <span className="span-27">
                          <div className="div-130">20%</div>
                          <div className="div-131" />
                        </span>
                      </div>
                      <div className="div-132">
                        <div className="div-133" />
                        <div className="div-134">
                          <div className="div-135" />
                          <div className="div-136">
                            <div className="div-137" />
                            <div className="div-138" />
                          </div>
                        </div>
                      </div>
                      <div className="div-139" />
                      <div className="div-140">
                        <div className="div-141" />
                        <div className="div-142" />
                      </div>
                      <div className="div-143">
                        <div className="div-144" />
                        <div className="div-145" />
                        <div className="div-146" />
                      </div>
                    </div>
                    <span className="span-28">
                      <div className="div-147" />
                      <div className="div-148">Aerobics</div>
                      <div className="div-149" />
                      <div className="div-150">Yoga</div>
                      <div className="div-151" />
                      <div className="div-152">Meditation</div>
                    </span>
                  </div>
                  <span className="span-29">
                    <div className="div-153">Upcoming Appointment</div>
                    <span className="span-30">August 14, 2021</span>
                    <div className="div-154">Consultation with Dr. James</div>
                  </span>
                </div> */}
              </div>
              {/* <div className="column-9">
                <span className="span-31">
                  <div className="div-155">Body Measurements</div>
                  <div className="div-156">Last checked 2 Days Ago</div>
                  <span className="span-32">Inverted Triangle Body Shape</span>
                  <span className="span-33">
                    <div className="div-157">Chest (in)</div>
                    <span className="span-34">
                      <div className="div-158">44.5</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/158e38ef118f22898080308c9e71e9e35e9197fe6eaec5ff781ab83c307b533d?apiKey=9fb9e78eb1c1477aae06156032301666&"
                        className="img-14"
                      />
                    </span>
                  </span>
                  <span className="span-35">
                    <div className="div-159">Waist (in)</div>
                    <span className="span-36">
                      <div className="div-160">34</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/116633e65fc0db7c809b606e28a57e91b18acfd2ffe6d66a8e8d18a84f24a28a?apiKey=9fb9e78eb1c1477aae06156032301666&"
                        className="img-15"
                      />
                    </span>
                  </span>
                  <span className="span-37">
                    <div className="div-161">Hip (in)</div>
                    <span className="span-38">
                      <div className="div-162">42.5</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bcc7f11c7e6e10d38e486f9d3c0c914cb54b556a7edfd0bbb0e979eb4e80eaa?apiKey=9fb9e78eb1c1477aae06156032301666&"
                        className="img-16"
                      />
                    </span>
                  </span>
                </span>
              </div> */}
              {/* <div className="column-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9cf0711-b603-4eda-9b4e-245090243a90?apiKey=9fb9e78eb1c1477aae06156032301666&"
                  className="img-17"
                />
              </div> */}
            </div>
          </div>
        </span>
      </div>
      <style jsx>{`
        .div {
          border-radius: 40px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 4px 90px 0px rgba(0, 0, 0, 0.06);
          background-color: #fffcf8;
          display: flex;
          padding-right: 30px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .img {
          aspect-ratio: 0.1;
          object-fit: contain;
          object-position: center;
          width: 101px;
          overflow: hidden;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img {
            display: none;
          }
        }
        .span {
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .span {
            max-width: 100%;
          }
        }
        .span-2 {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          margin-left: 40px;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .span-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-2 {
          color: #303030;
          align-self: center;
          width: 541px;
          margin: auto 0;
          font: 700 48px Mulish, sans-serif;
        }
        .div-2_1 {
          color: #303030;
          align-self: center;
          width: 541px;
          margin: auto 0;
          margin-left: 250px;
          font: 700 48px Mulish, sans-serif;
        }
        .span-3 {
          align-self: center;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        .div-3 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .div-4 {
          align-items: center;
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.02);
          background-color: #fff;
          display: flex;
          aspect-ratio: 1.1818181818181819;
          flex-direction: column;
          justify-content: center;
          padding: 10px 14px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
        }
        .div-5 {
          align-items: center;
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.02);
          background-color: #fff;
          display: flex;
          aspect-ratio: 1.2045454545454546;
          flex-direction: column;
          justify-content: center;
          padding: 10px 15px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
        }
        .div-6 {
          color: #fff;
          margin: auto 0;
          font: 400 22px Mulish, sans-serif;
        }
        .span-4 {
          justify-content: space-between;
          border-radius: 12px;
          border: 1px solid #cacaca;
          display: flex;
          gap: 10px;
          padding: 14px 24px;
        }
        @media (max-width: 991px) {
          .span-4 {
            padding: 0 20px;
          }
        }
        .div-7 {
          color: #cacaca;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            white-space: initial;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-8 {
          color: #6a6969;
          margin-top: 6px;
          margin-left: 40px;
          font: 600 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
          }
        }
        .div-9 {
          margin-top: 16px;
        }
        @media (max-width: 9910px) {
          .div-9 {
            max-width: 1000%;
          }
        }
        .div-10 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 2500px) {
          .div-10 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 140%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-11 {
          margin-top: 10px;
          margin-left: 20px;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-12 {
          gap: 50px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          height: 500px;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-13 {
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
          background-color: #fff;
          display: flex;
          width: 102%;
          flex-grow: 1;
          flex-direction: column;
          margin: 0 auto;
          padding: 20px 20px 10px;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-top: 30px;
          }
        }
        .span-5 {
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }
        @media (max-width: 991px) {
          .span-5 {
            margin-right: 8px;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 58px;
          overflow: hidden;
          max-width: 100%;
          margin-left: -515px;
          margin-top: -400px;
        }
        .div-14 {
          color: #000;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          margin-top: 15px;
          font: 600 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
          }
        }
        .span-6 {
          align-self: stretch;
          display: flex;
          width: 100px;
          margin-top: -350px;
          justify-content: space-between;
          gap: 10px;
        }
        .div-15 {
          color: #272927;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 32px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-15_1 {
          color: #272927;
          flex-grow: 1;
          white-space: nowrap;
          margin-top: 30px;
          font: 400 42px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15_1 {
            white-space: initial;
          }
        }
        .div-15_2 {
          color: #272927;
          flex-grow: 1;
          white-space: nowrap;
          margin-left: 1190px;
          font: 700 48px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15_2 {
            white-space: initial;
          }
        }
        .div-16 {
          color: #818181;
          margin-top: 13px;
          font: 700 16px Mulish, sans-serif;
        }
        .div-16_1 {
          color: #818181;
          margin-top: -55px;
          margin-left: 200px;
          font: 700 56px Mulish, sans-serif;
        }
        .div-16_2 {
          color: #445760;
          margin-top: 10px;
          margin-left: 0px;
          font: 700 26px Mulish, sans-serif;
        }
        .span-7 {
          color: #000;
          border-radius: 4px;
          background-color: #f8debd;
          align-self: stretch;
          width: 370px;
          margin-top: 17px;
          justify-content: center;
          padding: 4px 8px;
          font: 600 12px Mulish, sans-serif;
        }
        .span-7.1 {
          color: #000;
          border-radius: 4px;
          background-color: #ffffff;
          align-self: stretch;
          width: 370px;
          margin-top: 17px;
          justify-content: center;
          padding: 4px 8px;
          font: 600 12px Mulish, sans-serif;
        }
        .img-6 {
          aspect-ratio: 2.37;
          object-fit: contain;
          object-position: center;
          width: 173px;
          overflow: hidden;
          align-self: center;
          margin-top: 10px;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          height: 500px;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-17 {
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
          background-color: #fff;
          display: flex;
          width: 102%;
          flex-grow: 1;
          flex-direction: column;
          margin: 0 auto;
          padding: 20px 20px 12px;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-top: 30px;
          }
        }
        .span-8 {
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 58px;
          overflow: hidden;
          max-width: 100%;
          margin-left: -515px;
          margin-top: -400px;
        }
        .div-18 {
          color: #000;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          margin-top: 15px;
          font: 600 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
          }
        }
        .span-9 {
          align-self: stretch;
          display: flex;
          width: 100px;
          margin-top: -350px;
          justify-content: space-between;
          gap: 10px;
        }
        .div-19 {
          color: #272927;
          font: 400 32px Mulish, sans-serif;
        }
        .div-20 {
          color: #818181;
          align-self: start;
          margin-top: 13px;
          font: 700 16px Mulish, sans-serif;
        }
        .span-10 {
          color: #000;
          border-radius: 4px;
          background-color: #fbf0f3;
          align-self: stretch;
          width: 370px;
          margin-top: 17px;
          justify-content: center;
          padding: 4px 8px;
          font: 600 12px Mulish, sans-serif;
        }
        .img-8 {
          aspect-ratio: 2.44;
          object-fit: contain;
          object-position: center;
          width: 173px;
          overflow: hidden;
          align-self: center;
          margin-top: 10px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-21 {
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
          background-color: #fff;
          display: flex;
          width: 102%;
          flex-grow: 1;
          flex-direction: column;
          margin: 0 auto;
          padding: 20px 20px 12px;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 30px;
          }
        }
        .span-11 {
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 58px;
          overflow: hidden;
          max-width: 100%;
          margin-left: -515px;
          margin-top: -400px;
        }
        .div-22 {
          color: #000;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          margin-top: 15px;
          font: 600 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .span-12 {
          align-self: stretch;
          display: flex;
          width: 100px;
          margin-top: -350px;
          justify-content: space-between;
          gap: 6px;
        }
        .div-23 {
          color: #272927;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 32px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
          }
        }
        .div-24 {
          color: #818181;
          align-self: start;
          margin-top: 13px;
          font: 700 16px Mulish, sans-serif;
        }
        .div-25 {
          color: #818181;
          align-self: start;
          margin-top: 9px;
          flex-grow: 1;
          white-space: nowrap;
          font: 700 12px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-25 {
            white-space: initial;
          }
        }
        .span-13 {
          color: #000;
          border-radius: 4px;
          background-color: #d0fbff;
          align-self: stretch;
          width: 370px;
          margin-top: 17px;
          justify-content: center;
          padding: 4px 8px;
          font: 600 12px Mulish, sans-serif;
        }
        .img-10 {
          aspect-ratio: 2.4;
          object-fit: contain;
          object-position: center;
          width: 173px;
          overflow: hidden;
          align-self: center;
          margin-top: 9px;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 42%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-26 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-27 {
        }
        @media (max-width: 991px) {
          .div-27 {
            max-width: 100%;
          }
        }
        .div-28 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-28 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-29 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-29 {
            margin-top: 20px;
          }
        }
        .span-14 {
          border-radius: 12px;
          background-color: #f8debd;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 14px;
          padding: 18px 7px 18px 20px;
        }
        .div-30 {
          color: #272927;
          margin-top: 30px;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-30 {
            white-space: initial;
          }
        }
        .span-15 {
          align-self: start;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          align-items: center;
        }
        .img-11 {
          aspect-ratio: 4.55;
          object-fit: contain;
          object-position: center;
          width: 100px;
          overflow: hidden;
        }
        .div-31 {
          color: #272927;
          align-self: stretch;
          margin-top: 8px;
          font: 400 16px Mulish, sans-serif;
        }
        .span-16 {
          border-radius: 12px;
          background-color: #d0fbff;
          display: flex;
          margin-top: 20px;
          align-items: end;
          justify-content: space-between;
          gap: 9px;
          padding: 18px 7px 18px 20px;
        }
        .div-32 {
          color: #272927;
          margin-top: 30px;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-32 {
            white-space: initial;
          }
        }
        .span-17 {
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          align-items: center;
        }
        .img-12 {
          aspect-ratio: 4.55;
          object-fit: contain;
          object-position: center;
          width: 100px;
          overflow: hidden;
        }
        .div-33 {
          color: #272927;
          text-align: center;
          align-self: start;
          white-space: nowrap;
          margin: 8px 0 0 17px;
          font: 400 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-33 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 60%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-7 {
            width: 100%;
          }
        }
        .div-34 {
          border-radius: 12px;
          background-color: #4a4949;
          display: flex;
          width: 100%;
          flex-grow: 1;
          flex-direction: column;
          margin: 0 auto;
          padding: 22px 0;
        }
        @media (max-width: 991px) {
          .div-34 {
            margin-top: 20px;
          }
        }
        .span-18 {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
        }
        .div-35 {
          color: #fff;
          align-self: stretch;
          font: 400 16px Mulish, sans-serif;
        }
        .span-19 {
          align-self: stretch;
          display: flex;
          margin-top: 22px;
          padding-right: 8px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .div-36 {
          color: #fff;
          margin: auto 0;
          font: 400 24px Mulish, sans-serif;
        }
        .span-20 {
          color: #000;
          white-space: nowrap;
          border-radius: 8px;
          background-color: #d6ffdd;
          align-self: stretch;
          justify-content: center;
          padding: 6px 10px;
          font: 400 12px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .span-20 {
            white-space: initial;
          }
        }
        .div-37 {
          border-radius: 19px;
          border: 1px solid #fff;
          background-color: #d16564;
          display: flex;
          margin-top: 28px;
          width: 14px;
          height: 8px;
          flex-direction: column;
        }
        .div-38 {
          border-radius: 21px;
          background: linear-gradient(
            90deg,
            #b5d4f1 0%,
            #81e5db 37.77%,
            #e8d284 70.4%,
            #e2798e 100%
          );
          align-self: center;
          display: flex;
          margin-top: 5px;
          width: 250px;
          height: 14px;
          flex-direction: column;
        }
        .span-21 {
          align-self: center;
          display: flex;
          margin-top: 11px;
          width: 250px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        .div-39 {
          color: #fff;
          font: 700 12px Mulish, sans-serif;
        }
        .div-40 {
          color: #fff;
          font: 700 12px Mulish, sans-serif;
        }
        .div-41 {
          color: #fff;
          font: 700 12px Mulish, sans-serif;
        }
        .div-42 {
          color: #fff;
          font: 700 12px Mulish, sans-serif;
        }
        .div-43 {
          color: #fff;
          font: 700 12px Mulish, sans-serif;
        }
        .div-44 {
          background-color: #4f4e4e;
          margin-top: 56px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-44 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-45 {
          margin-top: 16px;
        }
        @media (max-width: 991px) {
          .div-45 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-46 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-46 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-8 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 63%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-8 {
            width: 100%;
          }
        }
        .div-47 {
          display: flex;
          margin-top: 24px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-47 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-48 {
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 24px 0;
        }
        @media (max-width: 991px) {
          .div-48 {
            max-width: 100%;
          }
        }
        .span-22 {
          z-index: 1;
          display: flex;
          flex-direction: column;
          padding: 0 21px 24px 30px;
        }
        @media (max-width: 991px) {
          .span-22 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .span-23 {
          align-self: stretch;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .span-23 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-49 {
          color: #303030;
          flex: 1;
          margin: auto 0;
          font: 700 20px Mulish, sans-serif;
        }
        .span-24 {
          justify-content: space-between;
          border-radius: 12px;
          border: 1px solid #e1e1e1;
          align-self: stretch;
          display: flex;
          gap: 10px;
          padding: 14px 20px;
        }
        .div-50 {
          color: #383838;
          font: 400 16px Mulish, sans-serif;
        }
        .img-13 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-51 {
          color: #a1a1a1;
          align-self: stretch;
          z-index: 1;
          margin-top: 60px;
          font: 700 10px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-51 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-52 {
          background-color: #f2f2f2;
          align-self: stretch;
          margin-top: -5px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-52 {
            max-width: 100%;
          }
        }
        .div-53 {
          align-self: start;
          display: flex;
          margin-left: 90px;
          width: 198px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-53 {
            margin-left: 10px;
          }
        }
        .div-54 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-55 {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-56 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          margin-top: 5px;
          width: 6px;
          height: 28px;
          flex-direction: column;
        }
        .div-57 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 25px;
          flex-direction: column;
        }
        .div-58 {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-59 {
          align-self: start;
          display: flex;
          margin-top: 8px;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-60 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          height: 103px;
          flex-direction: column;
        }
        .div-61 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 16px;
          flex-direction: column;
        }
        .div-62 {
          align-self: start;
          display: flex;
          margin-top: 11px;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-63 {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-64 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 15px;
          flex-direction: column;
        }
        .div-65 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          margin-top: 9px;
          width: 6px;
          height: 11px;
          flex-direction: column;
        }
        .div-66 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .div-67 {
          display: flex;
          flex-direction: column;
        }
        .div-68 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          height: 16px;
          flex-direction: column;
        }
        .div-69 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 77px;
          flex-direction: column;
        }
        .div-70 {
          align-self: start;
          display: flex;
          margin-top: 5px;
          flex-direction: column;
        }
        .div-71 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          height: 31px;
          flex-direction: column;
        }
        .div-72 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 57px;
          flex-direction: column;
        }
        .div-73 {
          align-self: start;
          display: flex;
          margin-top: 6px;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-74 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .div-75 {
          display: flex;
          flex-direction: column;
        }
        .div-76 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 59px;
          flex-direction: column;
        }
        .div-77 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 31px;
          flex-direction: column;
        }
        .div-78 {
          align-self: center;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-79 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 11px;
          flex-direction: column;
        }
        .div-80 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 60px;
          flex-direction: column;
        }
        .div-81 {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-82 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          width: 6px;
          height: 23px;
          flex-direction: column;
        }
        .div-83 {
          border-radius: 10px;
          background-color: #ca6b6e;
          align-self: stretch;
          display: flex;
          width: 6px;
          height: 31px;
          flex-direction: column;
        }
        .div-84 {
          align-self: stretch;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-85 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          height: 42px;
          flex-direction: column;
        }
        .div-86 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 85px;
          flex-direction: column;
        }
        .div-87 {
          align-self: end;
          display: flex;
          margin-top: 28px;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-88 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 25px;
          flex-direction: column;
        }
        .div-89 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 65px;
          flex-direction: column;
        }
        .div-90 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 34px;
          flex-direction: column;
        }
        .div-91 {
          align-self: end;
          z-index: 1;
          display: flex;
          width: 166px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          margin: -158px 40px 0 0;
        }
        @media (max-width: 991px) {
          .div-91 {
            margin-right: 10px;
          }
        }
        .div-92 {
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-93 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 53px;
          flex-direction: column;
        }
        .div-94 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 58px;
          flex-direction: column;
        }
        .div-95 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 31px;
          flex-direction: column;
        }
        .div-96 {
          align-self: start;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-97 {
          display: flex;
          padding-right: 32px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-97 {
            padding-right: 20px;
          }
        }
        .div-98 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 53px;
          flex-direction: column;
          margin: auto 0;
        }
        .div-99 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: end;
        }
        .div-100 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 12px;
          flex-direction: column;
        }
        .div-101 {
          align-self: stretch;
          display: flex;
          margin-top: 8px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .div-102 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 25px;
          flex-direction: column;
          margin: auto 0;
        }
        .div-103 {
          border-radius: 10px;
          background-color: #478f96;
          align-self: stretch;
          display: flex;
          width: 6px;
          height: 42px;
          flex-direction: column;
        }
        .div-104 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .div-105 {
          display: flex;
          flex-direction: column;
        }
        .div-106 {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-107 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          width: 6px;
          height: 21px;
          flex-direction: column;
        }
        .div-108 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          width: 6px;
          height: 21px;
          flex-direction: column;
        }
        .div-109 {
          display: flex;
          margin-top: 5px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-110 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          width: 6px;
          height: 60px;
          flex-direction: column;
        }
        .div-111 {
          border-radius: 10px;
          background-color: #ca6b6e;
          align-self: stretch;
          display: flex;
          width: 6px;
          height: 63px;
          flex-direction: column;
        }
        .div-112 {
          border-radius: 10px;
          background-color: #ca6b6e;
          align-self: start;
          display: flex;
          margin-top: 7px;
          width: 6px;
          height: 85px;
          flex-direction: column;
        }
        .div-113 {
          align-self: start;
          display: flex;
          margin-top: 4px;
          flex-direction: column;
        }
        .div-114 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 12px;
          flex-direction: column;
        }
        .div-115 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 21px;
          flex-direction: column;
        }
        .div-116 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 39px;
          flex-direction: column;
        }
        .div-117 {
          align-self: start;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-118 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 25px;
          flex-direction: column;
        }
        .div-119 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 58px;
          flex-direction: column;
        }
        .div-120 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 8px;
          height: 57px;
          flex-direction: column;
        }
        .div-121 {
          align-self: center;
          display: flex;
          margin-top: -146px;
          width: 6px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-122 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          height: 49px;
          flex-direction: column;
        }
        .div-123 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          margin-top: 8px;
          height: 65px;
          flex-direction: column;
        }
        .div-124 {
          align-self: start;
          display: flex;
          width: 416px;
          max-width: 100%;
          flex-direction: column;
          margin: -141px 0 0 30px;
        }
        @media (max-width: 991px) {
          .div-124 {
            margin-left: 10px;
          }
        }
        .div-125 {
          align-self: start;
          z-index: 1;
          display: flex;
          width: 64px;
          max-width: 100%;
          flex-direction: column;
        }
        .span-25 {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-126 {
          color: #a1a1a1;
          margin-top: 17px;
          font: 700 10px Mulish, sans-serif;
        }
        .div-127 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 22px;
          flex-direction: column;
        }
        .span-26 {
          display: flex;
          margin-top: 6px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .div-128 {
          color: #a1a1a1;
          margin: auto 0;
          font: 700 10px Mulish, sans-serif;
        }
        .div-129 {
          border-radius: 10px;
          background-color: #478f96;
          align-self: stretch;
          display: flex;
          width: 6px;
          height: 67px;
          flex-direction: column;
        }
        .span-27 {
          display: flex;
          margin-top: 8px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .div-130 {
          color: #a1a1a1;
          margin: auto 0;
          font: 700 10px Mulish, sans-serif;
        }
        .div-131 {
          border-radius: 10px;
          background-color: #ca6b6e;
          align-self: stretch;
          display: flex;
          width: 6px;
          height: 36px;
          flex-direction: column;
        }
        .div-132 {
          align-self: end;
          display: flex;
          margin-top: -124px;
          width: 70px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        .div-133 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 64px;
          flex-direction: column;
        }
        .div-134 {
          align-self: start;
          display: flex;
          margin-top: 5px;
          flex-direction: column;
          align-items: end;
        }
        .div-135 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 25px;
          flex-direction: column;
        }
        .div-136 {
          align-self: stretch;
          display: flex;
          margin-top: 8px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-137 {
          border-radius: 10px;
          background-color: #d08726;
          display: flex;
          width: 6px;
          height: 25px;
          flex-direction: column;
        }
        .div-138 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          width: 6px;
          height: 21px;
          flex-direction: column;
        }
        .div-139 {
          border-radius: 10px;
          background-color: #ca6b6e;
          align-self: end;
          z-index: 1;
          display: flex;
          width: 6px;
          height: 57px;
          flex-direction: column;
        }
        .div-140 {
          align-self: end;
          display: flex;
          width: 38px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          margin: -52px 77px 0 0;
        }
        @media (max-width: 991px) {
          .div-140 {
            margin-right: 10px;
          }
        }
        .div-141 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          height: 21px;
          flex-direction: column;
          flex: 1;
        }
        .div-142 {
          border-radius: 10px;
          background-color: #478f96;
          display: flex;
          height: 21px;
          flex-direction: column;
          flex: 1;
        }
        .div-143 {
          align-self: end;
          display: flex;
          width: 70px;
          max-width: 100%;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
          margin: 8px 61px 0 0;
        }
        @media (max-width: 991px) {
          .div-143 {
            margin-right: 10px;
          }
        }
        .div-144 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          margin-top: 7px;
          height: 16px;
          flex-direction: column;
          flex: 1;
        }
        .div-145 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          height: 23px;
          flex-direction: column;
          flex: 1;
        }
        .div-146 {
          border-radius: 10px;
          background-color: #ca6b6e;
          display: flex;
          height: 23px;
          flex-direction: column;
          flex: 1;
        }
        .span-28 {
          align-self: start;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 11px;
          margin: 71px 0 0 33px;
        }
        @media (max-width: 991px) {
          .span-28 {
            margin: 40px 0 0 10px;
          }
        }
        .div-147 {
          border-radius: 50%;
          align-self: start;
          display: flex;
          width: 10px;
          height: 10px;
          flex-direction: column;
        }
        .div-148 {
          color: #383838;
          align-self: start;
          font: 400 12px Mulish, sans-serif;
        }
        .div-149 {
          border-radius: 50%;
          align-self: start;
          display: flex;
          width: 10px;
          height: 10px;
          flex-direction: column;
        }
        .div-150 {
          color: #383838;
          align-self: stretch;
          font: 400 12px Mulish, sans-serif;
        }
        .div-151 {
          border-radius: 50%;
          align-self: start;
          display: flex;
          width: 10px;
          height: 10px;
          flex-direction: column;
        }
        .div-152 {
          color: #383838;
          align-self: start;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 12px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-152 {
            white-space: initial;
          }
        }
        .span-29 {
          border-radius: 12px;
          border: 1px solid #e8e7e7;
          box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
          background-color: #fff;
          display: flex;
          margin-top: 40px;
          justify-content: space-between;
          gap: 20px;
          padding: 27px 30px;
        }
        @media (max-width: 991px) {
          .span-29 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-153 {
          color: #303030;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 700 20px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-153 {
            white-space: initial;
          }
        }
        .span-30 {
          color: #383838;
          white-space: nowrap;
          border-radius: 8px;
          background-color: #d0fbff;
          justify-content: center;
          padding: 8px;
          font: 700 12px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .span-30 {
            white-space: initial;
          }
        }
        .div-154 {
          color: #383838;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 400 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-154 {
            white-space: initial;
          }
        }
        .column-9 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-9 {
            width: 100%;
          }
        }
        .span-31 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .span-31 {
            margin-top: 40px;
          }
        }
        .div-155 {
          color: #fff;
          white-space: nowrap;
          font: 400 22px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-155 {
            white-space: initial;
          }
        }
        .div-156 {
          color: #cacaca;
          margin-top: 17px;
          white-space: nowrap;
          font: 700 16px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-156 {
            white-space: initial;
          }
        }
        .span-32 {
          color: #fff;
          white-space: nowrap;
          border-radius: 8px;
          background-color: #5e5e5e;
          margin-top: 24px;
          justify-content: center;
          padding: 10px;
          font: 400 14px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .span-32 {
            white-space: initial;
          }
        }
        .span-33 {
          justify-content: center;
          border-radius: 12px;
          border: 1px solid #c4c4c4;
          background-color: #fff;
          display: flex;
          margin-top: 93px;
          width: 100%;
          flex-direction: column;
          padding: 24px 47px;
        }
        @media (max-width: 991px) {
          .span-33 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-157 {
          color: #5f5f5f;
          font: 700 16px Mulish, sans-serif;
        }
        .span-34 {
          display: flex;
          margin-top: 8px;
          padding-right: 12px;
          justify-content: space-between;
          gap: 8px;
        }
        .div-158 {
          color: #000;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-158 {
            white-space: initial;
          }
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .span-35 {
          justify-content: center;
          border-radius: 12px;
          border: 1px solid #c4c4c4;
          background-color: #fff;
          display: flex;
          margin-top: 20px;
          width: 100%;
          flex-direction: column;
          padding: 24px 51px;
        }
        @media (max-width: 991px) {
          .span-35 {
            padding: 0 20px;
          }
        }
        .div-159 {
          color: #5f5f5f;
          font: 700 16px Mulish, sans-serif;
        }
        .span-36 {
          display: flex;
          margin-top: 8px;
          padding-right: 22px;
          justify-content: space-between;
          gap: 8px;
        }
        @media (max-width: 991px) {
          .span-36 {
            padding-right: 20px;
          }
        }
        .div-160 {
          color: #000;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-160 {
            white-space: initial;
          }
        }
        .img-15 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .span-37 {
          justify-content: center;
          border-radius: 12px;
          border: 1px solid #c4c4c4;
          background-color: #fff;
          display: flex;
          margin-top: 20px;
          width: 100%;
          flex-direction: column;
          padding: 24px 47px;
        }
        @media (max-width: 991px) {
          .span-37 {
            padding: 0 20px;
          }
        }
        .div-161 {
          color: #5f5f5f;
          font: 700 16px Mulish, sans-serif;
        }
        .span-38 {
          display: flex;
          margin-top: 8px;
          padding-right: 12px;
          justify-content: space-between;
          gap: 8px;
        }
        .div-162 {
          color: #000;
          flex-grow: 1;
          white-space: nowrap;
          font: 400 24px Mulish, sans-serif;
        }
        @media (max-width: 991px) {
          .div-162 {
            white-space: initial;
          }
        }
        .img-16 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .column-10 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 18%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-10 {
            width: 100%;
          }
        }
        .img-17 {
          aspect-ratio: 0.36;
          object-fit: contain;
          object-position: center;
          width: 199px;
          overflow: hidden;
          margin-top: 10px;
          max-width: 100%;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-17 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default AdminDetailed;
