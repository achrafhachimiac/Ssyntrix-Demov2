import React from "react";
import { Link } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCases } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineTerminal } from "react-icons/md";
import { LiaMousePointerSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";
import { IoIosPower } from "react-icons/io";
import { AiOutlineAlert } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <aside className="h-fit w-56 bg-gradient-primary text-gray-400 sticky top-0">
      <div className="h-[32%] items-center flex flex-col">
        <div className="py-6 px-4 h-3/5">
          <img
            className="py-3 px-5 h-[57%] w-max align-middle"
            src="/logo2.png"
            alt="Logo"
          ></img>
        </div>
        <div className="flex flex-col justify-end h-2/5">
          <div className="font-extrabold w-full  text-white text-opacity-40">
            <div className="px-1 text-ssm">SUBSCRIPTION</div>
            <div
              style={{
                borderRadius: "4px",
                display: "inline-block",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "15px 19px",
                marginLeft: "0.5rem",
                marginRight: "1rem",
                marginTop: "6px",
              }}
            >
              <div className="flex gap-2">
                <div className="font-medium ">
                  <div className=" ">
                    <span className="text-white pl-3 pr-2">SX-500</span>

                    <span className=" bg-[#40b660] py-[3px] px-[4px] h-5 rounded-[4px] text-[11px]  text-white">
                      Active
                    </span>
                  </div>
                  <p className="text-ssm whitespace-nowrap text-gray-400">
                    Will be renewed in 301 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-7">
        <h2 className="font-extrabold text-sssm text-white text-opacity-40 px-4">
          {" "}
          DASHBOARD
        </h2>
        <ul className=" text-white px-4">
          <li className="text-white text-opacity-30 text-font-dh focus:text-white">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/profile"
            >
              <RxDashboard />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className=" hover:text-white focus:text-white focus:bold "
              >
                Dashboard
              </span>{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-7">
        <h2 className="font-extrabold text-sssm text-white text-opacity-40 px-4">
          TRANSACTIONS
        </h2>
        <ul className="text-white px-4">
          <li className=" text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/transaction"
            >
              <HiAdjustmentsHorizontal />
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Transactions
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/trustscore"
            >
              {" "}
              <FaRegCheckCircle />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Trustscore
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/treportstats"
            >
              <FaRegFileAlt />
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Report & Stats
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/incidents"
            >
              <CgDanger />
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Incident
              </span>{" "}
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/alerts"
            >
              <AiOutlineAlert />
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Alert
              </span>{" "}
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/customers"
            >
              <FaRegUser />
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Customers
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="pt-7">
        <h2 className="font-extrabold text-sssm text-white text-opacity-40 px-4">
          CASES
        </h2>
        <ul className="text-white  px-4">
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/cases"
            >
              {" "}
              <MdOutlineCases />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                {" "}
                Cases{" "}
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/creportstats"
            >
              <FaRegFileAlt />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Report & Stats
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-7">
        <h2 className="font-extrabold text-sssm text-white text-opacity-40 px-4">
          ADMIN TOOLS
        </h2>
        <ul className="text-white px-4">
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/useraccess"
            >
              <FiUser />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className=" hover:text-white  focus:text-white focus:font-bold"
              >
                {" "}
                User access{" "}
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/useraccess"
            >
              <IoSettingsOutline />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                {" "}
                Admin{" "}
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/useraccess"
            >
              <MdOutlineTerminal />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                {" "}
                Activity Logs{" "}
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/useraccess"
            >
              <FiMonitor />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                {" "}
                Session Management{" "}
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/useraccess"
            >
              <LiaMousePointerSolid />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                {" "}
                Clicks Tracking{" "}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-7">
        <h2 className="font-extrabold text-sssm text-white text-opacity-40 px-4">
          MISC
        </h2>
        <ul className="text-white  px-4">
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/cases"
            >
              {" "}
              <MdLockOutline />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                {" "}
                Change Password{" "}
              </span>
            </Link>
          </li>
          <li className="text-white text-opacity-30 text-font-dh">
            <Link
              className="flex items-center hover:text-white focus:text-white gap-2 whitespace-nowrap focus:font-semibold"
              to="/creportstats"
            >
              <IoIosPower />{" "}
              <span
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                className="hover:text-white focus:text-white focus:font-bold"
              >
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Dashboard;
