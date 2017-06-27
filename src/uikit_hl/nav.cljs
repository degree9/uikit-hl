(ns uikit-hl.nav
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-nav*      "")
(def ^:dynamic *default*     nil)
(def ^:dynamic *title*       nil)
(def ^:dynamic *href*        nil)
(def ^:dynamic *parent*      nil)
(def ^:dynamic *active*      nil)
(def ^:dynamic *parent-icon* nil)

(defmethod hl/do! :uk-nav
  [elem _ v]
  (.nav js/UIkit elem (clj->js v)))


(hl/defelem nav [attr kids]
  (let [nav         (:uk-nav  attr *uk-nav*)
        default     (:default attr *default*)
        parent-icon (:parent-icon attr *parent-icon*)
        attr        (-> attr
                      (assoc  :uk-nav nav)
                      (dissoc :default))]
    (hl/ul (core/assoc-class attr {:uk-nav             true
                                   :uk-nav-default     default
                                   :uk-nav-parent-icon parent-icon}) kids)))

(hl/defelem header [attr kids]
  (let []
    (hl/li (core/assoc-class attr {:uk-nav-header true}) kids)))

(hl/defelem item [attr kids]
  (let [parent (:parent attr *parent*)
        active (:active attr *active*)
        title  (:title  attr *title*)
        href   (:href   attr *href*)
        attr   (dissoc  attr :active :title :parent :href)]
    (hl/li (core/assoc-class attr {:uk-parent parent :uk-active active}) [(hl/a :href href title) kids])))

(hl/defelem subnav [attr kids]
  (let []
    (hl/ul (core/assoc-class attr {:uk-nav-sub true}) kids)))
