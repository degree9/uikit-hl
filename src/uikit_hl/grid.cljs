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

(def ^:dynamic *child-1-2*    nil)
(def ^:dynamic *child-1-3*    nil)
(def ^:dynamic *child-1-4*    nil)
(def ^:dynamic *child-1-5*    nil)
(def ^:dynamic *child-1-6*    nil)
(def ^:dynamic *child-auto*   nil)
(def ^:dynamic *child-expand* nil)

(def ^:dynamic *child-1-2-s*    nil)
(def ^:dynamic *child-1-3-s*    nil)
(def ^:dynamic *child-1-4-s*    nil)
(def ^:dynamic *child-1-5-s*    nil)
(def ^:dynamic *child-1-6-s*    nil)
(def ^:dynamic *child-auto-s*   nil)
(def ^:dynamic *child-expand-s* nil)

(def ^:dynamic *child-1-2-m*    nil)
(def ^:dynamic *child-1-3-m*    nil)
(def ^:dynamic *child-1-4-m*    nil)
(def ^:dynamic *child-1-5-m*    nil)
(def ^:dynamic *child-1-6-m*    nil)
(def ^:dynamic *child-auto-m*   nil)
(def ^:dynamic *child-expand-m* nil)

(def ^:dynamic *child-1-2-l*    nil)
(def ^:dynamic *child-1-3-l*    nil)
(def ^:dynamic *child-1-4-l*    nil)
(def ^:dynamic *child-1-5-l*    nil)
(def ^:dynamic *child-1-6-l*    nil)
(def ^:dynamic *child-auto-l*   nil)
(def ^:dynamic *child-expand-l* nil)

(def ^:dynamic *child-1-2-xl*    nil)
(def ^:dynamic *child-1-3-xl*    nil)
(def ^:dynamic *child-1-4-xl*    nil)
(def ^:dynamic *child-1-5-xl*    nil)
(def ^:dynamic *child-1-6-xl*    nil)
(def ^:dynamic *child-auto-xl*   nil)
(def ^:dynamic *child-expand-xl* nil)

