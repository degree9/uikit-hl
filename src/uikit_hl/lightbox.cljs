(ns uikit-hl.lightbox
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-lightbox! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-lightbox! elem key val))

(defmethod uk-lightbox! ::default
  [elem kw v]
  (.lightboxPanel uk/uikit elem (clj->js v)))
