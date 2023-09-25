import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { VideoGame } from "../../components/VideoGame";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="index"
      style={{
        backgroundColor:
          (screenWidth >= 762 && screenWidth < 960) || (screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762
            ? "#0a1117"
            : screenWidth >= 1920
            ? "#0a1017"
            : undefined,
      }}
    >
      <div
        className="div"
        style={{
          backgroundColor:
            (screenWidth >= 762 && screenWidth < 960) || (screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762
              ? "#0a1117"
              : screenWidth >= 1920
              ? "#0a1017"
              : undefined,
          height:
            screenWidth < 762
              ? "6959px"
              : screenWidth >= 762 && screenWidth < 960
              ? "7542px"
              : screenWidth >= 960 && screenWidth < 1920
              ? "4977px"
              : screenWidth >= 1920
              ? "5250px"
              : undefined,
          overflow: screenWidth < 762 ? "hidden" : undefined,
          width:
            screenWidth < 762
              ? "360px"
              : screenWidth >= 762 && screenWidth < 960
              ? "762px"
              : screenWidth >= 960 && screenWidth < 1920
              ? "960px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        {screenWidth >= 1920 && (
          <>
            <footer className="footer">
              <div className="container">
                <img
                  className="logotype"
                  alt="Logotype"
                  src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype-6.png"
                />
                <div className="frame">
                  <div className="frame-2">
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper">For whom</div>
                    <div className="text-wrapper">Solution</div>
                    <div className="text-wrapper">Price</div>
                    <div className="text-wrapper">Contacts</div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="idea">
              <div className="frame-3">
                <div className="what-s-your-idea">What&#39;s your M2G idea?</div>
                <p className="p">Let’s chat and see how we can help</p>
                <div className="ellipse" />
                <div className="ellipse-2" />
              </div>
              <div className="frame-4">
                <div className="button">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="img">
                        <img
                          className="union"
                          alt="Union"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-29.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="text-wrapper-2">Email</div>
                    <div className="text-wrapper-3">hello@money2games.com</div>
                  </div>
                </div>
                <div className="button-2">
                  <div className="group">
                    <div className="overlap-group-2">
                      <div className="rectangle-2" />
                      <img
                        className="img"
                        alt="Icon telegram"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-telegram-3.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="text-wrapper-4">Telegram</div>
                    <p className="money">
                      <span className="span">@money2games</span>
                    </p>
                  </div>
                </div>
                <div className="button-3">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <img
                        className="img"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame-5617-3.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="text-wrapper-5">Discord</div>
                    <div className="text-wrapper-3">money2games</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className="overlap"
          style={{
            height:
              screenWidth >= 762 && screenWidth < 960
                ? "1854px"
                : screenWidth >= 1920
                ? "88px"
                : screenWidth >= 960 && screenWidth < 1920
                ? "852px"
                : screenWidth < 762
                ? "442px"
                : undefined,
            left:
              (screenWidth >= 762 && screenWidth < 960) ||
              (screenWidth >= 960 && screenWidth < 1920) ||
              screenWidth < 762
                ? "0"
                : screenWidth >= 1920
                ? "922px"
                : undefined,
            top:
              (screenWidth >= 762 && screenWidth < 960) ||
              (screenWidth >= 960 && screenWidth < 1920) ||
              screenWidth < 762
                ? "0"
                : screenWidth >= 1920
                ? "4536px"
                : undefined,
            width:
              screenWidth >= 762 && screenWidth < 960
                ? "762px"
                : screenWidth >= 1920
                ? "77px"
                : screenWidth >= 960 && screenWidth < 1920
                ? "960px"
                : screenWidth < 762
                ? "360px"
                : undefined,
          }}
        >
          {((screenWidth >= 762 && screenWidth < 960) ||
            (screenWidth >= 960 && screenWidth < 1920) ||
            screenWidth < 762) && (
            <div
              className="hero"
              style={{
                height:
                  screenWidth >= 960 && screenWidth < 1920
                    ? "852px"
                    : screenWidth < 762
                    ? "442px"
                    : screenWidth >= 762 && screenWidth < 960
                    ? "496px"
                    : undefined,
                left:
                  (screenWidth >= 762 && screenWidth < 960) || (screenWidth >= 960 && screenWidth < 1920)
                    ? "0"
                    : screenWidth < 762
                    ? "1px"
                    : undefined,
                width:
                  screenWidth >= 960 && screenWidth < 1920
                    ? "960px"
                    : screenWidth < 762
                    ? "359px"
                    : screenWidth >= 762 && screenWidth < 960
                    ? "762px"
                    : undefined,
              }}
            >
              <div
                className="overlap-2"
                style={{
                  height:
                    screenWidth >= 960 && screenWidth < 1920
                      ? "1034px"
                      : screenWidth < 762
                      ? "472px"
                      : screenWidth >= 762 && screenWidth < 960
                      ? "551px"
                      : undefined,
                  left:
                    screenWidth >= 960 && screenWidth < 1920
                      ? "-1233px"
                      : screenWidth < 762
                      ? "-717px"
                      : screenWidth >= 762 && screenWidth < 960
                      ? "-1970px"
                      : undefined,
                  width:
                    screenWidth >= 960 && screenWidth < 1920
                      ? "3426px"
                      : screenWidth < 762
                      ? "1793px"
                      : screenWidth >= 762 && screenWidth < 960
                      ? "4702px"
                      : undefined,
                }}
              >
                <img
                  className="hero-bg"
                  style={{
                    height:
                      screenWidth < 762
                        ? "442px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "496px"
                        : screenWidth >= 960 && screenWidth < 1920
                        ? "852px"
                        : undefined,
                    width:
                      screenWidth < 762
                        ? "1793px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "4702px"
                        : screenWidth >= 960 && screenWidth < 1920
                        ? "3426px"
                        : undefined,
                  }}
                  alt="Hero bg"
                  src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/hero--bg.png"
                />
                <div
                  className="hero-shadow"
                  style={{
                    height:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "328px"
                        : screenWidth < 762
                        ? "122px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "201px"
                        : undefined,
                    left:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "1233px"
                        : screenWidth < 762
                        ? "717px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "1970px"
                        : undefined,
                    top:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "706px"
                        : (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                        ? "350px"
                        : undefined,
                    width:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "960px"
                        : screenWidth < 762
                        ? "359px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "762px"
                        : undefined,
                  }}
                />
                {screenWidth >= 960 && screenWidth < 1920 && (
                  <>
                    <p className="hero-description">Innovative solutions to attract and retain users</p>
                    <div className="hero-info">
                      <div className="overlap-group-3">
                        <img
                          className="hero-line"
                          alt="Hero line"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/hero--line-2.svg"
                        />
                        <p className="hero-title">
                          Games and Monetization
                          <br />
                          Monetization and Gamification
                        </p>
                      </div>
                    </div>
                    <div className="hero-action">
                      <div className="text-wrapper-6">Know the Future</div>
                    </div>
                  </>
                )}

                {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
                  <div
                    className="frame-6"
                    style={{
                      left:
                        screenWidth < 762 ? "697px" : screenWidth >= 762 && screenWidth < 960 ? "2151px" : undefined,
                    }}
                  >
                    <div className="frame-7">
                      <div className="overlap-group-wrapper">
                        <div
                          className="overlap-group-4"
                          style={{
                            left:
                              screenWidth < 762 ? "39px" : screenWidth >= 762 && screenWidth < 960 ? "20px" : undefined,
                            width:
                              screenWidth < 762
                                ? "322px"
                                : screenWidth >= 762 && screenWidth < 960
                                ? "359px"
                                : undefined,
                          }}
                        >
                          <img
                            className="hero-line-2"
                            style={{
                              left:
                                screenWidth < 762 ? "0" : screenWidth >= 762 && screenWidth < 960 ? "18px" : undefined,
                              top:
                                screenWidth < 762
                                  ? "15px"
                                  : screenWidth >= 762 && screenWidth < 960
                                  ? "19px"
                                  : undefined,
                            }}
                            alt="Hero line"
                            src={
                              screenWidth < 762
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/hero--line.svg"
                                : screenWidth >= 762 && screenWidth < 960
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/hero--line-1.svg"
                                : undefined
                            }
                          />
                          <p
                            className="hero-title-2"
                            style={{
                              fontSize:
                                screenWidth < 762
                                  ? "16px"
                                  : screenWidth >= 762 && screenWidth < 960
                                  ? "19px"
                                  : undefined,
                              left:
                                screenWidth < 762 ? "8px" : screenWidth >= 762 && screenWidth < 960 ? "0" : undefined,
                            }}
                          >
                            Games and Monetization
                            <br />
                            Monetization and Gamification
                          </p>
                        </div>
                      </div>
                      <p className="hero-description-2">
                        Innovative solutions
                        <br />
                        to attract and retain users
                      </p>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-7">Know the Future</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {screenWidth >= 762 && screenWidth < 960 && (
            <>
              <header className="header">
                <div className="container-2">
                  <img
                    className="logotype-2"
                    alt="Logotype"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype-3.png"
                  />
                  <div className="frame-8">
                    <div className="div-2">Price</div>
                    <div className="div-2">Contacts</div>
                  </div>
                </div>
              </header>
              <div className="about">
                <div className="about-deck">
                  <div className="deck">
                    <div className="view">
                      <div className="icon">
                        <div className="ellipse-3" />
                      </div>
                      <p className="text-wrapper-8">Put our games in your website or apps</p>
                    </div>
                    <div className="view-2">
                      <div className="text-wrapper-9">Attract customers and visitors</div>
                      <div className="ellipse-wrapper">
                        <div className="ellipse-4" />
                      </div>
                    </div>
                    <div className="view-3">
                      <div className="icon-2">
                        <div className="ellipse-5" />
                      </div>
                      <p className="use-as-advergames-to">
                        Use as advergames to promote
                        <br />
                        your products
                      </p>
                    </div>
                    <div className="view-4">
                      <div className="text-wrapper-9">Make money through ads</div>
                      <div className="icon-3">
                        <div className="ellipse-6" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-3">
                      <div className="deck-info">
                        <div className="title">
                          <div className="overlap-group-5">
                            <img
                              className="underline"
                              alt="Underline"
                              src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-3-1.svg"
                            />
                            <div className="text-wrapper-10">Metrics</div>
                          </div>
                        </div>
                        <div className="items">
                          <div className="item">
                            <div className="item-title">
                              <img
                                className="img-2"
                                alt="Icon meta"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-meta-2.svg"
                              />
                              <div className="text-wrapper-11">New Users</div>
                            </div>
                            <p className="text-wrapper-12">
                              Each new user is a chance for the platform to expand its customer base and build long—term
                              value (LTV). We have developed an attraction system that is optimized for your target
                              audience.
                            </p>
                          </div>
                          <div className="item-2">
                            <div className="item-title">
                              <img
                                className="img-2"
                                alt="Icon nonprof"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-nonprof-2.svg"
                              />
                              <div className="text-wrapper-13">Retention 28 Days</div>
                            </div>
                            <p className="text-wrapper-12">
                              This KPI demonstrates not only the attractiveness of our product, but also the stability
                              of its functionality.
                            </p>
                          </div>
                          <div className="item-2">
                            <div className="item-title">
                              <img
                                className="img-2"
                                alt="Icon startup"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-startup-2.svg"
                              />
                              <div className="text-wrapper-14">Next-Day Probability Of Return</div>
                            </div>
                            <p className="text-wrapper-12">
                              This critical metric helps us evaluate how effectively our gamification keeps the user
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        className="deck-image"
                        alt="Deck image"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/deck--image.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="about-service">
                  <div className="about-service-2">
                    <div className="service">
                      <div className="text-wrapper-15">E-commerce</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-16">Educational platforms</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-17">Gaming services</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-18">Blockchain</div>
                    </div>
                  </div>
                  <div className="about-service-2">
                    <div className="service">
                      <div className="text-wrapper-19">HR and Training</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-20">Mobile</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-21">Startups</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-20">Web</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-22">Social platforms</div>
                    </div>
                  </div>
                  <div className="about-service-2">
                    <div className="service">
                      <div className="text-wrapper-16">Blogs and media</div>
                    </div>
                    <div className="service">
                      <div className="text-wrapper-18">Sports platforms</div>
                    </div>
                  </div>
                </div>
                <p className="about-title">Your key to unlimited possibilities</p>
              </div>
            </>
          )}

          {screenWidth >= 1920 && (
            <>
              <img
                className="star"
                alt="Star"
                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-13.svg"
              />
              <img
                className="union-2"
                alt="Union"
                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-19.svg"
              />
              <img
                className="union-3"
                alt="Union"
                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-20.svg"
              />
            </>
          )}

          {((screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762) && (
            <header
              className="container-wrapper"
              style={{
                height: screenWidth >= 960 && screenWidth < 1920 ? "86px" : screenWidth < 762 ? "56px" : undefined,
                width: screenWidth >= 960 && screenWidth < 1920 ? "960px" : screenWidth < 762 ? "360px" : undefined,
              }}
            >
              <div
                className="container-3"
                style={{
                  height: screenWidth >= 960 && screenWidth < 1920 ? "84px" : screenWidth < 762 ? "55px" : undefined,
                  left: screenWidth >= 960 && screenWidth < 1920 ? "85px" : screenWidth < 762 ? "16px" : undefined,
                  padding:
                    screenWidth >= 960 && screenWidth < 1920 ? "26px 0px" : screenWidth < 762 ? "26px 16px" : undefined,
                  width: screenWidth >= 960 && screenWidth < 1920 ? "736px" : screenWidth < 762 ? "328px" : undefined,
                }}
              >
                <img
                  className="logotype-3"
                  style={{
                    height:
                      screenWidth >= 960 && screenWidth < 1920 ? "74px" : screenWidth < 762 ? "48.84px" : undefined,
                    marginBottom:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "-20.83px"
                        : screenWidth < 762
                        ? "-22.92px"
                        : undefined,
                    marginLeft: screenWidth < 762 ? "-1.98px" : undefined,
                    marginTop:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "-20.83px"
                        : screenWidth < 762
                        ? "-22.92px"
                        : undefined,
                    width:
                      screenWidth >= 960 && screenWidth < 1920 ? "155px" : screenWidth < 762 ? "104.28px" : undefined,
                  }}
                  alt="Logotype"
                  src={
                    screenWidth >= 960 && screenWidth < 1920
                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype.png"
                      : screenWidth < 762
                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype-1.png"
                      : undefined
                  }
                />
                <div
                  className="navbar"
                  style={{
                    gap: screenWidth >= 960 && screenWidth < 1920 ? "44px" : screenWidth < 762 ? "22px" : undefined,
                    marginBottom: screenWidth < 762 ? "-6.00px" : undefined,
                    marginTop: screenWidth < 762 ? "-6.00px" : undefined,
                  }}
                >
                  <div
                    className="price"
                    style={{
                      fontSize:
                        screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "14px" : undefined,
                    }}
                  >
                    {screenWidth < 762 && <>Price</>}

                    {screenWidth >= 960 && screenWidth < 1920 && <>Home</>}
                  </div>
                  <div
                    className="for-whom"
                    style={{
                      fontSize:
                        screenWidth >= 960 && screenWidth < 1920 ? "14px" : screenWidth < 762 ? "12px" : undefined,
                    }}
                  >
                    {screenWidth >= 960 && screenWidth < 1920 && <>For whom</>}

                    {screenWidth < 762 && <>Contacts</>}
                  </div>
                  {screenWidth >= 960 && screenWidth < 1920 && (
                    <>
                      <div className="text-wrapper-23">Solution</div>
                      <div className="text-wrapper-23">Price</div>
                      <div className="text-wrapper-23">Contacts</div>
                    </>
                  )}
                </div>
              </div>
            </header>
          )}
        </div>
        {screenWidth >= 1920 && (
          <>
            <div className="price-2">
              <div className="title-2">
                <div className="overlap-group-6">
                  <img
                    className="underline-2"
                    alt="Underline"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-2-3.svg"
                  />
                  <div className="text-wrapper-24">Price</div>
                  <div className="ellipse-7" />
                  <div className="ellipse-7" />
                </div>
              </div>
              <div className="group-2">
                <div className="frame-9">
                  <div className="text-wrapper-25">iFrame Integration</div>
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-16.svg"
                  />
                  <div className="text-wrapper-25">Cross-platform</div>
                </div>
                <div className="frame-10">
                  <img
                    className="star-3"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-21-2.svg"
                  />
                  <div className="text-wrapper-25">Native game-interaction</div>
                  <img
                    className="star-3"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-17.svg"
                  />
                </div>
              </div>
              <div className="switch">
                <div className="item-3">
                  <div className="icon-dot">
                    <div className="ellipse-8" />
                  </div>
                  <div className="text-wrapper-26">1 month</div>
                </div>
                <div className="item-4">
                  <div className="icon-dot">
                    <div className="ellipse-8" />
                  </div>
                  <div className="text-wrapper-26">6 month</div>
                </div>
              </div>
              <div className="plans">
                <div className="plan">
                  <div className="frame-11">
                    <div className="frame-wrapper">
                      <div className="frame-12">
                        <div className="text-wrapper-27">Cyber</div>
                        <div className="star-wrapper">
                          <img
                            className="star-4"
                            alt="Star"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-25.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-3" />
                  </div>
                  <div className="frame-13">
                    <div className="frame-13">
                      <div className="text-wrapper-28">$10,000</div>
                      <div className="text-wrapper-29">/ 1 month</div>
                    </div>
                  </div>
                  <div className="frame-11">
                    <div className="frame-14">
                      <div className="frame-15">
                        <div className="frame-16">
                          <VideoGame className="video-game-instance" />
                          <div className="text-wrapper-30">10,000,000</div>
                        </div>
                        <div className="frame-16">
                          <div className="text-wrapper-31">Gameplays</div>
                        </div>
                        <div className="frame-17">
                          <div className="frame-18">
                            <div className="text-wrapper-32">Extra per 1000</div>
                            <div className="text-wrapper-33">$1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
                      <div className="overlap-4">
                        <img
                          className="ninja-cat"
                          alt="Ninja cat"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-6@2x.png"
                        />
                        <div className="frame-20">
                          <div className="group-3">
                            <div className="overlap-group-7">
                              <img className="ninja-cat-2" alt="Ninja cat" />
                              <img className="crazy-lab" alt="Crazy lab" />
                              <img
                                className="cafeteria"
                                alt="Cafeteria"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-3@2x.png"
                              />
                              <img
                                className="basketball"
                                alt="Basketball"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-3@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-21">
                            <div className="text-wrapper-34">Game Limit:</div>
                            <div className="text-wrapper-35">25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-22">
                      <div className="frame-23">
                        <div className="frame-24">
                          <div className="text-wrapper-36">Game Modification</div>
                          <div className="text-wrapper-37">10</div>
                        </div>
                        <div className="frame-25">
                          <div className="frame-18">
                            <div className="text-wrapper-38">Extra per 1</div>
                            <div className="text-wrapper-37">$100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plan-2">
                  <div className="frame-11">
                    <div className="frame-wrapper">
                      <div className="frame-12">
                        <div className="text-wrapper-27">Gamer</div>
                        <div className="img-wrapper">
                          <img
                            className="star-4"
                            alt="Star"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-26.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-4" />
                  </div>
                  <div className="frame-13">
                    <div className="frame-13">
                      <div className="text-wrapper-28">$5,000</div>
                      <div className="text-wrapper-29">/ 1 month</div>
                    </div>
                  </div>
                  <div className="frame-11">
                    <div className="frame-14">
                      <div className="frame-26">
                        <div className="frame-16">
                          <VideoGame className="video-game-instance" />
                          <div className="text-wrapper-30">4,000,000</div>
                        </div>
                        <div className="frame-16">
                          <div className="text-wrapper-31">Gameplays</div>
                        </div>
                        <div className="frame-27">
                          <div className="frame-18">
                            <div className="text-wrapper-32">Extra per 1000</div>
                            <div className="text-wrapper-33">$2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-28">
                      <div className="overlap-4">
                        <img
                          className="ninja-cat"
                          alt="Ninja cat"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-6@2x.png"
                        />
                        <div className="frame-20">
                          <div className="group-3">
                            <div className="overlap-group-7">
                              <img className="ninja-cat-2" alt="Ninja cat" />
                              <img className="crazy-lab" alt="Crazy lab" />
                              <img
                                className="cafeteria"
                                alt="Cafeteria"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-3@2x.png"
                              />
                              <img
                                className="basketball"
                                alt="Basketball"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-3@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-21">
                            <div className="text-wrapper-34">Game Limit:</div>
                            <div className="text-wrapper-35">15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-22">
                      <div className="frame-29">
                        <div className="frame-24">
                          <div className="text-wrapper-36">Game Modification</div>
                          <div className="text-wrapper-37">5</div>
                        </div>
                        <div className="frame-30">
                          <div className="frame-18">
                            <div className="text-wrapper-38">Extra per 1</div>
                            <div className="text-wrapper-37">$150</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plan-3">
                  <div className="frame-11">
                    <div className="frame-wrapper">
                      <div className="frame-12">
                        <div className="text-wrapper-27">Starter</div>
                        <div className="icon-4">
                          <img
                            className="star-4"
                            alt="Star"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-27.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-5" />
                  </div>
                  <div className="frame-13">
                    <div className="frame-13">
                      <div className="text-wrapper-28">$1,000</div>
                      <div className="text-wrapper-29">/ 1 month</div>
                    </div>
                  </div>
                  <div className="frame-11">
                    <div className="frame-14">
                      <div className="frame-31">
                        <div className="frame-16">
                          <VideoGame className="instance-node" />
                          <div className="text-wrapper-30">500,000</div>
                        </div>
                        <div className="frame-16">
                          <div className="text-wrapper-31">Gameplays</div>
                        </div>
                        <div className="frame-32">
                          <div className="frame-18">
                            <div className="text-wrapper-32">Extra per 1000</div>
                            <div className="text-wrapper-33">$3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-33">
                      <div className="overlap-4">
                        <img
                          className="ninja-cat"
                          alt="Ninja cat"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-6@2x.png"
                        />
                        <div className="frame-20">
                          <div className="group-3">
                            <div className="overlap-group-7">
                              <img
                                className="ninja-cat-2"
                                alt="Ninja cat"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-7@2x.png"
                              />
                              <img
                                className="crazy-lab"
                                alt="Crazy lab"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-3@2x.png"
                              />
                              <img
                                className="cafeteria"
                                alt="Cafeteria"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-3@2x.png"
                              />
                              <img
                                className="basketball"
                                alt="Basketball"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-3@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-21">
                            <div className="text-wrapper-34">Game Limit:</div>
                            <div className="text-wrapper-35">5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-22">
                      <div className="frame-34">
                        <div className="frame-24">
                          <div className="text-wrapper-36">Game Modification</div>
                          <div className="text-wrapper-37">1</div>
                        </div>
                        <div className="frame-35">
                          <div className="frame-18">
                            <div className="text-wrapper-38">Extra per 1</div>
                            <div className="text-wrapper-37">$200</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="solution">
              <div className="title-3">
                <div className="overlap-group-8">
                  <div className="shape">
                    <img
                      className="union-4"
                      alt="Union"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-32.svg"
                    />
                    <img
                      className="union-5"
                      alt="Union"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-33.svg"
                    />
                  </div>
                  <div className="ellipse-9" />
                  <div className="ellipse-9" />
                  <div className="text-wrapper-39">Solution</div>
                </div>
              </div>
              <div className="items-2">
                <div className="item-5">
                  <div className="div-3">
                    <img
                      className="img-3"
                      alt="Star"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-14.svg"
                    />
                    <div className="text-wrapper-40">Gamification</div>
                  </div>
                  <p className="div-4">
                    We develop multifunctional systems of challenges and tasks, with the help of which we immerse users
                    in your business through the game world
                  </p>
                </div>
                <div className="item-6">
                  <div className="div-3">
                    <div className="img-3">
                      <div className="overlap-group-9">
                        <img
                          className="vector"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-66.svg"
                        />
                        <img
                          className="vector-2"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-67.svg"
                        />
                        <img
                          className="vector-3"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-68.svg"
                        />
                        <img
                          className="vector-4"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-69.svg"
                        />
                        <img
                          className="vector-5"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-70.svg"
                        />
                        <img
                          className="vector-6"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-71.svg"
                        />
                        <img
                          className="vector-7"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-72.svg"
                        />
                        <img
                          className="vector-8"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-73.svg"
                        />
                        <img
                          className="vector-9"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-74.svg"
                        />
                        <img
                          className="vector-10"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-75.svg"
                        />
                        <img
                          className="vector-11"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-76.svg"
                        />
                        <img
                          className="vector-12"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-77.svg"
                        />
                        <img
                          className="vector-13"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-78.svg"
                        />
                        <img
                          className="vector-14"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-79.svg"
                        />
                        <img
                          className="vector-15"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-80.svg"
                        />
                        <img
                          className="vector-16"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-81.svg"
                        />
                        <img
                          className="vector-17"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-82.svg"
                        />
                        <img
                          className="vector-18"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-83.svg"
                        />
                        <img
                          className="vector-19"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-84.svg"
                        />
                        <img
                          className="vector-20"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-85.svg"
                        />
                        <img
                          className="vector-21"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-86.svg"
                        />
                        <img
                          className="vector-22"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-87.svg"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-41">Games for rent</div>
                  </div>
                  <p className="div-4">
                    <span className="text-wrapper-42">
                      We provide access to our games with the possibility of publishing them on your resources:{" "}
                    </span>
                    <span className="text-wrapper-43">AppStore, Google Play, Steam, Messengers, Web</span>
                  </p>
                </div>
                <div className="title-4">
                  <div className="div-3">
                    <img
                      className="star-5"
                      alt="Star"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-29.svg"
                    />
                    <div className="text-wrapper-44">Platform</div>
                  </div>
                  <p className="div-4">
                    We create an environment in which business can interact
                    <br />
                    with the audience at a new level, identifying its needs
                    <br />
                    and preferences
                  </p>
                </div>
              </div>
              <div className="deck-2">
                <div className="container-4">
                  <div className="feature">
                    <div className="icon-feature">
                      <img
                        className="union-6"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-6.svg"
                      />
                      <img
                        className="union-7"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-34.svg"
                      />
                    </div>
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="text-wrapper-45">Screenplay</div>
                      </div>
                    </div>
                    <div className="frame-38">
                      <p className="the-game-is-based-on">
                        The game is based on spatial thinking and reaction. <br />
                        <br />
                        The game space consists of an infinite rotating straight line along which an object moves under
                        the control of the player. By pressing, the player changes the side on which he moves. Obstacles
                        arise on different sides of the straight line forcing the player to change the direction of
                        movement. Line recognition is the basic function of the visual neural systems that causes the
                        release of dopamine.
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon-feature">
                      <img
                        className="union-8"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-7.svg"
                      />
                      <img
                        className="union-9"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-35.svg"
                      />
                    </div>
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="text-wrapper-45">Mechanics</div>
                      </div>
                    </div>
                    <div className="frame-38">
                      <img
                        className="image"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/image-130@2x.png"
                      />
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon-feature-2" />
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="text-wrapper-45">Mechanics</div>
                      </div>
                    </div>
                    <div className="frame-38">
                      <img
                        className="image"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/image-130-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="button-4">
                <img
                  className="img-3"
                  alt="Frame"
                  src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame.svg"
                />
                <div className="text-wrapper-46">More Games</div>
              </button>
            </div>
          </>
        )}

        {(screenWidth >= 1920 || (screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762) && (
          <div
            className="about-2"
            style={{
              height:
                screenWidth < 762
                  ? "1213px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "1359px"
                  : screenWidth >= 1920
                  ? "852px"
                  : undefined,
              left:
                screenWidth < 762
                  ? "1px"
                  : screenWidth >= 1920 || (screenWidth >= 960 && screenWidth < 1920)
                  ? "0"
                  : undefined,
              top:
                screenWidth < 762
                  ? "479px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "852px"
                  : screenWidth >= 1920
                  ? "0"
                  : undefined,
              width:
                screenWidth < 762
                  ? "358px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "960px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
          >
            {((screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762) && (
              <>
                <div
                  className="about-deck-2"
                  style={{
                    height:
                      screenWidth < 762 ? "883px" : screenWidth >= 960 && screenWidth < 1920 ? "946px" : undefined,
                    left: screenWidth < 762 ? "15px" : screenWidth >= 960 && screenWidth < 1920 ? "16px" : undefined,
                    top: screenWidth < 762 ? "330px" : screenWidth >= 960 && screenWidth < 1920 ? "413px" : undefined,
                    width: screenWidth < 762 ? "328px" : screenWidth >= 960 && screenWidth < 1920 ? "928px" : undefined,
                  }}
                >
                  <div
                    className="deck-3"
                    style={{
                      height:
                        screenWidth < 762 ? "220px" : screenWidth >= 960 && screenWidth < 1920 ? "419px" : undefined,
                      left: screenWidth < 762 ? "17px" : screenWidth >= 960 && screenWidth < 1920 ? "0" : undefined,
                      top: screenWidth < 762 ? "630px" : screenWidth >= 960 && screenWidth < 1920 ? "527px" : undefined,
                      width:
                        screenWidth < 762 ? "295px" : screenWidth >= 960 && screenWidth < 1920 ? "928px" : undefined,
                    }}
                  >
                    <div
                      className="view-5"
                      style={{
                        borderRadius:
                          screenWidth < 762 ? "8px" : screenWidth >= 960 && screenWidth < 1920 ? "12px" : undefined,
                        gap: screenWidth < 762 ? "16px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                        left: screenWidth < 762 ? "0" : screenWidth >= 960 && screenWidth < 1920 ? "42px" : undefined,
                        padding:
                          screenWidth < 762
                            ? "0px 16px 0px 0px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "0px 30px 0px 0px"
                            : undefined,
                        top: screenWidth < 762 ? "0" : screenWidth >= 960 && screenWidth < 1920 ? "59px" : undefined,
                      }}
                    >
                      <div
                        className="icon-5"
                        style={{
                          height:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          width:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                        }}
                      >
                        <div
                          className="ellipse-10"
                          style={{
                            borderRadius:
                              screenWidth < 762 ? "9px" : screenWidth >= 960 && screenWidth < 1920 ? "11px" : undefined,
                            height:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                            left:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            top:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            width:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                          }}
                        />
                      </div>
                      <div
                        className="put-our-games-in"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "16px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          marginTop: screenWidth >= 960 && screenWidth < 1920 ? "-1.00px" : undefined,
                          whiteSpace: screenWidth >= 960 && screenWidth < 1920 ? "nowrap" : undefined,
                        }}
                      >
                        {screenWidth < 762 && (
                          <p className="text-wrapper-148">
                            Put our games in your
                            <br />
                            website or apps
                          </p>
                        )}

                        {screenWidth >= 960 && screenWidth < 1920 && (
                          <p className="text-wrapper-148">Put our games in your website or apps</p>
                        )}
                      </div>
                    </div>
                    <div
                      className="view-6"
                      style={{
                        borderRadius:
                          screenWidth < 762 ? "8px" : screenWidth >= 960 && screenWidth < 1920 ? "12px" : undefined,
                        display:
                          screenWidth < 762
                            ? "flex"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "inline-flex"
                            : undefined,
                        left:
                          screenWidth < 762 ? "3px" : screenWidth >= 960 && screenWidth < 1920 ? "372px" : undefined,
                        padding:
                          screenWidth < 762
                            ? "0px 0px 0px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "0px 0px 0px 30px"
                            : undefined,
                        top:
                          screenWidth < 762 ? "60px" : screenWidth >= 960 && screenWidth < 1920 ? "143px" : undefined,
                        width: screenWidth < 762 ? "292px" : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-47"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "24px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          marginTop: screenWidth >= 960 && screenWidth < 1920 ? "-1.00px" : undefined,
                        }}
                      >
                        Attract customers and visitors
                      </div>
                      <div
                        className="icon-6"
                        style={{
                          height:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          width:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                        }}
                      >
                        <div
                          className="ellipse-11"
                          style={{
                            borderRadius:
                              screenWidth < 762 ? "9px" : screenWidth >= 960 && screenWidth < 1920 ? "11px" : undefined,
                            height:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                            left:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            top:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            width:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="view-7"
                      style={{
                        borderRadius:
                          screenWidth < 762 ? "8px" : screenWidth >= 960 && screenWidth < 1920 ? "12px" : undefined,
                        left: screenWidth < 762 ? "0" : screenWidth >= 960 && screenWidth < 1920 ? "102px" : undefined,
                        padding:
                          screenWidth < 762
                            ? "0px 16px 0px 0px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "0px 30px 0px 0px"
                            : undefined,
                        top:
                          screenWidth < 762 ? "120px" : screenWidth >= 960 && screenWidth < 1920 ? "227px" : undefined,
                      }}
                    >
                      <div
                        className="icon-7"
                        style={{
                          height:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          width:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                        }}
                      >
                        <div
                          className="ellipse-12"
                          style={{
                            borderRadius:
                              screenWidth < 762 ? "9px" : screenWidth >= 960 && screenWidth < 1920 ? "11px" : undefined,
                            height:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                            left:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            top:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            width:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                          }}
                        />
                      </div>
                      <div
                        className="use-as-advergames-to-2"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "16px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          marginTop: screenWidth >= 960 && screenWidth < 1920 ? "-1.00px" : undefined,
                          whiteSpace: screenWidth >= 960 && screenWidth < 1920 ? "nowrap" : undefined,
                        }}
                      >
                        {screenWidth < 762 && (
                          <p className="text-wrapper-148">
                            Use as advergames to promote
                            <br />
                            your products
                          </p>
                        )}

                        {screenWidth >= 960 && screenWidth < 1920 && (
                          <p className="text-wrapper-148">Use as advergames to promote your products</p>
                        )}
                      </div>
                    </div>
                    <div
                      className="view-8"
                      style={{
                        borderRadius:
                          screenWidth < 762 ? "8px" : screenWidth >= 960 && screenWidth < 1920 ? "12px" : undefined,
                        left:
                          screenWidth < 762 ? "60px" : screenWidth >= 960 && screenWidth < 1920 ? "528px" : undefined,
                        padding:
                          screenWidth < 762
                            ? "0px 0px 0px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "0px 0px 0px 30px"
                            : undefined,
                        top:
                          screenWidth < 762 ? "180px" : screenWidth >= 960 && screenWidth < 1920 ? "311px" : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-48"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "24px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          marginTop: screenWidth >= 960 && screenWidth < 1920 ? "-1.00px" : undefined,
                        }}
                      >
                        Make money through ads
                      </div>
                      <div
                        className="icon-8"
                        style={{
                          height:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                          width:
                            screenWidth < 762 ? "40px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                        }}
                      >
                        <div
                          className="ellipse-13"
                          style={{
                            borderRadius:
                              screenWidth < 762 ? "9px" : screenWidth >= 960 && screenWidth < 1920 ? "11px" : undefined,
                            height:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                            left:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            top:
                              screenWidth < 762
                                ? "11px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "19px"
                                : undefined,
                            width:
                              screenWidth < 762
                                ? "18px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "22px"
                                : undefined,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="deck-4"
                    style={{
                      height:
                        screenWidth < 762 ? "592px" : screenWidth >= 960 && screenWidth < 1920 ? "531px" : undefined,
                      width:
                        screenWidth < 762 ? "328px" : screenWidth >= 960 && screenWidth < 1920 ? "928px" : undefined,
                    }}
                  >
                    <div
                      className="deck-info-2"
                      style={{
                        alignItems:
                          screenWidth < 762
                            ? "center"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "flex-start"
                            : undefined,
                        display:
                          screenWidth < 762
                            ? "flex"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "inline-flex"
                            : undefined,
                        gap: screenWidth < 762 ? "22px" : screenWidth >= 960 && screenWidth < 1920 ? "40px" : undefined,
                        height:
                          screenWidth < 762 ? "394px" : screenWidth >= 960 && screenWidth < 1920 ? "490px" : undefined,
                        left:
                          screenWidth < 762 ? "16px" : screenWidth >= 960 && screenWidth < 1920 ? "435px" : undefined,
                        padding:
                          screenWidth < 762
                            ? "0px 1px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "20px 1px"
                            : undefined,
                        top: screenWidth < 762 ? "28px" : screenWidth >= 960 && screenWidth < 1920 ? "21px" : undefined,
                        width: screenWidth < 762 ? "297px" : undefined,
                      }}
                    >
                      <div
                        className="title-5"
                        style={{
                          marginLeft: screenWidth < 762 ? "-36.50px" : undefined,
                          marginRight: screenWidth < 762 ? "-36.50px" : undefined,
                          width:
                            screenWidth < 762
                              ? "368px"
                              : screenWidth >= 960 && screenWidth < 1920
                              ? "479px"
                              : undefined,
                        }}
                      >
                        <div
                          className="overlap-group-10"
                          style={{
                            height:
                              screenWidth < 762
                                ? "36px"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "39px"
                                : undefined,
                          }}
                        >
                          <img
                            className="underline-3"
                            style={{
                              height:
                                screenWidth < 762
                                  ? "7px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "13px"
                                  : undefined,
                              left:
                                screenWidth < 762 ? "64px" : screenWidth >= 960 && screenWidth < 1920 ? "0" : undefined,
                              top:
                                screenWidth < 762
                                  ? "24px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "26px"
                                  : undefined,
                              width:
                                screenWidth < 762
                                  ? "241px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "479px"
                                  : undefined,
                            }}
                            alt="Underline"
                            src={
                              screenWidth < 762
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-3.svg"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-3-2.svg"
                                : undefined
                            }
                          />
                          <div
                            className="text-wrapper-49"
                            style={{
                              color:
                                screenWidth < 762
                                  ? "var(--fgforegroundprimary)"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "#ffffff"
                                  : undefined,
                              fontSize:
                                screenWidth < 762
                                  ? "28px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "38px"
                                  : undefined,
                              left:
                                screenWidth < 762 ? "0" : screenWidth >= 960 && screenWidth < 1920 ? "56px" : undefined,
                              lineHeight:
                                screenWidth < 762
                                  ? "36px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "32px"
                                  : undefined,
                              textShadow:
                                screenWidth >= 960 && screenWidth < 1920 ? "0px 2px 25px #00000099" : undefined,
                            }}
                          >
                            Metrics
                          </div>
                        </div>
                      </div>
                      <div
                        className="items-3"
                        style={{
                          alignSelf: screenWidth < 762 ? "stretch" : undefined,
                          display:
                            screenWidth < 762
                              ? "flex"
                              : screenWidth >= 960 && screenWidth < 1920
                              ? "inline-flex"
                              : undefined,
                          marginBottom: screenWidth < 762 ? "-42.00px" : undefined,
                          width: screenWidth < 762 ? "100%" : undefined,
                        }}
                      >
                        <div
                          className="item-7"
                          style={{
                            alignSelf: screenWidth < 762 ? "stretch" : undefined,
                            display:
                              screenWidth < 762
                                ? "flex"
                                : screenWidth >= 960 && screenWidth < 1920
                                ? "inline-flex"
                                : undefined,
                            width: screenWidth < 762 ? "100%" : undefined,
                          }}
                        >
                          <div
                            className="item-title-2"
                            style={{
                              alignSelf: screenWidth < 762 ? "stretch" : undefined,
                              display:
                                screenWidth < 762
                                  ? "flex"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "inline-flex"
                                  : undefined,
                              width: screenWidth < 762 ? "100%" : undefined,
                            }}
                          >
                            <img
                              className="img-2"
                              alt="Icon meta"
                              src={
                                screenWidth < 762
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-meta-1.svg"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-meta-3.svg"
                                  : undefined
                              }
                            />
                            <div
                              className="text-wrapper-50"
                              style={{
                                fontSize:
                                  screenWidth < 762
                                    ? "14px"
                                    : screenWidth >= 960 && screenWidth < 1920
                                    ? "16px"
                                    : undefined,
                                marginRight: screenWidth < 762 ? "-60.00px" : undefined,
                              }}
                            >
                              New Users
                            </div>
                          </div>
                          <p
                            className="text-wrapper-51"
                            style={{
                              alignSelf: screenWidth < 762 ? "stretch" : undefined,
                              fontSize:
                                screenWidth < 762
                                  ? "12px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "14px"
                                  : undefined,
                              lineHeight:
                                screenWidth < 762
                                  ? "20px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "24px"
                                  : undefined,
                              width: screenWidth >= 960 && screenWidth < 1920 ? "491px" : undefined,
                            }}
                          >
                            Each new user is a chance for the platform to expand its customer base and build long—term
                            value (LTV). We have developed an attraction system that is optimized for your target
                            audience.
                          </p>
                        </div>
                        <div className="item-2">
                          <div
                            className="item-title-3"
                            style={{
                              alignSelf: screenWidth < 762 ? "stretch" : undefined,
                              display:
                                screenWidth < 762
                                  ? "flex"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "inline-flex"
                                  : undefined,
                              width: screenWidth < 762 ? "100%" : undefined,
                            }}
                          >
                            <img
                              className="img-2"
                              alt="Icon nonprof"
                              src={
                                screenWidth < 762
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-nonprof-1.svg"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-nonprof-3.svg"
                                  : undefined
                              }
                            />
                            <div
                              className="text-wrapper-52"
                              style={{
                                fontSize:
                                  screenWidth < 762
                                    ? "14px"
                                    : screenWidth >= 960 && screenWidth < 1920
                                    ? "16px"
                                    : undefined,
                                marginRight: screenWidth < 762 ? "-46.00px" : undefined,
                              }}
                            >
                              Retention 28 Days
                            </div>
                          </div>
                          <p
                            className="text-wrapper-53"
                            style={{
                              alignSelf: screenWidth < 762 ? "stretch" : undefined,
                              fontSize:
                                screenWidth < 762
                                  ? "12px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "14px"
                                  : undefined,
                              lineHeight:
                                screenWidth < 762
                                  ? "20px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "24px"
                                  : undefined,
                              width: screenWidth >= 960 && screenWidth < 1920 ? "417px" : undefined,
                            }}
                          >
                            This KPI demonstrates not only the attractiveness of our product, but also the stability of
                            its functionality.
                          </p>
                        </div>
                        <div className="item-2">
                          <div
                            className="item-title-4"
                            style={{
                              alignSelf: screenWidth < 762 ? "stretch" : undefined,
                              display:
                                screenWidth < 762
                                  ? "flex"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "inline-flex"
                                  : undefined,
                              width: screenWidth < 762 ? "100%" : undefined,
                            }}
                          >
                            <img
                              className="img-2"
                              alt="Icon startup"
                              src={
                                screenWidth < 762
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-startup-1.svg"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-startup-3.svg"
                                  : undefined
                              }
                            />
                            <div
                              className="text-wrapper-54"
                              style={{
                                fontSize:
                                  screenWidth < 762
                                    ? "14px"
                                    : screenWidth >= 960 && screenWidth < 1920
                                    ? "16px"
                                    : undefined,
                                width:
                                  screenWidth < 762
                                    ? "263px"
                                    : screenWidth >= 960 && screenWidth < 1920
                                    ? "392px"
                                    : undefined,
                              }}
                            >
                              Next-Day Probability Of Return
                            </div>
                          </div>
                          <p
                            className="text-wrapper-55"
                            style={{
                              alignSelf: screenWidth < 762 ? "stretch" : undefined,
                              fontSize:
                                screenWidth < 762
                                  ? "12px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "14px"
                                  : undefined,
                              lineHeight:
                                screenWidth < 762
                                  ? "20px"
                                  : screenWidth >= 960 && screenWidth < 1920
                                  ? "24px"
                                  : undefined,
                              width: screenWidth >= 960 && screenWidth < 1920 ? "408px" : undefined,
                            }}
                          >
                            This critical metric helps us evaluate how effectively our gamification keeps the user
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      className="deck-image-2"
                      style={{
                        height:
                          screenWidth < 762 ? "143px" : screenWidth >= 960 && screenWidth < 1920 ? "531px" : undefined,
                        top: screenWidth < 762 ? "449px" : screenWidth >= 960 && screenWidth < 1920 ? "0" : undefined,
                        width:
                          screenWidth < 762 ? "328px" : screenWidth >= 960 && screenWidth < 1920 ? "425px" : undefined,
                      }}
                      alt="Deck image"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/deck--image.png"
                    />
                  </div>
                </div>
                <div
                  className="about-service-3"
                  style={{
                    display:
                      screenWidth < 762 ? "flex" : screenWidth >= 960 && screenWidth < 1920 ? "inline-flex" : undefined,
                    gap: screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "24px" : undefined,
                    left: screenWidth < 762 ? "15px" : screenWidth >= 960 && screenWidth < 1920 ? "16px" : undefined,
                    top: screenWidth < 762 ? "106px" : screenWidth >= 960 && screenWidth < 1920 ? "164px" : undefined,
                    width: screenWidth < 762 ? "328px" : undefined,
                  }}
                >
                  <div
                    className="about-service-4"
                    style={{
                      alignSelf: screenWidth < 762 ? "stretch" : undefined,
                      display:
                        screenWidth < 762
                          ? "flex"
                          : screenWidth >= 960 && screenWidth < 1920
                          ? "inline-flex"
                          : undefined,
                      flexWrap: screenWidth < 762 ? "wrap" : undefined,
                      gap:
                        screenWidth < 762 ? "8px 8px" : screenWidth >= 960 && screenWidth < 1920 ? "24px" : undefined,
                      width: screenWidth < 762 ? "100%" : undefined,
                    }}
                  >
                    <div
                      className="service-2"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-56"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        E-commerce
                      </div>
                    </div>
                    <div
                      className="service-3"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-57"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Educational platforms
                      </div>
                    </div>
                    <div
                      className="service-4"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-58"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Gaming services
                      </div>
                    </div>
                    <div
                      className="service-5"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-59"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Blockchain
                      </div>
                    </div>
                  </div>
                  <div
                    className="about-service-5"
                    style={{
                      alignSelf: screenWidth < 762 ? "stretch" : undefined,
                      display:
                        screenWidth < 762
                          ? "flex"
                          : screenWidth >= 960 && screenWidth < 1920
                          ? "inline-flex"
                          : undefined,
                      flexWrap: screenWidth < 762 ? "wrap" : undefined,
                      gap:
                        screenWidth < 762 ? "8px 8px" : screenWidth >= 960 && screenWidth < 1920 ? "24px" : undefined,
                      width: screenWidth < 762 ? "100%" : undefined,
                    }}
                  >
                    <div
                      className="service-6"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-60"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        HR and Training
                      </div>
                    </div>
                    <div
                      className="service-7"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-61"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Mobile
                      </div>
                    </div>
                    <div
                      className="service-8"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-62"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Startups
                      </div>
                    </div>
                    <div
                      className="service-9"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-63"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Web
                      </div>
                    </div>
                    <div
                      className="service-10"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-64"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Social platforms
                      </div>
                    </div>
                  </div>
                  <div
                    className="about-service-6"
                    style={{
                      alignSelf: screenWidth < 762 ? "stretch" : undefined,
                      display:
                        screenWidth < 762
                          ? "flex"
                          : screenWidth >= 960 && screenWidth < 1920
                          ? "inline-flex"
                          : undefined,
                      flexWrap: screenWidth < 762 ? "wrap" : undefined,
                      gap:
                        screenWidth < 762 ? "8px 8px" : screenWidth >= 960 && screenWidth < 1920 ? "24px" : undefined,
                      width: screenWidth < 762 ? "100%" : undefined,
                    }}
                  >
                    <div
                      className="service-11"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-65"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Blogs and media
                      </div>
                    </div>
                    <div
                      className="service-12"
                      style={{
                        padding:
                          screenWidth < 762
                            ? "8px 16px"
                            : screenWidth >= 960 && screenWidth < 1920
                            ? "8px 26px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-66"
                        style={{
                          fontSize:
                            screenWidth < 762 ? "12px" : screenWidth >= 960 && screenWidth < 1920 ? "20px" : undefined,
                          lineHeight:
                            screenWidth < 762 ? "14px" : screenWidth >= 960 && screenWidth < 1920 ? "32px" : undefined,
                        }}
                      >
                        Sports platforms
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className="about-title-2"
                  style={{
                    fontSize:
                      screenWidth < 762 ? "26px" : screenWidth >= 960 && screenWidth < 1920 ? "48px" : undefined,
                    left: screenWidth < 762 ? "15px" : screenWidth >= 960 && screenWidth < 1920 ? "92px" : undefined,
                    letterSpacing:
                      screenWidth < 762 ? "0" : screenWidth >= 960 && screenWidth < 1920 ? "1.00px" : undefined,
                    lineHeight:
                      screenWidth < 762 ? "36px" : screenWidth >= 960 && screenWidth < 1920 ? "60px" : undefined,
                    textShadow: screenWidth >= 960 && screenWidth < 1920 ? "0px 2px 25px #00000099" : undefined,
                    width: screenWidth < 762 ? "328px" : screenWidth >= 960 && screenWidth < 1920 ? "776px" : undefined,
                  }}
                >
                  Your key to unlimited possibilities
                </p>
              </>
            )}

            {screenWidth >= 1920 && (
              <>
                <div className="hero-2">
                  <div className="overlap-5">
                    <img
                      className="hero-bg-2"
                      alt="Hero bg"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/hero--bg.png"
                    />
                    <div className="hero-shadow-2" />
                    <p className="hero-description-3">Innovative solutions to attract and retain users</p>
                    <div className="hero-info-2">
                      <div className="overlap-group-11">
                        <img
                          className="hero-line-3"
                          alt="Hero line"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/hero--line-3.svg"
                        />
                        <p className="hero-title-3">
                          Games and Monetization
                          <br />
                          Monetization and Gamification
                        </p>
                      </div>
                    </div>
                    <div className="hero-action-2">
                      <div className="text-wrapper-6">Know the Future</div>
                    </div>
                  </div>
                </div>
                <header className="header-2">
                  <div className="container-5">
                    <img
                      className="logotype-4"
                      alt="Logotype"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype.png"
                    />
                    <div className="navbar-2">
                      <div className="text-wrapper">Home</div>
                      <div className="text-wrapper">For whom</div>
                      <div className="text-wrapper">Solution</div>
                      <div className="text-wrapper">Price</div>
                      <div className="text-wrapper">Contacts</div>
                    </div>
                  </div>
                </header>
              </>
            )}
          </div>
        )}

        {screenWidth >= 1920 && (
          <div className="about-3">
            <div className="about-deck-3">
              <div className="deck-5">
                <div className="view-9">
                  <div className="icon-9">
                    <div className="ellipse-14" />
                  </div>
                  <p className="text-wrapper-67">Put our games in your website or apps</p>
                </div>
                <div className="view-10">
                  <div className="text-wrapper-67">Attract customers and visitors</div>
                  <div className="icon-10">
                    <div className="ellipse-15" />
                  </div>
                </div>
                <div className="view-11">
                  <div className="icon-11">
                    <div className="ellipse-16" />
                  </div>
                  <p className="text-wrapper-67">Use as advergames to promote your products</p>
                </div>
                <div className="view-12">
                  <div className="text-wrapper-67">Make money through ads</div>
                  <div className="icon-12">
                    <div className="ellipse-17" />
                  </div>
                </div>
              </div>
              <div className="deck-6">
                <div className="deck-info-3">
                  <div className="title-6">
                    <div className="overlap-group-12">
                      <img
                        className="underline-4"
                        alt="Underline"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-3-3.svg"
                      />
                      <div className="text-wrapper-68">Metrics</div>
                    </div>
                  </div>
                  <div className="items-4">
                    <div className="item-8">
                      <div className="item-title-5">
                        <img
                          className="img-2"
                          alt="Icon meta"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-meta.svg"
                        />
                        <div className="text-wrapper-69">New Users</div>
                      </div>
                      <p className="text-wrapper-70">
                        Each new user is a chance for the platform to expand its customer base and build long—term value
                        (LTV). We have developed an attraction system that is optimized for your target audience.
                      </p>
                    </div>
                    <div className="item-2">
                      <div className="item-title-5">
                        <img
                          className="img-2"
                          alt="Icon nonprof"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-nonprof.svg"
                        />
                        <div className="text-wrapper-71">Retention 28 Days</div>
                      </div>
                      <p className="text-wrapper-72">
                        This KPI demonstrates not only the attractiveness of our product, but also the stability of its
                        functionality.
                      </p>
                    </div>
                    <div className="item-2">
                      <div className="item-title-5">
                        <img
                          className="img-2"
                          alt="Icon startup"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-startup.svg"
                        />
                        <div className="text-wrapper-73">Next-Day Probability Of Return</div>
                      </div>
                      <p className="text-wrapper-74">
                        This critical metric helps us evaluate how effectively our gamification keeps the user
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="deck-image-3"
                  alt="Deck image"
                  src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/deck--image.png"
                />
              </div>
            </div>
            <div className="about-service-7">
              <div className="about-service-8">
                <div className="service-13">
                  <div className="text-wrapper-75">E-commerce</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-76">Educational platforms</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-77">Gaming services</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-78">Blockchain</div>
                </div>
              </div>
              <div className="about-service-8">
                <div className="service-13">
                  <div className="text-wrapper-79">HR and Training</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-80">Mobile</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-81">Startups</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-80">Web</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-82">Social platforms</div>
                </div>
              </div>
              <div className="about-service-8">
                <div className="service-13">
                  <div className="text-wrapper-76">Blogs and media</div>
                </div>
                <div className="service-13">
                  <div className="text-wrapper-78">Sports platforms</div>
                </div>
              </div>
            </div>
            <p className="about-title-3">Your key to unlimited possibilities</p>
          </div>
        )}

        {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
          <div
            className="solution-2"
            style={{
              gap: screenWidth >= 762 && screenWidth < 960 ? "40px" : screenWidth < 762 ? "20px" : undefined,
              left: screenWidth >= 762 && screenWidth < 960 ? "197px" : screenWidth < 762 ? "1px" : undefined,
              top: screenWidth >= 762 && screenWidth < 960 ? "1950px" : screenWidth < 762 ? "1762px" : undefined,
              width: screenWidth >= 762 && screenWidth < 960 ? "368px" : screenWidth < 762 ? "358px" : undefined,
            }}
          >
            <div className="title-7">
              <div
                className="overlap-group-13"
                style={{
                  left: screenWidth >= 762 && screenWidth < 960 ? "-79px" : screenWidth < 762 ? "-84px" : undefined,
                }}
              >
                <div className="ellipse-18" />
                <div className="ellipse-18" />
                <div
                  className="text-wrapper-83"
                  style={{
                    fontSize: screenWidth >= 762 && screenWidth < 960 ? "48px" : screenWidth < 762 ? "38px" : undefined,
                    left: screenWidth >= 762 && screenWidth < 960 ? "144px" : screenWidth < 762 ? "168px" : undefined,
                  }}
                >
                  Solution
                </div>
              </div>
              <div className="shape-2">
                <img
                  className="union-10"
                  alt="Union"
                  src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-8.svg"
                />
                <img
                  className="union-11"
                  alt="Union"
                  src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-9.svg"
                />
              </div>
            </div>
            <div
              className="items-5"
              style={{
                alignSelf: screenWidth >= 762 && screenWidth < 960 ? "stretch" : undefined,
                width: screenWidth >= 762 && screenWidth < 960 ? "100%" : screenWidth < 762 ? "326px" : undefined,
              }}
            >
              <div className="item-9">
                <div className="div-3">
                  <img
                    className="img-3"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20.svg"
                  />
                  <div className="text-wrapper-40">Gamification</div>
                </div>
                <p className="div-5">
                  We develop multifunctional systems of challenges and tasks, with the help of which we immerse users in
                  your business through the game world
                </p>
              </div>
              <div className="title-8">
                <div className="div-3">
                  <img
                    className="star-5"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-1.svg"
                  />
                  <div className="text-wrapper-44">Platform</div>
                </div>
                <p className="div-5">
                  We create an environment in which business can interact
                  <br />
                  with the audience at a new level, identifying its needs
                  <br />
                  and preferences
                </p>
              </div>
              <div className="item-10">
                <div className="div-3">
                  <div className="img-3">
                    <div className="overlap-group-9">
                      <img
                        className="vector"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector.svg"
                      />
                      <img
                        className="vector-2"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-1.svg"
                      />
                      <img
                        className="vector-3"
                        alt="Vector"
                        src={
                          screenWidth >= 762 && screenWidth < 960
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-24.svg"
                            : screenWidth < 762
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-2.svg"
                            : undefined
                        }
                      />
                      <img
                        className="vector-4"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-3.svg"
                      />
                      <img
                        className="vector-5"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-4.svg"
                      />
                      <img
                        className="vector-6"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-5.svg"
                      />
                      <img
                        className="vector-7"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-6.svg"
                      />
                      <img
                        className="vector-8"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-7.svg"
                      />
                      <img
                        className="vector-9"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-8.svg"
                      />
                      <img
                        className="vector-10"
                        alt="Vector"
                        src={
                          screenWidth >= 762 && screenWidth < 960
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-31.svg"
                            : screenWidth < 762
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-9.svg"
                            : undefined
                        }
                      />
                      <img
                        className="vector-11"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-10.svg"
                      />
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-11.svg"
                      />
                      <img
                        className="vector-13"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-12.svg"
                      />
                      <img
                        className="vector-14"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-13.svg"
                      />
                      <img
                        className="vector-15"
                        alt="Vector"
                        src={
                          screenWidth >= 762 && screenWidth < 960
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-36.svg"
                            : screenWidth < 762
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-14.svg"
                            : undefined
                        }
                      />
                      <img
                        className="vector-16"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-15.svg"
                      />
                      <img
                        className="vector-17"
                        alt="Vector"
                        src={
                          screenWidth >= 762 && screenWidth < 960
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-38.svg"
                            : screenWidth < 762
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-16.svg"
                            : undefined
                        }
                      />
                      <img
                        className="vector-18"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-17.svg"
                      />
                      <img
                        className="vector-19"
                        alt="Vector"
                        src={
                          screenWidth >= 762 && screenWidth < 960
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-40.svg"
                            : screenWidth < 762
                            ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-18.svg"
                            : undefined
                        }
                      />
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-19.svg"
                      />
                      <img
                        className="vector-21"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-20.svg"
                      />
                      <img
                        className="vector-22"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-21.svg"
                      />
                    </div>
                  </div>
                  <div className="text-wrapper-41">Games for rent</div>
                </div>
                <p className="div-5">
                  <span className="text-wrapper-84">
                    We provide access to our games with the possibility of publishing them on your resources:{" "}
                  </span>
                  <span className="text-wrapper-43">AppStore, Google Play, Steam, Messengers, Web</span>
                </p>
              </div>
            </div>
            <div
              className="deck-7"
              style={{
                width: screenWidth >= 762 && screenWidth < 960 ? "368px" : screenWidth < 762 ? "328px" : undefined,
              }}
            >
              <div
                className="container-6"
                style={{
                  left: screenWidth >= 762 && screenWidth < 960 ? "58px" : screenWidth < 762 ? "38px" : undefined,
                }}
              >
                <div className="feature-2">
                  <div className="icon-feature">
                    <img
                      className="union-6"
                      alt="Union"
                      src={
                        screenWidth >= 762 && screenWidth < 960
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-2.svg"
                          : screenWidth < 762
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union.svg"
                          : undefined
                      }
                    />
                    <img
                      className="union-7"
                      alt="Union"
                      src={
                        screenWidth >= 762 && screenWidth < 960
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-17.svg"
                          : screenWidth < 762
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-10.svg"
                          : undefined
                      }
                    />
                  </div>
                  <div className="frame-36">
                    <div className="frame-37">
                      <div className="text-wrapper-45">Screenplay</div>
                    </div>
                  </div>
                  <div className="frame-39">
                    <p className="the-game-is-based-on">
                      The game is based on spatial thinking and reaction. <br />
                      <br />
                      The game space consists of an infinite rotating straight line along which an object moves under
                      the control of the player. By pressing, the player changes the side on which he moves. Obstacles
                      arise on different sides of the straight line forcing the player to change the direction of
                      movement. Line recognition is the basic function of the visual neural systems that causes the
                      release of dopamine.
                    </p>
                  </div>
                </div>
                <div className="feature-2">
                  <div className="icon-feature">
                    <img
                      className="union-8"
                      alt="Union"
                      src={
                        screenWidth >= 762 && screenWidth < 960
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-3.svg"
                          : screenWidth < 762
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-1.svg"
                          : undefined
                      }
                    />
                    <img
                      className="union-9"
                      alt="Union"
                      src={
                        screenWidth >= 762 && screenWidth < 960
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-18.svg"
                          : screenWidth < 762
                          ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-11.svg"
                          : undefined
                      }
                    />
                  </div>
                  <div className="frame-36">
                    <div className="frame-37">
                      <div className="text-wrapper-45">Mechanics</div>
                    </div>
                  </div>
                  <div className="frame-39">
                    <img className="image" alt="Image" />
                  </div>
                </div>
                <div className="feature-2">
                  <div
                    className="icon-feature-3"
                    style={{
                      backgroundImage:
                        screenWidth >= 762 && screenWidth < 960
                          ? "url(https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-38.svg)"
                          : screenWidth < 762
                          ? "url(https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-37.svg)"
                          : undefined,
                    }}
                  />
                  <div className="frame-36">
                    <div className="frame-37">
                      <div className="text-wrapper-45">Mechanics</div>
                    </div>
                  </div>
                  <div className="frame-39">
                    <img className="image" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <button className="button-4">
              <img
                className="img-3"
                alt="Frame"
                src={
                  screenWidth >= 762 && screenWidth < 960
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame-2.svg"
                    : screenWidth < 762
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame-1.svg"
                    : undefined
                }
              />
              <div className="text-wrapper-46">More Games</div>
            </button>
          </div>
        )}

        {((screenWidth >= 762 && screenWidth < 960) ||
          (screenWidth >= 960 && screenWidth < 1920) ||
          screenWidth < 762) && (
          <div
            className="price-3"
            style={{
              left:
                screenWidth >= 762 && screenWidth < 960
                  ? "181px"
                  : screenWidth < 762
                  ? "2px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "16px"
                  : undefined,
              top:
                screenWidth >= 762 && screenWidth < 960
                  ? "4270px"
                  : screenWidth < 762
                  ? "4082px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "2278px"
                  : undefined,
              width:
                screenWidth >= 762 && screenWidth < 960
                  ? "400px"
                  : screenWidth < 762
                  ? "358px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "928px"
                  : undefined,
            }}
          >
            <div
              className="title-9"
              style={{
                alignSelf: screenWidth >= 960 && screenWidth < 1920 ? "stretch" : undefined,
                height:
                  screenWidth >= 762 && screenWidth < 960
                    ? "92px"
                    : screenWidth < 762
                    ? "68px"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "90.57px"
                    : undefined,
                marginLeft:
                  screenWidth >= 762 && screenWidth < 960 ? "-63.00px" : screenWidth < 762 ? "-84.00px" : undefined,
                marginRight:
                  screenWidth >= 762 && screenWidth < 960 ? "-63.00px" : screenWidth < 762 ? "-84.00px" : undefined,
                width:
                  (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                    ? "526px"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "100%"
                    : undefined,
              }}
            >
              <div
                className="overlap-group-14"
                style={{
                  height:
                    screenWidth >= 762 && screenWidth < 960
                      ? "115px"
                      : screenWidth < 762
                      ? "93px"
                      : screenWidth >= 960 && screenWidth < 1920
                      ? "81px"
                      : undefined,
                  left: screenWidth >= 960 && screenWidth < 1920 ? "201px" : undefined,
                  top:
                    (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                      ? "-1px"
                      : screenWidth >= 960 && screenWidth < 1920
                      ? "3px"
                      : undefined,
                  width: screenWidth >= 960 && screenWidth < 1920 ? "526px" : undefined,
                }}
              >
                <div
                  className="ellipse-19"
                  style={{
                    borderRadius:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "263px/40px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "263px/53.5px"
                        : screenWidth < 762
                        ? "263px/42.5px"
                        : undefined,
                    height:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "80px"
                        : screenWidth >= 762 && screenWidth < 960
                        ? "107px"
                        : screenWidth < 762
                        ? "85px"
                        : undefined,
                    top:
                      screenWidth >= 960 && screenWidth < 1920
                        ? "1px"
                        : (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                        ? "8px"
                        : undefined,
                  }}
                />
                <div
                  className="ellipse-20"
                  style={{
                    borderRadius:
                      screenWidth >= 762 && screenWidth < 960
                        ? "263px/53.5px"
                        : screenWidth < 762
                        ? "263px/30px"
                        : screenWidth >= 960 && screenWidth < 1920
                        ? "263px/40px"
                        : undefined,
                    height:
                      screenWidth >= 762 && screenWidth < 960
                        ? "107px"
                        : screenWidth < 762
                        ? "60px"
                        : screenWidth >= 960 && screenWidth < 1920
                        ? "80px"
                        : undefined,
                    top:
                      screenWidth >= 762 && screenWidth < 960
                        ? "8px"
                        : (screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762
                        ? "1px"
                        : undefined,
                  }}
                />
                {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
                  <img
                    className="underline-5"
                    style={{
                      height: screenWidth >= 762 && screenWidth < 960 ? "28px" : screenWidth < 762 ? "20px" : undefined,
                      left: screenWidth >= 762 && screenWidth < 960 ? "88px" : screenWidth < 762 ? "132px" : undefined,
                      top: screenWidth >= 762 && screenWidth < 960 ? "49px" : screenWidth < 762 ? "40px" : undefined,
                      width:
                        screenWidth >= 762 && screenWidth < 960 ? "350px" : screenWidth < 762 ? "262px" : undefined,
                    }}
                    alt="Underline"
                    src={
                      screenWidth >= 762 && screenWidth < 960
                        ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-2-1.svg"
                        : screenWidth < 762
                        ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-2.svg"
                        : undefined
                    }
                  />
                )}

                {screenWidth >= 960 && screenWidth < 1920 && (
                  <div className="shape-3">
                    <img
                      className="union-10"
                      alt="Union"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-22.svg"
                    />
                    <img
                      className="union-11"
                      alt="Union"
                      src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-9.svg"
                    />
                  </div>
                )}

                <div
                  className="price-4"
                  style={{
                    fontSize:
                      screenWidth >= 762 && screenWidth < 960
                        ? "62px"
                        : (screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762
                        ? "48px"
                        : undefined,
                    left:
                      screenWidth >= 762 && screenWidth < 960
                        ? "174px"
                        : screenWidth < 762
                        ? "195px"
                        : screenWidth >= 960 && screenWidth < 1920
                        ? "144px"
                        : undefined,
                    lineHeight:
                      screenWidth >= 762 && screenWidth < 960
                        ? "82px"
                        : (screenWidth >= 960 && screenWidth < 1920) || screenWidth < 762
                        ? "60px"
                        : undefined,
                  }}
                >
                  {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && <>Price</>}

                  {screenWidth >= 960 && screenWidth < 1920 && <>Solution</>}
                </div>
              </div>
            </div>
            <div
              className="frame-40"
              style={{
                alignItems:
                  (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                    ? "center"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "flex-start"
                    : undefined,
                display:
                  (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                    ? "inline-flex"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "flex"
                    : undefined,
                flexDirection: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "column" : undefined,
                gap:
                  (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                    ? "16px"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "24px"
                    : undefined,
                marginLeft: screenWidth < 762 ? "-4.50px" : undefined,
                marginRight: screenWidth < 762 ? "-4.50px" : undefined,
                width: screenWidth >= 960 && screenWidth < 1920 ? "926px" : undefined,
              }}
            >
              {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
                <>
                  <div className="frame-41">
                    <div className="text-wrapper-85">iFrame Integration</div>
                    {screenWidth >= 762 && screenWidth < 960 && (
                      <>
                        <img
                          className="star-2"
                          alt="Star"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-9.svg"
                        />
                        <div className="text-wrapper-86">Cross-platform</div>
                      </>
                    )}
                  </div>
                  <div className="frame-42">
                    {screenWidth >= 762 && screenWidth < 960 && (
                      <img
                        className="star-6"
                        alt="Star"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-21-1.svg"
                      />
                    )}

                    {screenWidth < 762 && (
                      <div className="frame-43">
                        <img
                          className="star-7"
                          alt="Star"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-2.svg"
                        />
                        <div className="text-wrapper-87">Cross-platform</div>
                        <img
                          className="star-8"
                          alt="Star"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-21.svg"
                        />
                      </div>
                    )}

                    <div className="text-wrapper-86">Native game-interaction</div>
                  </div>
                </>
              )}

              {screenWidth >= 960 && screenWidth < 1920 && (
                <>
                  <div className="item-11">
                    <div className="div-3">
                      <img
                        className="img-3"
                        alt="Star"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-14.svg"
                      />
                      <div className="text-wrapper-40">Gamification</div>
                    </div>
                    <p className="div-5">
                      We develop multifunctional systems of challenges and tasks, with the help of which we immerse
                      users in your business through the game world
                    </p>
                  </div>
                  <div className="item-6">
                    <div className="div-3">
                      <div className="img-3">
                        <div className="overlap-group-9">
                          <img
                            className="vector"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-44.svg"
                          />
                          <img
                            className="vector-2"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-45.svg"
                          />
                          <img
                            className="vector-3"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-46.svg"
                          />
                          <img
                            className="vector-4"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-47.svg"
                          />
                          <img
                            className="vector-5"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-48.svg"
                          />
                          <img
                            className="vector-6"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-49.svg"
                          />
                          <img
                            className="vector-7"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-50.svg"
                          />
                          <img
                            className="vector-8"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-51.svg"
                          />
                          <img
                            className="vector-9"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-52.svg"
                          />
                          <img
                            className="vector-10"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-53.svg"
                          />
                          <img
                            className="vector-11"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-54.svg"
                          />
                          <img
                            className="vector-12"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-55.svg"
                          />
                          <img
                            className="vector-13"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-56.svg"
                          />
                          <img
                            className="vector-14"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-57.svg"
                          />
                          <img
                            className="vector-15"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-58.svg"
                          />
                          <img
                            className="vector-16"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-59.svg"
                          />
                          <img
                            className="vector-17"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-60.svg"
                          />
                          <img
                            className="vector-18"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-61.svg"
                          />
                          <img
                            className="vector-19"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-62.svg"
                          />
                          <img
                            className="vector-20"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-63.svg"
                          />
                          <img
                            className="vector-21"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-64.svg"
                          />
                          <img
                            className="vector-22"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/vector-65.svg"
                          />
                        </div>
                      </div>
                      <div className="text-wrapper-41">Games for rent</div>
                    </div>
                    <p className="div-5">
                      <span className="text-wrapper-84">
                        We provide access to our games with the possibility of publishing them on your resources:{" "}
                      </span>
                      <span className="text-wrapper-43">AppStore, Google Play, Steam, Messengers, Web</span>
                    </p>
                  </div>
                  <div className="title-4">
                    <div className="div-3">
                      <img
                        className="star-5"
                        alt="Star"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-15.svg"
                      />
                      <div className="text-wrapper-44">Platform</div>
                    </div>
                    <p className="div-5">
                      We create an environment in which business can interact
                      <br />
                      with the audience at a new level, identifying its needs
                      <br />
                      and preferences
                    </p>
                  </div>
                </>
              )}
            </div>
            <div
              className="switch-2"
              style={{
                alignItems: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "flex-start" : undefined,
                backgroundColor: screenWidth >= 960 && screenWidth < 1920 ? "#0100016b" : undefined,
                borderRadius: screenWidth >= 960 && screenWidth < 1920 ? "30px" : undefined,
                boxShadow: screenWidth >= 960 && screenWidth < 1920 ? "inset 0px 0px 80px #000000" : undefined,
                display:
                  screenWidth >= 762 && screenWidth < 960 ? "inline-flex" : screenWidth < 762 ? "flex" : undefined,
                flex: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "0 0 auto" : undefined,
                gap: screenWidth >= 762 && screenWidth < 960 ? "24px" : screenWidth < 762 ? "12px" : undefined,
                height: screenWidth >= 960 && screenWidth < 1920 ? "493px" : undefined,
                overflow: screenWidth >= 960 && screenWidth < 1920 ? "hidden" : undefined,
                width: screenWidth < 762 ? "326px" : screenWidth >= 960 && screenWidth < 1920 ? "926px" : undefined,
              }}
            >
              {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
                <>
                  <div
                    className="item-12"
                    style={{
                      display:
                        screenWidth >= 762 && screenWidth < 960
                          ? "inline-flex"
                          : screenWidth < 762
                          ? "flex"
                          : undefined,
                      flex: screenWidth >= 762 && screenWidth < 960 ? "0 0 auto" : screenWidth < 762 ? "1" : undefined,
                      flexGrow: screenWidth < 762 ? "1" : undefined,
                    }}
                  >
                    <div className="icon-dot">
                      <div className="ellipse-8" />
                    </div>
                    <div
                      className="text-wrapper-88"
                      style={{
                        fontSize:
                          screenWidth >= 762 && screenWidth < 960 ? "22px" : screenWidth < 762 ? "16px" : undefined,
                        lineHeight:
                          screenWidth >= 762 && screenWidth < 960 ? "40px" : screenWidth < 762 ? "30px" : undefined,
                      }}
                    >
                      1 month
                    </div>
                  </div>
                  <div
                    className="item-13"
                    style={{
                      display:
                        screenWidth >= 762 && screenWidth < 960
                          ? "inline-flex"
                          : screenWidth < 762
                          ? "flex"
                          : undefined,
                      flex: screenWidth >= 762 && screenWidth < 960 ? "0 0 auto" : screenWidth < 762 ? "1" : undefined,
                      flexGrow: screenWidth < 762 ? "1" : undefined,
                    }}
                  >
                    <div className="icon-dot">
                      <div className="ellipse-8" />
                    </div>
                    <div
                      className="text-wrapper-89"
                      style={{
                        fontSize:
                          screenWidth >= 762 && screenWidth < 960 ? "22px" : screenWidth < 762 ? "16px" : undefined,
                        lineHeight:
                          screenWidth >= 762 && screenWidth < 960 ? "40px" : screenWidth < 762 ? "30px" : undefined,
                      }}
                    >
                      6 month
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 960 && screenWidth < 1920 && (
                <div className="container-7">
                  <div className="feature">
                    <div className="icon-feature">
                      <img
                        className="union-6"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-4.svg"
                      />
                      <img
                        className="union-7"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-24.svg"
                      />
                    </div>
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="text-wrapper-45">Screenplay</div>
                      </div>
                    </div>
                    <div className="frame-39">
                      <p className="the-game-is-based-on">
                        The game is based on spatial thinking and reaction. <br />
                        <br />
                        The game space consists of an infinite rotating straight line along which an object moves under
                        the control of the player. By pressing, the player changes the side on which he moves. Obstacles
                        arise on different sides of the straight line forcing the player to change the direction of
                        movement. Line recognition is the basic function of the visual neural systems that causes the
                        release of dopamine.
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon-feature">
                      <img
                        className="union-8"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-5.svg"
                      />
                      <img
                        className="union-9"
                        alt="Union"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-25.svg"
                      />
                    </div>
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="text-wrapper-45">Mechanics</div>
                      </div>
                    </div>
                    <div className="frame-39">
                      <img className="image" alt="Image" />
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon-feature-4" />
                    <div className="frame-36">
                      <div className="frame-37">
                        <div className="text-wrapper-45">Mechanics</div>
                      </div>
                    </div>
                    <div className="frame-39">
                      <img className="image" alt="Image" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="plans-2"
              style={{
                alignItems:
                  (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                    ? "flex-start"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "center"
                    : undefined,
                backgroundColor: screenWidth >= 960 && screenWidth < 1920 ? "#ffcf0126" : undefined,
                borderRadius: screenWidth >= 960 && screenWidth < 1920 ? "16px" : undefined,
                flexDirection: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "column" : undefined,
                gap:
                  screenWidth >= 762 && screenWidth < 960
                    ? "32px"
                    : screenWidth < 762
                    ? "28.57px"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "12px"
                    : undefined,
                padding: screenWidth >= 960 && screenWidth < 1920 ? "16px 48px" : undefined,
              }}
            >
              {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
                <>
                  <div
                    className="plan-4"
                    style={{
                      borderRadius:
                        screenWidth >= 762 && screenWidth < 960 ? "31.12px" : screenWidth < 762 ? "27.79px" : undefined,
                      boxShadow:
                        screenWidth >= 762 && screenWidth < 960
                          ? "0px 0px 107.56px #c97bff6b"
                          : screenWidth < 762
                          ? "0px 0px 96.04px #c97bff6b"
                          : undefined,
                      gap:
                        screenWidth >= 762 && screenWidth < 960 ? "18.67px" : screenWidth < 762 ? "16.67px" : undefined,
                      minWidth:
                        screenWidth >= 762 && screenWidth < 960
                          ? "367.25px"
                          : screenWidth < 762
                          ? "327.9px"
                          : undefined,
                      padding:
                        screenWidth >= 762 && screenWidth < 960 ? "31.12px" : screenWidth < 762 ? "27.79px" : undefined,
                    }}
                  >
                    <div
                      className="frame-44"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960
                            ? "12.45px"
                            : screenWidth < 762
                            ? "11.12px"
                            : undefined,
                      }}
                    >
                      <div
                        className="frame-45"
                        style={{
                          gap:
                            screenWidth >= 762 && screenWidth < 960
                              ? "10.76px"
                              : screenWidth < 762
                              ? "9.6px"
                              : undefined,
                        }}
                      >
                        <div className="frame-12">
                          <div
                            className="text-wrapper-90"
                            style={{
                              fontSize:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "28px"
                                  : screenWidth < 762
                                  ? "25px"
                                  : undefined,
                              lineHeight:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "37.3px"
                                  : screenWidth < 762
                                  ? "33.3px"
                                  : undefined,
                              marginTop:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "-1.08px"
                                  : screenWidth < 762
                                  ? "-0.96px"
                                  : undefined,
                            }}
                          >
                            Cyber
                          </div>
                          <div
                            className="icon-13"
                            style={{
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "8.61px"
                                  : screenWidth < 762
                                  ? "7.68px"
                                  : undefined,
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "43.03px"
                                  : screenWidth < 762
                                  ? "38.42px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "43.03px"
                                  : screenWidth < 762
                                  ? "38.42px"
                                  : undefined,
                            }}
                          >
                            <img
                              className="star-9"
                              style={{
                                height:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                                left:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "7px"
                                    : screenWidth < 762
                                    ? "6px"
                                    : undefined,
                                top:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "8px"
                                    : screenWidth < 762
                                    ? "7px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                              }}
                              alt="Star"
                              src={
                                screenWidth >= 762 && screenWidth < 960
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-10.svg"
                                  : screenWidth < 762
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-3.svg"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="rectangle-6"
                        style={{
                          borderRadius:
                            screenWidth >= 762 && screenWidth < 960
                              ? "24.74px"
                              : screenWidth < 762
                              ? "22.09px"
                              : undefined,
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "3.11px"
                              : screenWidth < 762
                              ? "2.78px"
                              : undefined,
                          width:
                            screenWidth >= 762 && screenWidth < 960
                              ? "49.8px"
                              : screenWidth < 762
                              ? "44.46px"
                              : undefined,
                        }}
                      />
                    </div>
                    <div
                      className="frame-46"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960 ? "3.11px" : screenWidth < 762 ? "2.78px" : undefined,
                      }}
                    >
                      <div
                        className="frame-47"
                        style={{
                          gap:
                            screenWidth >= 762 && screenWidth < 960
                              ? "3.11px"
                              : screenWidth < 762
                              ? "2.78px"
                              : undefined,
                        }}
                      >
                        <div
                          className="text-wrapper-91"
                          style={{
                            fontSize:
                              screenWidth >= 762 && screenWidth < 960 ? "56px" : screenWidth < 762 ? "50px" : undefined,
                            marginTop:
                              screenWidth >= 762 && screenWidth < 960
                                ? "-1.56px"
                                : screenWidth < 762
                                ? "-1.39px"
                                : undefined,
                          }}
                        >
                          $10,000
                        </div>
                        <div
                          className="text-wrapper-92"
                          style={{
                            fontSize:
                              screenWidth >= 762 && screenWidth < 960
                                ? "18.7px"
                                : screenWidth < 762
                                ? "16.7px"
                                : undefined,
                            lineHeight:
                              screenWidth >= 762 && screenWidth < 960
                                ? "34.2px"
                                : screenWidth < 762
                                ? "30.6px"
                                : undefined,
                          }}
                        >
                          / 1 month
                        </div>
                      </div>
                    </div>
                    <div
                      className="frame-48"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960
                            ? "12.45px"
                            : screenWidth < 762
                            ? "11.12px"
                            : undefined,
                      }}
                    >
                      <div
                        className="frame-49"
                        style={{
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "152.5px"
                              : screenWidth < 762
                              ? "136.16px"
                              : undefined,
                        }}
                      >
                        <div
                          className="frame-50"
                          style={{
                            border:
                              screenWidth >= 762 && screenWidth < 960
                                ? "1.56px solid"
                                : screenWidth < 762
                                ? "1.39px solid"
                                : undefined,
                            borderRadius:
                              screenWidth >= 762 && screenWidth < 960
                                ? "18.67px"
                                : screenWidth < 762
                                ? "16.67px"
                                : undefined,
                            gap:
                              screenWidth >= 762 && screenWidth < 960
                                ? "15.56px"
                                : screenWidth < 762
                                ? "13.89px"
                                : undefined,
                            padding:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px 18.67px"
                                : screenWidth < 762
                                ? "11.12px 16.67px"
                                : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "305px"
                                : screenWidth < 762
                                ? "272.32px"
                                : undefined,
                          }}
                        >
                          <div
                            className="frame-51"
                            style={{
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "18.67px"
                                  : screenWidth < 762
                                  ? "16.67px"
                                  : undefined,
                            }}
                          >
                            <VideoGame
                              className={`${screenWidth >= 762 && screenWidth < 960 && "class"} ${
                                screenWidth < 762 && "class-2"
                              }`}
                            />
                            <div
                              className="text-wrapper-93"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "31.1px"
                                    : screenWidth < 762
                                    ? "27.8px"
                                    : undefined,
                              }}
                            >
                              10,000,000
                            </div>
                          </div>
                          <div
                            className="frame-52"
                            style={{
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "18.67px"
                                  : screenWidth < 762
                                  ? "16.67px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="text-wrapper-94"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              Gameplays
                            </div>
                          </div>
                          <div
                            className="frame-53"
                            style={{
                              borderBottomWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderLeftWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 18.67px 18.67px"
                                  : screenWidth < 762
                                  ? "0px 0px 16.67px 16.67px"
                                  : undefined,
                              borderRightWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "15.56px"
                                  : screenWidth < 762
                                  ? "13.89px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "46.68px 18.67px 12.45px"
                                  : screenWidth < 762
                                  ? "41.68px 16.67px 11.12px"
                                  : undefined,
                              top:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "62px"
                                  : screenWidth < 762
                                  ? "56px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "305px"
                                  : screenWidth < 762
                                  ? "272px"
                                  : undefined,
                            }}
                          >
                            <div className="frame-18">
                              <div
                                className="text-wrapper-95"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "183.62px"
                                      : screenWidth < 762
                                      ? "163.95px"
                                      : undefined,
                                }}
                              >
                                Extra per 1000
                              </div>
                              <div
                                className="text-wrapper-96"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "28px"
                                      : screenWidth < 762
                                      ? "25px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "45.13px"
                                      : screenWidth < 762
                                      ? "40.29px"
                                      : undefined,
                                }}
                              >
                                $1
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-54"
                        style={{
                          border:
                            screenWidth >= 762 && screenWidth < 960
                              ? "1.56px solid"
                              : screenWidth < 762
                              ? "1.39px solid"
                              : undefined,
                          borderRadius:
                            screenWidth >= 762 && screenWidth < 960
                              ? "12.45px"
                              : screenWidth < 762
                              ? "11.12px"
                              : undefined,
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "52.91px"
                              : screenWidth < 762
                              ? "47.24px"
                              : undefined,
                        }}
                      >
                        <div
                          className="overlap-6"
                          style={{
                            height:
                              screenWidth >= 762 && screenWidth < 960 ? "53px" : screenWidth < 762 ? "47px" : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "285px"
                                : screenWidth < 762
                                ? "254px"
                                : undefined,
                          }}
                        >
                          <img
                            className="ninja-cat-3"
                            style={{
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "53px"
                                  : screenWidth < 762
                                  ? "47px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "58px"
                                  : screenWidth < 762
                                  ? "51px"
                                  : undefined,
                            }}
                            alt="Ninja cat"
                            src={
                              screenWidth >= 762 && screenWidth < 960
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-2@2x.png"
                                : screenWidth < 762
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat@2x.png"
                                : undefined
                            }
                          />
                          <div
                            className="frame-55"
                            style={{
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "39px"
                                  : screenWidth < 762
                                  ? "35px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 0px 17.12px"
                                  : screenWidth < 762
                                  ? "0px 0px 0px 15.28px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "285px"
                                  : screenWidth < 762
                                  ? "254px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="group-4"
                              style={{
                                height:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "37.35px"
                                    : screenWidth < 762
                                    ? "33.35px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "85.59px"
                                    : screenWidth < 762
                                    ? "76.42px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="overlap-group-15"
                                style={{
                                  height:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "53px"
                                      : screenWidth < 762
                                      ? "47px"
                                      : undefined,
                                  left:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-12px"
                                      : screenWidth < 762
                                      ? "-11px"
                                      : undefined,
                                  top:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-8px"
                                      : screenWidth < 762
                                      ? "-7px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "103px"
                                      : screenWidth < 762
                                      ? "92px"
                                      : undefined,
                                }}
                              >
                                <img
                                  className="ninja-cat-4"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "53px"
                                        : screenWidth < 762
                                        ? "47px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "62px"
                                        : screenWidth < 762
                                        ? "56px"
                                        : undefined,
                                  }}
                                  alt="Ninja cat"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-3@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-1@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="crazy-lab-2"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "25px"
                                        : screenWidth < 762
                                        ? "22px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "45px"
                                        : screenWidth < 762
                                        ? "40px"
                                        : undefined,
                                  }}
                                  alt="Crazy lab"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="cafeteria-2"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "40px"
                                        : screenWidth < 762
                                        ? "36px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "45px"
                                        : screenWidth < 762
                                        ? "40px"
                                        : undefined,
                                  }}
                                  alt="Cafeteria"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="basketball-2"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "56px"
                                        : screenWidth < 762
                                        ? "50px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                  }}
                                  alt="Basketball"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball@2x.png"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="frame-56"
                              style={{
                                gap:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "6.22px"
                                    : screenWidth < 762
                                    ? "5.56px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "169.62px"
                                    : screenWidth < 762
                                    ? "151.45px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="text-wrapper-97"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                }}
                              >
                                Game Limit:
                              </div>
                              <div
                                className="text-wrapper-98"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "34.2px"
                                      : screenWidth < 762
                                      ? "30.6px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                }}
                              >
                                25
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-57"
                        style={{
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "93.37px"
                              : screenWidth < 762
                              ? "83.36px"
                              : undefined,
                        }}
                      >
                        <div
                          className="frame-58"
                          style={{
                            border:
                              screenWidth >= 762 && screenWidth < 960
                                ? "1.56px solid"
                                : screenWidth < 762
                                ? "1.39px solid"
                                : undefined,
                            borderRadius:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px"
                                : screenWidth < 762
                                ? "11.12px"
                                : undefined,
                            gap:
                              screenWidth >= 762 && screenWidth < 960
                                ? "15.56px"
                                : screenWidth < 762
                                ? "13.89px"
                                : undefined,
                            padding:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px 18.67px"
                                : screenWidth < 762
                                ? "11.12px 16.67px"
                                : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "305px"
                                : screenWidth < 762
                                ? "272.32px"
                                : undefined,
                          }}
                        >
                          <div className="frame-24">
                            <div
                              className="text-wrapper-99"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              Game Modification
                            </div>
                            <div
                              className="text-wrapper-100"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              10
                            </div>
                          </div>
                          <div
                            className="frame-59"
                            style={{
                              borderBottomWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderLeftWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 12.45px 12.45px"
                                  : screenWidth < 762
                                  ? "0px 0px 11.12px 11.12px"
                                  : undefined,
                              borderRightWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "15.56px"
                                  : screenWidth < 762
                                  ? "13.89px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "31.12px 18.67px 12.45px"
                                  : screenWidth < 762
                                  ? "27.79px 16.67px 11.12px"
                                  : undefined,
                              top:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "25px"
                                  : screenWidth < 762
                                  ? "22px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "305px"
                                  : screenWidth < 762
                                  ? "272px"
                                  : undefined,
                            }}
                          >
                            <div className="frame-18">
                              <div
                                className="text-wrapper-101"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "183.62px"
                                      : screenWidth < 762
                                      ? "163.95px"
                                      : undefined,
                                }}
                              >
                                Extra per 1
                              </div>
                              <div
                                className="text-wrapper-102"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                }}
                              >
                                $100
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="plan-5"
                    style={{
                      borderRadius:
                        screenWidth >= 762 && screenWidth < 960 ? "31.12px" : screenWidth < 762 ? "27.79px" : undefined,
                      boxShadow:
                        screenWidth >= 762 && screenWidth < 960
                          ? "0px 0px 107.56px #00d0ff6b"
                          : screenWidth < 762
                          ? "0px 0px 96.04px #00d0ff6b"
                          : undefined,
                      gap:
                        screenWidth >= 762 && screenWidth < 960 ? "18.67px" : screenWidth < 762 ? "16.67px" : undefined,
                      minWidth:
                        screenWidth >= 762 && screenWidth < 960
                          ? "367.25px"
                          : screenWidth < 762
                          ? "327.9px"
                          : undefined,
                      padding:
                        screenWidth >= 762 && screenWidth < 960 ? "31.12px" : screenWidth < 762 ? "27.79px" : undefined,
                    }}
                  >
                    <div
                      className="frame-60"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960
                            ? "12.45px"
                            : screenWidth < 762
                            ? "11.12px"
                            : undefined,
                      }}
                    >
                      <div
                        className="frame-61"
                        style={{
                          gap:
                            screenWidth >= 762 && screenWidth < 960
                              ? "10.76px"
                              : screenWidth < 762
                              ? "9.6px"
                              : undefined,
                        }}
                      >
                        <div className="frame-12">
                          <div
                            className="text-wrapper-103"
                            style={{
                              fontSize:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "28px"
                                  : screenWidth < 762
                                  ? "25px"
                                  : undefined,
                              lineHeight:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "37.3px"
                                  : screenWidth < 762
                                  ? "33.3px"
                                  : undefined,
                              marginTop:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "-1.08px"
                                  : screenWidth < 762
                                  ? "-0.96px"
                                  : undefined,
                            }}
                          >
                            Gamer
                          </div>
                          <div
                            className="icon-14"
                            style={{
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "8.61px"
                                  : screenWidth < 762
                                  ? "7.68px"
                                  : undefined,
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "43.03px"
                                  : screenWidth < 762
                                  ? "38.42px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "43.03px"
                                  : screenWidth < 762
                                  ? "38.42px"
                                  : undefined,
                            }}
                          >
                            <img
                              className="star-10"
                              style={{
                                height:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                                left:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "7px"
                                    : screenWidth < 762
                                    ? "6px"
                                    : undefined,
                                top:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "8px"
                                    : screenWidth < 762
                                    ? "7px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                              }}
                              alt="Star"
                              src={
                                screenWidth >= 762 && screenWidth < 960
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-11.svg"
                                  : screenWidth < 762
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-4.svg"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="rectangle-7"
                        style={{
                          borderRadius:
                            screenWidth >= 762 && screenWidth < 960
                              ? "24.74px"
                              : screenWidth < 762
                              ? "22.09px"
                              : undefined,
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "3.11px"
                              : screenWidth < 762
                              ? "2.78px"
                              : undefined,
                          width:
                            screenWidth >= 762 && screenWidth < 960
                              ? "49.8px"
                              : screenWidth < 762
                              ? "44.46px"
                              : undefined,
                        }}
                      />
                    </div>
                    <div
                      className="frame-62"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960 ? "3.11px" : screenWidth < 762 ? "2.78px" : undefined,
                      }}
                    >
                      <div
                        className="frame-63"
                        style={{
                          gap:
                            screenWidth >= 762 && screenWidth < 960
                              ? "3.11px"
                              : screenWidth < 762
                              ? "2.78px"
                              : undefined,
                        }}
                      >
                        <div
                          className="text-wrapper-104"
                          style={{
                            fontSize:
                              screenWidth >= 762 && screenWidth < 960 ? "56px" : screenWidth < 762 ? "50px" : undefined,
                            marginTop:
                              screenWidth >= 762 && screenWidth < 960
                                ? "-1.56px"
                                : screenWidth < 762
                                ? "-1.39px"
                                : undefined,
                          }}
                        >
                          $5,000
                        </div>
                        <div
                          className="text-wrapper-105"
                          style={{
                            fontSize:
                              screenWidth >= 762 && screenWidth < 960
                                ? "18.7px"
                                : screenWidth < 762
                                ? "16.7px"
                                : undefined,
                            lineHeight:
                              screenWidth >= 762 && screenWidth < 960
                                ? "34.2px"
                                : screenWidth < 762
                                ? "30.6px"
                                : undefined,
                          }}
                        >
                          / 1 month
                        </div>
                      </div>
                    </div>
                    <div
                      className="frame-64"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960
                            ? "12.45px"
                            : screenWidth < 762
                            ? "11.12px"
                            : undefined,
                      }}
                    >
                      <div
                        className="frame-65"
                        style={{
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "152.5px"
                              : screenWidth < 762
                              ? "136.16px"
                              : undefined,
                        }}
                      >
                        <div
                          className="frame-66"
                          style={{
                            border:
                              screenWidth >= 762 && screenWidth < 960
                                ? "1.56px solid"
                                : screenWidth < 762
                                ? "1.39px solid"
                                : undefined,
                            borderRadius:
                              screenWidth >= 762 && screenWidth < 960
                                ? "18.67px"
                                : screenWidth < 762
                                ? "16.67px"
                                : undefined,
                            gap:
                              screenWidth >= 762 && screenWidth < 960
                                ? "15.56px"
                                : screenWidth < 762
                                ? "13.89px"
                                : undefined,
                            padding:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px 18.67px"
                                : screenWidth < 762
                                ? "11.12px 16.67px"
                                : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "305px"
                                : screenWidth < 762
                                ? "272.32px"
                                : undefined,
                          }}
                        >
                          <div
                            className="frame-67"
                            style={{
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "18.67px"
                                  : screenWidth < 762
                                  ? "16.67px"
                                  : undefined,
                            }}
                          >
                            <VideoGame
                              className={`${screenWidth >= 762 && screenWidth < 960 && "class"} ${
                                screenWidth < 762 && "class-2"
                              }`}
                            />
                            <div
                              className="text-wrapper-106"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "31.1px"
                                    : screenWidth < 762
                                    ? "27.8px"
                                    : undefined,
                              }}
                            >
                              4,000,000
                            </div>
                          </div>
                          <div
                            className="frame-68"
                            style={{
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "18.67px"
                                  : screenWidth < 762
                                  ? "16.67px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="text-wrapper-107"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              Gameplays
                            </div>
                          </div>
                          <div
                            className="frame-69"
                            style={{
                              borderBottomWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderLeftWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 18.67px 18.67px"
                                  : screenWidth < 762
                                  ? "0px 0px 16.67px 16.67px"
                                  : undefined,
                              borderRightWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "15.56px"
                                  : screenWidth < 762
                                  ? "13.89px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "46.68px 18.67px 12.45px"
                                  : screenWidth < 762
                                  ? "41.68px 16.67px 11.12px"
                                  : undefined,
                              top:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "62px"
                                  : screenWidth < 762
                                  ? "56px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "305px"
                                  : screenWidth < 762
                                  ? "272px"
                                  : undefined,
                            }}
                          >
                            <div className="frame-18">
                              <div
                                className="text-wrapper-108"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "183.62px"
                                      : screenWidth < 762
                                      ? "163.95px"
                                      : undefined,
                                }}
                              >
                                Extra per 1000
                              </div>
                              <div
                                className="text-wrapper-109"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "28px"
                                      : screenWidth < 762
                                      ? "25px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "45.13px"
                                      : screenWidth < 762
                                      ? "40.29px"
                                      : undefined,
                                }}
                              >
                                $2
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-70"
                        style={{
                          border:
                            screenWidth >= 762 && screenWidth < 960
                              ? "1.56px solid"
                              : screenWidth < 762
                              ? "1.39px solid"
                              : undefined,
                          borderRadius:
                            screenWidth >= 762 && screenWidth < 960
                              ? "12.45px"
                              : screenWidth < 762
                              ? "11.12px"
                              : undefined,
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "52.91px"
                              : screenWidth < 762
                              ? "47.24px"
                              : undefined,
                        }}
                      >
                        <div
                          className="overlap-7"
                          style={{
                            height:
                              screenWidth >= 762 && screenWidth < 960 ? "53px" : screenWidth < 762 ? "47px" : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "285px"
                                : screenWidth < 762
                                ? "254px"
                                : undefined,
                          }}
                        >
                          <img
                            className="ninja-cat-5"
                            style={{
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "53px"
                                  : screenWidth < 762
                                  ? "47px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "58px"
                                  : screenWidth < 762
                                  ? "51px"
                                  : undefined,
                            }}
                            alt="Ninja cat"
                            src={
                              screenWidth >= 762 && screenWidth < 960
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-2@2x.png"
                                : screenWidth < 762
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat@2x.png"
                                : undefined
                            }
                          />
                          <div
                            className="frame-71"
                            style={{
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "39px"
                                  : screenWidth < 762
                                  ? "35px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 0px 17.12px"
                                  : screenWidth < 762
                                  ? "0px 0px 0px 15.28px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "285px"
                                  : screenWidth < 762
                                  ? "254px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="group-5"
                              style={{
                                height:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "37.35px"
                                    : screenWidth < 762
                                    ? "33.35px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "85.59px"
                                    : screenWidth < 762
                                    ? "76.42px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="overlap-group-16"
                                style={{
                                  height:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "53px"
                                      : screenWidth < 762
                                      ? "47px"
                                      : undefined,
                                  left:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-12px"
                                      : screenWidth < 762
                                      ? "-11px"
                                      : undefined,
                                  top:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-8px"
                                      : screenWidth < 762
                                      ? "-7px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "103px"
                                      : screenWidth < 762
                                      ? "92px"
                                      : undefined,
                                }}
                              >
                                <img
                                  className="ninja-cat-6"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "53px"
                                        : screenWidth < 762
                                        ? "47px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "62px"
                                        : screenWidth < 762
                                        ? "56px"
                                        : undefined,
                                  }}
                                  alt="Ninja cat"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-3@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-1@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="crazy-lab-3"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "25px"
                                        : screenWidth < 762
                                        ? "22px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "45px"
                                        : screenWidth < 762
                                        ? "40px"
                                        : undefined,
                                  }}
                                  alt="Crazy lab"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="cafeteria-3"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "40px"
                                        : screenWidth < 762
                                        ? "36px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "45px"
                                        : screenWidth < 762
                                        ? "40px"
                                        : undefined,
                                  }}
                                  alt="Cafeteria"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="basketball-3"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "56px"
                                        : screenWidth < 762
                                        ? "50px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                  }}
                                  alt="Basketball"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball@2x.png"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="frame-72"
                              style={{
                                gap:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "6.22px"
                                    : screenWidth < 762
                                    ? "5.56px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "169.62px"
                                    : screenWidth < 762
                                    ? "151.45px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="text-wrapper-110"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                }}
                              >
                                Game Limit:
                              </div>
                              <div
                                className="text-wrapper-111"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "34.2px"
                                      : screenWidth < 762
                                      ? "30.6px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                }}
                              >
                                15
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-73"
                        style={{
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "93.37px"
                              : screenWidth < 762
                              ? "83.36px"
                              : undefined,
                        }}
                      >
                        <div
                          className="frame-74"
                          style={{
                            border:
                              screenWidth >= 762 && screenWidth < 960
                                ? "1.56px solid"
                                : screenWidth < 762
                                ? "1.39px solid"
                                : undefined,
                            borderRadius:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px"
                                : screenWidth < 762
                                ? "11.12px"
                                : undefined,
                            gap:
                              screenWidth >= 762 && screenWidth < 960
                                ? "15.56px"
                                : screenWidth < 762
                                ? "13.89px"
                                : undefined,
                            padding:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px 18.67px"
                                : screenWidth < 762
                                ? "11.12px 16.67px"
                                : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "305px"
                                : screenWidth < 762
                                ? "272.32px"
                                : undefined,
                          }}
                        >
                          <div className="frame-24">
                            <div
                              className="text-wrapper-112"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              Game Modification
                            </div>
                            <div
                              className="text-wrapper-113"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              5
                            </div>
                          </div>
                          <div
                            className="frame-75"
                            style={{
                              borderBottomWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderLeftWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 12.45px 12.45px"
                                  : screenWidth < 762
                                  ? "0px 0px 11.12px 11.12px"
                                  : undefined,
                              borderRightWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "15.56px"
                                  : screenWidth < 762
                                  ? "13.89px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "31.12px 18.67px 12.45px"
                                  : screenWidth < 762
                                  ? "27.79px 16.67px 11.12px"
                                  : undefined,
                              top:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "25px"
                                  : screenWidth < 762
                                  ? "22px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "305px"
                                  : screenWidth < 762
                                  ? "272px"
                                  : undefined,
                            }}
                          >
                            <div className="frame-18">
                              <div
                                className="text-wrapper-114"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "183.62px"
                                      : screenWidth < 762
                                      ? "163.95px"
                                      : undefined,
                                }}
                              >
                                Extra per 1
                              </div>
                              <div
                                className="text-wrapper-115"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                }}
                              >
                                $150
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="plan-6"
                    style={{
                      borderRadius:
                        screenWidth >= 762 && screenWidth < 960 ? "31.12px" : screenWidth < 762 ? "27.79px" : undefined,
                      boxShadow:
                        screenWidth >= 762 && screenWidth < 960
                          ? "0px 0px 107.56px #ffa6676b"
                          : screenWidth < 762
                          ? "0px 0px 96.04px #ffa6676b"
                          : undefined,
                      gap:
                        screenWidth >= 762 && screenWidth < 960 ? "18.67px" : screenWidth < 762 ? "16.67px" : undefined,
                      minWidth:
                        screenWidth >= 762 && screenWidth < 960
                          ? "367.25px"
                          : screenWidth < 762
                          ? "327.9px"
                          : undefined,
                      padding:
                        screenWidth >= 762 && screenWidth < 960 ? "31.12px" : screenWidth < 762 ? "27.79px" : undefined,
                    }}
                  >
                    <div
                      className="frame-76"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960
                            ? "12.45px"
                            : screenWidth < 762
                            ? "11.12px"
                            : undefined,
                      }}
                    >
                      <div
                        className="frame-77"
                        style={{
                          gap:
                            screenWidth >= 762 && screenWidth < 960
                              ? "10.76px"
                              : screenWidth < 762
                              ? "9.6px"
                              : undefined,
                        }}
                      >
                        <div className="frame-12">
                          <div
                            className="text-wrapper-116"
                            style={{
                              fontSize:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "28px"
                                  : screenWidth < 762
                                  ? "25px"
                                  : undefined,
                              lineHeight:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "37.3px"
                                  : screenWidth < 762
                                  ? "33.3px"
                                  : undefined,
                              marginTop:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "-1.08px"
                                  : screenWidth < 762
                                  ? "-0.96px"
                                  : undefined,
                            }}
                          >
                            Starter
                          </div>
                          <div
                            className="icon-15"
                            style={{
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "8.61px"
                                  : screenWidth < 762
                                  ? "7.68px"
                                  : undefined,
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "43.03px"
                                  : screenWidth < 762
                                  ? "38.42px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "43.03px"
                                  : screenWidth < 762
                                  ? "38.42px"
                                  : undefined,
                            }}
                          >
                            <img
                              className="star-11"
                              style={{
                                height:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                                left:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "7px"
                                    : screenWidth < 762
                                    ? "6px"
                                    : undefined,
                                top:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "8px"
                                    : screenWidth < 762
                                    ? "7px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                              }}
                              alt="Star"
                              src={
                                screenWidth >= 762 && screenWidth < 960
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-12.svg"
                                  : screenWidth < 762
                                  ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-5.svg"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="rectangle-8"
                        style={{
                          borderRadius:
                            screenWidth >= 762 && screenWidth < 960
                              ? "24.74px"
                              : screenWidth < 762
                              ? "22.09px"
                              : undefined,
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "3.11px"
                              : screenWidth < 762
                              ? "2.78px"
                              : undefined,
                          width:
                            screenWidth >= 762 && screenWidth < 960
                              ? "49.8px"
                              : screenWidth < 762
                              ? "44.46px"
                              : undefined,
                        }}
                      />
                    </div>
                    <div
                      className="frame-78"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960 ? "3.11px" : screenWidth < 762 ? "2.78px" : undefined,
                      }}
                    >
                      <div
                        className="frame-79"
                        style={{
                          gap:
                            screenWidth >= 762 && screenWidth < 960
                              ? "3.11px"
                              : screenWidth < 762
                              ? "2.78px"
                              : undefined,
                        }}
                      >
                        <div
                          className="text-wrapper-117"
                          style={{
                            fontSize:
                              screenWidth >= 762 && screenWidth < 960 ? "56px" : screenWidth < 762 ? "50px" : undefined,
                            marginTop:
                              screenWidth >= 762 && screenWidth < 960
                                ? "-1.56px"
                                : screenWidth < 762
                                ? "-1.39px"
                                : undefined,
                          }}
                        >
                          $1,000
                        </div>
                        <div
                          className="text-wrapper-118"
                          style={{
                            fontSize:
                              screenWidth >= 762 && screenWidth < 960
                                ? "18.7px"
                                : screenWidth < 762
                                ? "16.7px"
                                : undefined,
                            lineHeight:
                              screenWidth >= 762 && screenWidth < 960
                                ? "34.2px"
                                : screenWidth < 762
                                ? "30.6px"
                                : undefined,
                          }}
                        >
                          / 1 month
                        </div>
                      </div>
                    </div>
                    <div
                      className="frame-80"
                      style={{
                        gap:
                          screenWidth >= 762 && screenWidth < 960
                            ? "12.45px"
                            : screenWidth < 762
                            ? "11.12px"
                            : undefined,
                      }}
                    >
                      <div
                        className="frame-81"
                        style={{
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "152.5px"
                              : screenWidth < 762
                              ? "136.16px"
                              : undefined,
                        }}
                      >
                        <div
                          className="frame-82"
                          style={{
                            border:
                              screenWidth >= 762 && screenWidth < 960
                                ? "1.56px solid"
                                : screenWidth < 762
                                ? "1.39px solid"
                                : undefined,
                            borderRadius:
                              screenWidth >= 762 && screenWidth < 960
                                ? "18.67px"
                                : screenWidth < 762
                                ? "16.67px"
                                : undefined,
                            gap:
                              screenWidth >= 762 && screenWidth < 960
                                ? "15.56px"
                                : screenWidth < 762
                                ? "13.89px"
                                : undefined,
                            padding:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px 18.67px"
                                : screenWidth < 762
                                ? "11.12px 16.67px"
                                : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "305px"
                                : screenWidth < 762
                                ? "272.32px"
                                : undefined,
                          }}
                        >
                          <div
                            className="frame-83"
                            style={{
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "18.67px"
                                  : screenWidth < 762
                                  ? "16.67px"
                                  : undefined,
                            }}
                          >
                            <VideoGame
                              className={`${screenWidth >= 762 && screenWidth < 960 && "class-3"} ${
                                screenWidth < 762 && "class-4"
                              }`}
                            />
                            <div
                              className="text-wrapper-119"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "28px"
                                    : screenWidth < 762
                                    ? "25px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "31.1px"
                                    : screenWidth < 762
                                    ? "27.8px"
                                    : undefined,
                              }}
                            >
                              500,000
                            </div>
                          </div>
                          <div
                            className="frame-84"
                            style={{
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "18.67px"
                                  : screenWidth < 762
                                  ? "16.67px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="text-wrapper-120"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              Gameplays
                            </div>
                          </div>
                          <div
                            className="frame-85"
                            style={{
                              borderBottomWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderLeftWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 18.67px 18.67px"
                                  : screenWidth < 762
                                  ? "0px 0px 16.67px 16.67px"
                                  : undefined,
                              borderRightWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "15.56px"
                                  : screenWidth < 762
                                  ? "13.89px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "46.68px 18.67px 12.45px"
                                  : screenWidth < 762
                                  ? "41.68px 16.67px 11.12px"
                                  : undefined,
                              top:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "62px"
                                  : screenWidth < 762
                                  ? "56px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "305px"
                                  : screenWidth < 762
                                  ? "272px"
                                  : undefined,
                            }}
                          >
                            <div className="frame-18">
                              <div
                                className="text-wrapper-121"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "183.62px"
                                      : screenWidth < 762
                                      ? "163.95px"
                                      : undefined,
                                }}
                              >
                                Extra per 1000
                              </div>
                              <div
                                className="text-wrapper-122"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "28px"
                                      : screenWidth < 762
                                      ? "25px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "45.13px"
                                      : screenWidth < 762
                                      ? "40.29px"
                                      : undefined,
                                }}
                              >
                                $3
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-86"
                        style={{
                          border:
                            screenWidth >= 762 && screenWidth < 960
                              ? "1.56px solid"
                              : screenWidth < 762
                              ? "1.39px solid"
                              : undefined,
                          borderRadius:
                            screenWidth >= 762 && screenWidth < 960
                              ? "12.45px"
                              : screenWidth < 762
                              ? "11.12px"
                              : undefined,
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "52.91px"
                              : screenWidth < 762
                              ? "47.24px"
                              : undefined,
                        }}
                      >
                        <div
                          className="overlap-8"
                          style={{
                            height:
                              screenWidth >= 762 && screenWidth < 960 ? "53px" : screenWidth < 762 ? "47px" : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "285px"
                                : screenWidth < 762
                                ? "254px"
                                : undefined,
                          }}
                        >
                          <img
                            className="ninja-cat-7"
                            style={{
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "53px"
                                  : screenWidth < 762
                                  ? "47px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "58px"
                                  : screenWidth < 762
                                  ? "51px"
                                  : undefined,
                            }}
                            alt="Ninja cat"
                            src={
                              screenWidth >= 762 && screenWidth < 960
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-2@2x.png"
                                : screenWidth < 762
                                ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat@2x.png"
                                : undefined
                            }
                          />
                          <div
                            className="frame-87"
                            style={{
                              height:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "39px"
                                  : screenWidth < 762
                                  ? "35px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 0px 17.12px"
                                  : screenWidth < 762
                                  ? "0px 0px 0px 15.28px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "285px"
                                  : screenWidth < 762
                                  ? "254px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="group-6"
                              style={{
                                height:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "37.35px"
                                    : screenWidth < 762
                                    ? "33.35px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "85.58px"
                                    : screenWidth < 762
                                    ? "76.42px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="overlap-group-17"
                                style={{
                                  height:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "53px"
                                      : screenWidth < 762
                                      ? "47px"
                                      : undefined,
                                  left:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-12px"
                                      : screenWidth < 762
                                      ? "-11px"
                                      : undefined,
                                  top:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-8px"
                                      : screenWidth < 762
                                      ? "-7px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "103px"
                                      : screenWidth < 762
                                      ? "92px"
                                      : undefined,
                                }}
                              >
                                <img
                                  className="ninja-cat-8"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "53px"
                                        : screenWidth < 762
                                        ? "47px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "62px"
                                        : screenWidth < 762
                                        ? "56px"
                                        : undefined,
                                  }}
                                  alt="Ninja cat"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-3@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-1@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="crazy-lab-4"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "25px"
                                        : screenWidth < 762
                                        ? "22px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "45px"
                                        : screenWidth < 762
                                        ? "40px"
                                        : undefined,
                                  }}
                                  alt="Crazy lab"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="cafeteria-4"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "40px"
                                        : screenWidth < 762
                                        ? "36px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "45px"
                                        : screenWidth < 762
                                        ? "40px"
                                        : undefined,
                                  }}
                                  alt="Cafeteria"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria@2x.png"
                                      : undefined
                                  }
                                />
                                <img
                                  className="basketball-4"
                                  style={{
                                    height:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                    left:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "56px"
                                        : screenWidth < 762
                                        ? "50px"
                                        : undefined,
                                    width:
                                      screenWidth >= 762 && screenWidth < 960
                                        ? "47px"
                                        : screenWidth < 762
                                        ? "42px"
                                        : undefined,
                                  }}
                                  alt="Basketball"
                                  src={
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-1@2x.png"
                                      : screenWidth < 762
                                      ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball@2x.png"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="frame-88"
                              style={{
                                gap:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "6.22px"
                                    : screenWidth < 762
                                    ? "5.56px"
                                    : undefined,
                                width:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "169.62px"
                                    : screenWidth < 762
                                    ? "151.45px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="text-wrapper-123"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                }}
                              >
                                Game Limit:
                              </div>
                              <div
                                className="text-wrapper-124"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "31.1px"
                                      : screenWidth < 762
                                      ? "27.8px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "34.2px"
                                      : screenWidth < 762
                                      ? "30.6px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                }}
                              >
                                5
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-89"
                        style={{
                          height:
                            screenWidth >= 762 && screenWidth < 960
                              ? "93.37px"
                              : screenWidth < 762
                              ? "83.36px"
                              : undefined,
                        }}
                      >
                        <div
                          className="frame-90"
                          style={{
                            border:
                              screenWidth >= 762 && screenWidth < 960
                                ? "1.56px solid"
                                : screenWidth < 762
                                ? "1.39px solid"
                                : undefined,
                            borderRadius:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px"
                                : screenWidth < 762
                                ? "11.12px"
                                : undefined,
                            gap:
                              screenWidth >= 762 && screenWidth < 960
                                ? "15.56px"
                                : screenWidth < 762
                                ? "13.89px"
                                : undefined,
                            padding:
                              screenWidth >= 762 && screenWidth < 960
                                ? "12.45px 18.67px"
                                : screenWidth < 762
                                ? "11.12px 16.67px"
                                : undefined,
                            width:
                              screenWidth >= 762 && screenWidth < 960
                                ? "305px"
                                : screenWidth < 762
                                ? "272.32px"
                                : undefined,
                          }}
                        >
                          <div className="frame-24">
                            <div
                              className="text-wrapper-125"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              Game Modification
                            </div>
                            <div
                              className="text-wrapper-126"
                              style={{
                                fontSize:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "18.7px"
                                    : screenWidth < 762
                                    ? "16.7px"
                                    : undefined,
                                lineHeight:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "24.9px"
                                    : screenWidth < 762
                                    ? "22.2px"
                                    : undefined,
                                marginTop:
                                  screenWidth >= 762 && screenWidth < 960
                                    ? "-1.56px"
                                    : screenWidth < 762
                                    ? "-1.39px"
                                    : undefined,
                              }}
                            >
                              1
                            </div>
                          </div>
                          <div
                            className="frame-91"
                            style={{
                              borderBottomWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderLeftWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              borderRadius:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "0px 0px 12.45px 12.45px"
                                  : screenWidth < 762
                                  ? "0px 0px 11.12px 11.12px"
                                  : undefined,
                              borderRightWidth:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "1.56px"
                                  : screenWidth < 762
                                  ? "1.39px"
                                  : undefined,
                              gap:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "15.56px"
                                  : screenWidth < 762
                                  ? "13.89px"
                                  : undefined,
                              padding:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "31.12px 18.67px 12.45px"
                                  : screenWidth < 762
                                  ? "27.79px 16.67px 11.12px"
                                  : undefined,
                              top:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "25px"
                                  : screenWidth < 762
                                  ? "22px"
                                  : undefined,
                              width:
                                screenWidth >= 762 && screenWidth < 960
                                  ? "305px"
                                  : screenWidth < 762
                                  ? "272px"
                                  : undefined,
                            }}
                          >
                            <div className="frame-18">
                              <div
                                className="text-wrapper-127"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                  width:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "183.62px"
                                      : screenWidth < 762
                                      ? "163.95px"
                                      : undefined,
                                }}
                              >
                                Extra per 1
                              </div>
                              <div
                                className="text-wrapper-128"
                                style={{
                                  fontSize:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "18.7px"
                                      : screenWidth < 762
                                      ? "16.7px"
                                      : undefined,
                                  lineHeight:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "24.9px"
                                      : screenWidth < 762
                                      ? "22.2px"
                                      : undefined,
                                  marginTop:
                                    screenWidth >= 762 && screenWidth < 960
                                      ? "-1.56px"
                                      : screenWidth < 762
                                      ? "-1.39px"
                                      : undefined,
                                }}
                              >
                                $200
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 960 && screenWidth < 1920 && (
                <>
                  <img
                    className="img-3"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame-3.svg"
                  />
                  <div className="text-wrapper-46">More Games</div>
                </>
              )}
            </div>
          </div>
        )}

        {screenWidth >= 960 && screenWidth < 1920 && (
          <>
            <div className="price-5">
              <div className="title-2">
                <div className="overlap-group-6">
                  <div className="ellipse-7" />
                  <div className="ellipse-7" />
                  <img
                    className="underline-2"
                    alt="Underline"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/underline-2-2.svg"
                  />
                  <div className="text-wrapper-129">Price</div>
                </div>
              </div>
              <div className="group-2">
                <div className="frame-9">
                  <div className="text-wrapper-25">iFrame Integration</div>
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-16.svg"
                  />
                  <div className="text-wrapper-25">Cross-platform</div>
                </div>
                <div className="frame-10">
                  <img
                    className="star-3"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-21-2.svg"
                  />
                  <div className="text-wrapper-25">Native game-interaction</div>
                  <img
                    className="star-3"
                    alt="Star"
                    src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-17.svg"
                  />
                </div>
              </div>
              <div className="switch">
                <div className="item-3">
                  <div className="icon-dot">
                    <div className="ellipse-8" />
                  </div>
                  <div className="text-wrapper-26">1 month</div>
                </div>
                <div className="item-4">
                  <div className="icon-dot">
                    <div className="ellipse-8" />
                  </div>
                  <div className="text-wrapper-26">6 month</div>
                </div>
              </div>
              <div className="plans-3">
                <div className="plan-7">
                  <div className="frame-92">
                    <div className="frame-93">
                      <div className="frame-12">
                        <div className="text-wrapper-130">Cyber</div>
                        <div className="icon-16">
                          <img
                            className="star-12"
                            alt="Star"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-18.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-9" />
                  </div>
                  <div className="frame-94">
                    <div className="frame-94">
                      <div className="text-wrapper-131">$10,000</div>
                      <div className="text-wrapper-132">/ 1 month</div>
                    </div>
                  </div>
                  <div className="frame-92">
                    <div className="frame-95">
                      <div className="frame-96">
                        <div className="frame-97">
                          <VideoGame className="video-game-2" />
                          <div className="text-wrapper-133">10,000,000</div>
                        </div>
                        <div className="frame-97">
                          <div className="text-wrapper-134">Gameplays</div>
                        </div>
                        <div className="frame-98">
                          <div className="frame-18">
                            <div className="text-wrapper-135">Extra per 1000</div>
                            <div className="text-wrapper-136">$1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-99">
                      <div className="overlap-9">
                        <img
                          className="ninja-cat-9"
                          alt="Ninja cat"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-4@2x.png"
                        />
                        <div className="frame-100">
                          <div className="group-7">
                            <div className="overlap-group-18">
                              <img
                                className="ninja-cat-10"
                                alt="Ninja cat"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-5@2x.png"
                              />
                              <img
                                className="crazy-lab-5"
                                alt="Crazy lab"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-2@2x.png"
                              />
                              <img
                                className="cafeteria-5"
                                alt="Cafeteria"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-2@2x.png"
                              />
                              <img
                                className="basketball-5"
                                alt="Basketball"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-2@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-101">
                            <div className="text-wrapper-137">Game Limit:</div>
                            <div className="text-wrapper-138">25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-102">
                      <div className="frame-103">
                        <div className="frame-24">
                          <div className="text-wrapper-139">Game Modification</div>
                          <div className="text-wrapper-140">10</div>
                        </div>
                        <div className="frame-104">
                          <div className="frame-18">
                            <div className="text-wrapper-141">Extra per 1</div>
                            <div className="text-wrapper-140">$100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plan-8">
                  <div className="frame-92">
                    <div className="frame-93">
                      <div className="frame-12">
                        <div className="text-wrapper-130">Gamer</div>
                        <div className="icon-17">
                          <img
                            className="star-12"
                            alt="Star"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-19.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-10" />
                  </div>
                  <div className="frame-94">
                    <div className="frame-94">
                      <div className="text-wrapper-131">$5,000</div>
                      <div className="text-wrapper-132">/ 1 month</div>
                    </div>
                  </div>
                  <div className="frame-92">
                    <div className="frame-95">
                      <div className="frame-105">
                        <div className="frame-97">
                          <VideoGame className="video-game-2" />
                          <div className="text-wrapper-133">4,000,000</div>
                        </div>
                        <div className="frame-97">
                          <div className="text-wrapper-134">Gameplays</div>
                        </div>
                        <div className="frame-106">
                          <div className="frame-18">
                            <div className="text-wrapper-135">Extra per 1000</div>
                            <div className="text-wrapper-136">$2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-107">
                      <div className="overlap-9">
                        <img
                          className="ninja-cat-9"
                          alt="Ninja cat"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-4@2x.png"
                        />
                        <div className="frame-100">
                          <div className="group-7">
                            <div className="overlap-group-18">
                              <img
                                className="ninja-cat-10"
                                alt="Ninja cat"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-5@2x.png"
                              />
                              <img
                                className="crazy-lab-5"
                                alt="Crazy lab"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-2@2x.png"
                              />
                              <img
                                className="cafeteria-5"
                                alt="Cafeteria"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-2@2x.png"
                              />
                              <img
                                className="basketball-5"
                                alt="Basketball"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-2@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-101">
                            <div className="text-wrapper-137">Game Limit:</div>
                            <div className="text-wrapper-138">15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-102">
                      <div className="frame-108">
                        <div className="frame-24">
                          <div className="text-wrapper-139">Game Modification</div>
                          <div className="text-wrapper-140">5</div>
                        </div>
                        <div className="frame-109">
                          <div className="frame-18">
                            <div className="text-wrapper-141">Extra per 1</div>
                            <div className="text-wrapper-140">$150</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plan-9">
                  <div className="frame-92">
                    <div className="frame-93">
                      <div className="frame-12">
                        <div className="text-wrapper-130">Starter</div>
                        <div className="icon-18">
                          <img
                            className="star-12"
                            alt="Star"
                            src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-20.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-11" />
                  </div>
                  <div className="frame-94">
                    <div className="frame-94">
                      <div className="text-wrapper-131">$1,000</div>
                      <div className="text-wrapper-132">/ 1 month</div>
                    </div>
                  </div>
                  <div className="frame-92">
                    <div className="frame-95">
                      <div className="frame-110">
                        <div className="frame-97">
                          <VideoGame className="video-game-3" />
                          <div className="text-wrapper-133">500,000</div>
                        </div>
                        <div className="frame-97">
                          <div className="text-wrapper-134">Gameplays</div>
                        </div>
                        <div className="frame-111">
                          <div className="frame-18">
                            <div className="text-wrapper-135">Extra per 1000</div>
                            <div className="text-wrapper-136">$3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-112">
                      <div className="overlap-9">
                        <img
                          className="ninja-cat-9"
                          alt="Ninja cat"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-4@2x.png"
                        />
                        <div className="frame-100">
                          <div className="group-7">
                            <div className="overlap-group-18">
                              <img
                                className="ninja-cat-10"
                                alt="Ninja cat"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/ninja-cat-5@2x.png"
                              />
                              <img
                                className="crazy-lab-5"
                                alt="Crazy lab"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/crazy-lab-2@2x.png"
                              />
                              <img
                                className="cafeteria-5"
                                alt="Cafeteria"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/cafeteria-2@2x.png"
                              />
                              <img
                                className="basketball-5"
                                alt="Basketball"
                                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/basketball-2@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-101">
                            <div className="text-wrapper-137">Game Limit:</div>
                            <div className="text-wrapper-138">5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-102">
                      <div className="frame-113">
                        <div className="frame-24">
                          <div className="text-wrapper-139">Game Modification</div>
                          <div className="text-wrapper-140">1</div>
                        </div>
                        <div className="frame-114">
                          <div className="frame-18">
                            <div className="text-wrapper-141">Extra per 1</div>
                            <div className="text-wrapper-140">$200</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-4">
              <img
                className="star"
                alt="Star"
                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-13.svg"
              />
              <img
                className="union-2"
                alt="Union"
                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-19.svg"
              />
              <img
                className="union-3"
                alt="Union"
                src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-20.svg"
              />
            </div>
            <div className="idea-2">
              <div className="frame-115">
                <div className="ellipse-2" />
                <div className="what-s-your-mg-idea">What&#39;s your M2G idea?</div>
                <p className="text-wrapper-142">Let’s chat and see how we can help</p>
                <div className="ellipse" />
              </div>
              <div className="frame-116">
                <div className="button-5">
                  <div className="group-8">
                    <div className="overlap-group-19">
                      <div className="rectangle-12" />
                      <div className="img-4">
                        <img
                          className="union-12"
                          alt="Union"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-28.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-117">
                    <div className="text-wrapper-143">Email</div>
                    <div className="text-wrapper-144">hello@money2games.com</div>
                  </div>
                </div>
                <div className="button-6">
                  <div className="group-8">
                    <div className="overlap-group-20">
                      <div className="rectangle-13" />
                      <img
                        className="img-4"
                        alt="Icon telegram"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-telegram-2.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-117">
                    <div className="text-wrapper-145">Telegram</div>
                    <p className="money-games">
                      <span className="text-wrapper-146">@money2games</span>
                    </p>
                  </div>
                </div>
                <div className="button-7">
                  <div className="group-8">
                    <div className="overlap-group-19">
                      <div className="rectangle-12" />
                      <img
                        className="img-4"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame-5617-2.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-117">
                    <div className="text-wrapper-147">Discord</div>
                    <div className="text-wrapper-144">money2games</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {((screenWidth >= 762 && screenWidth < 960) ||
          (screenWidth >= 960 && screenWidth < 1920) ||
          screenWidth < 762) && (
          <footer
            className="footer-2"
            style={{
              height:
                screenWidth >= 762 && screenWidth < 960
                  ? "206px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "116px"
                  : screenWidth < 762
                  ? "173px"
                  : undefined,
              top:
                screenWidth >= 762 && screenWidth < 960
                  ? "7336px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "4861px"
                  : screenWidth < 762
                  ? "6786px"
                  : undefined,
              width:
                screenWidth >= 762 && screenWidth < 960
                  ? "762px"
                  : screenWidth >= 960 && screenWidth < 1920
                  ? "960px"
                  : screenWidth < 762
                  ? "360px"
                  : undefined,
            }}
          >
            <div
              className="container-8"
              style={{
                flexDirection: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "column" : undefined,
                height: screenWidth >= 762 && screenWidth < 960 ? "206px" : screenWidth < 762 ? "173px" : undefined,
                left: screenWidth >= 762 && screenWidth < 960 ? "181px" : screenWidth < 762 ? "16px" : undefined,
                padding:
                  (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                    ? "32px 20px"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "46px 20px"
                    : undefined,
                top: screenWidth >= 960 && screenWidth < 1920 ? "-24px" : undefined,
                width:
                  screenWidth >= 762 && screenWidth < 960
                    ? "400px"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "959px"
                    : screenWidth < 762
                    ? "328px"
                    : undefined,
              }}
            >
              <img
                className="logotype-5"
                style={{
                  height:
                    (screenWidth >= 762 && screenWidth < 960) || (screenWidth >= 960 && screenWidth < 1920)
                      ? "112.17px"
                      : screenWidth < 762
                      ? "92.2px"
                      : undefined,
                  marginBottom: screenWidth >= 960 && screenWidth < 1920 ? "-19.59px" : undefined,
                  marginLeft: screenWidth >= 960 && screenWidth < 1920 ? "-6.47px" : undefined,
                  marginTop:
                    (screenWidth >= 762 && screenWidth < 960) || (screenWidth >= 960 && screenWidth < 1920)
                      ? "-19.59px"
                      : screenWidth < 762
                      ? "-16.10px"
                      : undefined,
                  width:
                    (screenWidth >= 762 && screenWidth < 960) || (screenWidth >= 960 && screenWidth < 1920)
                      ? "232.64px"
                      : screenWidth < 762
                      ? "191.21px"
                      : undefined,
                }}
                alt="Logotype"
                src={
                  screenWidth >= 762 && screenWidth < 960
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype-4.png"
                    : screenWidth >= 960 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype-6.png"
                    : screenWidth < 762
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/logotype-2.png"
                    : undefined
                }
              />
              <div
                className="frame-118"
                style={{
                  alignSelf: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "stretch" : undefined,
                  display:
                    (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762
                      ? "flex"
                      : screenWidth >= 960 && screenWidth < 1920
                      ? "inline-flex"
                      : undefined,
                  gap: screenWidth >= 960 && screenWidth < 1920 ? "56px" : undefined,
                  justifyContent:
                    (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "space-between" : undefined,
                  width: (screenWidth >= 762 && screenWidth < 960) || screenWidth < 762 ? "100%" : undefined,
                }}
              >
                {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
                  <>
                    <div className="div-2">
                      {screenWidth < 762 && <>Solution</>}

                      {screenWidth >= 762 && screenWidth < 960 && <>Home</>}
                    </div>
                    <div className="div-2">
                      {screenWidth >= 762 && screenWidth < 960 && <>For whom</>}

                      {screenWidth < 762 && <>Price</>}
                    </div>
                    <div className="div-2">
                      {screenWidth >= 762 && screenWidth < 960 && <>Solution</>}

                      {screenWidth < 762 && <>Contacts</>}
                    </div>
                  </>
                )}

                {screenWidth >= 762 && screenWidth < 960 && (
                  <>
                    <div className="div-2">Price</div>
                    <div className="div-2">Contacts</div>
                  </>
                )}

                {screenWidth >= 960 && screenWidth < 1920 && (
                  <div className="frame-2">
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper">For whom</div>
                    <div className="text-wrapper">Solution</div>
                    <div className="text-wrapper">Price</div>
                    <div className="text-wrapper">Contacts</div>
                  </div>
                )}
              </div>
            </div>
          </footer>
        )}

        {((screenWidth >= 762 && screenWidth < 960) || screenWidth < 762) && (
          <>
            <div
              className="shape-5"
              style={{
                height: screenWidth >= 762 && screenWidth < 960 ? "88px" : screenWidth < 762 ? "63px" : undefined,
                left: screenWidth >= 762 && screenWidth < 960 ? "342px" : screenWidth < 762 ? "142px" : undefined,
                top: screenWidth >= 762 && screenWidth < 960 ? "6566px" : screenWidth < 762 ? "6067px" : undefined,
                width: screenWidth >= 762 && screenWidth < 960 ? "77px" : screenWidth < 762 ? "55px" : undefined,
              }}
            >
              <img
                className="star-13"
                style={{
                  height: screenWidth >= 762 && screenWidth < 960 ? "37px" : screenWidth < 762 ? "27px" : undefined,
                  width: screenWidth >= 762 && screenWidth < 960 ? "37px" : screenWidth < 762 ? "27px" : undefined,
                }}
                alt="Star"
                src={
                  screenWidth >= 762 && screenWidth < 960
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-13.svg"
                    : screenWidth < 762
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/star-20-6.svg"
                    : undefined
                }
              />
              <img
                className="union-13"
                style={{
                  height: screenWidth >= 762 && screenWidth < 960 ? "19px" : screenWidth < 762 ? "14px" : undefined,
                  left: screenWidth >= 762 && screenWidth < 960 ? "58px" : screenWidth < 762 ? "42px" : undefined,
                  top: screenWidth >= 762 && screenWidth < 960 ? "27px" : screenWidth < 762 ? "19px" : undefined,
                  width: screenWidth >= 762 && screenWidth < 960 ? "19px" : screenWidth < 762 ? "14px" : undefined,
                }}
                alt="Union"
                src={
                  screenWidth >= 762 && screenWidth < 960
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-19.svg"
                    : screenWidth < 762
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-12.svg"
                    : undefined
                }
              />
              <img
                className="union-14"
                style={{
                  height: screenWidth >= 762 && screenWidth < 960 ? "19px" : screenWidth < 762 ? "14px" : undefined,
                  left: screenWidth >= 762 && screenWidth < 960 ? "39px" : screenWidth < 762 ? "28px" : undefined,
                  top: screenWidth >= 762 && screenWidth < 960 ? "69px" : screenWidth < 762 ? "49px" : undefined,
                  width: screenWidth >= 762 && screenWidth < 960 ? "19px" : screenWidth < 762 ? "14px" : undefined,
                }}
                alt="Union"
                src={
                  screenWidth >= 762 && screenWidth < 960
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-20.svg"
                    : screenWidth < 762
                    ? "https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-13.svg"
                    : undefined
                }
              />
            </div>
            <div
              className="idea-3"
              style={{
                left: screenWidth >= 762 && screenWidth < 960 ? "197px" : screenWidth < 762 ? "-4px" : undefined,
                top: screenWidth >= 762 && screenWidth < 960 ? "6698px" : screenWidth < 762 ? "6182px" : undefined,
              }}
            >
              <div className="frame-119">
                <div
                  className="ellipse-21"
                  style={{
                    top: screenWidth >= 762 && screenWidth < 960 ? "45px" : screenWidth < 762 ? "35px" : undefined,
                  }}
                />
                <div
                  className="ellipse-22"
                  style={{
                    top: screenWidth >= 762 && screenWidth < 960 ? "45px" : screenWidth < 762 ? "35px" : undefined,
                  }}
                />
                <div
                  className="what-s-your-idea-2"
                  style={{
                    fontSize: screenWidth >= 762 && screenWidth < 960 ? "48px" : screenWidth < 762 ? "32px" : undefined,
                    lineHeight:
                      screenWidth >= 762 && screenWidth < 960 ? "60px" : screenWidth < 762 ? "50px" : undefined,
                  }}
                >
                  What&#39;s your
                  <br />
                  M2G idea?
                </div>
                <p className="let-s-chat-and-see">
                  Let’s chat and see
                  <br />
                  how we can help
                </p>
              </div>
              <div className="frame-120">
                <div className="button-8">
                  <div className="group-9">
                    <div className="overlap-group-19">
                      <div className="rectangle-12" />
                      <div className="img-4">
                        <img
                          className="union-12"
                          alt="Union"
                          src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/union-14.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-117">
                    <div className="text-wrapper-143">Email</div>
                    <div className="text-wrapper-144">hello@money2games.com</div>
                  </div>
                </div>
                <div className="button-9">
                  <div className="group-9">
                    <div className="overlap-group-20">
                      <div className="rectangle-13" />
                      <img
                        className="img-4"
                        alt="Icon telegram"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/icon-telegram.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-117">
                    <div className="text-wrapper-145">Telegram</div>
                    <p className="money-games">
                      <span className="text-wrapper-146">@money2games</span>
                    </p>
                  </div>
                </div>
                <div className="button-10">
                  <div className="group-9">
                    <div className="overlap-group-19">
                      <div className="rectangle-12" />
                      <img
                        className="img-4"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/65115701d616ec74ff22422d/releases/65118dee6712cc4a34c858c7/img/frame-5617.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-117">
                    <div className="text-wrapper-147">Discord</div>
                    <div className="text-wrapper-144">money2games</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
