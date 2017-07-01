(ns uikit-hl.grid
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-grid* "")

(def ^:dynamic *small*    nil)
(def ^:dynamic *medium*   nil)
(def ^:dynamic *large*    nil)
(def ^:dynamic *collapse* nil)

(def ^:dynamic *divider* nil)

(def ^:dynamic *match* nil)

(def ^:dynamic *width-expand* nil)

(defmethod hl/do! :uk-grid
  [elem _ v]
  (.grid js/UIkit elem (clj->js v)))

(hl/defelem grid [attr kids]
  (let [grid         (:uk-grid      attr *uk-grid*)
        small        (:small        attr *small*)
        medium       (:grid         attr *medium*)
        large        (:large        attr *large*)
        collapse     (:collapse     attr *collapse*)
        divider      (:divider      attr *divider*)
        match        (:match        attr *match*)
        width-expand (:width-expand attr *width-expand*)
        attr     (-> attr
                    (assoc :uk-grid grid)
                    (dissoc :small :medium :large :collapse :divider :match
                            :width-expand))]
    (hl/div (core/assoc-class attr {:uk-grid-small         small
                                    :uk-grid-medium        medium
                                    :uk-grid-large         large
                                    :uk-grid-collapse      collapse
                                    :uk-grid-divider       divider
                                    :uk-grid-match         match
                                    :uk-child-width-expand width-expand}) kids)))
