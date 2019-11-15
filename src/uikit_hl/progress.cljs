(ns uikit-hl.progress
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-progress! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-progress! elem key val))

(defmethod uk-progress! ::default
  [elem kw v]
  (h/do! elem :class {:uk-progress v}))
