(ns uikit-hl.icon
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            [cljsjs.uikit-icons]))

(def ^:dynamic *uk-icon* "")
(def ^:dynamic *icon*    nil)
(def ^:dynamic *ratio*   nil)

(defmethod hl/do! :uk-icon
  [elem _ v]
  (.icon js/UIkit elem (clj->js v)))

(hl/defelem icon [attr kids]
  (let [icon (:uk-icon attr (select-keys attr [:icon :ratio]))
        attr (assoc attr :uk-icon icon)]
    (hl/span attr)))

(hl/defelem link-icon [attr kids]
  (let [icon (:uk-icon attr (select-keys attr [:icon :ratio]))
        attr (-> attr
              (assoc  :uk-icon icon)
              (dissoc :icon :ratio))]
    (hl/a (core/assoc-class attr {:uk-icon-link true}))))

(hl/defelem button-icon [attr kids]
  (let [icon (:uk-icon attr (select-keys attr [:icon :ratio]))
        attr (-> attr
              (assoc  :uk-icon icon)
              (dissoc :icon :ratio))]
    (hl/a (core/assoc-class attr {:uk-icon-button true}))))

(hl/defelem image-icon [attr kids]
  (let []
    (hl/span (core/assoc-class attr {:uk-icon true :uk-icon-image true}) kids)))
