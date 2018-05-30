import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { all } from "../../../screenshot-options";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        ナビゲーションバー
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              ホーム
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              リンク
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 ml-lg-5 mr-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="検索ワード"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            検索
          </button>
        </form>
        <ul className="navbar-nav my-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ドロップダウン
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                アクション
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                他のアクション
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
storiesOf("Basics/Bootstrap/navbar", module)
  .addDecorator(withScreenshot(all()))
  .add("default", () => <Navbar />);
