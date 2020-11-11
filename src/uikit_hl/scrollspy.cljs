(ns uikit-hl.scrollspy
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-scrollspy! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-scrollspy! elem key val))

(defmethod uk-scrollspy! ::default
  [elem kw v]
  (uk/scrollspyNav elem v))