(def ^:dynamic *item-match* nil)

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
        child-1-2    (:child-1-2    attr *child-1-2*)
        child-1-3    (:child-1-3    attr *child-1-3*)
        child-1-4    (:child-1-4    attr *child-1-4*)
        child-1-5    (:child-1-5    attr *child-1-5*)
        child-1-6    (:child-1-6    attr *child-1-6*)
        child-auto   (:child-auto   attr *child-auto*)
        child-expand (:child-expand attr *child-expand*)
        child-1-2-s    (:child-1-2-s    attr *child-1-2-s*)
        child-1-3-s    (:child-1-3-s    attr *child-1-3-s*)
        child-1-4-s    (:child-1-4-s    attr *child-1-4-s*)
        child-1-5-s    (:child-1-5-s    attr *child-1-5-s*)
        child-1-6-s    (:child-1-6-s    attr *child-1-6-s*)
        child-auto-s   (:child-auto-s   attr *child-auto-s*)
        child-expand-s (:child-expand-s attr *child-expand-s*)
        child-1-2-m    (:child-1-2-m    attr *child-1-2-m*)
        child-1-3-m    (:child-1-3-m    attr *child-1-3-m*)
        child-1-4-m    (:child-1-4-m    attr *child-1-4-m*)
        child-1-5-m    (:child-1-5-m    attr *child-1-5-m*)
        child-1-6-m    (:child-1-6-m    attr *child-1-6-m*)
        child-auto-m   (:child-auto-m   attr *child-auto-m*)
        child-expand-m (:child-expand-m attr *child-expand-m*)
        child-1-2-l    (:child-1-2-l    attr *child-1-2-l*)
        child-1-3-l    (:child-1-3-l    attr *child-1-3-l*)
        child-1-4-l    (:child-1-4-l    attr *child-1-4-l*)
        child-1-5-l    (:child-1-5-l    attr *child-1-5-l*)
        child-1-6-l    (:child-1-6-l    attr *child-1-6-l*)
        child-auto-l   (:child-auto-l   attr *child-auto-l*)
        child-expand-l (:child-expand-l attr *child-expand-l*)
        child-1-2-xl    (:child-1-2-xl    attr *child-1-2-xl*)
        child-1-3-xl    (:child-1-3-xl    attr *child-1-3-xl*)
        child-1-4-xl    (:child-1-4-xl    attr *child-1-4-xl*)
        child-1-5-xl    (:child-1-5-xl    attr *child-1-5-xl*)
        child-1-6-xl    (:child-1-6-xl    attr *child-1-6-xl*)
        child-auto-xl   (:child-auto-xl   attr *child-auto-xl*)
        child-expand-xl (:child-expand-xl attr *child-expand-xl*)
        attr     (-> attr
                    (assoc :uk-grid grid)
                    (dissoc :small :medium :large :collapse :divider :match
                            :child-1-2 :child-1-3 :child-1-4 :child-1-5 :child-1-6
                            :child-auto :child-expand))]
    (hl/div (core/assoc-class attr {:uk-grid-small         small
                                    :uk-grid-medium        medium
                                    :uk-grid-large         large
                                    :uk-grid-collapse      collapse
                                    :uk-grid-divider       divider
                                    :uk-grid-match         match
                                    :uk-child-width-1-2    child-1-2
                                    :uk-child-width-1-3    child-1-3
                                    :uk-child-width-1-4    child-1-4
                                    :uk-child-width-1-5    child-1-5
                                    :uk-child-width-1-6    child-1-6
                                    :uk-child-width-auto   child-auto
                                    :uk-child-width-expand child-expand
                                    (keyword (str "uk-child-width-1-2"    "@s"))    child-1-2-s
                                    (keyword (str "uk-child-width-1-3"    "@s"))    child-1-3-s
                                    (keyword (str "uk-child-width-1-4"    "@s"))    child-1-4-s
                                    (keyword (str "uk-child-width-1-5"    "@s"))    child-1-5-s
                                    (keyword (str "uk-child-width-1-6"    "@s"))    child-1-6-s
                                    (keyword (str "uk-child-width-auto"   "@s"))    child-auto-s
                                    (keyword (str "uk-child-width-expand" "@s"))    child-expand-s
                                    (keyword (str "uk-child-width-1-2"    "@m"))    child-1-2-m
                                    (keyword (str "uk-child-width-1-3"    "@m"))    child-1-3-m
                                    (keyword (str "uk-child-width-1-4"    "@m"))    child-1-4-m
                                    (keyword (str "uk-child-width-1-5"    "@m"))    child-1-5-m
                                    (keyword (str "uk-child-width-1-6"    "@m"))    child-1-6-m
                                    (keyword (str "uk-child-width-auto"   "@m"))    child-auto-m
                                    (keyword (str "uk-child-width-expand" "@m"))    child-expand-m
                                    (keyword (str "uk-child-width-1-2"    "@l"))    child-1-2-l
                                    (keyword (str "uk-child-width-1-3"    "@l"))    child-1-3-l
                                    (keyword (str "uk-child-width-1-4"    "@l"))    child-1-4-l
                                    (keyword (str "uk-child-width-1-5"    "@l"))    child-1-5-l
                                    (keyword (str "uk-child-width-1-6"    "@l"))    child-1-6-l
                                    (keyword (str "uk-child-width-auto"   "@l"))    child-auto-l
                                    (keyword (str "uk-child-width-expand" "@l"))    child-expand-l
                                    (keyword (str "uk-child-width-1-2"    "@xl"))   child-1-2-xl
                                    (keyword (str "uk-child-width-1-3"    "@xl"))   child-1-3-xl
                                    (keyword (str "uk-child-width-1-4"    "@xl"))   child-1-4-xl
                                    (keyword (str "uk-child-width-1-5"    "@xl"))   child-1-5-xl
                                    (keyword (str "uk-child-width-1-6"    "@xl"))   child-1-6-xl
                                    (keyword (str "uk-child-width-auto"   "@xl"))   child-auto-xl
                                    (keyword (str "uk-child-width-expand" "@xl"))   child-expand-xl}) kids)))

(hl/defelem cell [attr kids]
  (let [item-match (:item-match attr *item-match*)
        attr       (dissoc attr :item-match)]
    (hl/div (core/assoc-class attr {:uk-grid-item-match item-match}) kids)))
