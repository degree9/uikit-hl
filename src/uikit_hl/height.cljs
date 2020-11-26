(ns uikit-hl.height
  (:require [clojure.string :as s]
            [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-height! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-height! elem key val))

(defn- format-height [height]
  (str "uk-height-" height))

(defmethod uk-height! ::default
  [elem kw v]
  (elem :class {(format-height (name kw)) v}))

(defmethod uk-height! ::height-1-1
  [elem _ v]
  (h/do! elem :class {:uk-height-1-1 v}))

;; UIKit Height Viewport ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod uk-height! ::viewport
  [elem _ v]
  (uk/heightViewport elem v))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; UIKit Height Match ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod uk-height! ::match
  [elem _ v]
  (uk/heightMatch elem v))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
