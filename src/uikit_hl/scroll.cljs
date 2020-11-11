(ns uikit-hl.scroll
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-scroll! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-scroll! elem key val))

(defmethod uk-scroll! ::default
  [elem kw v]
  (uk/scroll elem v))
