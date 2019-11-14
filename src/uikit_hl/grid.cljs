(ns uikit-hl.grid
  (:require [hoplon.core :as h]
            [clojure.string :as s]
            [uikit-hl.core :as uk]))

(defmulti uk-grid! h/kw-dispatcher :default ::default)

(defn format-grid [grid]
  (str "uk-grid-" grid))

(defmethod h/do! ::default
  [elem key val]
  (uk-grid! elem key val))

(defmethod uk-grid! ::default
  [elem key val]
  (h/do! elem :class {(format-grid (name key)) val}))

(defmethod uk-grid! ::grid
  [elem _ v]
  (.grid uk/uikit elem (clj->js v)))

(h/defelem grid [{:keys [grid small medium large collapse divider match stack] :or {grid {}} :as attr} kids]
  (h/div
    (dissoc attr :grid :small :medium :large :collapse :divider :match :stack)
    ::grid     grid
    ::small    small
    ::medium   medium
    ::large    large
    ::collapse collapse
    ::divider  divider
    ::match    match
    ::stack    stack
    kids))

(h/defelem cell [attr kids]
  (let [{:keys [item-match]} (dissoc attr :item-match)]
    (h/div
      attr
      ::item-match item-match
      kids)))
