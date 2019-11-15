(ns uikit-hl.tile
  (:require [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-tile [tile]
  (str "uk-tile-" tile))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-tile (name kw)) v}))
