(ns uikit-hl.icon
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-icon* "")
(def ^:dynamic *icon*    nil)
(def ^:dynamic *ratio*   nil)

(defmethod hl/do! :uk-icon
  [elem _ v]
  (.icon js/UIkit elem (clj->js v)))

(hl/defelem icon [{:keys [icon ratio] :as attr} kids]
  (let [icon (:uk-icon attr {:icon icon :ratio ratio})
        attr (assoc attr :uk-icon icon)]
    (hl/span attr kids)))

(hl/defelem link-icon [{:keys [icon ratio] :as attr} kids]
  (let [icon (:uk-icon attr {:icon icon :ratio ratio})
        attr (-> attr
              (assoc  :uk-icon icon)
              (dissoc :icon :ratio))]
    (hl/a (core/assoc-class attr {:uk-icon-link true}) kids)))

(hl/defelem button-icon [{:keys [icon ratio] :as attr} kids]
  (let [icon (:uk-icon attr {:icon icon :ratio ratio})
        attr (-> attr
              (assoc  :uk-icon icon)
              (dissoc :icon :ratio))]
    (hl/a (core/assoc-class attr {:uk-icon-button true}) kids)))

(hl/defelem image-icon [attr kids]
  (let []
    (hl/span (core/assoc-class attr {:uk-icon true :uk-icon-image true}) kids)))
