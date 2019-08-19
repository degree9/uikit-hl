(ns uikit-hl.height
  (:require [clojure.string :as s]
            [hoplon.core :as h]
            [hoplon.jquery]))

(defmulti uk-height! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-height! elem key val))

(defn- format-height [height]
  (str "uk-height-" height))

(defmethod uk-height! ::default
  [elem kw v]
  (elem :class {(format-height (name kw)) v}))

;; UIKit Height Viewport ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod uk-height! ::viewport
  [elem _ v]
  (h/do! elem :uk-height-viewport
    (cond
      (map? v) (.stringify js/JSON (clj->js v))
      (string? v) v)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; UIKit Height Match ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod uk-height! ::match
  [elem _ v]
  (hoplon.core/do! elem :uk-height-match
    (cond
      (map? v) (.stringify js/JSON (clj->js v))
      (string? v) v)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
