(ns uikit-hl.dropdown
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-dropdown* "")

(def ^:dynamic *navbar* nil)

(defmethod hl/do! :uk-dropdown
  [elem _ v]
  (.dropdown js/UIkit elem (clj->js v)))

(hl/defelem dropdown [attr kids]
  (let [dropdown (:uk-dropdown attr *uk-dropdown*)
        navbar   (:navbar attr *navbar*)
        attr     (-> attr
                  (assoc :uk-dropdown dropdown)
                  (dissoc :navbar))]
    (hl/div (core/assoc-class attr {:uk-navbar-dropdown navbar}) kids)))
