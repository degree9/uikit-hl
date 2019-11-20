(ns uikit-hl.position
  (:require [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-position [position]
  (str "uk-position-" position))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-position (name kw)) v}))
