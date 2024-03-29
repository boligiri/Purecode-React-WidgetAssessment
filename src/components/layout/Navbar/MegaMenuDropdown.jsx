import { a } from "react-router-dom";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const MegaMenuDropdown = () => {
  return (
    <li>
      <div className="hs-dropdown relative inline-flex [--trigger:hover] [--auto-close:inside]">
        <button className="hs-dropdown-toggle inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-default-700 after:absolute after:inset-0 hover:text-primary hover:after:-bottom-10 lg:text-base">
          Mega Menu <LuChevronDown size={16} className="ms-2" />
        </button>
        <div className="hs-dropdown-menu absolute inset-x-0 top-full z-10 mt-4 hidden w-full min-w-full opacity-0 transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100">
          <div className="container">
            <div className="overflow-hidden rounded-lg border border-default-200 bg-white shadow-lg dark:bg-default-50">
              <div className="grid grid-cols-12">
                <div className="col-span-2 text-sm">
                  <div className="h-full w-full bg-default-100 px-6 py-10">
                    <nav
                      aria-label="Tabs"
                      className="flex flex-col space-y-3.5"
                      data-hs-tabs-vertical="true"
                      role="tablist"
                    >
                      <button
                        className="active inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#wraps"
                        role="tab"
                        type="button"
                      >
                        Wraps <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#noodles"
                        role="tab"
                        type="button"
                      >
                        Noodles <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#mexican"
                        role="tab"
                        type="button"
                      >
                        Mexican cuisine{" "}
                        <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#tacos"
                        role="tab"
                        type="button"
                      >
                        Tacos <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#smart-meals"
                        role="tab"
                        type="button"
                      >
                        Smart Meals{" "}
                        <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#burger"
                        role="tab"
                        type="button"
                      >
                        Burger <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#beverages-desserts"
                        role="tab"
                        type="button"
                      >
                        Beverages &amp; Desserts{" "}
                        <LuChevronRight size={20} className="ms-auto" />
                      </button>
                    </nav>
                  </div>
                </div>
                <div className="col-span-10">
                  <div className="py-10">
                    <div id="wraps" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Bean-Based Wraps
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Black Bean Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Refried Bean and Cheese Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Falafel Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chickpea and Hummus Wrap
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Grilled Vegetable Wraps
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Grilled Veggie Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Roasted Red Pepper Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Portobello Mushroom Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Eggplant Parmesan Wrap
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Cheese and Spinach Wraps
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Spinach and Feta Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Paneer Tikka Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Caprese Wrap
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Chicken Wraps
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Grilled Chicken Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Buffalo Chicken Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Caesar Wrap
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Shawarma Wrap
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="noodles" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Italian Pasta Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Spaghetti Bolognese
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Fettuccine Alfredo
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Lasagna
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Carbonara
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Penne alla Vodka
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Asian Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Ramen
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Pad Thai
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Pho
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chow Mein
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Udon Stir-Fry
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Soba Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Lo Mein
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Chinese Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Beef Chow Fun
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Dan Dan Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Sesame Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Wonton Noodle Soup
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Zha Jiang Mian
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Japanese Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Yakisoba
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Tempura Udon
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Hiyashi Chukakies
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Sushi Rolls
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="mexican" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Thai Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Drunken Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Tom Yum Noodle Soup
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Green Curry Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Glass Noodle Salad
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Indian Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Veg Hakka Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Maggi Noodles
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Masala Instant Noodles
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Korean Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Japchae
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Jajangmyeon
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Ramyeon
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Naengmyeon
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Western Noodle Dishes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Noodle Soup
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Beef Stroganoff
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Tuna Noodle Casserole
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Macaroni and Cheese
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="tacos" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Tacos
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Street Tacos
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Carnitas Tacos
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Barbacoa Tacos
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Fish Tacos
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Vegetarian Tacos
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Enchiladas
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Enchiladas
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Cheese Enchiladas
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Beef Enchiladas
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Suizas Enchiladas
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Tamales
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Pork Tamales
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Tamales
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Sweet Tamales
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Quesadillas
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Cheese Quesadillas
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Quesadillas
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Vegetarian Quesadillas
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="smart-meals" role="tabpanel">
                      <div className="grid grid-cols-3 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Balanced Meals
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Grilled chicken breast with steamed broccoli and
                                quinoa
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Baked salmon with asparagus and brown rice
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Low-Carb Meals
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Cauliflower rice stir-fry with tofu and mixed
                                vegetables
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Zucchini noodles with pesto and grilled shrimp
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            High-Protein Meals
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Lean beef or turkey burger with a side salad
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Greek yogurt parfait with berries and nuts
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="burger" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Classic Burgers
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Cheeseburger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Bacon Cheeseburger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Double Cheeseburger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Triple Cheeseburger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Classic Veggie Burger
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Patty Variations
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Turkey Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chicken Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Bison Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Salmon Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Black Bean Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Portobello Mushroom Burger
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Flavorful Toppings
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                BBQ Burgerges
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Mushroom Swiss Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Western/Cowboy Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Blue Cheese Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Jalapeño Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Guacamole Burger
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Breakfast Burger
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Avocado Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Caprese Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Mediterranean Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Tex-Mex Burger
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Reuben Burger
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="hidden"
                      id="beverages-desserts"
                      role="tabpanel"
                    >
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Coffee Based
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Espresso
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Cappuccino
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Latte
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Americano
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Mocha
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Macchiato
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Tea
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Black Tea
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Green Tea
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Herbal Tea
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chai Tea
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Earl Grey
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Cakes
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chocolate Cake
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Carrot Cake
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Red Velvet Cake
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Cheesecake
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Cookies &amp; Pastries
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Chocolate Chip Cookies
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Oatmeal Raisin Cookies
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Peanut Butter Cookies
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Sugar Cookies
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Croissant
                              </a>
                            </li>
                            <li>
                              <a
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Danish Pastry
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MegaMenuDropdown;
