(ns uikit-hl.video
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-video! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-video! elem key val))

(defmethod uk-video! ::default
  [elem kw v]
  (uk/video elem v))
