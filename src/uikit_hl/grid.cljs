(ns uikit-hl.grid
  (:require [hoplon.core :as hl]
            ["uikit" :as uikit]
            [uikit-hl.core :as core]
            [uikit-hl.card :as c]))

(def ^:dynamic *uk-grid* "")

(def ^:dynamic *small*    nil)
(def ^:dynamic *medium*   nil)
(def ^:dynamic *large*    nil)
(def ^:dynamic *collapse* nil)

(def ^:dynamic *divider* nil)

(def ^:dynamic *match* nil)
(def ^:dynamic *stack* nil)

(def ^:dynamic *item-match* nil)

(defmethod hl/do! :uk-grid
  [elem _ v]
  (.grid uikit elem (clj->js v)))

(hl/defelem grid [attr kids]
  (let [grid         (:uk-grid      attr *uk-grid*)
        small        (:small        attr *small*)
        medium       (:grid         attr *medium*)
        large        (:large        attr *large*)
        collapse     (:collapse     attr *collapse*)
        divider      (:divider      attr *divider*)
        match        (:match        attr *match*)
        stack        (:stack        attr *stack*)
        attr     (-> attr
                    (assoc :uk-grid grid)
                    (dissoc :small :medium :large :collapse :divider :match :stack))]
    (hl/div (core/assoc-class attr {:uk-grid-small         small
                                    :uk-grid-medium        medium
                                    :uk-grid-large         large
                                    :uk-grid-collapse      collapse
                                    :uk-grid-divider       divider
                                    :uk-grid-match         match
                                    :uk-grid-stack         stack}) kids)))

(hl/defelem cell [attr kids]
  (let [item-match (:item-match attr *item-match*)
        attr       (dissoc attr :item-match)]
    (hl/div (core/assoc-class attr {:uk-grid-item-match item-match}) kids)))
